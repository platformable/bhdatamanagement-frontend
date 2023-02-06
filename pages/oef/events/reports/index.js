import React from "react";
import Layout from "../../../../components/Layout";
import PageTopHeading from "../../../../components/PageTopHeading";
import Link from "next/link";
import { useUser, withPageAuthRequired } from "@auth0/nextjs-auth0";
const CreateReport = () => {
  return (
    <Layout showStatusHeader={true}>
      <PageTopHeading
        pageTitle="Data and reports"
        dashboardBtn={true}
        backBtn={true}
      />
      <div className="container mx-auto">
        <div>
          <section className="grid grid-rows-3 md:grid-cols-6 grid-cols-1 gap-5 mb-2 px-5 md:px-0 my-10">
            <Link href="/nys/events/reports/nysReportPage">
              <button className="bg-black text-white p-5 rounded uppercase font-bold">
                NYS CMP dataset
              </button>
            </Link>
            <Link href="/nys/events/reports/nysMonthlyReport">
              <button className="bg-black text-white p-5 rounded uppercase font-bold">
                Data and charts for monthly NYS CMP report
              </button>
            </Link> 
             <Link href="/nys/events/reports/nysParticipantSurveyReport">
              <button className="bg-black text-white p-5 rounded uppercase font-bold">
                NYS CMP Participant Survey dataset
              </button>
            </Link> 
          </section>
        </div>
      </div>
    </Layout>
  );
};

export default CreateReport;

export const getServerSideProps = withPageAuthRequired({});
