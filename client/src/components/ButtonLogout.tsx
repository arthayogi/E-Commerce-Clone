"use client"

import { logoutAction } from "@/app/actions/user.action";


export default function ButtonLogout() {
  return (
    <>
      <button
        onClick={() => logoutAction()}
        className="rounded-full btn bg-orange-500 text-white"
      >
        Logout
      </button>
    </>
  );
}
