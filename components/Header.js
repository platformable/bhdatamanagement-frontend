import React from "react";
import { useUser, getSession, withPageAuthRequired } from "@auth0/nextjs-auth0";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Header({ showStatus }) {
  const { user, error, isLoading } = useUser();
  console.log("header", user);

  const userName = user && user["https://lanuevatest.herokuapp.com/name"];
  const userRole = user && user["https://lanuevatest.herokuapp.com/roles"];

  return (
    <header className="border-b bg-white">
      <div className="container mx-auto py-5  grid space-between grid-cols-2 px-5 md:px-0">
      <Link href="/dashboard">
            <img
              src="/main/BH_logo.svg"
              alt=""
              width={280}
              height={200}
              className="hidden md:block cursor-pointer"
            />
          </Link>
        <div className="md:hidden flex flex-col gap-3">
          <Link href="/dashboard">
            <img
              src="/main/BH_logo.svg"
              alt=""
              width={280}
              height={200}
              className="cursor-pointer"
            />
          </Link>
          <div className="flex flex-col lg:flex-row gap-2">
            <a
              href="https://airtable.com/shr8tmgc0QnAvziz5"
              className={`bg-black  px-10 py-1 rounded text-white inline-block text-center`}
              target="_blank"
              rel="noreferrer"
            >
              Support
            </a>
            <a
              href="https://www.dropbox.com/scl/fo/qres5gmvvlgkit9io0qd8/h?dl=0&rlkey=sadaup1bpllmkcdcgyjrdiaym"
              className={` bg-black  px-10 py-1 rounded text-white inline-block text-center`}
              target="_blank"
              rel="noreferrer"
            >
              Guide
            </a>
          </div>
        </div>

        <div id="head-user" className="flex justify-end items-center gap-x-5">
          <div className="hidden md:flex flex-col gap-y-2 lg:flex-row gap-x-2">
            <a
              href="https://airtable.com/shr8tmgc0QnAvziz5"
              className={`bg-black  px-10 py-2 rounded text-white inline-block  flex items-center`}
              target="_blank"
              rel="noreferrer"
            >
              Support
            </a>
            <a
              href="https://www.dropbox.com/scl/fo/qres5gmvvlgkit9io0qd8/h?dl=0&rlkey=sadaup1bpllmkcdcgyjrdiaym"
              className={`${styles.btnIndexPage} bg-black  px-10 py-2 rounded text-white inline-block  flex items-center`}
              target="_blank"
              rel="noreferrer"
            >
              Guide
            </a>
          </div>
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
              {showStatus ? (
                <>
                  <Link href="/api/auth/logout">
                    <a
                      className={`${styles.btnIndexPage}  btn-index-page text-white p-4 rounded flex justify-center text-lg mt-1 `}
                    >
                      Logout
                    </a>
                  </Link>
                </>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
