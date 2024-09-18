import { Productimage } from "@/assets";
import React from "react";
import SingleProductCart from "./SingleProductCart";

const ProductSection = ({entries}) => {
  const porducts = [
    {
      image: Productimage,
      title: "Create your own Yokohama Box",
      description: "lorem20",
      price: 50,
      entries : 50, 
    },
    {
      image: Productimage,
      title: "Fukuoka Box",
      description: "lorem20",
      price: 50,
      entries : 50,
    },
    {
      image: Productimage,
      title: "Hiyoshi Box",
      description: "lorem20",
      price: 50,
      entries : 50,
    },
    {
      image: Productimage,
      title: "Kamakura Box",
      description: "lorem20",
      price: 50,
      entries : 50,
    },
    {
      image: Productimage,
      title: "Fukuoka Box",
      description: "lorem20",
      price: 50,
      entries : 50,
    },
    {
      image: Productimage,
      title: "Kawasaki Box",
      description: "lorem20",
      price: 50,
      entries : 50,
    },
    
  ];
  return (
    <div className="ProductSection py-8 md:py-14">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-7">
          {porducts.map((item, key) => (
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
