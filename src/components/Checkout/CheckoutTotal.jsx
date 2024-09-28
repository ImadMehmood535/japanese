"use client";
import { options } from "@/data/cities";
import { Button } from "@nextui-org/react";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const CheckoutTotal = ({
  cartitem,
  onSubmit,
  loading,
  type,
  filterDeliveryPrice,
  setTotal,
  setPaymentMode,
  paymentMode,
}) => {
  const [subtotal, setSubtotal] = useState(0);

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

        <div className="flex justify-between mt-10 mb-5">
          <span className="font-semibold text-sm uppercase">Shipping</span>
          <span className="font-semibold text-sm">
            {filterDeliveryPrice?.price}
          </span>
        </div>

        <div className="border-t mt-8">
          <div className="flex font-semibold justify-between py-6 text-sm uppercase">
            <span>Subtotal</span>
            <span>$ {(subtotal + filterDeliveryPrice?.price).toFixed(2)}</span>
          </div>

          <Button
            type="submit"
            isLoading={loading}
            onClick={onSubmit}
            className="w-full bg-themeSecondary-0 text-white py-2 px-4 rounded-lg hover:bg-black transition duration-300 mb-2"
          >
            Checkout
          </Button>
          <button className="font-semibold transition text-sm text-[#121212] hover:text-[#FC4242] uppercase w-full">
            <Link href="/shop">Or continue shopping</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CheckoutTotal;
