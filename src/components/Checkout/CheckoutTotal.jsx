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
  paymentMode

}) => {
  const [subtotal, setSubtotal] = useState(0);

  useEffect(() => {
    if (type === "general") {
      const amount = cartitem?.reduce(
        (total, item) => total + item?.price * item?.quantity,
        0
      );
      setTotal(amount);
      setSubtotal(amount);
    } else {
      setSubtotal(cartitem?.totalPrice);
    }
  }, [cartitem]);

  const cartData = type === "general" ? cartitem : cartitem?.customOrderItems;

  return (
    <div className="CheckoutTotal">
      <div
        id="summary"
        className="my-3 w-full px-4 py-4 shadow-lg rounded-xl GeneralSans"
      >
        <h2 className="text-black text-2xl   font-normal shadow1 mb-10 md:mb-16 text-center gang">
          {type === "general" ? "Your Order" : "Make your Mix"}
        </h2>

        {type === "general" ? (
          <>
            {cartData?.map((item, index) => (
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
          </>
        ) : (
          <>
            {" "}
            {cartData?.map((item, index) => (
              <div
                key={index}
                className="flex justify-between border-b-1 pb-5 my-5"
              >
                <h4 className="font-semibold text-sm uppercase text-[#FC4242]">
                  {item?.name}{" "}
                  <span className="text-xs font-medium text-black px-4">
                    ({item?.grams} grams)
                  </span>
                </h4>
                <h4 className="font-semibold text-sm">
                  AED {((item?.grams / 10) * item?.price).toFixed(2)}
                </h4>
              </div>
            ))}
          </>
        )}

        <div className="flex justify-between mt-10 mb-5">
          <span className="font-semibold text-sm uppercase">Shipping</span>
          <span className="font-semibold text-sm">
            {filterDeliveryPrice?.price}
          </span>
        </div>

        <div className="border-t mt-8">
          <div className="flex font-semibold justify-between py-6 text-sm uppercase">
            <span>Subtotal</span>
            <span>AED {(subtotal + filterDeliveryPrice?.price).toFixed(2)}</span>
          </div>

          {/* Payment mode tabs */}
          <div className="flex mb-4 gap-3">
            <div
              className={`flex-1 rounded-lg py-2 px-4 text-center cursor-pointer ${
                paymentMode === "COD"
                  ? "bg-themeSecondary-0 hover:bg-black text-white"
                  : "bg-gray-200 text-gray-700"
              }`}
              onClick={() => setPaymentMode("COD")}
            >
              Cash on Delivery
            </div>
            <div
              className={`flex-1 py-2 px-4 rounded-lg text-center cursor-pointer  ${
                paymentMode === "ONLINE"
                  ? "bg-[#FC4242] text-white"
                  : "bg-gray-200 hover:bg-themeSecondary-0  text-white"
              }`}
              onClick={() => setPaymentMode("ONLINE")}
            >
              Pay Online
            </div>
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
