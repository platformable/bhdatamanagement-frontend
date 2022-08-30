import React from 'react';
import Layout from '../../../components/Layout';
import PageTopHeading from '../../../components/PageTopHeading'
import Link from 'next/link';
import {  useUser, withPageAuthRequired } from "@auth0/nextjs-auth0";
const CreateReport = () => {
    return (
        <Layout>
            <PageTopHeading pageTitle="Create Report" dashboardBtn={true} backBtn={true}/>
            <div className="container mx-auto">

                <div className="grid md:grid-cols-6 grid-cols-1">
            <div className="text-center mr-5 rounded bg-black p-5 text-center shadow-xl   mb-2 rounded-xl">
            <Link href="/events/reports/nysReportPage">
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
                    Download CSV<br /> FOR NYS FUNDING REPORT
                  </p>
                </div>{" "}
              </button>
            </Link>
          </div>
          </div>
          </div>
        </Layout>
    );
}

export default CreateReport;

export const getServerSideProps = withPageAuthRequired({});