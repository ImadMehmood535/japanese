"use client";
import { API } from "@/api";
import { options } from "@/data/cities";
import { Button } from "@nextui-org/react";
import { Elements } from "@stripe/react-stripe-js";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import StripePayment from "./StripePayment";

const CheckoutTotal = ({
  cartitem,
  onSubmit,
  loading,
  setPromoData,
  setTotal,
  stripePromise,
  clientSecret,
}) => {
  console.log(stripePromise, "  stripePromise,");
  console.log(clientSecret, "  clientSecret");
  const [subtotal, setSubtotal] = useState(0);
  const [promoError, setPromoError] = useState("");
  const [promoPrice, setPromoPrice] = useState(null);

  const { register, getValues, watch } = useForm();

  const handleApplyPromo = async () => {
    const code = getValues("promoCode");

    try {
      if (code) {
        const response = await API.promoPrice({
          name: code,
          totalPrice: subtotal,
        });

        setPromoPrice(response?.data?.data);
        setTotal(response?.data?.data);
        setPromoError("");
        setPromoData({
          used: true,
          name: code,
        });
      } else {
        setPromoError("Please enter code");
      }
    } catch (error) {
      setPromoData({
        used: false,
        name: "",
      });
      setPromoError(error?.response?.data?.message);
      setPromoPrice(null);
      setTotal(subtotal);
    }
  };

  useEffect(() => {
    const amount = cartitem?.reduce(
      (total, item) => total + item?.price * item?.quantity,
      0
    );
    setTotal(amount);
    setSubtotal(amount);
  }, [cartitem]);

  return (
    <div className="CheckoutTotal">
      <div
        id="summary"
        className="my-3 w-full px-4 py-4 shadow-lg rounded-xl GeneralSans"
      >
        <h2 className="text-black text-2xl   font-normal shadow1 mb-10 md:mb-16 text-center gang">
          Your Order
        </h2>

        {cartitem?.map((item, index) => (
          <div
            key={index}
            className="flex justify-between border-b-1 pb-5 my-5"
          >
            <h4 className="font-semibold text-sm uppercase text-[#FC4242]">
              {item?.name}{" "}
              <span className="text-xs font-medium text-black px-4">
                ({item?.quantity} * AED {item?.price})
              </span>
            </h4>
            <h4 className="font-semibold text-sm">
              AED {(item?.quantity * item?.price).toFixed(2)}
            </h4>
          </div>
        ))}

        <div className="w-full relative">
          <input
            type="text"
            placeholder="Add promo code (Optional)"
            className={`w-full placeholder:text-[14px] px-4 py-4 focus:outline-none focus:ring-2 focus:ring-black
                border border-gray-300 ${
                  promoError?.length > 5 ? "border-red-400" : ""
                } 
                ${promoPrice ? "border-green-600" : ""}
                rounded-md`}
            {...register("promoCode")}
          />
          <button
            onClick={handleApplyPromo}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-[#FC4242] text-white hover:bg-[#ce3b3bfa] text-sm px-4 py-3 rounded-md font-semibold transition duration-300 ease-in-out"
            // type="button"
          >
            Apply Promo
          </button>
        </div>

        {promoError && (
          <p className="text-red-400 text-tiny pt-2">{promoError}</p>
        )}

        <div className="border-t mt-8">
          <div className="flex font-semibold justify-between py-6 text-sm uppercase">
            <span>Subtotal</span>
            <span>$ {promoPrice ? promoPrice : subtotal.toFixed(2)}</span>
          </div>

          <div className="mt-5">
            {clientSecret && stripePromise && (
              <Elements
                stripe={stripePromise}
                options={{ clientSecret: clientSecret }}
              >
                <StripePayment totalPrice={subtotal} />
              </Elements>
            )}
          </div>

          {/* <Button
            type="submit"
            isLoading={loading}
            onClick={onSubmit}
            className="w-full bg-themeSecondary-0 text-white py-2 px-4 rounded-lg hover:bg-black   mb-2"
          >
            Checkout
          </Button> */}
          <button className="font-semibold transition text-sm text-[#121212] hover:text-[#FC4242] uppercase w-full">
            <Link href="/shop">Or continue shopping</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CheckoutTotal;
