import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IoPaperPlane } from "react-icons/io5";

const SingleProductCart = ({ product, entries = false }) => {
  return (
    <div className="product-wrapper">
      <Link href={`/shop/${product?.slug}`}>
        <div className="image-wrapper">
          <Image
            src={product.image}
            width={400}
            height={400}
            alt={product.title}
            className="w-full h-auto"
          />
        </div>
        <div className="content-wrapper text-center md:max-w-[80%] mx-auto">
          <h3 className="text-black font-medium text-2xl md:text-3xl mb-3 rubick ">
            {product.title}
          </h3>
          {entries == true && (
            <p className="text-black rubick text-lg font-normal flex flex-row gap-2 items-center justify-center">
              <IoPaperPlane className="text-[#ED1B24]" />
              {product.entries} Entries
            </p>
          )}
        </div>
      </Link>
    </div>
  );
};

export default SingleProductCart;
