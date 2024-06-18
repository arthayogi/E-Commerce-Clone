"use client"

import Footer from "@/components/Footer";
// import Navbar from "@/components/Navbar";
import Navbar2 from "@/components/Navbar2";
import { redirect, useRouter } from "next/navigation";
import { useState } from "react";
import Swal from "sweetalert2";

export default function RegisterPage() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const router = useRouter()

    function handleEmailInput(e:React.ChangeEvent<HTMLInputElement>) {
      setEmail(e.target.value)
    }

    
    function handlePasswordInput(e:React.ChangeEvent<HTMLInputElement>) {
      setPassword(e.target.value)
    }

    const handleSubmit = async (e:React.FormEvent) => {
      e.preventDefault()

      try {
        const response = await fetch("/api/register", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({email, password}),
        })

        let data = null

        if(response.headers.get("content-type")?.includes("application/json")) {
          data = await response.json()
        }
        if(data.data.acknowledged === true) {
          Swal.fire({
            icon: "success",
            text: "Register Success"
          }).then(()=>{
            router.push("/login");
          })
        }
      } catch (error) {
        console.log(error);
        Swal.fire({
          icon: "error",
          text: "Register fail"
        })
        
      }
    }
  return (
    <>
      {/* <Navbar /> */}
      <Navbar2 />
      {/* <RegisterForm /> */}
      <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h1 className="mt-10 text-center text-3xl font-bold leading-9 tracking-tight text-gray-900">
          Register
        </h1>
      </div>
      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" onSubmit={handleSubmit} action="" method="POST">
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
                placeholder="Email address"
                type="email"
                autoComplete="email"
                onChange={handleEmailInput}
                className="pl-5 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
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
                placeholder="Password"
                type="password"
                autoComplete="current-password"
                onChange={handlePasswordInput}
                className="pl-5 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <button className="rounded-full btn btn-block bg-orange-500 text-white">
              Register
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
          Allready has an account?
        </p>
        <div>
          <button
          type="button"
          onClick={()=>router.push('/login')}
          className="rounded-full btn btn-block bg-orange-500 text-white">
            Login
          </button>
        </div>
      </div>
    </div>
      <Footer />
    </>
  );
}
