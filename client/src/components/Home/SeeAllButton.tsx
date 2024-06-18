import Link from "next/link";

export default function SeeAllButton() {
    return (
        <div className="flex justify-center">
          <Link href={"/products"}>
        <button className="rounded-full btn bg-gray-200/75 text-grey-500 mt-10 w-64">
          See all product
        </button>
        </Link>
      </div>
    )
}