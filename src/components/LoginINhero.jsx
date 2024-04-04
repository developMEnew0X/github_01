'use client'

import { useSession } from "next-auth/react";
import GoogleLogin from "./GoogleLogin";

export default function LoginINhero() {
    const { status } = useSession();
    return (
        <>
        {status !== "authenticated" ? (
            <>
                <div className={"mt-24 w-full h-full"}>
                    <GoogleLogin></GoogleLogin>
                </div>
            </>
        ):(<></>)}
        </>
    )
  }
  

  