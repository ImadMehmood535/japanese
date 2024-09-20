import { Productimage, ShopReview, UserProfile } from "@/assets";
import ProductSection from "@/components/General/ProductSection";
import Review from "@/components/General/Review";
import ShopBanner from "@/components/Shop/ShopBanner";
import React from "react";

const index = () => {
  const allproducts = [
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
      title: "Kamakura Box",
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
      title: "Kawasaki Box",
      slug: "create-your-own-Yokohama-Box",
      description: "lorem20",
      price: 50,
      entries: 50,
    },
  ];
  const reviewslider1 = [
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
  const reviewslider2 = [
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
      <ProductSection entries={true}  porducts={allproducts}/>
      <Review fetureimage={ShopReview} reviewslider1={reviewslider1} reviewslider2={reviewslider2} />
    </div>
  );
};

export default index;
