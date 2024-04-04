'use client';

import React from 'react'
import GoogleIcon from '../../components/googleIcon'
import { signIn, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

function page() {
  const { status } = useSession();
  const routerX = useRouter();
  if(status === "authenticated"){
    // routerX.replace("/");
  }
  return (
    <>
    <div className="flex items-center justify-center max-h-lvh bg-gray-100">
        <div className="relative flex flex-col m-6 space-y-8 bg-white shadow-2xl rounded-2xl md:flex-row md:space-y-0">
            <div className="flex flex-col justify-center p-8 md:p14">
                <span className="mb-3 text-4xl font-bold">Welcome back</span>
                <span className="font-light text-gray-400 mb-8 ">Welcome back! plz enter your details</span>
                {status !== "authenticated" ? (
                  <button onClick={() => signIn('google')} className="flex items-center justify-center gap-2 bg-white dark:bg-gray-900 border border-gray-300 rounded-lg shadow-md px-6 py-2 text-sm font-medium text-gray-800 dark:text-white hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
                      <GoogleIcon/>
                      <span>Continue with Google</span>
                  </button>
                ):(
                  <Link href={"/"} className="flex items-center justify-center gap-2 bg-green-400 dark:bg-gray-900 border border-gray-300 rounded-lg shadow-md px-6 py-2 text-sm font-medium text-gray-800 dark:text-white hover:bg-green-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
                    <span>Continue</span>
                  </Link>
            )}
            </div>
            <div className="relative">

            </div>
        </div>
    </div>
    </>
  )
}

export default page