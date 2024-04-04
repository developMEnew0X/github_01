'use client'
import { useState } from "react";
import Buttons from "./Buttons";
import GoogleIcon from "./googleIcon";
import { signIn } from "next-auth/react";

export function MobileNavLoad() {
    const [navbar , setNavbar] =  useState(false);
    const [chat , setChat] =  useState(false);
return (
    <>
    <button onClick={()=> setNavbar(!navbar)} className="text-gray-500 z-10 focus:outline-none focus:text-gray-900 lg:hidden md:hidden">
          <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
    </button>
    
    <div className={navbar ? "absolute w-2/3 pr-10 translate-y-0 pt-10 -translate-x-10 border-gray-500 transition h-2/3 opacity-1" : "absolute w-2/3 pr-10 translate-y-0 pt-10 -translate-x-full border-gray-500 transition h-2/3 opacity-0"}>
      <div id={"mobileNavBarHiddenAria"} className={ "my-4 h-full md:hidden lg:hidden "}>
          <ul className={"flex items-end justify-start h-svh pr-10 pt-10 pl-10 flex-col gap-4 border border-gray-400 py-3 px-2 capitalize rounded shadow"}>
            <li className={"w-full h-10 border border-gray-400 flex items-center px-3 rounded "}><p>home</p></li>

            <li onClick={()=> setChat(!chat)} className={"w-full h-10 border border-gray-400 flex items-center px-3 rounded "}>
              <p className={" cursor-pointer"}>chats</p>
            </li>
            <div className={ chat ? " block border-gray-600 w-full h-auto pl-8 transition" : " hidden border-gray-600 w-full h-auto pl-8 transition"}>
              <ul className={ "flex opacity-1 justify-center items-center flex-col gap-2 transition "}>
                <li className={"w-full h-10 border border-gray-400 flex items-center px-3 rounded "}>gg</li>
                <li className={"w-full h-10 border border-gray-400 flex items-center px-3 rounded "}>gg</li>
                <li className={"w-full h-10 border border-gray-400 flex items-center px-3 rounded "}>gg</li>
                <li className={"w-full h-10 border border-gray-400 flex items-center px-3 rounded "}>gg</li>
                <li className={"w-full h-10 border border-gray-400 flex items-center px-3 rounded "}>gg</li>
              </ul>
            </div>
            <li className={"w-full h-10 border border-gray-400 flex items-center px-3 rounded "}><p>about</p></li>
            <li className={"w-full h-auto flex items-center px-3 "}>
              <button onClick={() => signIn('google')} className="flex items-center justify-center gap-2 bg-white dark:bg-gray-900 border border-gray-300 rounded-lg shadow-md px-6 py-2 text-sm font-medium text-gray-800 dark:text-white hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
                <GoogleIcon/>
                <span>Continue with Google</span>
              </button>
            </li>
          </ul>
          
        </div>
    </div>
    </>
    )
}