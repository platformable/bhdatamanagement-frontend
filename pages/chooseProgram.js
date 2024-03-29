import React, { useState, useEffect } from "react";
import Link from "next/link";
import Head from "next/head";
import { useUser, getSession, withPageAuthRequired } from "@auth0/nextjs-auth0";
import styles from "../styles/Home.module.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Dropbox } from "dropbox";
import { useRouter } from "next/router";

import { useSelector, useDispatch } from 'react-redux'
import { updateProgramName } from '../slices/programsSlice'

import Layout from "../components/Layout";
import Router from "next/router";
import Loader from "../components/Loader";

export default function ChooseProgram({user}) {
  //const { user, error, isLoading } = useUser();
  const [loading, setLoading] = useState(true);

// console.log("user choose program:",user)
  const dispatch=useDispatch()

  const loggedUserRole = 
    user && user["https://lanuevatest.herokuapp.com/roles"];
  const loggedUserStatus =
    user && user["https://lanuevatest.herokuapp.com/activestatus"];
  const userId = user?.sub;
  const router = useRouter();

  const userName = user && user["https://lanuevatest.herokuapp.com/name"];
  const userAccessiblePrograms=user && user['https://lanuevatest.herokuapp.com/useraccessibleprograms']

 
useEffect(()=>{
  if (loggedUserRole==='Supervisor'){
    router.push('/supervisorDashboard')
  }
},[loggedUserRole])



  return (
    <>
      <ToastContainer autoClose={60000} />
      

      <Layout showStatusHeader={true}>
        <main className="h-screen">
          <section id="dashboard-client-list">
            <div className="container mx-auto py-5">
              <section className="py-5">
                <h1 className="font-black  md:px-0 px-5">Hello {userName}</h1>
              </section>

              <h1 className="font-black  md:px-0 px-5">
              What program are you working on today?
              </h1>

              <div className="grid md:grid-cols-6 grid-cols-1 mb-2 my-10">
                {loggedUserRole === 'Program Worker' && userAccessiblePrograms?.includes('NYS CMP') || loggedUserRole==='Data Team'?
                <div className="text-center mr-5 rounded bg-black px-5 py-10 text-center shadow-xl mb-2 rounded-xl grid justify-center content-center">
                <Link
                 href={'/nys'}
                >
                  <div className="">
                    <button id="myBtn" className="flex items-center"
                    onClick={()=> dispatch(updateProgramName({programName:'NYS_CMP'}))}
                    >
                      <p className=" font-bold text-white uppercase">
                        NYS 
                      </p>
                    </button>
                  </div>
                </Link>
              </div>
            : null
            }

          {loggedUserRole === 'Program Worker' && userAccessiblePrograms?.includes('OEF') || loggedUserRole==='Data Team'?
                <div className="text-center mr-5 rounded bg-black p-5 text-center shadow-xl mb-2 rounded-xl grid justify-center content-center">
                <Link
                  href={'/oef'}
                >
                  <div className="">
                    <button id="myBtn" className="flex items-center"
                    onClick={()=> dispatch(updateProgramName({programName:'NYS_CMP'}))}
                    >
                      <p className=" font-bold text-white uppercase">
                        OEF
                      </p>
                    </button>
                  </div>
                </Link>
              </div>
            : null
            }

{loggedUserRole === 'Data Team'?
                <div className="text-center mr-5 rounded bg-black p-5 text-center shadow-xl mb-2 rounded-xl grid justify-center content-center">
                <Link
                  href={'/historicalData'}
                >
                  <div className="">
                    <button id="myBtn" className="flex items-center"
                    onClick={()=> router.push("/historicalData")}>
                      <p className=" font-bold text-white uppercase">
                        Historical Data
                      </p>
                    </button>
                  </div>
                </Link>
              </div>
            : null
            }
              </div>
            </div>
          </section>
        </main>
      </Layout>
    </>
  );
}

/* export const getServerSideProps = withPageAuthRequired(); */

export const getServerSideProps = withPageAuthRequired({});
