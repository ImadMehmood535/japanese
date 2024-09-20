"use client";
import React, { useState } from "react";
import CartProductList from "./CartProductList";
import CartTotal from "./CartTotal";
import { Productimage } from "@/assets";

const CartComponent = ({ cartitem }) => {
  const [total, setTotal] = useState(0);

  return (
    <div className="CartComponent py-10 md:py-20">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between gap-16">
          <div className="w-full md:w-[65%] ">
            <CartProductList cartitem={cartitem} setTotal={setTotal} />
          </div>
          <div className="w-full md:w-[35%]">
            <CartTotal total={total} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartComponent;
