import Link from "next/link";

export default function ButtonLogin() {
  return (
    <>
      <Link href={"/login"}>
        <button className="rounded-full btn bg-orange-500 text-white">
          Sign-up / Login
        </button>
      </Link>
    </>
  );
}
