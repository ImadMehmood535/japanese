import { Productimage } from "@/assets";
import ProductSection from "@/components/General/ProductSection";
import Banner from "@/components/home/Banner";
import FeatureListArea from "@/components/home/FeatureListArea";
import FeatureProductHome from "@/components/home/FeatureProductHome";
import Giveaway from "@/components/home/Giveaway";
import WhyImportant from "@/components/home/WhyImportant";
import { Button } from "@nextui-org/react";

export default function Home() {
  const featureProducts = [
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
  return (
    <div className="home">
      <Banner />
      <Giveaway />
      <FeatureProductHome />
      <ProductSection entries={false} porducts={featureProducts} />
      <FeatureListArea />
      <WhyImportant />
    </div>
  );
}
