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

      <div className="container mx-auto md:px-0 px-5 my-10 rounded-lg border">
         {/* TABLE HEAD  */}
         <div className="existing-events-head-table rounded-t-lg py-3 px-1 bg-black text-white">
                <p className="lg:text-lg flex items-center justify-center">Program</p>
                <p className="lg:text-lg flex items-center ">Event name</p>
                <p className="lg:text-lg flex items-center ">Event Date</p>
                <p className="lg:text-lg flex items-center justify-center text-center">Edit</p>
                <p className="lg:text-lg flex items-center justify-center text-center">Go to participant surveys</p>
                <p className="lg:text-lg flex items-center justify-center text-center">Upload event documents</p>
                <p className="lg:text-lg flex items-center justify-center text-center">Complete post-event survey</p>
            </div>
          {/* TABLE HEAD END */}


        <div className="events-index-btn-container grid grid-cols-1 gap-2  p-0">
          {events && events.map((event, index) => (
            <section key={index} className={`existing-events-head-table px-1 py-3 ${index % 2 !== 0 ? "bg-white" : "border-b border-t"}`}>
              <div className="flex items-center lg:text-lg justify-center">{event.programname}</div>
              <div className="flex items-center lg:text-lg pr-2">{event.eventname}</div>
              <div className="flex items-center lg:text-lg">{event.eventdate && new Date(event?.eventdate).toLocaleDateString('en-US',{year:'numeric',month:'numeric',day:'numeric'})}</div>
              <div className="cursor-pointer flex items-center justify-center">
              <Link href={`events/${event.id}/edit`}>
                
                  <img src="/events/manage/edit.svg" alt="edit event icon"/>
               
              </Link>
              </div>
              <Link href={`/events/${event.id}/participant-survey`}>
                <div className="cursor-pointer flex items-center justify-center">
                  <img src="/events/manage/participant_survey.svg" alt="go to participant surveys icon"/>
                </div>
              </Link>
              
              <Link href={`events/${event.id}/upload-event`}>
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
