import ProductSection from "@/components/General/ProductSection";
import Banner from "@/components/home/Banner";
import FeatureListArea from "@/components/home/FeatureListArea";
import FeatureProductHome from "@/components/home/FeatureProductHome";
import Giveaway from "@/components/home/Giveaway";
import WhyImportant from "@/components/home/WhyImportant";
import { Button } from "@nextui-org/react";
 
export default function Home() {
  return (
    <div className="home">
      <Banner/>
      <Giveaway/>
      <FeatureProductHome/>
      <ProductSection/>
      <FeatureListArea/>
      <WhyImportant/>
    </div>
  );
}
