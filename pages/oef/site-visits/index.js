import React, { useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import Layout from "../../../components/Layout";
import PageTopHeading from "../../../components/PageTopHeading";
import { useUser, withPageAuthRequired } from "@auth0/nextjs-auth0";
import EventsCardItems from "../../../components/events/EventsCardItems";
import Search from "../../../components/SearchEvents";
import DeleteEventModal from "../../../components/events/DeleteEventModal";
import { useSelector, useDispatch } from "react-redux";
import { searchEventByName } from "../../../slices/eventsSearchWordSlice";

import {
  updateStartDate,
  updateEndDate,
} from "../../../slices/eventsCalendarDatesSlice";
import { useEffect } from "react";

const EventsIndex = ({ siteVisits }) => {
 
  const eventSearchWord = useSelector(
    (state) => state.eventsSearchWord.value.word
  );
  const [searchWord, setSearchWord] = useState(eventSearchWord || "");
  const dispatch = useDispatch();
  const { user, error, isLoading } = useUser();
  const [selectedEventToDelete, setSelectedEventToDelete] = useState("");

  const [showDeleteEventModal, setShowDeleteEventModal] = useState(false);

  const loggedUserRole =
    user && user["https://lanuevatest.herokuapp.com/roles"];

  /*   const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState(""); */

  const [dateFilter, setDateFilter] = useState({
    startDate: null,
    endDate: null,
  });
  // async function downloadCalendar (base64) {
    
  // }
  useEffect(() => {
    // events.map(event => {event.url_calendar = makeIcsFile(event)})
  }, [])
   
  const handleDeleteEvent=(id,eventName)=>{
    console.log(id)
    setSelectedEventToDelete({id:id,eventname:eventName})
    setShowDeleteEventModal(!showDeleteEventModal)
  }
  const searchFunction = (word) => {
    setSearchWord(word);
    dispatch(searchEventByName({ word }));
  };
  const ref = useRef();

  const handleStartDate = () => {
    dispatch(updateStartDate(dateFilter));
  };
  // console.log("events",events)

  const startDate = useSelector(
    (state) => state.eventCalendarDates.value.startDate
  );
  const endDate = useSelector(
    (state) => state.eventCalendarDates.value.endDate
  );
  console.log("startDate desde toolkit", startDate);
  console.log("endDate desde toolkit", endDate);

  const state = useSelector((state) => console.log(state));

  console.log("state", state);

  const sortedEventsByDate = siteVisits?.sort(
    (a, b) => new Date(b.tadatesubmitted) - new Date(a.tadatesubmitted)
  );

  console.log("sortedEventsByDate", sortedEventsByDate);




  const changeStatusBg = (submissionstatus)=>{

    let color
    submissionstatus==='Submitted'?color='submittedBg':null
    submissionstatus==='Pending'?color='pendingBg':null
    submissionstatus==='Complete'?color='completeBg':null
    return color

  }  



  return (
    <Layout showStatusHeader={true}>
      <PageTopHeading
        pageTitle={"Manage Site Visits"}
        dashboardBtn={true}
        backBtn={true}
      />

      <div className="container mx-auto flex container mx-auto md:px-0 px-5 md:mb-5 md:gap-5 justify-between">

      <div className="flex flex-col gap-y-2 lg:flex-row  gap-x-2 bg-black  px-10 py-2 rounded text-white inline-block self-center cursor-pointer">
          <Link href="/oef/site-visits/register"
                
                target="_blank"
                rel="noreferrer"
              >
                <p className={`bg-black  px-5 py-2 rounded text-white inline-block  flex items-center text-lg`}>Complete a Site Visit Survey</p>
              </Link>
          </div>
        <Search searchFunction={searchFunction} />
        
   
      </div>

      <div className="events-cards-container grid md:grid-cols-8 grid-cols-1 container mx-auto md:px-0 px-5 mb-5 gap-5 md:mt-0 mt-5"></div>
      {/*  HEAD TABLE  */}
      <div className={`hidden md:grid site-visits-head-table container mx-auto  rounded-t-lg py-3 px-7 bg-black text-white`}>
        {/* <p className="lg:text-xl font-bold flex items-center ">Program</p> */}
        <p className="lg:text-xl font-bold flex items-center ">FBO</p>
        <p className="lg:text-xl font-bold flex items-center justify-center">Borough</p>
        <p className="lg:text-xl font-bold flex items-center justify-center">Date of site visit</p>
        <p className="lg:text-xl font-bold flex items-center justify-center">Status</p>
        <p className="lg:text-xl font-bold flex items-center justify-center">Edit</p>
      </div>

      <div className="container  mx-auto md:px-0 px-7 mb-10 pb-10 rounded-lg ">
        <div className="events-index-btn-container grid grid-cols-1 gap-x-3 p-0">
          {sortedEventsByDate &&
            sortedEventsByDate
              .filter((event, index) => {
                if (
                  searchWord === "" &&
                  dateFilter.startDate === null &&
                  dateFilter.endDate === null
                ) {
                  return event;
                }
                return event.fbo.toLowerCase().includes(searchWord) || event.boroughfbo.toLowerCase().includes(searchWord)
              })
              .map((event, index) => {
              
                return (
                  <>
      
                    <div className="hidden sm:block">
                      <section
                        key={index}
                        className={`grid site-visits-head-table px-7  rounded border-b-2 `}
                      >
     
                        <div className="flex items-center lg:text-xl font-bold py-7">
                         {event.fbo}
                        </div>
                        
                        <div className="flex items-center lg:text-xl font-bold justify-center text-center">
                       {event.boroughfbo}

                        </div>

                   
   
                        <div className="flex items-center lg:text-xl font-bold justify-center">
                          {
                            event.eventdate &&
                              new Date(event?.eventdate).toLocaleDateString(
                                "en-US"
                              )
                          } 
                        </div>
                        <div className={`flex items-center text-center justify-center lg:text-xl font-bold  py-7 ${changeStatusBg(event.submissionstatus)}`}>
                          <p className="text-center">{event.submissionstatus}</p>
                        </div>
  

                        <div className="flex justify-center">
                        <Link href={`/oef/site-visits/${event.id}/edit`}>
                          <div className="self-center cursor-pointer border-black shadow-md rounded-lg text-center lg:text-xl py-2 px-5 font-bold">
                            <p className="leading-5 text-center ">Edit</p>
                          </div>
                        </Link>
                        </div>
                       {/*  <Link href={`/oef/events/${event.id}/participant-survey`}>
                          <div className="cursor-pointer flex items-center border-black shadow-md rounded-lg text-center lg:text-xl p-2 font-bold justify-center">
                            <p className="leading-5">Participant survey</p>
                          </div>
                        </Link> */}

                    

                        {/* <Link
                          href={
                            event.posteventreportid
                              ? `/oef/events/${event.id}/edit-post-event-survey`
                              : `/oef/events/${event.id}/post-event-survey`
                          }
                        >
                          <div className="cursor-pointer flex items-center border-black shadow-md rounded-lg text-center lg:text-xl p-2 font-bold justify-center text-center">
                            <p className="leading-5 text-center">
                              {event.posteventreportid ? "Edit " : "Complete "}{" "}
                              post-event survey
                            </p>
                          </div>
                        </Link> */}
                        
                       {/*  {loggedUserRole === "Supervisor" && (
                          <div className="flex justify-center">
                            <button
                              className="bg-black lg:text-lg py-2 px-5 rounded-lg text-white"
                              onClick={() => handleDeleteEvent(event?.id, event?.eventname)}
                            >
                              Delete event
                            </button>
                          </div>
                        )} */}
                      </section>
                    </div>
                  </>
                );
              })}
  
        </div>
        {showDeleteEventModal && (
          <DeleteEventModal
            setShowDeleteEventModal={setShowDeleteEventModal}
            showDeleteEventModal={showDeleteEventModal}
            selectedEventToDelete={selectedEventToDelete}
            id={selectedEventToDelete.id}
          />
        )}
      </div>
    </Layout>
  );
};

export default EventsIndex;

export const getServerSideProps = withPageAuthRequired({
  async getServerSideProps(ctx) {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/site_visits`
    );
    const siteVisits = await response.json();

    return { props: { siteVisits } };
  },
});
