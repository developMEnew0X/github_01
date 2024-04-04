'use client'

import React, { useState } from 'react'
import Image from 'next/image';
import { signOut, useSession } from "next-auth/react";



export default function USERimg() {
    const {status ,data : session} = useSession();
    const [userInfo , setUserInfo] = useState();
    return (
      <>
      <Image 
        src={session?.user?.image} 
        width={50} 
        height={50} 
        className="flex bg-cover"
        onClick={()=> setUserInfo(!userInfo)}
      />

      {status === "authenticated" & userInfo ? (
        <div onClick={()=> setUserInfo(!userInfo)} className={"bg-transparent p-8 flex justify-center absolute w-svw h-svh top-0 left-0 border z-30 border-gray-500 bg-white"}>
          <div className={"bg-white border border-gray-800 w-80 h-full flex items-center flex-col pt-8"}>
            <div className={"border border-gray-500 rounded-full w-28 h-28 overflow-hidden shadow-lg"}>
              <Image src={session?.user?.image} width={112} height={112} className="flex bg-cover"/>
            </div>
            <p>authenticated</p><br />
            <p>NAME : <input type={"text"} disabled value={session?.user?.name}/></p><br/>
            <p>Email : <input type={"text"} disabled value={session?.user?.email}/></p><br/>
            <p>authenticated</p>
            <button className={ " mt-5 bg-red-600 border border-spacing-6 border-gray-500 rounded-lg px-4 py-1"}><p onClick={()=>signOut()}>SIGN OUT</p></button>
            
          </div>
        </div>
      ) : (
        
      <></>      
      )}
      
      </>
    
    )
}
