import React, { useState, useEffect } from "react";
import Link from "next/link";
import Head from "next/head";
import { useUser, getSession, withPageAuthRequired } from "@auth0/nextjs-auth0";
import styles from "../styles/Home.module.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Dropbox } from "dropbox";
import { useRouter } from "next/router";

import Layout from "../components/Layout";
import Router from "next/router";
import Loader from "../components/Loader";

export default function Dashboard() {
  const { user, error, isLoading } = useUser();
  const [loading, setLoading] = useState(true);

  const loggedUserRole =
    user && user["https://lanuevatest.herokuapp.com/roles"];
  const loggedUserStatus =
    user && user["https://lanuevatest.herokuapp.com/activestatus"];
  const userId = user?.sub;
  const router = useRouter();

  const userName = user && user["https://lanuevatest.herokuapp.com/name"];

  console.log("user", user);
  const notifyMessage = () => {
    toast.success("A new client is being created!", {
      position: toast.POSITION.TOP_CENTER,
    });
  };

  useEffect(() => {
    loggedUserRole === "Supervisor"
      ? router.push("/supervisorDashboard")
      : setLoading(false);
    loggedUserStatus === "No Active"
      ? router.push("/api/auth/logout")
      : setLoading(false);
  }, [loggedUserRole, loggedUserStatus]);

  return (
    <>
      <ToastContainer autoClose={60000} />
      <Head>
        <title>Black Health</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <main className="h-screen">
          <section id="dashboard-client-list">
            <div className="container mx-auto py-5">
              <section className=" py-5">
                <h1 className="font-black py-5 md:px-0 px-5">
                  Hello {userName},
                </h1>
              </section>

              <h1 className="font-black my-2 md:px-0 px-5">
                What do you want <span className="">to do</span> today?
              </h1>

              <div className="grid md:grid-cols-6 grid-cols-1 mb-2">
              <div className="text-center mr-5 rounded bg-black p-5 text-center shadow-xl   mb-2 rounded-xl">
            <Link href="/events/register">
              <button id="myBtn">
                <div className="flex justify-center">
                  {/* <img
                    src="/events/register_an_event_icon.svg"
                    alt=""
                    width={85}
                  /> */}
                </div>
                <p className="my-5 font-bold text-white uppercase">
                  Register <br /> an Event
                </p>
              </button>
            </Link>
          </div>
          <div className="text-center mr-5 rounded bg-black p-5 text-center shadow-xl   mb-2 rounded-xl">
            <Link href="/events">
              <button id="myBtn">
                <div className="">
                  <div className="flex justify-center ">
                    {/* <img
                      src="/events/register_an_event_icon.svg"
                      alt=""
                      width={85}
                    /> */}
                  </div>
                  <p className="my-5 font-bold text-white uppercase">
                    Manage an<br />existing  Event
                  </p>
                </div>{" "}
              </button>
            </Link>
          </div>
          <div></div>
            <div></div>
            <div></div>
                <Link href="/historicalData">
                  <button id="myBtn">
                    <div className="text-center mr-5 rounded bg-black p-5 text-center shadow-xl   mb-2 rounded-xl">
                      <div className="">
                        <div className="flex justify-center">
                          {/* <img
                            src="/download_historical_data_icon.svg"
                            alt=""
                            width={85}
                          /> */}
                        </div>
                        <p className="my-5 font-bold text-white uppercase">
                          Download <br /> Historical Data
                        </p>
                      </div>{" "}
                    </div>
                  </button>
                </Link>
              </div>
            </div>
          </section>
        </main>
      </Layout>
    </>
  );
}

/* export const getServerSideProps = withPageAuthRequired(); */

export const getServerSideProps = withPageAuthRequired();
