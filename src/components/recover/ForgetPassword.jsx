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
import { forgetPassword } from "@/validations/login";

const ForgetPassword = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(forgetPassword) });

  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      const response = await API.forgetPassword(data);
      successToast(response?.data?.message);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      errorToast(error, "Can not log In at the moment");
    }
  };

  return (
    <div className="forgot-password py-8 md:py-14 mx-auto">
      <div className="container">
        <div className="max-w-[500px] mx-auto">
          <h2 className="text-black text-4xl md:text-6xl font-normal shadow1 mb-10 md:mb-16 text-center gang">
            Forget Password
          </h2>
          <div className="formarea GeneralSans">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col gap-4"
            >
              <div className="field-wrapper">
                <div className="field-container relative ">
                  <input
                    type="text"
                    name="email"
                    placeholder="Email"
                    className="w-full p-2 border border-[#B1B1B1] rounded-lg bg-white text-black"
                    {...register("email")}
                  />
                  {errors?.email && (
                    <p className="text-sm text-red-800">
                      {errors?.email?.message}
                    </p>
                  )}
                </div>
              </div>

              <div className="field-container">
                <Button
                  type="submit"
                  isLoading={loading}
                  className="w-full bg-themeSecondary-0 text-white py-2 px-4 rounded-lg hover:bg-black transition duration-300"
                >
                  Submit
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgetPassword;
