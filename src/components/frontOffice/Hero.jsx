"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { loginSchema } from "../../schemas/loginSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

export default function Hero({ setLoggedIn }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const heroContents = [
    {
      id: 1,
      imageUrl:
        "/african-american-man-paying-with-credit-card-online-while-making-orders-via-mobile-internet-making-transaction-using-mobile-bank-application.jpg",
      className: "bg bg-no-repeat bg-cover w-screen h-screen bg-slate-900 bg-opacity-25 bg-blend-multiply",
    },
    {
      id: 2,
      imageUrl: "/new.jpg",
      className: "bg bg-no-repeat bg-cover w-screen h-screen bg-slate-900 bg-opacity-25 bg-blend-multiply ",
    },
    {
      id: 3,
      imageUrl: "/smiling-man-reading-newspaper-near-glass-fence.jpg",
      className: "bg bg-no-repeat bg-cover w-screen h-screen bg-slate-900 bg-opacity-25 bg-blend-multiply",
    },
  ];

  // Change image every 10 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === heroContents.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval); // Clear interval on unmount
  }, []);

  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginSchema),
  });

  async function handleLogin(data) {
    console.log(data);
    setLoading(false);
    toast.success("User Logged in Successfully");
    reset();
    setLoggedIn(true);
  }

  return (
    <div className="w-screen lg:w-full h-screen">
      <section
        className="absolute inset-0 transition-all duration-1000 ease-in-out"
        style={{
          backgroundImage: `url(${heroContents[currentImageIndex].imageUrl})`,
          backgroundPosition: "center", // Center the image
          backgroundSize: "cover", // Ensure the image covers the full section
        }}
      >
        {/* Login Hero Form */}
        <div className="w-[360px] sm:w-[400px] lg:w-[400px] h-full px-4 mx-auto sm:mx-4 lg:mx-36 text-center py-36 sm:py-36 lg:py-36">
          <div className="h-auto px-8 pt-8 pb-4 bg-transparent shadow-2xl z-50 lg:bg-white lg:dark:bg-slate-800 lg:shadow-lg rounded-lg">
            <h1 className="bg-blue-700 dark:bg-white w-[200px] text-slate-50 dark:text-slate-800 mx-auto px-8 py-2 text-lg font-semibold rounded-xl ">
              Login Here
            </h1>
            <form onSubmit={handleSubmit(handleLogin)} className="mx-auto my-10">
              <div className="relative z-0 w-full mb-5 group">
                <input
                  {...register("email")}
                  type="email"
                  id="floating_email"
                  className="block py-2.5 px-0 w-full text-sm text-slate-700 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                />
                {errors.email?.message && (
                  <p className="text-xs flex-start flex py-2 font-semibold text-red-700">
                    *{errors.email?.message}
                  </p>
                )}
                <label
                  htmlFor="floating_email"
                  className="peer-focus:font-medium absolute text-sm text-gray-500 text-center dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 left-0 -z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Email address
                </label>
              </div>
              <div className="relative z-0 w-full mb-5 group">
                <input
                  {...register("password")}
                  type="password"
                  id="floating_password"
                  className="block py-2.5 px-0 w-full text-sm text-slate-700 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                />
                {errors.password?.message && (
                  <p className="text-xs flex-start flex  py-2 font-semibold text-red-700">
                    *{errors.password?.message}
                  </p>
                )}

                <label
                  htmlFor="floating_password"
                  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 left-0 -z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Password
                </label>
              </div>
              <div className="flex items-start my-6">
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="remember"
                      type="checkbox"
                      value=""
                      className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                    />
                  </div>
                  <label
                    htmlFor="remember"
                    className="ms-2 text-sm font-medium text-gray-500 dark:text-gray-500"
                  >
                    Remember me
                  </label>
                </div>
                <Link
                  href="/recoverPassword"
                  className="ms-auto text-sm text-blue-700 hover:underline dark:text-blue-500"
                >
                  Forgot Password?
                </Link>
              </div>
              {loading ? (
                <button
                  disabled
                  type="button"
                  className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 inline-flex items-center"
                >
                  <svg
                    aria-hidden="true"
                    role="status"
                    className="inline w-4 h-4 mr-3 text-white animate-spin"
                    viewBox="0 0 100 101"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                      fill="#E5E7EB"
                    />
                    <path
                      d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                      fill="currentColor"
                    />
                  </svg>
                  logging in please wait...
                </button>
              ) : (
                <button
                  type="submit"
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-full px-5 py-3 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Submit
                </button>
              )}
              <div className="text-sm font-medium text-gray-500 dark:text-gray-500 my-6">
                Not registered ?
                <Link
                  href="/signup"
                  className="text-blue-700 mx-1 hover:underline dark:text-blue-500"
                >
                  Create account
                </Link>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}





