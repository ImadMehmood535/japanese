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
import { resetPassword } from "@/validations/login";

const ResetPassword = ({token}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(resetPassword) });

  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      const response = await API.resetPassword({
        password: data.newPassword,
        token: token,
      });
      successToast(response?.data?.message);
      setLoading(false);
      router.push("/login")
     } catch (error) {
      setLoading(false);
      errorToast(error, "Can not log In at the moment");
    }
  };

  console.log(errors, "errors");

  return (
    <div className="reset-password py-8 md:py-14 mx-auto">
       <div className="container">
        <div className="max-w-[500px] mx-auto">
          <h2 className="text-black text-4xl md:text-6xl font-normal shadow1 mb-10 md:mb-16 text-center gang">
            Reset Password
          </h2>
          <div className="formarea GeneralSans">
            <form onSubmit={handleSubmit(onSubmit)}  className="flex flex-col gap-4">
              <div className="field-wrapper">
                 <div className="field-container relative ">
                  <input
                    type="password"
                    name="password"
                    placeholder="Enter your new password"
                    className="w-full p-2 border border-[#B1B1B1] rounded-lg bg-white"
                    {...register("password")}
                  />
                  {errors?.password && (
                    <p className="text-sm text-red-800">
                      {errors?.password?.message}
                    </p>
                  )}
                </div>
              </div>
              <div className="field-wrapper">
                 <div className="field-container relative ">
                  <input
                    type="password"
                    name="newPassword"
                    placeholder="confirm your new password"
                    className="w-full p-2 border border-[#B1B1B1] rounded-lg bg-white"
                    {...register("newPassword")}
                  />
                  {errors?.newPassword && (
                    <p className="text-sm text-red-800">
                      {errors?.newPassword?.message}
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

export default ResetPassword;
