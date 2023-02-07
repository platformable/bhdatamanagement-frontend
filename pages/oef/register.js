import React, { useEffect, useState } from "react";
import Section1 from "../../components/oef-event-registration/Section1";
import Section2 from "../../components/oef-event-registration/Section2";
import Section3 from "../../components/oef-event-registration/Section3";
import Section4 from "../../components/oef-event-registration/Section4";
import Section5 from "../../components/oef-event-registration/Section5";
import Section6 from "../../components/oef-event-registration/Section6";
import Section7 from "../../components/oef-event-registration/Section7";
import Section8 from "../../components/oef-event-registration/Section8";
import Section9 from "../../components/oef-event-registration/Section9";


import Loader from "../../components/Loader";

import { useRouter } from "next/router";
import { nysActivity, NYSZipCodesAndBoroughs } from "../../utils/sharedData";

import { useUser, withPageAuthRequired } from "@auth0/nextjs-auth0";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import axios from "axios";
import ResponseStatusModal from "../../components/ResponseStatusModal";
import ExternalSurveyHeader from "../../components/ExternalSurveyHeader";
import InPersonOrOnlineEvent from "../../components/oef-event-registration/InPersonOrOnlineEvent";

const Register = ({ fbos }) => {
  const router = useRouter();
  const { user, error, isLoading } = useUser();
  let userId = user?.sub;
  const [showResponseStatus, setShowResponseStatus] = useState(false);
  const [responseStatus, setResponseStatus] = useState({});
  const [loading, setLoading] = useState(false);
  const [eventForm, setEventForm] = useState({
    eventDateCreated: new Date(),
    programID: "1",
    programName: "OEF",
    eventName: "",
    eventDate: "",
    eventStartTime: "00:00",
    eventFinishTime: "12:00",
    healthAreaOfFocusID: [6],
    healthAreaOfFocusName: ["HIV/AIDS"],
    createdByName:"" ,
    createdByLastname:"",
    eventZipCode: 0,
    borough: "",
    oefEventEmail:"",
    deliveryPartner:"",
    surveyName: "oef-fbo-outreach",
    
    locationAddress:"",
    onlineInPersonEventType:"",
    inPersonEventTypeName:"",
    inPersonEventTypeNameOther:"",
    inPersonEventTypeID:"",
    onlineEventTypeName:"",
    onlineEventTypeID:""
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
    toast.success("Please wait while your event information is being processed", {
      position: toast.POSITION.TOP_CENTER,
    });
  };

  const submitEventForm = async () => {

    setLoading(true);
    setResponseStatus({ success: true, statusMessage: "Please wait while your event information is being processed"})
    setShowResponseStatus(true)

    //notifyMessage()
   
    await axios
      .post(`${process.env.NEXT_PUBLIC_SERVER_URL}/events/oef/create`, eventForm)
      .then((response) => {
        if (response.data.statusText === "OK") {
          //setShowResponseStatus(false)
          //notifyMessage();
        setTimeout(() => {
      router.push(`/oef/events/${response.data.createdEventId}/post-event-survey`);
       }, 1000);
          console.log("response createdEventId",response.data.createdEventId)
        }
      })
      .catch(function (error) {
        setLoading(false);
        setResponseStatus({ success: true, statusMessage: "An error has occurred, please check that each question has been answered"})

        console.error("error: ", error);
      });
  };

  const getCity = (zipcode, array) => {
    const searchZipcode = array.filter((code) => code.zipcode === zipcode);
    console.log("searchZipcode", searchZipcode);
    if (searchZipcode.length > 0) {
      setEventForm({ ...eventForm, borough: searchZipcode[0].borought });
    } else {
      setEventForm({ ...eventForm, borough: "" });
    }
  };

  useEffect(() => {
    // setEventForm({ ...eventForm, userID: userId });
    //makeIcsFile(eventForm);
    getCity(eventForm.eventZipCode, NYSZipCodesAndBoroughs);
  }, [
    user,
    eventForm.eventDate,
    eventForm.eventDate,
    eventForm.eventStartTime,
    eventForm.eventName,
    eventForm.eventDescription,
    eventForm.eventFinishTime,
    eventForm.eventZipCode,
    eventForm.onlineEventTypeName,
    eventForm.inPersonEventTypeName,
    eventForm.eventZipCode,
  ]);

  return (
    <>
    {/*   <Layout showStatusHeader={true}> */}
        <ToastContainer autoClose={20000} />
        
        <ExternalSurveyHeader pageTitle={'OEF HIV Outreach Event Organizer Survey'} />
        <div className="container mx-auto border-black rounded-lg mb-10">
          <div className="register-envent-form-container  grid gap-10 bg-white  rounded-lg px-7 my-10 ">
       
 
            <Section1 eventForm={eventForm} setEventForm={setEventForm} />
         
            <Section2 eventForm={eventForm} setEventForm={setEventForm} />
            <Section3 eventForm={eventForm} setEventForm={setEventForm} fbos={fbos}/>
            <Section4 eventForm={eventForm} setEventForm={setEventForm} />
            <Section5 eventForm={eventForm} setEventForm={setEventForm} />
            <Section6 eventForm={eventForm} setEventForm={setEventForm} />
            <Section7 eventForm={eventForm} setEventForm={setEventForm} />
            <Section8 eventForm={eventForm} setEventForm={setEventForm} />
            <InPersonOrOnlineEvent eventForm={eventForm} setEventForm={setEventForm}/>
            <Section9 eventForm={eventForm} setEventForm={setEventForm} />
          </div>
        </div>
        <div className="flex justify-center">{loading && <Loader />}</div>
        <div className="flex justify-center my-10">
         {loading? null:<button
            className="py-2 px-5 flex items-center rounded bg-black text-white font-semibold"
            onClick={submitEventForm}
          >
            Next
          </button> } 
        </div>
    {/*   </Layout> */}
      {showResponseStatus && (
        <ResponseStatusModal
          setShowResponseStatus={setShowResponseStatus}
          responseStatus={responseStatus}
        />
      )}
    </>
  );
};

export default Register;

export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/fbos`)
  const data = await res.json()
  // Pass data to the page via props
  return { props: { fbos: data } }
}