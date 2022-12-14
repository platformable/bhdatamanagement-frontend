import React from "react";
import { useUser, getSession, withPageAuthRequired } from "@auth0/nextjs-auth0";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Header({showStatus}) {
  const { user, error, isLoading } = useUser();


  const userName = user && user["https://lanuevatest.herokuapp.com/name"];
  const userRole = user && user["https://lanuevatest.herokuapp.com/roles"];

  return (
    <header className="border-b bg-white">
      <div className="container mx-auto py-5  grid space-between grid-cols-2 px-5 md:px-0">
        <Link href="/dashboard">
          <img
            src="/main/Black_Health_logo.svg"
            alt=""
            width={280}
            height={200}
            className="cursor-pointer"
          />
        </Link>
        <div id="head-user" className="flex justify-end items-center">
          <div className="grid md:flex gap-x-5">
            {/* <img src="/user_icon.svg" alt="" width={32} /> */}
            <div>
              {showStatus ? (
                <>
                  <h3 className="font-black">{userName}</h3>
                  <h4 className="text-right md:text-left">{userRole}</h4>
                </>
              ) : null}
            </div>
            <div className="">
              {showStatus ? <>
              <Link href="/api/auth/logout">
                <a
                  className={`${styles.btnIndexPage}  btn-index-page text-white p-4 rounded flex justify-center text-lg mt-1 `}
                >
                  Logout
                </a>
              </Link>
              </>:null}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
