"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { IoPaperPlane, IoPaperPlaneOutline } from "react-icons/io5";

const CartTotal = ({ total, products }) => {
  const [totalEntries, setTotalEntries] = useState(null);

  useEffect(() => {
    let entries = 0;

    for (let i = 0; i < products.length; i++) {
      entries = products[i]?.entries * products[i]?.quantity + entries;
    }
    setTotalEntries(entries);
  }, [total]);

  return (
    <div className="CartTotal">
      <div id="summary" className="my-3 w-full px-4 py-4 rubick">
        <h1 className="font-normal rubick text-2xl border-b  text-black">
          Total Entries in your cart
        </h1>
        <div className="flex items-center justify-between bg-black p-2">
          <div className="">
            <p className="text-white font-medium">Lance</p>
          </div>
          <div>
            <p className="text-white rubick text-sm font-normal flex flex-row gap-2 items-center justify-center">
              <IoPaperPlaneOutline className="text-[#ED1B24]" />
              {totalEntries} Entries
            </p>
          </div>
        </div>
        {/* <div className="flex justify-between mt-10 mb-5">
          <span className="font-semibold text-sm uppercase">Shipping</span>
          <span className="font-semibold text-sm">Free</span>
        </div> */}

        <div className="  ">
          <div className="flex font-normal items-center justify-between py-6 text-sm uppercase text-black">
            <span>Subtotal</span>
            <span className="text-themeSecondary-0 text-xl font-medium">
              ${total.toFixed(2)}
            </span>
          </div>

          <Link
            href={`/checkout`}
            className="bg-themeSecondary-0 table w-full text-center py-4 px-6 rounded-md font-semibold hover:bg-[#121212] transition text-lg mb-3 text-white uppercase   border"
          >
            Proceed to checkout
          </Link>
          <button className="font-semibold transition text-sm text-[#121212] hover:text-[#FC4242] uppercase w-full">
            <Link href={"/shop"}>Continue Shopping</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartTotal;
