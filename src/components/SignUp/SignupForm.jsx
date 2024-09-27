"use client";
import { Button } from "@nextui-org/react";
import { useForm } from "react-hook-form";
import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Link from "next/link";
import { errorToast, successToast } from "@/hooks/useToast";
import { useRouter } from "next/navigation";
import { setCookie } from "@/hooks/cookies";
import { API } from "@/api";
import { SignUpSchema } from "@/validations/login";
import { yupResolver } from "@hookform/resolvers/yup";

const SignupForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
// } = useForm({ resolver: yupResolver(SignUpSchema) });
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      // Remove +971 from the phone number before sending it to the API
      data.phoneNumber = data.phoneNumber.replace("+971", "");

      const response = await API.registerUser(data);
      successToast("You can continue shopping now");
      setLoading(false);
      setCookie("token", response?.data?.data?.token);

      router.push("/");
    } catch (error) {
      setLoading(false);
      errorToast(error, "Can not sign up at the moment");
    }
  };

  const [isShow, setIsShow] = useState(false);

  const handleShow = () => {
    setIsShow(!isShow);
  };

  return (
    <div className="signup-from py-8 md:py-14 mx-auto">
      <div className="container">
        <div className="max-w-[500px] mx-auto">
          <h2 className="text-black text-4xl md:text-6xl font-normal shadow1 mb-10 md:mb-16 text-center gang">
            Sign up
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
                    name="firstName"
                    className="w-full p-2 border border-[#B1B1B1] rounded-lg bg-white"
                    placeholder="Full Name"
                    {...register("firstName", { required: true })}
                  />
                  {errors?.name && (
                    <p className="text-sm text-red-800">
                      Full name is required
                    </p>
                  )}
                </div>
              </div>
              <div className="field-wrapper">
                <div className="field-container relative ">
                  <input
                    type="text"
                    name="lastName"
                    className="w-full p-2 border border-[#B1B1B1] rounded-lg bg-white"
                    placeholder="Full Name"
                    {...register("lastName", { required: true })}
                  />
                  {errors?.name && (
                    <p className="text-sm text-red-800">
                      Full name is required
                    </p>
                  )}
                </div>
              </div>
              <div className="field-wrapper">
                <div className="field-container relative ">
                  <input
                    type="text"
                    name="email"
                    className="w-full p-2 border border-[#B1B1B1] rounded-lg bg-white"
                    placeholder="Email"
                    {...register("email", { required: true })}
                  />
                  {errors?.email && (
                    <p className="text-sm text-red-800">Email is required</p>
                  )}
                </div>
              </div>
              <div className="field-wrapper">
                <div className="field-container relative ">
                  <input
                    type="tel"
                    name="phoneNumber"
                    className="w-full p-2 border border-[#B1B1B1] rounded-lg bg-white"
                    placeholder="Phone"
                    defaultValue="+971"
                    {...register("phoneNumber", { required: true })}
                  />
                  {errors?.phoneNumber && (
                    <p className="text-sm text-red-800">
                      Phone number is required
                    </p>
                  )}
                </div>
              </div>
              <div className="field-wrapper">
                <div className="field-container   relative">
                  <input
                    type={isShow ? "text" : "password"}
                    name="password"
                    className="w-full p-2 border border-[#B1B1B1] rounded-lg bg-white"
                    placeholder="Password"
                    {...register("password", { required: true })}
                  />
                  <div className="absolute inset-y-0 right-0 pr-3 flex items-center leading-5 text-3xl">
                    {isShow ? (
                      <FaEye onClick={handleShow} className="cursor-pointer" />
                    ) : (
                      <FaEyeSlash
                        onClick={handleShow}
                        className="cursor-pointer"
                      />
                    )}
                  </div>
                  {errors?.password && (
                    <p className="text-sm text-red-800">Password is required</p>
                  )}
                </div>
              </div>

              <div className="field-container">
                <Button
                  type="submit"
                  isLoading={loading}
                  className="w-full bg-themeSecondary-0 text-white py-2 px-4 rounded-lg hover:bg-black transition duration-300"
                >
                  Create account
                </Button>
              </div>
              <div className="field-wrapper">
                <div className="flex justify-center gap-2">
                  <label className="block text-[#A0A0A0] font-normal mt-4">
                    <span className="py-2 text-sm leading-snug">
                      Already have an account?
                    </span>
                  </label>
                  <label className="block text-gray-500 mt-4">
                    <Link
                      href="/login"
                      className="cursor-pointer tracking-tighter text-themeSecondary-0 hover:text-[#000]"
                    >
                      Login
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

export default SignupForm;
