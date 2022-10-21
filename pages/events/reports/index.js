import React from 'react';
import Layout from '../../../components/Layout';
import PageTopHeading from '../../../components/PageTopHeading'
import Link from 'next/link';
import {  useUser, withPageAuthRequired } from "@auth0/nextjs-auth0";
const CreateReport = () => {
    return (
        <Layout showStatusHeader={true}>
            <PageTopHeading pageTitle="Data and reports" dashboardBtn={true} backBtn={true}/>
            <div className="container mx-auto">

     <div>
     

     <Link href="/events/reports/nysReportPage">
      <button className="bg-black text-white p-5 rounded mb-5">NYS CMP dataset</button>
      </Link> <br />
      {/* <Link href="/events/reports/nysMonthlyReport">
      <button className="bg-black text-white p-5 rounded mb-5">NYS monthly draft report</button>
      </Link> <br /> */}

  {/*    <Link href="/events/reports/nysReportPage">
      <button className="bg-black text-white p-5 rounded">Draft NYS CMP Monthly Report</button>
      </Link> */}
     </div>
          

          </div>
        </Layout>
    );
}

export default CreateReport;

export const getServerSideProps = withPageAuthRequired({});