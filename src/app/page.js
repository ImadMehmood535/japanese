import { Productimage } from "@/assets";
import { getAllProducts } from "@/cached-requests";
import ProductSection from "@/components/General/ProductSection";
import Banner from "@/components/home/Banner";
import FeatureListArea from "@/components/home/FeatureListArea";
import FeatureProductHome from "@/components/home/FeatureProductHome";
import Giveaway from "@/components/home/Giveaway";
import WhyImportant from "@/components/home/WhyImportant";

export default async function Home() {
  const { data: products } = await getAllProducts();

  return (
    <div className="home">
      <Banner /> 
      <Giveaway />
      <FeatureProductHome />
      <ProductSection entries={false} porducts={products} />
      <FeatureListArea />
      <WhyImportant />
    </div>
  );
}
