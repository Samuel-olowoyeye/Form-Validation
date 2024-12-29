"use client";
import Link from 'next/link'
import React, { useState } from 'react'
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signinSchema } from '../../../schemas/schema';
import toast from 'react-hot-toast';

 

export default function page() {

  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(signinSchema),
  });
  

  async function handleSignin(data) {
      console.log(data)
      setLoading(false);
        toast.success("User Created Successfully");
        reset();
        router.push("/");
    
  } 

  return (
    <div className="min-h-screen  flex items-center justify-center dark:bg-slate-800">
      <div className="bg-transparent dark:bg-slate-800 p-8 my-10 lg:my-0 sm:my-0 mx-auto rounded-lg shadow-2xl w-[340px] sm:w-[500px] lg:w-[500px] ">
      <h1 className=" w-[200px] text-slate-800 dark:text-slate-50 mb-4 mx-auto px-8 py-2 text-xl font-semibold text-center rounded-xl ">
              Sign up
            </h1>
      <form  onSubmit={handleSubmit(handleSignin)} className="max-w-sm mx-auto">
        <div className="mb-5">
          <label htmlFor="Username" className="block mb-2 text-sm font-medium text-gray-900 dark:text-slate-300">Username</label>
          <input
          {...register("username")} 
          type="text"
          id="Username" 
          className="shadow-sm bg-transparent border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-transparent dark:border-gray-600 dark:placeholder-gray-400 dark:text-slate-300 dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="" />
          {
            errors.username?.message && (
              <p className="text-xs pt-2 font-semibold text-red-700">
                {" "}
                *{errors.username?.message}
              </p>
            )
          }
        </div>
        <div className="mb-5">
          <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
          <input 
          {...register("email")} 
          type="email"
          id="email" 
          className="shadow-sm bg-transparent border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-transparent dark:border-gray-600 dark:placeholder-gray-400 dark:text-slate-300 dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="" />
          {
            errors.email?.message && (
              <p className="text-xs py-2 font-semibold text-red-700">
                {" "}
                *{errors.email?.message}
              </p>
            )
          }
        </div>
        <div className="mb-5">
          <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
          <input 
          {...register("password")} 
          type="password" 
          id="password" 
          className="shadow-sm bg-transparent border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-transparent dark:border-gray-600 dark:placeholder-gray-400 dark:text-slate-300 dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"  />
          {
            errors.password?.message && (
              <p className="text-xs py-2 font-semibold text-red-700">
                {" "}
                *{errors.password?.message}
              </p>
            )
          }
        </div>
        <div className="mb-5">
          <label htmlFor="repeat-password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirm password</label>
          <input 
          {...register("confirmPassword")} 
          type="password"
           id="repeat-password"
            className="shadow-sm bg-transparent border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-transparent dark:border-gray-600 dark:placeholder-gray-400 dark:text-slate-300 dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" />
            {
            errors.confirmPassword?.message && (
              <p className="text-xs py-2 font-semibold text-red-700">
                {" "}
                *{errors.confirmPassword?.message}
              </p>
            )
          }
        </div>
        <div className="flex items-start mb-5">
          <div className="flex items-center h-5">
            <input id="terms" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-transparent focus:ring-3 focus:ring-blue-300 dark:bg-transparent dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"  />
          </div>
          <label htmlFor="terms" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">I agree with the <a href="#" className="text-blue-600 hover:underline dark:text-blue-500">terms and conditions</a></label>
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
          Creating please wait...
        </button>
      ) : (
        <button type="submit" className=" w-full text-white dark:text-slate-300 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-3 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Register new account</button>
  )}
        <div className="text-base font-medium text-gray-500 dark:text-gray-300 my-6 text-center ">
                already have an account ?
                <Link
                  href="/"
                  className="text-blue-700 mx-1  hover:underline dark:text-blue-500"
                >
                  Login
                </Link>
              </div>
      </form>

    </div>
    </div>
  )
}



























  