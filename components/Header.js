import React from "react";
import { useUser, getSession, withPageAuthRequired } from "@auth0/nextjs-auth0";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Header({showStatus}) {
  const { user, error, isLoading } = useUser();
  console.log("show Status", showStatus)

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
          <div className="flex gap-x-3 ">
            {/* <img src="/user_icon.svg" alt="" width={32} /> */}
            <div>
              {showStatus ? (
                <>
                  <h3 className="font-black">{userName}</h3>
                  <h6 className="">{userRole}</h6>
                </>
              ) : null}
            </div>
            <div className="">
              {showStatus ? <>
              <Link href="/api/auth/logout">
                <a
                  className={`${styles.btnIndexPage}  btn-index-page text-white px-3 py-0 rounded flex  mt-1 self-start`}
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
