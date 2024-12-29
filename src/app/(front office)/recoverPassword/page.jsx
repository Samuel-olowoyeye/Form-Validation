"use client"
import React, {useState } from "react";
import { Mail} from "lucide-react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import toast from 'react-hot-toast';
import { recoverySchema } from "../../../schemas/recoverySchema";

export default function Home() {

  const router = useRouter();
    const [loading, setLoading] = useState(false);
    const {
      register,
      handleSubmit,
      reset,
      formState: { errors },
    } = useForm({
      resolver: zodResolver(recoverySchema),
    });

  const [successMessage, setSuccessMessage] = useState(false);


  async function handleRecovery (data) {
    console.log(data)
    setSuccessMessage(true)
    toast.success("Check inbox For Reset Password..");
    reset();
    router.push("/");
  
}



  return (
    <div className="min-h-screen flex items-center justify-center dark:bg-slate-800">
      <div className="bg-transparent dark:bg-slate-800 p-8 rounded-lg shadow-2xl w-[340px] lg:w-[480px] sm:w-[480px] ">
      <h1 className=" w-[300px] text-slate-800 dark:text-slate-50 mb-4 mx-auto px-8 py-2 text-xl font-semibold text-center rounded-xl ">
          Recover Password
      </h1>

         <form onSubmit={handleSubmit(handleRecovery)} className="max-w-sm mx-auto">
        <div className="mb-5">
          <label htmlFor="Username" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
          <input 
          {...register("email")} 
          type="email" 
          id="email"
           className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="" />
           {/* Error Message */}
        {
            errors.email?.message && (
              <p className="text-xs py-2 font-semibold text-red-700">
                {" "}
                *{errors.email?.message}
              </p>
            )
          }
        </div>
        
        <button 
        type="submit" 
        className=" w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-3 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Recover password</button>
         {/* Success Message */}
         {successMessage ? (
           <div className="text-green-500 text-sm text-center my-2">
             Password recovery email sent successfully. Please check your inbox.
           </div>
         ) : ("")}
      </form>
   </div>
   </div>
  )
}





