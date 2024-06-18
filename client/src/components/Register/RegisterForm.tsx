import Link from "next/link";

export default function RegisterForm() {
  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h1 className="mt-10 text-center text-3xl font-bold leading-9 tracking-tight text-gray-900">
          Register
        </h1>
      </div>
      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" action="#" method="POST">
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
          <Link href={"/login"}>
          <button className="rounded-full btn btn-block bg-orange-500 text-white">
            Login
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
