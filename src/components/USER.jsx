'use client'

import React from 'react'
import Image from 'next/image';
import { useSession } from "next-auth/react";


export default function USERimg() {
    const {data : session} = useSession();

    return (
      <Image src={session?.user?.image} width={50} height={50} className="flex bg-cover"/>
    )
}
