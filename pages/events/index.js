import React, { useState,useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import Layout from "../../components/Layout";
import PageTopHeading from "../../components/PageTopHeading";
import { useUser, withPageAuthRequired } from "@auth0/nextjs-auth0";
import EventsCardItems from "../../components/events/EventsCardItems";
import Search from "../../components/SearchEvents";

const EventsIndex = ({ events }) => {
  const [searchWord, setSearchWord] = useState("");

  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const [dateFilter, setDateFilter] = useState({
    startDate: null,
    endDate: null
  })

  const searchFunction = (word) => {
    setSearchWord(word);
  };
  const ref = useRef();



  const sortedEventsByDate = events.sort(
    (a, b) => new Date(b.eventdate) - new Date(a.eventdate)
  );

  console.log(dateFilter)
  return (
    <Layout showStatusHeader={true}>
      <PageTopHeading
        pageTitle={"Manage existing events"}
        dashboardBtn={true}
        backBtn={true}
      />

      <div className="container mx-auto grid md:grid-cols-3 grid-cols-1 container mx-auto md:px-0 px-5 mb-5 gap-5">
        
        <Search searchFunction={searchFunction} />

        <div className="flex items-center md:justify-end md:px-0 px-5 py-5 md:py-0 md:mr-10 mr-0">
          {" "}
          <h3 className="flex">Filter by date</h3>
        </div>

        <div className="grid items-center md:my-0 " style={{gridTemplateColumns:'2fr 1fr 2fr'}}>
          <div className="">
         
            <input type="date"
            ref={ref}
            id="start" 
            placeholder="start date"
            onChange={(e)=>setDateFilter({...dateFilter,startDate:e.target.value})}
           /*  onFocus={(e) => (e.target.type = "date")}
            onBlur={(e) => (e.target.type = "text")} */
            className="border-black rounded-md p-3  text-sm"
            />
          </div>
          <h3 className="text-center">and</h3>
          <div className="flex justify-end">
            <input type="date" 
            placeholder="end date"
            onChange={(e)=>setDateFilter({...dateFilter,endDate:e.target.value})}
           /*  onFocus={(e) => (e.target.type = "date")}
            onBlur={(e) => (e.target.type = "text")} */
            className="border-black rounded-md p-3  text-sm"
            />
          </div>
        </div>
      </div>

      <div className="events-cards-container grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 container mx-auto md:px-0 px-5 mb-5 gap-5">
        {sortedEventsByDate &&
          sortedEventsByDate
            ?.filter((event, index) => {
            
              var startDate = new Date(dateFilter.startDate);
              var endDate = new Date(dateFilter.endDate);

              if (searchWord === "" && startDate===null && endDate===null) {
                return event;
              } 
              if (event.programname.toLowerCase().includes(searchWord.toLowerCase()) ||
                event.eventname.toLowerCase().includes(searchWord.toLowerCase())
              ) {
                return event;
              } 
            })
            .filter((event,index)=>{
              if (startDate !==null && endDate !==null){
                let filterPass = true
                const date = new Date(event.eventdate)
                if (dateFilter.startDate) {
                  filterPass = filterPass && (new Date(dateFilter.startDate) <= date)
                }
                if (dateFilter.endDate) {
                  filterPass = filterPass && (new Date(dateFilter.endDate) >= date)
                }
                //if filterPass comes back `false` the row is filtered out
                return filterPass
              }
            })
            .map((event, index) => {
              return (
                <EventsCardItems
                key={index}
                  programName={event.programname}
                  eventdate={event.eventdate}
                  eventName={event.eventname}
                  urlEdit={`events/${event.id}/edit`}
                  urlParticipantSurvey={`/events/${event.id}/participant-survey`}
                  urlUpload={`events/${event.id}/upload-event`}
                  urlPostEventSurvey={`events/${event.id}/post-event-survey`}
                />
              );
            })}

        {/*  <div className="events-card-item shadow-lg rounded-lg border p-5">
        <div className="event-card-item-top flex justify-between my-2">
          <div>
            <h3 className="font-black pl-2">Program</h3>
          </div>
          <div>
            <h3 className="font-black pr-2">Event date</h3>
          </div>
        </div>
        <div className="event-card-item-program-date flex justify-between border rounded-lg py-1">
          <div>
            <h3 className="font-black pl-2">T2</h3>
          </div>
          <div>
            <h3 className="font-black pr-2">08/08/2022</h3>
          </div>
        </div>
        <h3 className="my-2 px-2 font-black">Event name</h3>
        <p className="border rounded-lg py-1 px-2">Event de la virgen maria</p>
        <div className="events-card-item-btn-container grid md:grid-cols-2 grid-cols-2 gap-5 my-3">
        <div className="events-card-item-btn bg-black text-white p-5 flex justify-center items-center rounded-lg">
              <p className="text-center">Edit</p>
          </div>
          <div className="events-card-item-btn bg-black text-white p-5 flex justify-center items-center rounded-lg">
              <p className="text-center"> Participant survey</p>
          </div>

          <div className="events-card-item-btn bg-black text-white p-5 flex justify-center items-center rounded-lg">
              <p className="text-center">Upload docs, photos, etc</p>
          </div>
          <div className="events-card-item-btn bg-black text-white p-5 flex justify-center items-center rounded-lg">
              <p className="text-center">Complete post event survey</p>
          </div>
        </div>
      </div> */}
      </div>

      <div className="container mx-auto md:px-0 px-7 mb-10 pb-10 rounded-lg ">
        {/*   <div className="existing-events-head-table rounded-t-lg py-3 px-7 bg-black text-white">
                <p className="lg:text-xl font-bold flex items-center ">Program</p>
                <p className="lg:text-xl font-bold flex items-center ">Event name</p>
                <p className="lg:text-xl font-bold flex items-center ">Event date</p>
              
            </div>
  */}

        {/*  <div className="events-index-btn-container grid grid-cols-1 gap-3 p-0">
          {sortedEventsByDate && sortedEventsByDate.map((event, index) => (
            <section key={index} className={`existing-events-head-table px-7 py-7 rounded shadow-md`}>
              <div className="flex items-center lg:text-xl font-bold ">{event.programname}</div>
              <div className="flex items-center lg:text-xl font-bold ">{event.eventname}</div>
              <div className="flex items-center lg:text-xl font-bold mr-2">{event.eventdate && new Date(event?.eventdate).toLocaleDateString('en-US',{year:'numeric',month:'numeric',day:'numeric'})}</div>
              <Link href={`events/${event.id}/edit`}>
              <div className="cursor-pointer flex items-center border-black shadow-md rounded-lg text-center lg:text-xl p-2 font-bold justify-center">

                  <p className="leading-5">Edit event</p>
              </div>

              </Link>
              <Link href={`/events/${event.id}/participant-survey`}>
                <div className="cursor-pointer flex items-center border-black shadow-md rounded-lg text-center lg:text-xl p-2 font-bold justify-center">
                  <p className="leading-5">Participant survey</p> 
                </div>
              </Link>
              
              <Link href={`events/${event.id}/upload-event`}>
                <div className="cursor-pointer flex items-center border-black shadow-md rounded-lg text-center lg:text-xl p-2 font-bold justify-center">
                <p className="leading-5">Uploads docs &#38; photos , etc </p>
        
                </div>
              </Link>
              
              <Link href={`events/${event.id}/post-event-survey`}>
                <div className="cursor-pointer flex items-center border-black shadow-md rounded-lg text-center lg:text-xl p-2 font-bold justify-center text-center">
                <p className="leading-5 text-center">Complete post-event survey</p>
    
                </div>
              </Link>
              
            </section>
          ))}
        </div>  */}
      </div>
    </Layout>
  );
};

export default EventsIndex;

export const getServerSideProps = withPageAuthRequired({
  async getServerSideProps(ctx) {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/events`
    );
    const events = await response.json();

    return { props: { events } };
  },
});
