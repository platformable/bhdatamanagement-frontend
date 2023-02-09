import React, { useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import Layout from "../../../components/Layout";
import PageTopHeading from "../../../components/PageTopHeading";
import { useUser, withPageAuthRequired } from "@auth0/nextjs-auth0";
import EventsCardItems from "../../../components/events/EventsCardItems";
import Search from "../../../components/SearchEvents";
import DeleteFboModal from "../../../components/fbo/DeleteFboModal";
import { useSelector, useDispatch } from "react-redux";
import { searchEventByName } from "../../../slices/eventsSearchWordSlice";

import {
  updateStartDate,
  updateEndDate,
} from "../../../slices/eventsCalendarDatesSlice";
import { useEffect } from "react";

const fboDirectory = ({ fbos }) => {
  console.log("events", fbos);
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
  }, []);
  function makeIcsFile(event) {
    function convertDate(date, time) {
      const dateParts = date.split("T")[0];
      const dateString = dateParts.split("-").join("");
      const timeString = time.split(":").join("");

      return dateString + "T" + timeString;
    }

    const ref = useRef("1");

    const textData =
      "BEGIN:VCALENDAR" +
      "\n" +
      "VERSION:2.0" +
      "\n" +
      "PRODID:-//Black Health v1.0//EN" +
      "\n" +
      "CALSCALE:GREGORIAN" +
      "\n" +
      "METHOD:PUBLISH" +
      "\n" +
      "X-WR-CALNAME:Events - Black Health" +
      "\n" +
      "X-MS-OLK-FORCEINSPECTOROPEN:TRUE" +
      "\n" +
      "BEGIN:VTIMEZONE" +
      "\n" +
      "TZID:America/New_York" +
      "\n" +
      "TZURL:http://tzurl.org/zoneinfo-outlook/America/New_York" +
      "\n" +
      "X-LIC-LOCATION:America/New_York" +
      "\n" +
      "BEGIN:DAYLIGHT" +
      "\n" +
      "TZOFFSETFROM:-0500" +
      "\n" +
      "TZOFFSETTO:-0400" +
      "\n" +
      "TZNAME:CEST" +
      "\n" +
      "DTSTART:19700329T020000" +
      "\n" +
      "RRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=-1SU" +
      "\n" +
      "END:DAYLIGHT" +
      "\n" +
      "BEGIN:STANDARD" +
      "\n" +
      "TZOFFSETFROM:-0400" +
      "\n" +
      "TZOFFSETTO:-0500" +
      "\n" +
      "TZNAME:CET" +
      "\n" +
      "DTSTART:19701025T030000" +
      "\n" +
      "RRULE:FREQ=YEARLY;BYMONTH=10;BYDAY=-1SU" +
      "\n" +
      "END:STANDARD" +
      "\n" +
      "END:VTIMEZONE" +
      "\n" +
      "BEGIN:VEVENT" +
      "\n" +
      "DTSTAMP:20220129T115020Z" +
      "\n" +
      `DTSTART:${convertDate(event?.eventdate, event?.eventstarttime)}` +
      "\n" +
      `DTEND:${convertDate(event?.eventdate, event?.eventfinishtime)}` +
      "\n" +
      "STATUS:CONFIRMED" +
      "\n" +
      "SUMMARY:" +
      event?.eventname +
      "\n" +
      "DESCRIPTION:" +
      event?.onlineinpersoneventtype +
      " - " +
      (event.onlineeventtypename || event.inpersoneventtypename) +
      " - " +
      event?.eventdescription +
      "\n" +
      "ORGANIZER;CN=Black Health:MAILTO:info@meetup.com" +
      "\n" +
      "CLASS:PUBLIC" +
      "\n" +
      // "CREATED:20220119T120306Z" + "\n" +
      // "GEO:41.40;2.17" + "\n" +
      "LOCATION:" +
      event?.locationaddress +
      ", " +
      event?.locationname +
      ", " +
      String(event?.eventzipcode) +
      "\n" +
      "URL:https://nblch.org" +
      "\n" +
      "SEQUENCE:2" +
      "\n" +
      // "LAST-MODIFIED:20220119T120306Z" + "\n" +
      "UID:event_283355921@black_health_data_app_management" +
      "\n" +
      "END:VEVENT" +
      "\n" +
      "END:VCALENDAR";

    let icsFile;

    var data = new File([textData], { type: "text/calendar" });
    // If we are replacing a previously generated file we need to
    // manually revoke the object URL to avoid memory leaks.
    if (icsFile !== null) {
      window.URL.revokeObjectURL(icsFile);
    }

    icsFile = window.URL.createObjectURL(data);

    const link = document.createElement("a");
    link.href = icsFile;
    link.download = `${event?.eventname}.ics`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    return icsFile;
  }
  const handleDeleteEvent = (id, eventName) => {
    console.log(id);
    setSelectedEventToDelete({ id: id, eventname: eventName });
    setShowDeleteEventModal(!showDeleteEventModal);
  };
  const searchFunction = (word) => {
    setSearchWord(word);
    dispatch(searchEventByName({ word }));
  };

  /*   const sortedEventsByDate = events.sort(
    (a, b) => new Date(b.eventdate) - new Date(a.eventdate)
  ); */

  return (
    <Layout showStatusHeader={true}>
      <PageTopHeading
        pageTitle={"FBO directory"}
        dashboardBtn={true}
        backBtn={true}
      />

      <div className="container mx-auto md:flex block gap-x-5 justify-between md:px-0 px-5 md:gap-y-0">
        <Search searchFunction={searchFunction} />
        <Link href="/oef/fbo/create">
          <a
            className="rounded bg-black px-5 py-2 flex items-center  font-semibold shadow-xl md:mt-0 mt-5"
            id="myBtn"
          >
            {/* <Image src={authUserICon} width={31} height={29}/> */}
            <p className="ml-2 text-sm text-white">Add a new FBO</p>
          </a>
        </Link>
      </div>

      <section className="container mx-auto px-5 md:px-0">
        <div
          className={`grid ${
            loggedUserRole === "Supervisor"
              ? "directory-fbo-head-table"
              : `directory-fbo-head-table`
          } container mx-auto mt-10 rounded-t-lg py-3 px-5 md:px-7 bg-black text-white`}
        >
          {/* <p className="lg:text-xl font-bold flex items-center ">Program</p> */}
          <p className="lg:text-xl font-bold flex items-center ">FBO name</p>
          <p className="lg:text-xl font-bold flex items-center ">Borough</p>
          <p className="lg:text-xl font-bold flex items-center ">Active</p>
          <p className="lg:text-xl font-bold flex items-center ">
            Key contact email
          </p>
          <p className=""></p>
        </div>

        <div className="container  mx-auto md:px-0 px-5 md:px-7  mb-10 pb-10 rounded-lg ">
          <div className="events-index-btn-container overflow-x-auto grid grid-cols-1 gap-3 p-0">
            {fbos &&
              fbos
                ?.filter((fbo, index) => {
                  if (searchWord === "") {
                    return fbo;
                  }
                  if (
                    fbo.namefbo
                      .toLowerCase()
                      .includes(searchWord.toLowerCase()) ||
                    fbo.namefbo.toLowerCase().includes(searchWord.toLowerCase())
                  ) {
                    return fbo;
                  }
                })
                .map((fbo, index) => {
                  return (
                    <>
                      {/* <div className="sm:hidden w-full">
                      <EventsCardItems
                        key={index}
                        id={fbo.id}
                        programName={fbo.programname}
                        eventdate={fbo.eventdate}
                        eventName={fbo.eventname}
                        urlEdit={`/oef/fbo/${fbo.numberfbo}/`}
                        urlParticipantSurvey={`/events/${fbo.id}/participant-survey`}
                        urlUpload={`events/${fbo.id}/upload-event`}
                        urlPostEventSurvey={`events/${fbo.id}/post-event-survey`}
                        urlEditPostEventSurvey={`events/${fbo.id}/edit-post-event-survey`}
                        userRole={loggedUserRole}
                        setShowDeleteEventModal={setShowDeleteEventModal}
                        showDeleteEventModal={showDeleteEventModal}
                        setSelectedEventToDelete={setSelectedEventToDelete}
                        selectedEventToDelete={selectedEventToDelete}
                        postEventReportId={fbo.posteventreportid}
                        makeIcsFile={makeIcsFile}
                        event={fbo}
                      />
                    </div> */}
                      <div className="">
                        <section
                          key={index}
                          className={`grid ${
                            loggedUserRole === "Supervisor"
                              ? "directory-fbo-head-table"
                              : "directory-fbo-head-table"
                          } gap-4 py-7  rounded shadow-md`}
                        >
                          {/* <div className="flex items-center lg:text-xl font-bold ">{event.programname}</div> */}

                          <div className="flex items-center overflow-x-hidden lg:text-xl font-bold ">
                            {fbo.namefbo}
                          </div>

                          <p className="lg:text-xl font-bold flex items-center ">
                            {fbo.boroughfbo}
                          </p>
                          <p className="lg:text-xl font-bold flex items-center ">
                            {fbo.fboactive ? "Active" : "Not Active"}
                          </p>
                          <p className="lg:text-xl font-bold flex overflow-x-hidden  items-center">
                            {fbo.emailkeycontact}
                          </p>
                          <Link href={`/oef/fbo/${fbo.numberfbo}/`}>
                            <div className="cursor-pointer flex items-center border-black shadow-md rounded-lg text-center lg:text-xl p-2 font-bold justify-center">
                              <p className="leading-5">Edit FBO</p>
                            </div>
                          </Link>

                          {/* {loggedUserRole === "Supervisor" && (
                          <div className="flex justify-center">
                            <button
                              className="bg-black lg:text-lg py-2 px-5 rounded-lg text-white"
                              onClick={() =>
                                handleDeleteEvent(fbo?.numberfbo, fbo?.namefbo)
                              }
                            >
                              Delete FBO
                            </button>
                          </div>
                        )} */}
                        </section>
                      </div>
                    </>
                  );
                })}
            {/* {sortedEventsByDate && sortedEventsByDate.map((event, index) => (
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
          ))} */}
          </div>
          {showDeleteEventModal && (
            <DeleteFboModal
              setShowDeleteEventModal={setShowDeleteEventModal}
              showDeleteEventModal={showDeleteEventModal}
              selectedEventToDelete={selectedEventToDelete}
              id={selectedEventToDelete.id}
            />
          )}
        </div>
      </section>
    </Layout>
  );
};

export default fboDirectory;

export const getServerSideProps = withPageAuthRequired({
  async getServerSideProps(ctx) {
    const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/fbos`);
    const fbos = await response.json();

    return { props: { fbos } };
  },
});
