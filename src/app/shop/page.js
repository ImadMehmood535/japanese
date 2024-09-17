import { ShopReview, UserProfile } from "@/assets";
import ProductSection from "@/components/General/ProductSection";
import Review from "@/components/General/Review";
import ShopBanner from "@/components/Shop/ShopBanner";
import React from "react";

const index = () => {
  const data = [
    {
      userProfile: UserProfile,
      name: "Jareth Fellroth",
      review:
        "I genuinely love the tokyo treat boxes I've tried other services and usually are full of nothing but chocolate but but these boxes are a good balance of sweet and savory.",
    },
    {
      userProfile: UserProfile,
      name: "Jareth Fellroth",
      review:
        "I genuinely love the tokyo treat boxes I've tried other services and usually are full of nothing but chocolate but but these boxes are a good balance of sweet and savory.",
    },
    {
      userProfile: UserProfile,
      name: "Jareth Fellroth",
      review:
        "I genuinely love the tokyo treat boxes I've tried other services and usually are full of nothing but chocolate but but these boxes are a good balance of sweet and savory.",
    },
    {
      userProfile: UserProfile,
      name: "Jareth Fellroth",
      review:
        "I genuinely love the tokyo treat boxes I've tried other services and usually are full of nothing but chocolate but but these boxes are a good balance of sweet and savory.",
    },
  ];
  return (
    <div className="shop">
      <ShopBanner />
      <ProductSection />
      <Review fetureimage={ShopReview} data={data} />
    </div>
  );
};

export default index;
