'use client';

import React from 'react'
import Navbar from '@/components/Navbar';
import GoogleLogin from '@/components/GoogleLogin';


function page() {
  return (
    <>
    <div className="flex items-center justify-center max-h-svh h-svh bg-gray-100">
        <GoogleLogin></GoogleLogin>
    </div>
    <Navbar></Navbar>
    </>
  )
}

export default page