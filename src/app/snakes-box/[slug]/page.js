import { Productimage, ShopReview, UserProfile } from "@/assets";
import { getProductById } from "@/cached-requests";
import Review from "@/components/General/Review";
import ProductGift from "@/components/Shop/ProductGift";
import RelatedProducts from "@/components/Shop/RelatedProducts";
import SingleProductBanner from "@/components/Shop/SingleProductBanner";
import SingleShop from "@/components/Shop/SingleShop";
import React from "react";

const Page = async ({ params }) => {
  const { data: product } = await getProductById(params.slug);
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
    <div className="product-page">
      <SingleProductBanner />
      <SingleShop product={product} />
      <RelatedProducts  relatedProducts={relatedProducts}/>
      <ProductGift />
      <Review
        fetureimage={ShopReview}
        reviewslider1={reviewslider1}
        reviewslider2={reviewslider2}
      />
    </div>
  );
};

export default Page;
