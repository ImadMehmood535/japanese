 
import React from "react";
import SingleProductCart from "./SingleProductCart";

const ProductSection = ({entries, porducts}) => {
  
  return (
    <div className="ProductSection py-8 md:py-14">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-7">
          {porducts?.map((item, key) => (
            <div className={`item-${key}`} key={key}>
              <SingleProductCart product={item} entries={entries}/>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductSection;
