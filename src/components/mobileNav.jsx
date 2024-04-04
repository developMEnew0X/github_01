'use client'
import { useState } from "react";

export function MobileNavLoad() {
    const [navbar , setNavbar] =  useState(false);
return (
    <>
    <button onClick={()=> setNavbar(!navbar)} className="text-gray-500 focus:outline-none focus:text-gray-900 lg:hidden">
          <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
    </button>
    {navbar ? (
    <div id={"mobileNavBarHiddenAria"} className={"absolute translate-y-32 w-1/2 my-4 h-auto md:hidden lg:hidden "}>
        <ul className={"flex items-center justify-center flex-col gap-4 border border-gray-400 py-3 px-2 capitalize rounded shadow"}>
          <li className={"w-full h-10 border border-gray-400 flex items-center px-3 rounded "}><p>home</p></li>
          <li className={"w-full h-10 border border-gray-400 flex items-center px-3 rounded "}><p>chats</p></li>
          <li className={"w-full h-10 border border-gray-400 flex items-center px-3 rounded "}><p>about</p></li>
        </ul>
      </div>): <></>}
    </>
    )
}