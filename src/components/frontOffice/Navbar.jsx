"use client"
import { AlignJustify, Bell, LayoutDashboard, LogOut, Settings, Sun, User, X } from "lucide-react"
import React, { useState } from "react"
import Link from "next/link";
import { Landmark } from "lucide-react";
import Image from "next/image";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import ThemeSwitcherBtn from "./ThemeSwitcherBtn";

function Navbar({ loggedIn, setLoggedIn }) {

  return (
    <div className="fixed w-full sm:w-full lg:w-full flex items-center justify-between sm:mx-4 sm:pr-20 text-slate-50 h-16 px-8 py-4 top-0 z-50  lg:px-32 ">
      <div className="flex items-center space-x-2">
      <Landmark className="w-6 h-6 sm:w-9 sm:h-9 lg:w-9 lg:h-9 text-slate-400"/>
      <Link href="#" className="lg:text-3xl sm:text-3xl font-semibold  text-slate-600 dark:text-slate-600">SMbank</Link>
      </div>
      <div className="flex space-x-3 sm:space-x-8">
            <ThemeSwitcherBtn /> 

          <Link href="/signup" >
          <button  className="inline-flex justify-center items-center mt-1 py-1.5 px-2 sm:py-2 sm:px-4 lg:py-2 lg:px-4 text-xs sm:text-base lg:text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900" >
              Register
            <svg
              className="w-2 h-2 sm:w-3.5 sm:h-3.5 lg:w-3.5 lg:h-3.5 ms-2 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
        </button>
        </Link> 

          {/* PROFILE IMAGE  */}
        
          {loggedIn ? (<DropdownMenu>
            <DropdownMenuTrigger><Image src ="/profile.jpg" alt="user profile"  width={200} height={200} className= "w-7 h-7 mb-1 lg:mb-0 sm:mb-0  lg:w-9 lg:h-9 sm:w-9 sm:h-9 rounded-full items-center " /></DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                    <DropdownMenuItem>
                      <Link href="/dashboard/profile"> 
                      Dashboard
                      </Link> 
                      </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => setLoggedIn(false)}>LogOut</DropdownMenuItem>
              </DropdownMenuContent>
          </DropdownMenu>) : ("")}
        
      </div>
    </div>
  )
}

export default Navbar

  
