"use client"
import React,{ useState } from 'react'
import Navbar from '@/components/frontOffice/Navbar'
import Hero from "@/components/frontOffice/Hero"

export default function page() {
  const [loggedIn, setLoggedIn ] = useState(false)
  
  return (
    <div>

      {/* navbar  */}
      {/* logo , toggle dark/light mode, login icon */}
      <Navbar loggedIn={loggedIn} setLoggedIn={setLoggedIn}   />


      {/* hero section   */}
      <Hero setLoggedIn={setLoggedIn}/> 



      {/* footer section  */}


    </div>
  )
}
