import Footer from "@/components/Footer";
// import Navbar from "@/components/Navbar";
import Navbar2 from "@/components/Navbar2";
import ProductInfo from "@/components/ProductSlug/ProductInfo";
import { Product } from "@/db/models/product.model";


export type SlugProps = {params: {slug:string}}

export default async function ProductDetailSlug({params}: SlugProps) {
  const dataProduct = await Product.findBySlug(params.slug)
  
  return (
    <>
      {/* <Navbar /> */}
      <Navbar2 />
      <ProductInfo dataProduct={dataProduct!} />
      <Footer />
    </>
  );
}
