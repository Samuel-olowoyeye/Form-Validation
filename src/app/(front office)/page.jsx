"use client"
import React,{ useState } from 'react'
import Navbar from '@/components/frontOffice/Navbar'
import Hero from "@/components/frontOffice/Hero"

export default function page() {
  const [loggedIn, setLoggedIn ] = useState(false)
  
  return (
    <div>
      {/* navbar  */}
      <Navbar loggedIn={loggedIn} setLoggedIn={setLoggedIn}   />


      {/* hero section   */}
      <Hero setLoggedIn={setLoggedIn}/> 

    </div>
  )
}
