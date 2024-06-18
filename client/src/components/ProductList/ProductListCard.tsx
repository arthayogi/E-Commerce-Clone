"use client"

import { TProduct } from "@/db/types";
import { WithId } from "mongodb";
import Link from "next/link";

export type ProductProps = {
  product: WithId<TProduct>
}

export default function ProductListCard({product}: ProductProps) {
  
  return (
    <>
    <Link href={`/products/${product.slug}`}>
            {/* Card1 */}
            <div className="mx-3 mt-10">
          <div className="card w-60 bg-base-100 shadow-xl">
            <figure className="rounded-lg">
              <img
                src={product.thumbnail}
                alt=""
              />
            </figure>
            <div className="card-body">
              <figure>
                <img
                  className="w-20 h-auto mb-4"
                  src="https://www.goodsmile.com/gsc-webrevo-sdk-storage-prd/maker/1/logo_gsc.png"
                  alt=""
                />
              </figure>
              <p className="text-sm font-medium">{product.name}</p>
              <p className="text-sm text-left">¥{product.price} (including tax)</p>
            </div>
          </div>
        </div>
    </Link>
    </>
  );
}
