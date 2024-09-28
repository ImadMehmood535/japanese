"use client";
import React, { useEffect, useState } from "react";
import CheckoutForm from "./CheckoutForm";
import CheckoutTotal from "./CheckoutTotal";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { single_product_image } from "@/assets";
import { checkoutSchema } from "@/validations/checkoutform";
import { API } from "@/api";
import { errorToast, successToast } from "@/hooks/useToast";
import { useRouter } from "next/navigation";
import { options } from "@/data/cities";
import { setCookie } from "@/hooks/cookies";
import useProductStore from "@/store/products";

const CheckoutComponent = () => {
  const { products } = useProductStore();
  const {
    register,
    handleSubmit,
    reset,
    getValues,
    watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(checkoutSchema),
  });

  const [loading, setLoadiong] = useState(false);

  const [total, setTotal] = useState(0);

  const onSubmit = async (data) => {
    setLoadiong(true);
    try {
    } catch (error) {
      console.error("Error submitting order:", error);
      setLoadiong(false);
      errorToast(error, "Can not create order at the moment ");
    }
  };

  return (
    <div className="CheckoutComponent py-8 md:py-14 mx-auto">
      <div className="AboutCompany pageLayout px-0 mx-auto">
        <div className="container">
          <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col md:flex-row justify-between gap-16">
              <div className="w-full md:w-[65%]">
                <CheckoutForm
                  register={register}
                  errors={errors}
                  options={options}
                />
              </div>
              <div className="w-full md:w-[35%]">
                <CheckoutTotal
                  setTotal={setTotal}
                  loading={loading}
                  cartitem={products}
                  onSubmit={handleSubmit(onSubmit)}
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CheckoutComponent;
