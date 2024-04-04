import Image from "next/image";
import React from "react";
import styles from "./page.module.css";
import Navbar from "../components/Navbar";
import Button from "@/components/Buttons";
import USERimg from "@/components/USER";
import {MobileNavLoad } from "@/components/mobileNav";
import UserInfo from "@/components/UserInfo";

export default function Home() {
  return (
    <>
    <nav className={"fixed w-full bg-white shadow-lg lg:px-8 z-20"}>
      <div className={"max-w-7xl mx-auto px-4"}>
        <div className={"flex justify-between items-center h-16"}>
          <MobileNavLoad></MobileNavLoad>
          <p className={"text-gray-900 font-bold text-lg w-fit"}>DevelopME</p>
          <div className={"flex justify-center items-center gap-10 flex-row"}>
            <ul className={"hidden gap-20 lg:flex md:flex capitalize"}>
              <li>home</li>
              <li>chats</li>
              <li>about</li>
            </ul>
            <div className={"w-10 h-10 shadow shadow-slate-900 flex overflow-hidden border border-gray-400 rounded-full"}>
              <USERimg></USERimg>
              
            </div>
          </div> 
          
        </div>
      </div>
    </nav>


    </>
  );
}
