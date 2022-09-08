import React from "react";
import Link from "next/link";
import Image from "next/image";
import Layout from "../../components/Layout";
import PageTopHeading from "../../components/PageTopHeading";
import {  useUser, withPageAuthRequired } from "@auth0/nextjs-auth0";


const EventsIndex = ({events}) => {
  const sortedEventsByDate  = events.sort((a, b) => new Date(b.eventdate) - new Date(a.eventdate))
  return (
    <Layout showStatusHeader={true}>
      <PageTopHeading pageTitle={"Manage existing events"} dashboardBtn={true} backBtn={true} />

      <div className="container mx-auto md:px-0 px-7 mb-10 pb-10 rounded-lg ">
         {/* TABLE HEAD  */}
         <div className="existing-events-head-table rounded-t-lg py-3 px-7 bg-black text-white">
                <p className="lg:text-xl font-bold flex items-center ">Program</p>
                <p className="lg:text-xl font-bold flex items-center ">Event name</p>
                <p className="lg:text-xl font-bold flex items-center ">Event Date</p>
                {/* <p className="lg:text-xl font-bold flex items-center justify-center text-center">Edit</p>
                <p className="lg:text-xl font-bold flex items-center justify-center text-center">Go to participant surveys</p>
                <p className="lg:text-xl font-bold flex items-center justify-center text-center">Upload event documents</p>
                <p className="lg:text-xl font-bold flex items-center justify-center text-center">Complete post-event survey</p> */}
            </div>
          {/* TABLE HEAD END */}


        <div className="events-index-btn-container grid grid-cols-1 gap-3 p-0 ">
          {sortedEventsByDate && sortedEventsByDate.map((event, index) => (
            <section key={index} className={`existing-events-head-table px-7 py-7 rounded shadow`}>
              <div className="flex items-center lg:text-xl font-bold ">{event.programname}</div>
              <div className="flex items-center lg:text-xl font-bold ">{event.eventname}</div>
              <div className="flex items-center lg:text-xl font-bold mr-2">{event.eventdate && new Date(event?.eventdate).toLocaleDateString('en-US',{year:'numeric',month:'numeric',day:'numeric'})}</div>
              <Link href={`events/${event.id}/edit`}>
              <div className="cursor-pointer flex items-center border shadow rounded text-center lg:text-xl p-4 font-bold justify-center">

                  Edit event
                  {/* <img src="/events/manage/edit.svg" alt="edit event icon"/> */}
              </div>

              </Link>
              <Link href={`/events/${event.id}/participant-survey`}>
                <div className="cursor-pointer flex items-center border shadow rounded text-center lg:text-xl p-4 font-bold justify-center">
                  Participant<br/>survey
                  {/* <img src="/events/manage/participant_survey.svg" alt="go to participant surveys icon"/> */}
                </div>
              </Link>
              
              <Link href={`events/${event.id}/upload-event`}>
                <div className="cursor-pointer flex items-center border shadow rounded text-center lg:text-xl p-4 font-bold justify-center">
                Upload docs,<br/>photos, etc
                  {/* <img src="/events/manage/Upload_docs.svg" alt="upload event documents icon"/> */}
                </div>
              </Link>
              
              <Link href={`events/${event.id}/post-event-survey`}>
                <div className="cursor-pointer flex items-center border shadow rounded text-center lg:text-xl p-4 font-bold justify-center">
                Complete<br/> post-event survey
                  {/* <img src="/events/manage/complete_report.svg" alt="complete report icon"/> */}
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
