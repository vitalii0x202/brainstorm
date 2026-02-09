"use client";

import React, { useEffect, useRef, useState } from "react";
import { toast } from "react-toastify";
import ReCAPTCHA from "react-google-recaptcha";
import axios from "axios";
import Button from "../../../components/Button/Button";

interface FormErrors {
  name: string;
  email: string;
  /*  addressWallet: string; */
  /* message: string; */
}

const Form = () => {
  const recaptcha = useRef<any>(null);
  const form = useRef<any>(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  /*   const [message, setMessage] = useState(""); */

  const [errors, setErrors] = useState<FormErrors>({
    name: "",
    email: "",
    /*     message: "", */
  });

  const [loadings, setLoadings] = useState<boolean[]>([]);
  const [captchaVerified, setCaptchaVerified] = useState<boolean>(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    if (name === "name") setName(value);
    else if (name === "email") setEmail(value);
    /*     else if (name === "message") setMessage(value); */
  };

  const validateForm = () => {
    const newErrors: FormErrors = {
      name: !name ? "Name field is required." : "",
      email: !email ? "Email field is required." : "",
      /*       message: !message ? "Message field is required." : "", */
    };

    setErrors(newErrors);

    return Object.values(newErrors).every((error) => error === "");
  };

  const [locationData, setLocationData] = useState({
    ip: "",
    country: "",
    region: "",
    city: "",
  });

  const getLocationData = async () => {
    try {
      const ipResponse = await axios.get("https://api.ipify.org?format=json");
      const ip = ipResponse.data.ip;

      const locationResponse = await axios.get(`https://ipinfo.io/${ip}/json`);
      const { ip: ipAddress, country, region, city } = locationResponse.data;

      setLocationData({ ip: ipAddress, country, region, city });
    } catch (error) {
      console.error("Error fetching ip :", error);
    }
  };

  useEffect(() => {
    getLocationData();
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!captchaVerified || !validateForm()) {
      if (!validateForm()) {
        toast.error("Please fill out all required fields.");
      }
      return;
    }

    const data = {
      name: name,
      address: null,
      email: email,
      campaign: "web",
      ...locationData,
    };

    try {
      const response = await axios.post(
        process.env.NEXT_PUBLIC_FORM as string,
        { body: data },
        {
          headers: {
            "Content-Type": "application/json",
            "x-api-key": process.env.NEXT_PUBLIC_API_KEY as string,
          },
        }
      );

      const responseData = response.data;
      try {
        const parsedBody = JSON.parse(responseData.body);

        if (parsedBody.message) {
          toast(parsedBody.message);
        } else {
          toast.success("Form sent successfully!");
        }
      } catch (jsonError) {
        toast.error("Unexpected error occurred.");
      }
    } catch (error) {
      console.error(error);

      if (axios.isAxiosError(error)) {
        const errorResponse = error.response?.data;

        if (errorResponse && typeof errorResponse === "object") {
          try {
            const errorMessage = errorResponse.body
              ? JSON.parse(errorResponse.body).message
              : error.message || "An unknown error occurred.";
            toast.error(errorMessage);
          } catch (parseError) {
            toast.error("Error parsing the error message.");
          }
        } else {
          toast.error(error.message || "An unknown error occurred.");
        }
      } else {
        toast.error("An unknown error occurred.");
      }
    }
  };

  const enterLoading = (index: number) => {
    if (validateForm()) {
      setLoadings((prevLoadings) => {
        const newLoadings = [...prevLoadings];
        newLoadings[index] = true;
        return newLoadings;
      });

      setTimeout(() => {
        setLoadings((prevLoadings) => {
          const newLoadings = [...prevLoadings];
          newLoadings[index] = false;
          if (captchaVerified && validateForm()) {
            window.location.href = "/";
          }
          return newLoadings;
        });
      }, 8000);
    }
  };

  const handleCaptchaChange = () => {
    const captchaValue = recaptcha.current.getValue();

    if (captchaValue) {
      setCaptchaVerified(true);
    } else {
      setCaptchaVerified(false);
    }
  };

  const [captcha, setCaptcha] = useState(false);

  const handleViewCapcha = () => {
    if (validateForm()) {
      setCaptcha(true);
    }
  };

  return (
    <form
      ref={form}
      className="contact_form relative backdrop-blur-[15px] rounded-[20px] md:rounded-[50px] flex justify-start items-start gap-[1rem] flex-col !z-[200] w-[100%] lg:w-[45vw] xl:w-[38vw] bg-[#05050527] border-2 border-[#74a56d28] px-[1.5rem] lg:px-[2rem] 2xl:px-[3rem] py-5  2xl:py-[3rem] "
      onSubmit={handleSubmit}
    >
      <div className="flex justify-center items-start gap-1 flex-col mb-6 w-full ">
        <h3 className={`text-[1.6rem] lg:text-[2.5rem] 2xl:text-[3rem] font-[900] text-start `}>
          Stay Connected
        </h3>
        <p className="text-[15px] md:text-[18px] text-start md:max-w-[80%]">
          Unlock exclusive Intellex updates.
        </p>
      </div>
      <div className="flex justify-center items-center flex-col flex-nowrap w-full gap-[1rem] ">
        <div className=" flex justify-center items-center gap-[1rem] w-full flex-col sm:flex-row !z-[200] ">
          <div className="flex justify-start items-start relative gap-[.8rem] flex-col w-full">
            <label className={`text-[1.1rem] text-[#ffffff] `}>
              Name <span className="text-[#ff0000]">*</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={name}
              onChange={handleChange}
              className={`w-full h-[3rem] xl:h-[3.2rem] border p-2  border-[#ffffff38] rounded-[10px] bg-[#00000020] text-[1rem] text-[#fefefe]  placeholder:font-normal placeholder:text-[1rem] placeholder:px-1 placeholder:text-[#fcfcfc80] focus:bg-[#00000020] focus:border-blue-500 transition-colors duration-300 outline-none  ${
                errors.name && "border-red-500"
              }`}
            />
            {errors.name && (
              <p className="text-red-500 text-[.7rem]  xl:text-[.9rem] relative">
                {errors.name}
              </p>
            )}
          </div>
        </div>
        <div className="flex justify-center items-center gap-7 w-full flex-col sm:flex-row  ">
          <div className="flex justify-start items-start relative gap-[.5rem] flex-col w-full">
            <label className={`text-[1.1rem] text-[#ffffff] `}>
              Email <span className="text-[#ff0000]">*</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={email}
              onChange={handleChange}
              className={`w-full h-[3rem] xl:h-[3.2rem] border p-2  border-[#ffffff38] rounded-[10px] bg-[#00000020] text-[1rem] text-[#fefefe]  placeholder:font-normal placeholder:text-[1rem] placeholder:px-1 placeholder:text-[#fcfcfc80] focus:bg-[#00000020] focus:border-blue-500 transition-colors duration-300 outline-none ${
                errors.email && "border-red-500"
              }`}
            />
            {errors.email && (
              <p className="text-red-500 text-[.7rem]  xl:text-[.9rem] relative">
                {errors.email}
              </p>
            )}
          </div>
        </div>
      </div>

      {captcha && (
        <div className="w-full flex justify-center items-center">
          <ReCAPTCHA
            ref={recaptcha}
            sitekey={`${process.env.NEXT_PUBLIC_RECAPTCHA_SITE}` || ""}
            onChange={handleCaptchaChange}
          />
        </div>
      )}

      <div className="w-full flex justify-center items-center mt-4 ">
        <button
          className="px-6 py-2 text-[1.3rem] 2xl:text-[1.5rem] w-[17rem] text-white border border-white/20 rounded-full bg-transparent hover:bg-[#acb3f528] hover:drop-shadow-[0_2px_15px_rgba(255,255,255,0.6)] transition-colors"
          onClick={() => {
            if (captchaVerified && validateForm()) {
              enterLoading(0);
            }
            handleViewCapcha();
          }}
        >Submit</button>
      </div>
    </form>
  );
};

export default Form;
