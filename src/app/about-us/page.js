import { AboutUser,   UserProfile } from "@/assets";
import AboutBanner from "@/components/About/AboutBanner";
import ImageBoxRep from "@/components/About/ImageBoxRep";
import MissonArea from "@/components/About/MissonArea";
import Review from "@/components/General/Review";
import React from "react";

const index = () => {
  const data = [
    {
      image: AboutUser,
      title: "Our Founder’s Story",
      text: `<p>It all began with a lifelong passion for cars and a deep admiration for Japanese culture. From an early age, our founder was fascinated by Japanese engineering, design, and the unique spirit of craftsmanship that goes into every car and snack produced in Japan. His love for drifting through the streets with customized Japanese imports sparked the idea to combine the best of both worlds—Japanese snacks and custom-mod cars.</p><br/><p>With JJapan Giveaways, he wanted to bring his joy and love for the vibrant Japanese lifestyle directly to you. Whether it's the delicious flavors of Japan's most iconic snacks or the thrill of getting behind the wheel of a custom-built ride, this business is about sharing the best experiences Japan has to offer—right here at home.</p>`,
    },
    {
      image: AboutUser,
      title: "What We Do",
      text: `<p>At JJapan Giveaways, we curate the finest Japanese snacks and pair them with one-of-a-kind opportunities to win jaw-dropping, custom-mod cars. Every purchase brings you closer to Japan—both through the mouth-watering treats and the chance to drive away in a sleek, modded car straight from the racing culture our founder loves.</p>`,
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
    <div className="about">
      <AboutBanner /> 
      <ImageBoxRep data={data} />
      <MissonArea/>
      <Review  reviewslider1={reviewslider1} reviewslider2={reviewslider2} />
    </div>
  );
};

export default index;
