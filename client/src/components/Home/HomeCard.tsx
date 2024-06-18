import { TProduct } from "@/db/types";
import { WithId } from "mongodb";
import Link from "next/link";

export type ProductProps = {
  product: WithId<TProduct>
}

export default function HomeCard({product}: ProductProps) {
  return (
    <>
        <div className="mx-3 mt-10">
          <div className="card w-36 bg-base-100 shadow-xl">
            <figure className="rounded-lg col-span-7">
              <img
                src={product.thumbnail}
                alt=""
              />
            </figure>
            <div className="card-body">
              <figure>
                <img
                  src="https://www.goodsmile.com/gsc-webrevo-sdk-storage-prd/maker/1/logo_gsc.png"
                  alt=""
                />
              </figure>
              <p className="text-sm font-medium">{product.name}</p>
              <p className="text-sm text-left">{product.price} (including tax)</p>
              <div className="card-actions">
                <button className="btn btn-block bg-green-200">
                  <Link href={`/products/${product.slug}`}>
                  <div className="text-green-700">See Detail</div>
                  </Link>
                </button>
              </div>
            </div>
          </div>
        </div>
    </>
  );
}
