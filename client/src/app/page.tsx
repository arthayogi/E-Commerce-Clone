import Footer from "@/components/Footer";
import Carousel from "@/components/Home/Carousel";
import HomeCard from "@/components/Home/HomeCard";
import News from "@/components/Home/News";
import SeeAllButton from "@/components/Home/SeeAllButton";
import TextSection from "@/components/Home/TextSection";
import Navbar from "@/components/Navbar";
import Navbar2 from "@/components/Navbar2";
import { Product } from "@/db/models/product.model";

export default async function HomePage() {
    const data = await Product.findAll()
    
  return (
    <>
      {/* <Navbar /> */}
      <Navbar2 />
      <Carousel />
      <News />
      <TextSection />
      <div className="grid grid-cols-7 flex-wrap item-start justify-start px-8">
      {data.map((product) => (
        <HomeCard product={product} key={product._id}/>
      ))}
      </div>
      <SeeAllButton />
      <Footer />
    </>
  );
}
