import React, { useState } from "react";
import Section4 from "../../../../../components/oef-cbt-event-registration/Section4";
import Section5 from "../../../../../components/oef-cbt-event-registration/Section5";
import Section6 from "../../../../../components/oef-cbt-event-registration/Section6";
import Section7 from "../../../../../components/oef-cbt-event-registration/Section7";
import Section8 from "../../../../../components/oef-cbt-event-registration/Section8";
import Section9 from "../../../../../components/oef-cbt-event-registration/Section9";
import OnlineOrInPerson from "../../../../../components/oef-cbt-event-registration/OnlineOrInPerson";
import LocationAddress from "../../../../../components/oef-cbt-event-registration/LocationAddress";

import Loader from "../../../../../components/Loader";

import Layout from "../../../../../components/Layout";
import PageTopHeading from "../../../../../components/PageTopHeading";
import { useRouter } from "next/router";
// import { nysActivity, NYSZipCodesAndBoroughs } from "../../../../../utils/sharedData";

import {  withPageAuthRequired } from "@auth0/nextjs-auth0";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import axios from "axios";
import ResponseStatusModal from "../../../../../components/ResponseStatusModal";

const EditCbt = ({data, user}) => {
  const router = useRouter();
//   let userId = user?.sub;
  const [showResponseStatus, setShowResponseStatus] = useState(false);
  const [responseStatus, setResponseStatus] = useState({});
  const [loading, setLoading] = useState(false);
  const [eventForm, setEventForm] = useState({
    id: data?.id,
    eventDateCreated: data?.eventdatecreated || new Date(),
    eventName: data?.eventname || "",
    eventDate: data?.eventdate || "",
    eventStartTime: data?.eventstarttime || "00:00",
    eventFinishTime: data?.eventfinishtime || "12:00",
    healthAreaOfFocusID: data?.healthareaoffocusid || [],
    healthAreaOfFocusName: data?.healthareaoffocusname || [],
    eventDescription: data?.eventdescription || "",
    surveyName: data?.surveyname || "",
    programID: 1,
    programName: 'OEF',


    onlineInPersonEventType:data?.onlineinpersoneventtype,
    inPersonEventTypeName:data?.inpersoneventtypename,
    inPersonEventTypeNameOther:data?.inpersoneventtypenameother,
    inPersonEventTypeID:data?.inpersoneventtypeid,
    onlineEventTypeName:data?.onlineeventtypename,
    locationAddress:data?.locationaddress,
    onlineEventTypeID:data?.onlineeventtypeid,
  });

  console.log("oef state form", eventForm);
  async function makeIcsFile() {
    function convertDate(date, time) {
      const dateParts = date.split("T")[0];
      const dateString = dateParts.split("-").join("");
      const timeString = time.split(":").join("");

      return dateString + "T" + timeString;
    }

    // let icsFile
    const textData = `BEGIN:VCALENDAR\nVERSION:2.0\nPRODID:-//Black Health v1.0//EN\nCALSCALE:GREGORIAN\nMETHOD:PUBLISH\nX-WR-CALNAME:Events - Black Health\nX-MS-OLK-FORCEINSPECTOROPEN:TRUE\nBEGIN:VTIMEZONE\nTZID:America/New_York\nTZURL:http://tzurl.org/zoneinfo-outlook/America/New_York\nX-LIC-LOCATION:America/New_York\nBEGIN:DAYLIGHT\nTZOFFSETFROM:-0500\nTZOFFSETTO:-0400\nTZNAME:CEST\nDTSTART:19700329T020000\nRRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=-1SU\nEND:DAYLIGHT\nBEGIN:STANDARD\nTZOFFSETFROM:-0400\nTZOFFSETTO:-0500\nTZNAME:CET\nDTSTART:19701025T030000\nRRULE:FREQ=YEARLY;BYMONTH=10;BYDAY=-1SU\nEND:STANDARD\nEND:VTIMEZONE\nBEGIN:VEVENT\nDTSTAMP:20220129T115020Z\nDTSTART:${convertDate(
      eventForm?.eventDate,
      eventForm?.eventStartTime
    )}\nDTEND:${convertDate(
      eventForm?.eventDate,
      eventForm?.eventFinishTime
    )}\nSTATUS:CONFIRMED\nSUMMARY:${eventForm?.eventName}\nDESCRIPTION:${
      eventForm?.onlineInPersonEventType
    } - ${
      eventForm?.inPersonEventTypeName === ""
        ? eventForm?.onlineEventTypeName
        : eventForm?.inPersonEventTypeName
    } - ${
      eventForm?.eventDescription
    }\nORGANIZER;CN=Black Health:MAILTO:info@meetup.com\nCLASS:PUBLIC\nLOCATION:${
      eventForm?.locationAddress
    }, ${eventForm?.locationName}, ${String(
      eventForm?.eventZipCode
    )}\nSEQUENCE:2\nUID:event_283355921@black_health_data_app_management\nEND:VEVENT\nEND:VCALENDAR`;

    var data = new File([textData], { type: "text/calendar" });

    setEventForm((prev) => ({ ...prev, icsUrlFile: textData }));
  }

  const notifyMessage = () => {
    toast.success(
      "Please wait while your event information is being processed",
      {
        position: toast.POSITION.TOP_CENTER,
      }
    );
  };

  const submitEventForm = async () => {
    setLoading(true);
    setResponseStatus({
      success: true,
      statusMessage:
        "Please wait while your event information is being updated",
    });
    setShowResponseStatus(true);

    //notifyMessage()

    await axios
      .put(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/events/oef/cbt/update`,
        eventForm
      )
      .then((response) => {
        if (response.data.statusText === "OK") {
          //setShowResponseStatus(false)
          //notifyMessage();
          setTimeout(() => {
            router.push(
              `/oef/cbt`
            );
          }, 1000);
        }
      })
      .catch(function (error) {
        setLoading(false);
        setResponseStatus({
          success: true,
          statusMessage: "An error ocurred, try again",
        });

        console.error("error: ", error);
      });
  };

  return (
    <>
      <Layout showStatusHeader={true}>
        <ToastContainer autoClose={20000} />
        <PageTopHeading
          backBtn={true}
          dashboardBtn={true}
          pageTitle={"Edit CBT event"}
        />
        <div className="container mx-auto border rounded-lg mb-10">
          <div className="register-envent-form-container  grid gap-10 bg-white  rounded-lg px-7 my-10 ">
            <Section5 eventForm={eventForm} setEventForm={setEventForm} />
            <Section4 eventForm={eventForm} setEventForm={setEventForm} />
            <Section6 eventForm={eventForm} setEventForm={setEventForm} />
            <OnlineOrInPerson eventForm={eventForm} setEventForm={setEventForm}/>
            <LocationAddress eventForm={eventForm} setEventForm={setEventForm}/>
            <Section7 eventForm={eventForm} setEventForm={setEventForm} />
            <Section8 eventForm={eventForm} setEventForm={setEventForm} />
            <Section9 eventForm={eventForm} setEventForm={setEventForm} />
          </div>
        </div>
        <div className="flex justify-center">{loading && <Loader />}</div>
        <div className="flex justify-center my-10">
          {loading ? null : (
            <button
              className="py-2 px-5 flex items-center rounded bg-black text-white font-semibold"
              onClick={submitEventForm}
            >
              Save and finish
            </button>
          )}
        </div>
      </Layout>
      {showResponseStatus && (
        <ResponseStatusModal
          setShowResponseStatus={setShowResponseStatus}
          responseStatus={responseStatus}
        />
      )}
    </>
  );
};

export default EditCbt;

export const getServerSideProps =  withPageAuthRequired({
    async  getServerSideProps (ctx) {
        const {id} = ctx.params;
        const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/events/${id}`)
        const data = await res.json()

        return {
            props: {
                data: data[0]
            }
        }
    },
})
