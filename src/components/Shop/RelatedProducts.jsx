import React from "react";
import SingleProductCart from "../General/SingleProductCart";

const RelatedProducts = ({ relatedProducts }) => {
  return (
    <div className="RelatedProducts py-8 md:py-16">
      <div className="px-[5%]">
        <h2 className="text-black text-4xl md:text-6xl font-normal shadow1 mb-10 md:mb-16 text-center gang">
          Related Products
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-7">
          {relatedProducts.map((item, key) => (
            <div className={`item-${key}`} key={key}>
              <SingleProductCart product={item} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RelatedProducts;
