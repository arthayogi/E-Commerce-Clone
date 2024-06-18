import Link from "next/link";
import ButtonLogout from "./ButtonLogout";
import ButtonLogin from "./ButtonLogin";
import { cookies } from "next/headers";

export default async function Navbar2() {
  "use server"
  const cookieStore = cookies();
  const authorization = cookieStore.get("Authorization");
  return (
    <div className="navbar bg-base-100 border-2 border-indigo-200/0 border-b-gray-300/50">
      <div className="flex-2 mx-10">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Good_Smile_Company.svg/768px-Good_Smile_Company.svg.png?20240321193829"
          width={100}
          height="auto"
        />
      </div>
      <div className="flex-1">
        <ul className="menu menu-horizontal px-1 font-bold">
          <li>
            <Link href={"/"}>
              <p>Home</p>
            </Link>
          </li>
          <li>
            <Link href={"/products"}>
              <p>Product</p>
            </Link>
          </li>
          <li>
            <Link href={"/wishlist"}>
              <p>Wishlist</p>
            </Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <button className="btn btn-ghost btn-circle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </button>
        <button className="btn btn-ghost btn-circle">
          <div className="indicator">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
              />
            </svg>
          </div>
        </button>
        {authorization?.value? (
          <ButtonLogout />
        ) : (
          <ButtonLogin />
        )}
      </div>
    </div>
  );
}
