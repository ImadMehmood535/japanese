"use client";
import { Button } from "@nextui-org/react";
import { useForm } from "react-hook-form";
import React, { useState } from "react";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import Link from "next/link";
import { errorToast, successToast } from "@/hooks/useToast";
import { useRouter } from "next/navigation";
import { setCookie } from "@/hooks/cookies";
import { API } from "@/api";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "@/validations/login";

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(loginSchema) });

  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      const response = await API.logInUser(data);
      successToast("Continue shopping now");
      setLoading(false);
      setCookie("token", response?.data?.data?.token);
      router.push("/");
    } catch (error) {
      setLoading(false);
      errorToast(error, "Can not log In at the moment");
    }
  };

  const [isShow, setIsShow] = useState(false);

  const handleShow = (isShow) => {
    setIsShow(!isShow);
  };

  return (
    <div className="login-from py-8 md:py-14 mx-auto">
      <div className="container">
        <div className="max-w-[500px] mx-auto">
          <h2 className="text-black text-4xl md:text-6xl font-normal shadow1 mb-10 md:mb-16 text-center gang">
            Login
          </h2>
          <div className="formarea GeneralSans">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col gap-4"
            >
              <div className="field-wrapper">
                <div className="field-container relative  ">
                  <input
                    type="text"
                    name="email"
                    className="w-full p-2 border border-[#B1B1B1] rounded-lg bg-white"
                    placeholder="Email"
                    {...register("email")}
                  />
                  {errors?.email && (
                    <p className="text-sm text-red-800">
                      {errors?.email?.message}
                    </p>
                  )}
                </div>
              </div>
              <div className="field-wrapper">
                <div className="field-container relative  ">
                  <input
                    type={isShow ? "text" : "password"}
                    name="password"
                    className="w-full p-2 border border-[#B1B1B1] rounded-lg bg-white"
                    placeholder="Password"
                    {...register("password")}
                  />
                  <div className="absolute inset-y-0 right-0 pr-3 flex items-center  leading-5 text-3xl">
                    {isShow ? (
                      <FaEye
                        onClick={() => handleShow(isShow)}
                        className="cursor-pointer"
                      />
                    ) : (
                      <FaEyeSlash
                        onClick={() => handleShow(isShow)}
                        className="cursor-pointer"
                      />
                    )}
                  </div>
                  {errors?.password && (
                    <p className="text-sm text-red-800">
                      {errors?.password?.message}
                    </p>
                  )}
                </div>
              </div>
              <div className="field-wrapper">
                <div className="flex justify-center">
                  <label className="block text-gray-500 ">
                    <Link
                      href="/forget-password"
                      className="cursor-pointer tracking-tighter text-[#121212] border-b-2 border-[#121212] hover:border-[#A0A0A0]"
                    >
                      <span>Forgot Your Password?</span>
                    </Link>
                  </label>
                </div>
              </div>
              <div className="field-container">
                <Button
                  type="submit"
                  isLoading={loading}
                  className="w-full bg-themeSecondary-0 text-white py-2 px-4 rounded-lg hover:bg-black transition duration-300"
                >
                  Login
                </Button>
              </div>
              <div className="field-wrapper">
                <div className="flex justify-center gap-2">
                  <label className="block text-[#A0A0A0] font-normal mt-4 ">
                    <span className="py-2 text-sm  leading-snug  ">
                      {" "}
                      Don&apos;t have an account?{" "}
                    </span>
                  </label>
                  <label className="block text-gray-500  mt-4">
                    <Link
                      href="/sign-up"
                      className="cursor-pointer tracking-tighter text-themeSecondary-0   hover:text-[#000]"
                    >
                      Register
                    </Link>
                  </label>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
