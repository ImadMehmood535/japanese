import { Productimage } from "@/assets";
import CartComponent from "@/components/Cart/CartComponent";
import InnerHeader from "@/components/General/InnerHeader";
import RelatedProducts from "@/components/Shop/RelatedProducts";
import React from "react";

const Index = () => {
  const cartitem = [
    {
      imageUrl: Productimage,
      name: "Create your own Yokohama Box",
      price: 125,
      quantity: 1,
      entries: 25,
    },
  ];
  const relatedProducts = [
    {
      image: Productimage,
      title: "Create your own Yokohama Box",
      slug: "create-your-own-Yokohama-Box",
      description: "lorem20",
      price: 50,
      entries: 50,
    },
    {
      image: Productimage,
      title: "Fukuoka Box",
      slug: "create-your-own-Yokohama-Box",
      description: "lorem20",
      price: 50,
      entries: 50,
    },
    {
      image: Productimage,
      title: "Hiyoshi Box",
      slug: "create-your-own-Yokohama-Box",
      description: "lorem20",
      price: 50,
      entries: 50,
    },
    {
      image: Productimage,
      title: "Hiyoshi Box",
      slug: "create-your-own-Yokohama-Box",
      description: "lorem20",
      price: 50,
      entries: 50,
    },
  ];
  return (
    <div className="term-n-condition">
      <InnerHeader pageTitle="Cart" />
      <CartComponent cartitem={cartitem} />
      <RelatedProducts  relatedProducts={relatedProducts}/>
    </div>
  );
};

export default Index;
