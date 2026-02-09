'use client'

import LandingPage from "./(landing)/LandingPage";
import { ReactLenis } from "@studio-freight/react-lenis";

export default function Home() {
  return (
    <ReactLenis
      root
      options={{
        lerp: 0.09,
        duration: 0.3,
        easing: (t) => t * t * (3 * t),
      }}
    >
      <div className="App overflow-hidden ">
        <LandingPage />
      </div>
    </ReactLenis>
  );
}
