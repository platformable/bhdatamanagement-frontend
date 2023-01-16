import React, { useState, useEffect } from "react";
import Link from "next/link";
import Head from "next/head";
import { withPageAuthRequired } from "@auth0/nextjs-auth0";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


import { useSelector, useDispatch } from "react-redux";
import Layout from "../../../components/Layout";
import PageTopHeading from "../../../components/PageTopHeading";


export default function SupervisorDashboard({ }) {

  const programFromLocalStorage = () => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("program");
      const localStorageProgram = saved !== null ? JSON.parse(saved) : "";
      return localStorageProgram.programName;
    }
  };

  const program =
    useSelector((state) => state.programs.value.programName) ||
    programFromLocalStorage();

  // user && user["https://lanuevatest.herokuapp.com/roles"];
const buttons = [
    {label: 'Capacity building training (CBT)', link: '/oef/cbt/register'},
    {label: 'Youth initiative Program (YIP) workshop ', link: ''},
    {label: 'Site visit', link: ''},
    {label: 'HIV outreach event', link: '/oef/register'},
    {label: 'Community advisory board (CAB) meeting', link: ''},
    {label: 'Capacity building training (CBT) makeup', link: ''},
]
  return (
    <>
      <ToastContainer autoClose={60000} />
      <Head>
        <title>Events`s Dashboard</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout showStatusHeader={true}>
        <PageTopHeading pageTitle={'What type of event are you registering?'} dashboardBtn={true} backBtn={true}/>
        <main className="">
          <section id="dashboard-client-list">
            <div className="container mx-auto">

              <div className="grid md:grid-cols-6 gap-5 px-5 md:px-0 grid-cols-1 mb-2 my-10">
                {buttons.slice(0,3).map(button => (
                     <Link href={button.link}>
                     <div className="text-center rounded bg-black text-white p-5 text-center shadow-xl   mb-2 rounded-xl grid justify-center content-center">
                       <div className="">
                         <button id="myBtn">
                           <div className="flex justify-center">
                           </div>
                           <p className="font-bold uppercase">
                           {button.label}
                           </p>
                         </button>
                       </div>{" "}
                     </div>
                   </Link>
                ))}
              </div>
              <div className="grid md:grid-cols-6 gap-5 px-5 md:px-0 grid-cols-1 mb-2 my-10">
                {buttons.slice(3).map(button => (
                     <Link href={button.link}>
                     <div className="text-center rounded bg-black text-white p-5 text-center shadow-xl   mb-2 rounded-xl grid justify-center content-center">
                       <div className="">
                         <button id="myBtn">
                           <div className="flex justify-center">
                           </div>
                           <p className="font-bold uppercase">
                           {button.label}
                           </p>
                         </button>
                       </div>{" "}
                     </div>
                   </Link>
                ))}
              </div>
             

            </div>
          </section>
          {/*  <ReportProblem /> */}
        </main>
      </Layout>
    </>
  );
}

export const getServerSideProps = withPageAuthRequired();
