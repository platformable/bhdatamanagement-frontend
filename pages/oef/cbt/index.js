import React, { useState, useRef, useEffect } from "react";
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
import { useRouter } from "next/router";
import { filterByDateRange } from "../../../utils/helpers";

const EventsIndex = ({ events }) => {
  // console.log("events", events);
  const eventSearchWord = useSelector(
    (state) => state.eventsSearchWord.value.word
  );
  const [searchWord, setSearchWord] = useState(eventSearchWord || "");
  const dispatch = useDispatch();
  const { user, error, isLoading } = useUser();
  const [selectedEventToDelete, setSelectedEventToDelete] = useState("");
  const [sortedEventsByDate, setSortedEventsByDate] = useState(
    events.sort((a, b) => new Date(b.eventdate) - new Date(a.eventdate))
  );
  const [showDeleteEventModal, setShowDeleteEventModal] = useState(false);
  // const router = useRouter();

  const loggedUserRole =
    user && user["https://lanuevatest.herokuapp.com/roles"];

  /*   const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState(""); */

 
  function makeIcsFile(event) {
    function convertDate(date, time) {
      const dateParts = date.split("T")[0];
      const dateString = dateParts.split("-").join("");
      const timeString = time.split(":").join("");

      return dateString + "T" + timeString;
    }

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
    // console.log(id);
    setSelectedEventToDelete({ id: id, eventname: eventName });
    setShowDeleteEventModal(!showDeleteEventModal);
  };
  const searchFunction = (word) => {
    setSearchWord(word);
    dispatch(searchEventByName({ word }));
  };
  const ref = useRef();

  const handleStartDate = () => {
    dispatch(updateStartDate(dateFilter));
  };
  // console.log("events",events)
  const calendarDateState = useSelector(
    (state) => state.eventCalendarDates.value
  );

  const startDate = useSelector(
    (state) => state.eventCalendarDates.value.startDate
  );
  const endDate = useSelector(
    (state) => state.eventCalendarDates.value.endDate
  );

  const state = useSelector((state) => console.log(state));

  // console.log(sortedEventsByDate);
  return (
    <Layout showStatusHeader={true}>
      <PageTopHeading
        pageTitle={"Manage existing events CBT"}
        dashboardBtn={true}
        backBtn={true}
      />

      <div className="container mx-auto">
        <div className="flex gap-5">
          <Link href={"/oef/cbt/register"}>
            <button className="bg-black text-white rounded px-5 py-2 cursor-pointer">
              <p className="flex bg-black gap-x-2 items-center font-black text-white rounded">
                Add CBT Event
              </p>
            </button>
          </Link>
          {/* <a href={"/oef/cbt/register-external"} target="_blank">
            <button className="bg-black text-white rounded px-5 py-2 cursor-pointer">
              <p className="flex bg-black gap-x-2 items-center font-black text-white rounded">
                Add CBT Event (External)
              </p>
            </button>
          </a> */}
          <a href={"/oef/cbt/quarterly-evaluation"} target="_blank">
            <button className="bg-black text-white rounded px-5 py-2 cursor-pointer">
              <p className="flex bg-black gap-x-2 items-center font-black text-white rounded">
                Add CBT Quarterly Evaluation
              </p>
            </button>
          </a>
        </div>
      </div>
      <div className="container mx-auto grid  items-center grid-cols-2 container mx-auto md:px-0 px-5 md:mb-5 md:gap-5 mt-7">
        <div className="flex">
          <Search searchFunction={searchFunction} />
        </div>
        <div className="flex gap-5 justify-end">
          <div className="block md:flex xl:justify-end md:px-0 lg:col-start-4 py-5 md:py-0  mr-0 items-center">
            <h3 className="">Filter by date</h3>
          </div>

          <div className="block md:flex flex-col gap-y-5 lg:flex-row gap-x-5 lg:col-end-6 items-center md:my-0 ">
            <label className="w-full">
              <input
                type="date"
                ref={ref}
                id="start"
                placeholder="start date"
                onChange={(e) => {
                  dispatch(
                    updateStartDate({
                      ...calendarDateState,
                      startDate: e.target.value,
                    })
                  );
                }}
                defaultValue={startDate}
                className="border-black rounded-md text-sm w-full"
              />
            </label>
            <h3 className="text-left md:text-center md:py-5 md:py-0 py-5">
              and
            </h3>
            <label className="flex justify-end w-full">
              <input
                type="date"
                placeholder="end date"
                onChange={(e) => {
                  dispatch(
                    updateStartDate({
                      ...calendarDateState,
                      endDate: e.target.value,
                    })
                  );
                }}
                defaultValue={endDate}
                className="border-black rounded-md  text-sm w-full"
              />
            </label>
          </div>
        </div>
      </div>

      <div className="events-cards-container grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 container mx-auto md:px-0 px-5 mb-5 gap-5 md:mt-0 mt-5"></div>
      {/*  HEAD TABLE  */}
      <div
        className={`hidden md:grid ${
          loggedUserRole === "Supervisor"
            ? "supervisor-existing-events-head-table"
            : `existing-events-head-table`
        } container mx-auto  rounded-t-lg py-3 px-7 bg-black text-white`}
      >
        {/* <p className="lg:text-xl font-bold flex items-center ">Program</p> */}
        <p className="lg:text-xl font-bold flex items-center ">Event name</p>
        <p className="lg:text-xl font-bold flex items-center ">Event date</p>
      </div>

      <div className="container  mx-auto md:px-0 px-7 mb-10 pb-10 rounded-lg ">
        <div className="events-index-btn-container grid grid-cols-1 gap-3 p-0">
          {sortedEventsByDate &&
            sortedEventsByDate
              ?.filter(
                (event, index) =>
                  event?.programname === "OEF" &&
                  event?.surveyname?.includes("cbt")
              )
              .filter((event, index) => {
                if (
                  searchWord === "" &&
                  startDate === null &&
                  endDate === null
                ) {
                  return event;
                }
                if (
                  event.programname
                    .toLowerCase()
                    .includes(searchWord.toLowerCase()) ||
                  event.eventname
                    .toLowerCase()
                    .includes(searchWord.toLowerCase())
                ) {
                  return event;
                }
              })
              .filter((event, index) => {
                return filterByDateRange(event.eventdate, startDate, endDate)
                // var startDate = new Date(
                //   new Date(dateFilter?.startDate).setHours(0)
                // );
                // var endDate = new Date(
                //   new Date(dateFilter?.endDate).setHours(23)
                // );
                // if (startDate !== null && endDate !== null) {
                //   let filterPass = true;
                //   const date = new Date(event.eventdate);
                //   if (dateFilter.startDate) {
                //     filterPass = filterPass && startDate <= date;
                //   }
                //   if (dateFilter.endDate) {
                //     filterPass = filterPass && endDate >= date;
                //   }
                //   return filterPass;
                // }
              })

              .map((event, index) => {
                return (
                  <>
                    <div className="sm:hidden w-full">
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
                        makeIcsFile={makeIcsFile}
                        event={event}
                      />
                    </div>
                    <div className="hidden sm:block">
                      <section
                        key={index}
                        className={`grid ${
                          loggedUserRole === "Supervisor"
                            ? "supervisor-existing-events-head-table"
                            : "existing-events-head-table"
                        } 
                         px-7 py-7  rounded shadow-md`}
                      >
                        {/* <div className="flex items-center lg:text-xl font-bold ">{event.programname}</div> */}
                        <div className="flex items-center lg:text-xl font-bold ">
                          {event.eventname}
                        </div>
                        <div className="flex items-center lg:text-xl font-bold mr-2">
                          {
                            event.eventdate &&
                              new Date(event?.eventdate).toLocaleDateString(
                                "en-US"
                              )
                            /* crearFecha2(event) */
                          }
                        </div>
                        <Link href={`/oef/cbt/${event.id}/events/edit`}>
                          <div className="cursor-pointer flex items-center border-black shadow-md rounded-lg text-center lg:text-xl p-2 font-bold justify-center">
                            <p className="leading-5">Edit event</p>
                          </div>
                        </Link>

                        <a
                          href={`/oef/cbt/${event.id}/participant-survey/survey`}
                          className="flex items-stretch"
                          target={"_black"}
                        >
                          <div className="cursor-pointer flex items-center border-black shadow-md rounded-lg text-center lg:text-xl p-2 font-bold justify-center ">
                            <p className="leading-5">Participant survey</p>
                          </div>
                        </a>

                        <Link href={`/oef/cbt/${event.id}/events/upload-event`}>
                          <div className="cursor-pointer flex items-center border-black shadow-md rounded-lg text-center lg:text-xl p-2 font-bold justify-center">
                            <p className="leading-5">
                              Uploads docs &#38; photos, etc{" "}
                            </p>
                          </div>
                        </Link>

                        <Link
                          href={
                            event.posteventreportid
                              ? `/oef/cbt/${event.id}/post-event-survey/edit-post-event-survey`
                              : `/oef/cbt/${event.id}/post-event-survey/register`
                          }
                        >
                          <div className="cursor-pointer flex items-center border-black shadow-md rounded-lg text-center lg:text-xl p-2 font-bold justify-center text-center">
                            <p className="leading-5 text-center">
                              {event.posteventreportid ? "Edit " : "Complete "}{" "}
                              post-event survey
                            </p>
                          </div>
                        </Link>
                        <div
                          onClick={() => makeIcsFile(event)}
                          className={`cursor-pointer flex items-center border-black shadow-md rounded-lg text-center justify-center`}
                        >
                          <a
                            className="leading-5  lg:text-lg p-2 font-bold"
                            href={"#"}
                          >
                            Download calendar file
                          </a>
                        </div>
                        {loggedUserRole === "Supervisor" && (
                          <div className="flex justify-center">
                            <button
                              className="bg-black lg:text-lg py-2 px-5 rounded-lg text-white"
                              onClick={() =>
                                handleDeleteEvent(event?.id, event?.eventname)
                              }
                            >
                              Delete event
                            </button>
                          </div>
                        )}
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
          <DeleteEventModal
            setSortedEventsByDate={setSortedEventsByDate}
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
      `${process.env.NEXT_PUBLIC_SERVER_URL}/events`
    );
    const events = await response.json();

    return { props: { events } };
  },
});
