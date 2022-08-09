import React from 'react'
import { useUser, getSession, withPageAuthRequired } from "@auth0/nextjs-auth0";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Header() {

  const { user, error, isLoading } = useUser();


  const userName=user && user['https://lanuevatest.herokuapp.com/name']
  const userRole=user && user['https://lanuevatest.herokuapp.com/roles']
  
  return (
     <header className="border-b bg-white">
        <div className="container mx-auto py-5  grid space-between grid-cols-2 px-5 md:px-0">
          <Link href="/dashboard"><img src="/main/Black_Health_logo.svg" alt="" width={280} height={200} className="cursor-pointer" /></Link>
          <div id="head-user" className="flex justify-end items-center">
            <div className="flex gap-x-3 ">
            <img src="/user_icon.svg" alt="" width={32} />
            <div>
            <h3 className="font-black">
              {userName}
            </h3>
            <h6 className="">  
              {userRole}
            </h6>
            </div>
            <div className="">
            <Link href="/api/auth/logout">
              <a
                className={`${styles.btnIndexPage}  btn-index-page text-black px-3 py-0 rounded flex  self-start`}
              >
                Logout
              </a>
            </Link>
            </div>
            </div>
          </div>
        </div>
      </header>
  )
}
