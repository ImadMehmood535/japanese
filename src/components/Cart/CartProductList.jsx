"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { successToast } from "@/hooks/useToast";
import { API } from "@/api";
import { FaMinus, FaPlus } from "react-icons/fa";
import { IoClose, IoPaperPlane } from "react-icons/io5";
import { BsShieldFillCheck } from "react-icons/bs";
const CartProductList = ({ cartitem, setTotal }) => {
  const [products, setProducts] = useState(cartitem);
  const [loading, setLoading] = useState(null);

  const updateProduct = (updatedProduct) => {
    setProducts((prevProducts) =>
      prevProducts?.map((product) =>
        product.id === updatedProduct.id
          ? { ...product, quantity: updatedProduct?.quantity }
          : product
      )
    );
  };

  const handleIncrement = async (productId) => {
    setLoading(true);
    try {
      const product = products?.find((product) => product?.id === productId);
      updateProduct({ id: productId, quantity: product?.quantity + 1 });
      await API.updateCartItem(productId, {
        quantity: product?.quantity + 1,
      });
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  const handleDecrement = async (productId) => {
    try {
      const product = products.find((product) => product?.id === productId);
      if (product.quantity > 1) {
        setLoading(true);

        updateProduct({ id: productId, quantity: product?.quantity - 1 });
        await API.updateCartItem(productId, {
          quantity: product?.quantity - 1,
        });
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    let totalPrice = 0;
    products?.forEach((item) => {
      totalPrice += item?.price * item?.quantity;
    });
    setTotal(totalPrice);
  }, [products, setTotal]);

  const handleRemove = async (id) => {
    setLoading(true);
    try {
      await API.removeItem(id);
      setProducts(products?.filter((item) => item?.id != id));
      setLoading(false);
      successToast("Successfully removed item from your cart");
    } catch (error) {
      setLoading(false);

      console.log(error);
    }
  };

  return (
    <div className="CartDetails">
      <div className="flex justify-between flex-col md:flex-row">
        <div className="w-full">
          <div className="flex mb-5 py-5 border-b-1 bg-[#EEEEEE] px-4">
            <h3 className="font-normal text-sm capitalize w-2/5 text-lef rubick text-black">
              Products
            </h3>
            <h3 className="font-normal text-sm capitalize w-1/5 hidden sm:block text-center rubick text-black">
              Price
            </h3>
            <h3 className="font-normal text-sm capitalize w-1/5 hidden sm:block text-center rubick text-black">
              Quantity
            </h3>
            <h3 className="font-normal text-sm capitalize w-1/5 hidden sm:block text-center rubick text-black">
              Total Price
            </h3>
          </div>

          {/* {cartitem?.map((item, index) => ( */}
          {products?.map((item, index) => (
            <div
              key={index}
              className={`${
                loading ? "opacity-30" : ""
              } hover:bg-[#EEEEEE] py-4 px-4 border-b-1 -mx-1 bg-white border `}
            >
              <div className="flex flex-wrap rubick flex-col sm:flex-row items-start sm:items-center">
                <div className="flex justify-start items-center w-full sm:w-2/5">
                  <Link href={`/shop/${item?.slug}`} className="w-36">
                    <Image
                      src={item?.imageUrl}
                      alt="Product Image"
                      width={100}
                      height={100}
                      className="min-h-[100px] w-[100px]"
                    />
                  </Link>
                  <div className="flex flex-col ml-4 flex-grow">
                    <span className="font-xs text-start  mb-3 text-[#3F3F3F]">
                      {item?.name}
                    </span>
                  </div>
                </div>

                <div className="flex w-full sm:w-1/5 px-5 sm:px-0 my-3 sm:justify-center text-black">
                  <div className="block sm:hidden mr-2">
                    <b>Price</b>
                  </div>
                  <div className="flex flex-col gap-3">
                    <span className="text-center text-black text-lg font-semibold   ">
                      <span className="price">$ {item?.price}</span>
                    </span>
                    <p className="text-black rubick text-sm font-normal flex flex-row gap-2 items-center justify-center">
                      <IoPaperPlane className="text-[#ED1B24]" />
                      {item?.entries} Entries
                    </p>
                  </div>
                </div>
                <div className="QuantitySelector flex w-full sm:w-1/5 px-5 sm:px-0 my-3 sm:justify-center">
                  <div className="w-fit   flex justify-center items-center gap-2 px-2 py-1 bg-themeGray-0 border-[2.5px] border-[#E4E7ED]">
                    <button
                      type="button"
                      className={`group transition-all cursor-pointer w-[35px] h-[35px]   flex justify-center items-center hover:bg-[#cccccc]  `}
                      onClick={() => handleDecrement(item?.id)}
                    >
                      <FaMinus className="text-black group-hover:text-themeSecondary-0 font-normal text-sm" />
                    </button>
                    <input
                      className="w-10 py-2 text-center bg-transparent border-0 rubick font-semibold text-black"
                      type="text"
                      value={item?.quantity}
                      readOnly
                    />
                    <button
                      type="button"
                      className={`group transition-all cursor-pointer w-[35px] h-[35px]   flex justify-center items-center hover:bg-[#cccccc]  `}
                      onClick={() => handleIncrement(item?.id)}
                    >
                      <FaPlus className="text-black group-hover:text-themeSecondary-0 font-normal text-sm" />
                    </button>
                  </div>
                </div>
                <div className="flex items-center gap-6 w-full sm:w-1/5 px-5 sm:px-0 my-3 sm:justify-center">
                  <div className="block sm:hidden mr-2">
                    <b>Total Price</b>
                  </div>
                  <h4 className="text-center rubick font-normal text-base text-[#121212]">
                    <span className="price">
                      ${(item.price * item.quantity).toFixed(2)}
                    </span>
                  </h4>
                  <div
                    onClick={() => handleRemove(item?.id)}
                    className="text-red-700 text-tiny cursor-pointer"
                  >
                    <IoClose />
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* <div className="flex flex-wrap items-center justify-between mt-5">
            <Link
              href="/sale"
              className="flex rubick font-semibold text-sm bg-[#121212] text-white py-3 px-6 rounded-full items-center gap-2"
            >
              Back To Shop
            </Link>
          </div> */}
          <div className="flex flex-row gap-4 items-center mt-4">
          <BsShieldFillCheck className="text-black text-2xl"/>
            <p>Secure shopping guarantee</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartProductList;
