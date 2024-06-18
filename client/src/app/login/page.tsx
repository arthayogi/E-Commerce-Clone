"use client";
import Footer from "@/components/Footer";
// import Navbar from "@/components/Navbar";
import Navbar2 from "@/components/Navbar2";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Swal from "sweetalert2";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        Swal.fire({
          icon: "success",
          text: "Login Success",
        }).then(() => {
          router.push("/");
        });
      } else {
        const errorData = await response.json();
        Swal.fire({
          icon: "error",
          text: errorData.message || "Login Failed",
        });
      }
    } catch (error) {
      console.error("Error during login:", error);
      Swal.fire({
        icon: "error",
        text: "Login Failed",
      });
    }
  };

  return (
    <>
      {/* <Navbar /> */}
      <Navbar2 />
      <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h1 className="mt-10 text-center text-3xl font-bold leading-9 tracking-tight text-gray-900">
            Log in
          </h1>
        </div>
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={email}
                  autoComplete="email"
                  onChange={(e) => setEmail(e.target.value)}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Password
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  value={password}
                  autoComplete="current-password"
                  onChange={(e) => setPassword(e.target.value)}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <button type="submit" className="rounded-full btn btn-block bg-orange-500 text-white">
                Login
              </button>
            </div>
          </form>
          <br />
          <div className="border-2 border-white border-b-gray-400">
            <p>
              By registering or logging in, you agree to our Terms of Use and
              Privacy Policy.
            </p>
            <br />
          </div>
          <p className="mt-10 mb-5 text-start text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Dont have an account?
          </p>
          <div>
            <Link href={"/register"}>
              <button className="rounded-full btn btn-block bg-orange-500 text-white">
                New Member Registration
              </button>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
