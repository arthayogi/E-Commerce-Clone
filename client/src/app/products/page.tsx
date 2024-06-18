"use client"

import Footer from "@/components/Footer";
// import Navbar from "@/components/Navbar";
import Navbar2 from "@/components/Navbar2";
import ProductListCard from "@/components/ProductList/ProductListCard";
import SearchBar from "@/components/ProductList/SearchBar";
import { TProduct } from "@/db/types";
import { useEffect, useState } from "react";

export default function ProductPage() {
  const [data, setData] = useState<TProduct[]>([]);

  useEffect(() => {
    async function getAll(): Promise<TProduct[]> {
      const response = await fetch(process.env.NEXT_PUBLIC_BASE_URL+"/api/products");
      const data = await response.json();
      // console.log(data, "<<<<<<");

      setData(data);
      return data;
    }
    getAll();
  }, []);

  return (
    <>
      {/* <Navbar /> */}
      <Navbar2 />
      <SearchBar />
      {/* Card Product */}
      <div className="grid grid-cols-4 flex-wrap item-start justify-start px-8">
      {data.map((product) => (
        <ProductListCard product={product} key={product._id}/>
      ))}
      </div>
      <Footer />
    </>
  );
}
