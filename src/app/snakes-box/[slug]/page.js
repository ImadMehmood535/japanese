import { UserProfile } from "@/assets";
import { getAllProducts, getProductById } from "@/cached-requests";
import Review from "@/components/General/Review";
import ProductGift from "@/components/Shop/ProductGift";
import RelatedProducts from "@/components/Shop/RelatedProducts";
import SingleProductBanner from "@/components/Shop/SingleProductBanner";
import SingleShop from "@/components/Shop/SingleShop";
import React from "react";

const Page = async ({ params }) => {
  const { data: product } = await getProductById(params.slug);
  const { data: allProducts } = await getAllProducts();

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
    <div className="product-page">
      <SingleProductBanner />
      <SingleShop product={product} />
      <RelatedProducts relatedProducts={allProducts} />
      <ProductGift />
      <Review
     
        reviewslider1={reviewslider1}
        reviewslider2={reviewslider2}
      />
    </div>
  );
};

export default Page;
