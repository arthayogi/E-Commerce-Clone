"use client";

import Footer from "@/components/Footer";
// import Navbar from "@/components/Navbar";
import Navbar2 from "@/components/Navbar2";
import ListOfWish from "@/components/Wishlist/ListOfWish";
import { TWishlist } from "@/db/types";
import { WithId } from "mongodb";
import { useEffect, useState } from "react";

export type Wishlist = WithId<TWishlist>

export default function WishlistPage() {
  const [data, setData] = useState<Wishlist[]>([]);

  useEffect(() => {
    async function getAll(): Promise<TWishlist[]> {
      const response = await fetch(process.env.NEXT_PUBLIC_BASE_URL + "/api/wishlist");
      const data = await response.json();

      setData(data);
      return data;
    }
    getAll()
  }, []);
  return (
    <>
      {/* <Navbar /> */}
      <Navbar2 />
      {/* Text */}
      <div className="container mx-64">
        <h1 className="mt-10 text-3xl font-bold leading-9 tracking-tight text-gray-900">
          Wishlist
        </h1>
      </div>
      <div className="dropdown mx-64 mt-5">
        <div
          tabIndex={0}
          role="button"
          className="border-2 border-red-300 rounded-md w-52 h-10 pl-5 pt-1"
        >
          Sort by date added 🔻
        </div>
        <ul
          tabIndex={0}
          className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
        >
          <li>
            <a>Sort by date added</a>
          </li>
          <li>
            <a>Sort by availability</a>
          </li>
        </ul>
      </div>
      {/* Card Product */}
      <div className="container mx-64">
        <div className="grid flex-wrap item-start justify-start my-4"></div>
        {data.map((wishlist) => (
            <ListOfWish wishlist={wishlist} key={wishlist._id?.toString()}/>
        ))}
      </div>
      <Footer />
    </>
  );
}
