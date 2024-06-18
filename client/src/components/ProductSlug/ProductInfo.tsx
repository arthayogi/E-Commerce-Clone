import { TProduct } from "@/db/types";
import { WithId } from "mongodb";
import WishlistButton from "./WishlistButton";

export type DataProps = {
  dataProduct: WithId<TProduct>;
};

export default async function ProductInfo({ dataProduct }: DataProps) {
  const data = dataProduct.images;
  
  return (
    <>
      {/* Product Image */}
      <div className="flex flex-1 mt-10 max-h-vit">
        <div className="flex flex-1 flex-row">
          {/* Image */}

          <div className="grid grid-cols-2 w-4/6 h-full">
            {data.map((data: string, index: number) => (
              <div key={index} className="mx-1 my-1">
                <img
                  className="rounded-lg sm:col-span-1 lg:col-span-2"
                  src={data}
                  alt={""}
                />
              </div>
            ))}
            {/* Product Description */}
            <div className="flex-none my-4 col-span-1 lg:col-span-2">
              <div className="collapse">
                <input type="checkbox" />
                <div className="collapse-title text-xl font-medium">
                  Product Description
                </div>
                <div className="collapse-content">
                  <p>{dataProduct.description}</p>
                </div>
              </div>
            </div>
            {/* Desc 1 */}
            <div className="flex-none my-4 col-span-1 lg:col-span-2">
              <div className="collapse">
                <input type="checkbox" />
                <div className="collapse-title text-xl font-medium">
                  Where to Purchase
                </div>
                <div className="collapse-content">
                  <p>
                    ■Good Smile Company Online Store All orders placed on the
                    Good Smile Company Online Store during the specified
                    preorder period are guaranteed to be fulfilled.* *Please
                    note that this does not apply to orders with incorrect
                    payment and/or shipping information provided. *Dates and
                    times listed are in Japan Standard Time (JST) unless
                    otherwise stated.
                    <br />
                    <br />
                    ■International Partner Shops This product is available from
                    our partner shops. Please see the following listing to find
                    a partner shop in your area: Partner Shop Listing
                  </p>
                </div>
              </div>
            </div>
            {/* Desc 3 */}
            <div className="flex-none my-4 col-span-1 lg:col-span-2">
              <div className="collapse">
                <input type="checkbox" />
                <div className="collapse-title text-xl font-medium">
                  Product Specification
                </div>
                <div className="collapse-content">
                  <p className="text-lg">
                    Series
                    <br />
                    <br />
                    <br />
                    Specifications
                    <br />
                    Painted plastic 1/7 scale complete product with stand
                    included.
                    <br />
                    Approximately 274mm in height.
                    <br />
                    <br />
                    Sculptor
                    <br />
                    Koki
                    <br />
                    <br />
                    Paintwork
                    <br />
                    milk
                    <br />
                    <br />
                    Manufacturer
                    <br />
                    Good Smile Arts Shanghai
                    <br />
                    <br />
                    Distributed by
                    <br />
                    Good Smile Company
                    <br />
                    <br />
                    ©SHIFT UP CORP.
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* Info */}
          <div className="w-2/6 h-12 mx-4">
            <div className="fixed">
              <p className="text-sm font-bold">{dataProduct.excerpt}</p>
              <p className="text-lg font-semibold my-2">{dataProduct.name}</p>
              <p className="text-lg">￥{dataProduct.price} (Including tax)</p>
              <p className="text-base font-bold my-2">
                Preorders Open Now Preorder Period: 2024/05/24〜2024/07/17 (JST)
              </p>
              <p className="text-base text-gray-500 my-2">
                Shipping 05/2025・Limit 3 per person
              </p>
              <div className="flex-1">
                <button className="rounded-full btn w-3/4 bg-orange-500 text-white">
                  Preorder Now
                </button>
                <WishlistButton />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
