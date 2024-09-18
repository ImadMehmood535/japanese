import Image from "next/image";
import React from "react";
import { IoPaperPlane } from "react-icons/io5";

const SingleProductCart = ({ product, entries = false }) => {
  return (
    <div className="product-wrapper">
      <div className="image-wrapper">
        <Image
          src={product.image}
          width={400}
          height={400}
          alt={product.title}
          className="w-full h-auto"
        />
      </div>
      <div className="content-wrapper text-center">
        <h3 className="text-black font-medium text-xl md:text-3xl mb-3">
          {product.title}
        </h3>
        {entries == true && (
          <p className="flex flex-row gap-2 items-center justify-center">
         <IoPaperPlane className="text-[#ED1B24]" />
            {product.entries}
          </p>
        )}
      </div>
    </div>
  );
};

export default SingleProductCart;
