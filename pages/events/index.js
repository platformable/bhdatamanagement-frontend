import React from "react";
import Link from "next/link";
import Image from "next/image";
import Layout from "../../components/Layout";
import PageTopHeading from "../../components/PageTopHeading";
import {  useUser, withPageAuthRequired } from "@auth0/nextjs-auth0";


const EventsIndex = ({events}) => {
  
  return (
    <Layout>
      <PageTopHeading pageTitle={"Manage Existing Events"} dashboardBtn={true} backBtn={false} />

      <div className="container mx-auto md:px-0 px-5 my-10">
         {/* TABLE HEAD  */}
         <div className="existing-events-head-table rounded-t-lg py-3 px-1 bg-violet text-white tex">
                <p className="lg:text-lg flex items-center justify-center">Program</p>
                <p className="lg:text-lg flex items-center ">Event name</p>
                <p className="lg:text-lg flex items-center ">Event Date</p>
                <p className="lg:text-lg flex items-center justify-center text-center">Edit</p>
                <p className="lg:text-lg flex items-center justify-center text-center">Go to participant surveys</p>
                <p className="lg:text-lg flex items-center justify-center text-center">Upload event documents</p>
                <p className="lg:text-lg flex items-center justify-center text-center">Complete post-event report</p>
            </div>
          {/* TABLE HEAD END */}


        <div className="events-index-btn-container grid grid-cols-1 gap-2 bg-white p-1">
          {events && events.map((event, index) => (
            <section key={index} className={`existing-events-head-table px-1 py-3 ${index % 2 !== 0 ? "bg-light-violet" : "bg-middle-white"}`}>
              <div className="flex items-center lg:text-lg justify-center">{event.programname}</div>
              <div className="flex items-center lg:text-lg pr-2">{event.eventname}</div>
              <div className="flex items-center lg:text-lg">{event.eventdate && event.eventdate.split("T")[0]}</div>
              <Link href={`events/${event.id}/edit`}>
                <div className="cursor-pointer flex items-center justify-center">
                  <img src="/events/manage/edit.svg" alt="edit event icon"/>
                </div>
              </Link>
              
              <Link href="">
                <div className="cursor-pointer flex items-center justify-center">
                  <img src="/events/manage/participant_survey.svg" alt="go to participant surveys icon"/>
                </div>
              </Link>
              
              <Link href="">
                <div className="cursor-pointer flex items-center justify-center">
                  <img src="/events/manage/Upload_docs.svg" alt="upload event documents icon"/>
                </div>
              </Link>
              
              <Link href={`events/${event.id}/post-event-report`}>
                <div className="cursor-pointer flex items-center justify-center">
                  <img src="/events/manage/complete_report.svg" alt="complete report icon"/>
                </div>
              </Link>
              
            </section>
          ))}
        </div>   
      </div>
    </Layout>
  );
};

export default EventsIndex;

export const getServerSideProps = withPageAuthRequired({
  async getServerSideProps(ctx) {
    const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/events`)
    const events = await response.json()
    
    return { props: {events} };

  },
});
