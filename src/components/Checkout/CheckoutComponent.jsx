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
import { loadStripe } from "@stripe/stripe-js";

const CheckoutComponent = () => {
  const { products, clearCart } = useProductStore();
  const {
    register,
    handleSubmit,
    reset,
    getValues,
    watch,
    formState: { errors },
  } = useForm();
  // } = useForm({
  //   resolver: yupResolver(checkoutSchema),
  // });

  const [loading, setLoadiong] = useState(false);

  const [total, setTotal] = useState(0);
  const [promodata, setPromoData] = useState({
    used: false,
    name: "",
  });

  const [clientSecret, setClientSecret] = useState("");
  const [stripePromise, setStripePromise] = useState(null);

  const paymentIntent = async () => {
    try {
      const payload = {
        promoData: promodata,
        totalPrice: parseFloat(total),
        orderItems: products?.map((item) => {
          return {
            id: item?.id,
            quantity: item?.quantity,
            price: item?.price,
          };
        }),
      };
      setStripePromise(loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISH_KEY));

      console.log(process.env.NEXT_PUBLIC_STRIPE_PUBLISH_KEY);

      const response = await API.placeOrder(payload);
      setClientSecret(response?.data?.data);
    } catch (error) {
      console.error("Error creating payment intend", error);
    }
  };

  useEffect(() => {
    // console.log(total, "total");
    if (total > 0) {
      paymentIntent();
    }
  }, [total]);

  // const onSubmit = async (data) => {
  //   setLoadiong(true);
  //   try {
  //     const payload = {
  //       promoData: promodata,
  //       totalPrice: total,
  //       orderItems: products?.map((item) => {
  //         return {
  //           id: item?.id,
  //           quantity: item?.quantity,
  //           price: item?.price,
  //         };
  //       }),
  //     };
  //     await API.placeOrder(payload);

  //     // clearCart();
  //   } catch (error) {
  //     console.error("Error submitting order:", error);
  //     setLoadiong(false);
  //     errorToast(error, "Can not create order at the moment ");
  //   }
  // };

  return (
    <div className="CheckoutComponent py-8 md:py-14 mx-auto">
      <div className="AboutCompany pageLayout px-0 mx-auto">
        <div className="container">
          <div className="w-full">
            <div className="flex flex-col md:flex-row justify-between gap-16">
              <div className="w-full md:w-[65%]">
                {/* <CheckoutForm
                  register={register}
                  errors={errors}
                  options={options}
                /> */}
              </div>
              <div className="w-full md:w-[35%]">
                <CheckoutTotal
                  setTotal={setTotal}
                  loading={loading}
                  cartitem={products}
                  setPromoData={setPromoData}
                  // onSubmit={handleSubmit(onSubmit)}
                  clientSecret={clientSecret}
                  stripePromise={stripePromise}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutComponent;
