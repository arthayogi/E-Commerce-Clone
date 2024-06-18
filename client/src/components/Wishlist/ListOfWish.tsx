import { WithId } from "mongodb";
import RemoveWishlistButton from "./RemoveWishlistButton";
import { TWishlist } from "@/db/types";
import Link from "next/link";

export type WishProps = {
  wishlist: WithId<TWishlist>
}
export default function ListOfWish({wishlist}: WishProps) {
  console.log(wishlist.product);
  
  return (
    <>
          {/* Card1 */}
          <div className="card card-side bg-base-100 mt-10">
            <figure className="rounded-lg w-28 h-28">
              <img
                src=""
                alt="Movie"
              />
            </figure>
            <div className="card-body flex flex-col h-28 text-justify">
              <p className="font-bold">asdadsadsa</p>
              <p>¥ asdadsadsa</p>
            </div>
            <div className="card-actions flex mt-10 ml-72">
              <div>
                <Link href={`/products/asdasda`}>
                </Link>
                <button className="rounded-full btn btn-block bg-gray-200 text-black">
                  Details
                </button>
              </div>
              <RemoveWishlistButton />
            </div>
            <div className="border-b border-b-gray-300 mt-10"></div>
          </div>
    </>
  );
}
