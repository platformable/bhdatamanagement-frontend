import React, { useState, useEffect } from "react";
import Link from "next/link";
import Head from "next/head";
import { useUser, getSession, withPageAuthRequired } from "@auth0/nextjs-auth0";
import styles from "../styles/Home.module.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Dropbox } from "dropbox";
import { useRouter } from "next/router";
import ReportProblem from "../components/ReportProblem"

import { useSelector, useDispatch } from 'react-redux'

import Layout from "../components/Layout";
import Loader from "../components/Loader";

export default function Dashboard({selectedProgram}) {
  const { user, error, isLoading } = useUser();
  const [loading, setLoading] = useState(true);

  const programFromLocalStorage = () => { 
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem('program');
      const initial = saved !== null ? JSON.parse(saved) : "";
      return initial.programName;
    }
   }

  const program = useSelector((state)=>state.programs.value.programName) || programFromLocalStorage()
 



  const loggedUserRole =
    user && user["https://lanuevatest.herokuapp.com/roles"];
  const loggedUserStatus =
    user && user["https://lanuevatest.herokuapp.com/activestatus"];
  const userId = user?.sub;
  const router = useRouter();
  console.log(router)

  const userName = user && user["https://lanuevatest.herokuapp.com/name"];


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

      <Layout showStatusHeader={true}>
        <main className="">
          <section id="dashboard-client-list">
            <div className="container mx-auto py-5">
              <section className="py-5">
                <h1 className="font-black  md:px-0 px-5">
                  Hello {userName}
                </h1>
              </section>

              <h1 className="font-black  md:px-0 px-5">
                What do you want <span className="">to do</span> today {program && `in ${program.split("_").join(" ")}`}? 
              </h1>

              <div className="grid md:grid-cols-6 grid-cols-1 gap-5 mb-2 px-5 md:px-0 my-10">
              <div className="text-center rounded bg-black p-5 text-center shadow-xl rounded-xl grid justify-center content-center">
            <Link href={`/events/${program?.toLowerCase()}/register`}>

            <div className=" ">
              <button id="myBtn" className="flex items-center">
                
                 {/*  <img
                    src="/events/register_an_event_icon.svg"
                    alt=""
                    width={85}
                  /> */}
               
                <p className=" font-bold text-white uppercase">
                  Register <br /> an Event
                </p>
              </button>
              </div>
            </Link>
          </div>
          <div className="text-center rounded gap-5 bg-black px-5 md:px-0 p-5 text-center shadow-xl rounded-xl grid justify-center content-center">
            <Link href="/events">
              <button id="myBtn">
                <div className="">
                  <div className="flex items-center">
                    {/* <img
                      src="/events/register_an_event_icon.svg"
                      alt=""
                      width={85}
                    /> */}
                  </div>
                  <p className="font-bold text-white uppercase">
                    Manage<br />existing  Events
                  </p>
                </div>{" "}
              </button>
            </Link>
          </div>
          <div className="text-center rounded gap-5 bg-black px-5 md:px-0 p-5 text-center shadow-xl   rounded-xl grid justify-center content-center">
            <Link href="/events/reports/">
              <button id="myBtn">
                <div className="">
                  <div className="flex justify-center ">
                    {/* <img
                      src="/events/register_an_event_icon.svg"
                      alt=""
                      width={85}
                    /> */}
                  </div>
                  <p className=" font-bold text-white uppercase">
                    DATA AND<br />REPORTS
                  </p>
                </div>{" "}
              </button>
            </Link>
          </div>

            <div></div>
            <div></div>
                <Link href="/historicalData">
                  <button id="myBtn">
                    <div className="text-center rounded gap-5 bg-black px-5 md:px-0 p-5 text-center shadow-xl   rounded-xl grid justify-center content-center">
                      <div className="">
                        <div className="flex justify-center">
                          {/* <img
                            src="/download_historical_data_icon.svg"
                            alt=""
                            width={85}
                          /> */}
                        </div>
                        <p className="font-bold text-white uppercase">
                          Download <br /> Historical Data
                        </p>
                      </div>{" "}
                    </div>
                  </button>
                </Link>
              </div>
            </div>
          </section>
     {/*    <ReportProblem /> */}

        </main>

      </Layout>

    </>
  );
}




export const getServerSideProps = withPageAuthRequired();

