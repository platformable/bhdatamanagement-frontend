import React, { useState, useRef } from "react";
import Link from "next/link";
import {useRouter} from "next/router";
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

const EventsIndex = ({ technicalAssistance }) => {

  const router = useRouter()
 
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

  const sortedEventsByDate = technicalAssistance?.sort(
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
        pageTitle={"Technical Assistance Requests"}
        dashboardBtn={true}
        backBtn={true}
      />
 <div className="container mx-auto my-7">
        <div className="flex">
          <a
            href="/oef/technical-assistance/register"
            className="bg-black text-white rounded px-5 py-2 cursor-pointer"
            target='_blank'
          >
            <p className="flex bg-black gap-x-2 items-center font-black text-white rounded">
              Create Technical Assistant Request
            </p>
          </a>
        </div>
      </div>
      <div className="container mx-auto grid  items-center grid-cols-1 container mx-auto md:px-0 px-5 md:mb-5 md:gap-5">
        <Search searchFunction={searchFunction} />

        <div className="block md:flex xl:justify-end md:px-0 lg:col-start-4 py-5 md:py-0  mr-0">
          <h3 className="">Filter by date</h3>
        </div>

        <div className="block md:flex flex-col gap-y-5 lg:flex-row gap-x-5 lg:col-end-6 items-center md:my-0">
          <label className="w-full">
            <input
              type="date"
              ref={ref}
              id="start"
              placeholder="start date"
              onChange={(e) => {
                setDateFilter({ ...dateFilter, startDate: e.target.value });
                dispatch(
                  updateStartDate({ ...dateFilter, startDate: e.target.value })
                );
              }}
              defaultValue={startDate}
              className="border-black rounded-md text-sm w-full"
            />
          </label>
          <h3 className="text-left md:text-center md:py-5 md:py-0 py-5">and</h3>
          <label className="flex justify-end w-full">
            <input
              type="date"
              placeholder="end date"
              onChange={(e) => {
                setDateFilter({ ...dateFilter, endDate: e.target.value });
                dispatch(
                  updateStartDate({ ...dateFilter, endDate: e.target.value })
                );
              }}
              defaultValue={endDate}
              className="border-black rounded-md  text-sm w-full"
            />
          </label>
        </div>
      </div>

      <div className=" container mx-auto px-3 md:px-0 mt-10">
      <div className={`overflow-x-auto grid technical-assistance-head-table  rounded-t-lg py-3 px-7 bg-black text-white`}>
        <p className="lg:text-xl font-bold flex items-center ">Name</p>
        <p className="lg:text-xl font-bold flex items-center ">FBO</p>
        <p className="lg:text-xl font-bold flex items-center justify-center">Type of Assistance</p>
        <p className="lg:text-xl font-bold flex items-center justify-center">Email</p>
        <p className="lg:text-xl font-bold flex items-center justify-center">Date submitted</p>
        <p className="lg:text-xl font-bold flex items-center justify-center">Status</p>
        <p className="lg:text-xl font-bold flex items-center justify-center">Date completed</p>
        <p className="lg:text-xl font-bold flex items-center justify-center">Review</p>
      </div>

      <div className=" container mx-auto md:px-0 mb-10 pb-10 rounded-lg ">
        <div className="events-index-btn-container overflow-x-auto grid grid-cols-1 gap-x-3 p-0">
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
                return event.tacontactname.toLowerCase().includes(searchWord) || event.tatype.some(type => type.toLowerCase().includes(searchWord)) || event.tafbo.some(type => type.toLowerCase().includes(searchWord))
              })
              .filter((event, index) => {
                var startDate = new Date(new Date(dateFilter?.startDate).setHours(0))
                var endDate = new Date(new Date(dateFilter?.endDate).setHours(23))
                if (startDate !== null && endDate !== null) {
                  let filterPass = true;
                  const date = new Date(event.tadatesubmitted);
                  if (dateFilter.startDate) {
                    filterPass = filterPass && startDate <= date;
                  }
                  if (dateFilter.endDate) {
                    filterPass =
                      filterPass && endDate >= date;
                  }
                  return filterPass;
                }
              })
              .map((event, index) => {
              
                return (
                  <>
                   {/*  <div className="sm:hidden w-full">
                      <EventsCardItems
                        key={index}
                        id={event.id}
                        programName={event.programname}
                        eventdate={event.eventdate}
                        eventName={event.eventname}
                        urlEdit={`events/${event.id}/nys_cmp/edit`}
                        urlParticipantSurvey={`/events/${event.id}/participant-survey`}
                        urlUpload={`events/${event.id}/upload-event`}
                        urlPostEventSurvey={`events/${event.id}/post-event-survey`}
                        urlEditPostEventSurvey={`events/${event.id}/edit-post-event-survey`}
                        userRole={loggedUserRole}
                        setShowDeleteEventModal={setShowDeleteEventModal}
                        showDeleteEventModal={showDeleteEventModal}
                        setSelectedEventToDelete={setSelectedEventToDelete}
                        selectedEventToDelete={selectedEventToDelete}
                        postEventReportId={event.posteventreportid}
                        //makeIcsFile={makeIcsFile}
                        event={event}
                      />
                    </div> */}
                    <div className="block  ">
                      <section
                        key={index}
                        className={`grid technical-assistance-head-table px-7  rounded border-b-2 `}
                      >
                        <div className="flex items-center lg:text-xl font-bold  py-7">
                          {event?.tacontactname}
                        </div>
                        <div className="flex items-center  lg:text-xl font-bold py-7">
                          {event?.tafbo.join(', ')}
                        </div>
                        
                        <div className="flex items-center lg:text-xl font-bold justify-center text-center">
                        {event?.tatype.join(', ')}

                        </div>

                        <div className="flex items-center lg:text-xl font-bold overflow-hidden">
                        {!event?.taemail? '-' : event?.taemail}
                        </div>
                   
   
                        <div className="flex items-center lg:text-xl font-bold justify-center">
                          {
                            event?.tadatesubmitted &&
                              new Date(event?.tadatesubmitted).toLocaleDateString(
                                "en-US"
                              )
                          } 
                        </div>
                        <div className={`flex items-center text-center justify-center lg:text-xl font-bold  py-7 ${changeStatusBg(event.tastatus)}`}>
                          <p className="text-center">{event?.tastatus}</p>
                        </div>
                        <div className="flex items-center lg:text-xl font-bold justify-center">
                        {
                            event?.tastatuscompletedate ?
                              new Date(event?.tastatuscompletedate).toLocaleDateString(
                                "en-US"
                              ):'-'

                          }
                        
                        </div>

                        
                        <Link href={`/oef/technical-assistance/${event.id}/edit`}>
                          <div className="self-center cursor-pointer flex items-center border-black shadow-md rounded-lg text-center lg:text-xl p-2 font-bold justify-center">
                            <p className="leading-5">Edit</p>
                          </div>
                        </Link>
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
      </div>
      {/*  HEAD TABLE  */}
      
    </Layout>
  );
};

export default EventsIndex;

export const getServerSideProps = withPageAuthRequired({
  async getServerSideProps(ctx) {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/technical_assistance`
    );
    const technicalAssistance = await response.json();

    return { props: { technicalAssistance } };
  },
});
