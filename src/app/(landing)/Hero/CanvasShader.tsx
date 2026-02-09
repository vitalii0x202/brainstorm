"use client";

import React, { useRef, useEffect, useCallback, useMemo } from "react";

const vertexShaderSource = `
    precision mediump float;
    varying vec2 vUv;
    attribute vec2 a_position;
    void main() {
        vUv = .5 * (a_position + 1.);
        gl_Position = vec4(a_position, 0.0, 1.0);
    }
`;

const fragmentShaderSource = `
    precision mediump float;
    varying vec2 vUv;
    uniform float u_time;
    uniform float u_ratio;
    uniform vec2 u_pointer_position;
    uniform float u_scroll_progress;

    vec2 rotate(vec2 uv, float th) {
        return mat2(cos(th), sin(th), -sin(th), cos(th)) * uv;
    }

    float neuro_shape(vec2 uv, float t, float p) {
        vec2 sine_acc = vec2(0.);
        vec2 res = vec2(0.);
        float scale = 9.43;

        for (int j = 0; j < 15; j++) {
            uv = rotate(uv, 1.);
            sine_acc = rotate(sine_acc, 1.);
            vec2 layer = uv * scale + float(j) + sine_acc - t;
            sine_acc += sin(layer);
            res += (.5 + .5 * cos(layer)) / scale;
            scale *= (1.2 - .07 * p);
        }
        return res.x + res.y;
    }

    void main() {
        vec2 uv = .5 * vUv;
        uv.x *= u_ratio;

        vec2 pointer = vUv - u_pointer_position;
        pointer.x *= u_ratio;
        float p = clamp(length(pointer), 0., 1.);
        p = .4 * pow(1. - p, 2.);

        float t = .001 * u_time;
        vec3 color = vec3(0.);
        float noise = neuro_shape(uv, t, p);

        noise = 1.2 * pow(noise, 3.);
        noise += pow(noise, 10.);
        noise = max(.0, noise - .5);
        noise *= (1. - length(vUv - .5));

        vec3 color1 = vec3(0.541, 1.0, 0.35);
        vec3 color2 = vec3(0.749, 0.772, 0.996);
        float mixFactor = 0.5 + 0.5 * sin(u_time * 0.0007);
        color = mix(color1, color2, mixFactor);
        color = color * noise;

        gl_FragColor = vec4(color, noise);
    }
`;

const NeuroShaderCanvas: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const pointerRef = useRef({ x: 0, y: 0, tX: 0, tY: 0 });
    const animationFrameRef = useRef<number>();
    const glContextRef = useRef<{gl: WebGLRenderingContext, program: WebGLProgram, uniforms: Record<string, WebGLUniformLocation>}>();

    const compileShader = useCallback((gl: WebGLRenderingContext, source: string, type: number) => {
        const shader = gl.createShader(type);
        if (!shader) throw new Error("Failed to create shader.");
        gl.shaderSource(shader, source);
        gl.compileShader(shader);
        if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
            console.error(gl.getShaderInfoLog(shader));
            gl.deleteShader(shader);
            throw new Error("Shader compilation error.");
        }
        return shader;
    }, []);

    const resizeCanvas = useCallback(() => {
        if (!canvasRef.current || !glContextRef.current) return;
        const { gl, uniforms } = glContextRef.current;
        const canvas = canvasRef.current;
        const devicePixelRatio = Math.min(window.devicePixelRatio, 2);
        canvas.width = window.innerWidth * devicePixelRatio;
        canvas.height = window.innerHeight * devicePixelRatio;
        gl.uniform1f(uniforms.u_ratio, canvas.width / canvas.height);
        gl.viewport(0, 0, canvas.width, canvas.height);
    }, []);

    const updateMousePosition = useCallback((eX: number, eY: number) => {
        pointerRef.current.tX = eX;
        pointerRef.current.tY = eY;
    }, []);

    const initShader = useCallback(() => {
        if (!canvasRef.current) return;
        const canvas = canvasRef.current;
        const gl = canvas.getContext('webgl', {
            antialias: false,
            depth: false,
            stencil: false,
            alpha: true,
            premultipliedAlpha: false
        });
        if (!gl) throw new Error("WebGL not supported");

        const program = gl.createProgram();
        if (!program) throw new Error("Failed to create program");

        const vertexShader = compileShader(gl, vertexShaderSource, gl.VERTEX_SHADER);
        const fragmentShader = compileShader(gl, fragmentShaderSource, gl.FRAGMENT_SHADER);

        gl.attachShader(program, vertexShader);
        gl.attachShader(program, fragmentShader);
        gl.linkProgram(program);
        gl.useProgram(program);

        const uniforms: Record<string, WebGLUniformLocation> = {};
        const uniformCount = gl.getProgramParameter(program, gl.ACTIVE_UNIFORMS);
        for (let i = 0; i < uniformCount; i++) {
            const info = gl.getActiveUniform(program, i);
            if (info) {
                const location = gl.getUniformLocation(program, info.name);
                if (location) uniforms[info.name] = location;
            }
        }

        const vertices = new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]);
        const buffer = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
        gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW);

        const positionLocation = gl.getAttribLocation(program, "a_position");
        gl.enableVertexAttribArray(positionLocation);
        gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 0, 0);

        glContextRef.current = { gl, program, uniforms };

        gl.deleteShader(vertexShader);
        gl.deleteShader(fragmentShader);

        return { gl, program, uniforms };
    }, [compileShader]);

    useEffect(() => {
        initShader();
        resizeCanvas();

        const handleResize = () => requestAnimationFrame(resizeCanvas);
        window.addEventListener("resize", handleResize);
        window.addEventListener("pointermove", (e) => updateMousePosition(e.clientX, e.clientY));
        window.addEventListener("touchmove", (e) => updateMousePosition(e.targetTouches[0].clientX, e.targetTouches[0].clientY));
        window.addEventListener("click", (e) => updateMousePosition(e.clientX, e.clientY));

        const render = () => {
            if (!glContextRef.current) return;
            const { gl, program, uniforms } = glContextRef.current;

            gl.useProgram(program);

            pointerRef.current.x += (pointerRef.current.tX - pointerRef.current.x) * 0.5;
            pointerRef.current.y += (pointerRef.current.tY - pointerRef.current.y) * 0.5;

            gl.uniform1f(uniforms.u_time, performance.now());
            gl.uniform2f(
                uniforms.u_pointer_position,
                pointerRef.current.x / window.innerWidth,
                1 - pointerRef.current.y / window.innerHeight
            );
            gl.uniform1f(uniforms.u_scroll_progress, window.pageYOffset / (2 * window.innerHeight));

            gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
            animationFrameRef.current = requestAnimationFrame(render);
        };

        render();

        return () => {
            if (animationFrameRef.current) {
                cancelAnimationFrame(animationFrameRef.current);
            }
            window.removeEventListener("resize", handleResize);
            if (glContextRef.current) {
                const { gl, program } = glContextRef.current;
                gl.deleteProgram(program);
            }
        };
    }, [initShader, resizeCanvas, updateMousePosition]);

    return <canvas ref={canvasRef} className="w-full h-full bg-[#000]" />;
};

export default React.memo(NeuroShaderCanvas);
