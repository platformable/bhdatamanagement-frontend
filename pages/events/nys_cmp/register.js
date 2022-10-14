import React, { useEffect, useState } from "react";
import Section1 from "../../../components/events/Section1";
import Section2 from "../../../components/events/Section2";
import Section3 from "../../../components/events/Section3";
import Section3_2 from "../../../components/events/Section3-2";
import Section4 from "../../../components/events/Section4";
import Section5 from "../../../components/events/Section5";
import Section6 from "../../../components/events/Section6";
import Section7 from "../../../components/events/Section7";
import Section8 from "../../../components/events/Section8";
import Section9 from "../../../components/events/Section9";
import WorkArea from '../../../components/events/WorkArea'
import ZipCode from '../../../components/events/ZipCode'
import LocationAddress from '../../../components/events/LocationAddress'
import LocationName from '../../../components/events/LocationName'
import Loader from "../../../components/Loader";
import EventDescription from "../../../components/events/EventDescription";
import AdditionalMaterial from "../../../components/events/AdditionalMaterial";
import Layout from "../../../components/Layout";
import PageTopHeading from "../../../components/PageTopHeading";
import { useRouter } from 'next/router'
import { nysActivity } from "../../../utils/sharedData";

import {  useUser, withPageAuthRequired } from "@auth0/nextjs-auth0";

import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

import axios from "axios"
import ResponseStatusModal from "../../../components/ResponseStatusModal";

const Register = ({programs,locationTypes, areasOfFocus, eventTypes}) => {
  const router = useRouter()
  const { user, error, isLoading } = useUser();
  const [showResponseStatus, setShowResponseStatus] = useState(false)
  const [responseStatus, setResponseStatus] = useState ({})
  const [loading,setLoading]=useState(false)
  const [eventForm, setEventForm] = useState({
    userID: "",
    eventDateCreated: new Date(),
    programID: "3",
    programName: "NYS CMP",
    eventName: "",
    eventDate: "",
    eventStartTime: "00:00",
    eventFinishTime: "12:00",
    eventLocationTypeID: null,
    eventLocationTypeName: "",
    // eventZipCode: "",
    healthAreaOfFocusID: [6],
    healthAreaOfFocusName: ["HIV/AIDS"],
    eventTypeID: null,
    eventTypeName: "",
    nysActivity:"",
    nysActivityOther:"",
    onlineInPersonEventType:"",
inPersonEventTypeID:null,
inPersonEventTypeName:"",
onlineEventTypeID:null,
onlineEventTypeName:"",
eventDescription:"",
additionalMaterials:"",
createdByName:user && user["https://lanuevatest.herokuapp.com/name"],
createdByLastname:user && user["https://lanuevatest.herokuapp.com/lastname"],
workArea:"",
workAreaOther:"",
locationName:"",
locationNameOther:"",
locationAddress:"",
eventZipCode:"",
icsUrlFile: ""


  });
  const userId = user && user.sub
  
  
  
  console.log("nys state form",eventForm)
 async function makeIcsFile() {
  console.log("making the file")
    function convertDate(date, time) {
      const dateParts = date.split("T")[0]
      const dateString = dateParts.split("-").join("")
      const timeString = time.split(":").join("") 

      return dateString + "T" + timeString
    }
    async function blobToBase64(blob) {
      return new Promise((resolve, _) => {
        const reader = new FileReader();
        reader.onloadend = () => resolve(reader.result);
        reader.readAsDataURL(blob);
      });
    }
    // let icsFile
    const textData = 
    "BEGIN:VCALENDAR" + "\n" +
    "VERSION:2.0" + "\n" +
    "PRODID:-//Black Health v1.0//EN" + "\n" +
    "CALSCALE:GREGORIAN" + "\n" +
    "METHOD:PUBLISH" + "\n" +
    "X-WR-CALNAME:Events - Black Health" + "\n" +
    "X-MS-OLK-FORCEINSPECTOROPEN:TRUE" + "\n" +
    "BEGIN:VTIMEZONE" + "\n" +
    "TZID:America/New_York" + "\n" +
    "TZURL:http://tzurl.org/zoneinfo-outlook/America/New_York" + "\n" +
    "X-LIC-LOCATION:America/New_York" + "\n" +
    "BEGIN:DAYLIGHT" + "\n" +
    "TZOFFSETFROM:-0500" + "\n" +
    "TZOFFSETTO:-0400" + "\n" +
    "TZNAME:CEST" + "\n" +
    "DTSTART:19700329T020000" + "\n" +
    "RRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=-1SU" + "\n" +
    "END:DAYLIGHT" + "\n" +
    "BEGIN:STANDARD" + "\n" +
    "TZOFFSETFROM:-0400" + "\n" +
    "TZOFFSETTO:-0500" + "\n" +
    "TZNAME:CET" + "\n" +
    "DTSTART:19701025T030000" + "\n" +
    "RRULE:FREQ=YEARLY;BYMONTH=10;BYDAY=-1SU" + "\n" +
    "END:STANDARD" + "\n" +
    "END:VTIMEZONE" + "\n" +
    "BEGIN:VEVENT" + "\n" +
    "DTSTAMP:20220129T115020Z" + "\n" +
    `DTSTART:${convertDate(eventForm?.eventDate, eventForm?.eventStartTime)}` +
    "\n" +
    `DTEND:${convertDate(eventForm?.eventDate, eventForm?.eventFinishTime)}` +
    "\n" +
    "STATUS:CONFIRMED" + "\n" +
    "SUMMARY:" + eventForm?.eventName + "\n" +
    "DESCRIPTION:" + "(" + eventForm?.onlineInPersonEventType + ") - " + (eventForm?.inPersonEventTypeName === "" ? eventForm?.onlineEventTypeName : eventForm?.inPersonEventTypeName) + " - "+ eventForm?.eventDescription +
      "\n" +
    "ORGANIZER;CN=Meetup Reminder:MAILTO:info@meetup.com" + "\n" +
    "CLASS:PUBLIC" + "\n" +
    // "CREATED:20220119T120306Z" + "\n" +
    // "GEO:41.40;2.17" + "\n" +
    "LOCATION:" + eventForm?.locationAddress + ", " + eventForm?.locationName + ", " + String(eventForm?.eventZipCode) +
    "\n" +
    // "URL:https://www.meetup.com/Life-Drawing/events/283355921/" + "\n" +
    "SEQUENCE:2" + "\n" +
    // "LAST-MODIFIED:20220119T120306Z" + "\n" +
    "UID:event_283355921@black_health_data_app_management" + "\n" +
    "END:VEVENT" + "\n" +
    "END:VCALENDAR"
  
    var data = new File([textData],{ type: "text/calendar" });
    // If we are replacing a previously generated file we need to
    // manually revoke the object URL to avoid memory leaks.
    // if (icsFile !== null) {
    //   window.URL.revokeObjectURL(icsFile);
    // }
  
    // icsFile = window.URL.createObjectURL(data);
    let IcsfileEncodedToBase64 = await blobToBase64(data) 
    const result = await IcsfileEncodedToBase64
    
    setEventForm((prev)=> ({...prev, icsUrlFile: result}))
  }

  const notifyMessage = () => {
    toast.success("The event is being created", {
      position: toast.POSITION.TOP_CENTER,
    });
  };

  const submitEventForm = async () => {
    //await makeIcsFile(eventForm)
    setLoading(true)
        await axios.post(`${process.env.NEXT_PUBLIC_SERVER_URL}/events`, eventForm)
        .then(response => {
            if (response.data.statusText==='OK') {
              setLoading(false)
              //setResponseStatus({ success: true, statusMessage: "Your event is being saved"})
              //setShowResponseStatus(!showResponseStatus)
              // setTimeout(()=>{
              //    router.push("/events") 
              // },1500)

              notifyMessage();
            setTimeout(() => {
              router.push("/events") 
            }, 15000);
            } 
        })
        .catch(function (error) {
            setLoading(false)
            setResponseStatus({ success: false, statusMessage: "Request Failed"})
            setShowResponseStatus(!showResponseStatus)
            console.error("error: ", error)
    });
  }
 
  useEffect(() => {
    setEventForm({...eventForm, userID: userId})
    makeIcsFile(eventForm)

  }, [userId,eventForm.eventDate,
    eventForm.eventDate, eventForm.eventStartTime,
    eventForm.eventName,eventForm.eventDescription,eventForm.eventFinishTime, eventForm.eventZipCode,
    eventForm.onlineEventTypeName, eventForm.inPersonEventTypeName
  ])


  return (
    <>
    <Layout showStatusHeader={true}>
    <ToastContainer autoClose={15000} />
      <PageTopHeading
        backBtn={true}
        dashboardBtn={true}
        pageTitle={"Register an event"}
      />
      <div className="container mx-auto border rounded-lg mb-10">
        <div className="register-envent-form-container  grid gap-10 bg-white  rounded-lg px-7 my-10 ">
        
          
          {/* <Section1 eventForm={eventForm} setEventForm={setEventForm} programs={programs} /> */}
          <Section3_2 eventForm={eventForm} setEventForm={setEventForm} nysActivity={nysActivity}/>
          <WorkArea eventForm={eventForm} setEventForm={setEventForm}/>
          <Section2 eventForm={eventForm} setEventForm={setEventForm} />
          <EventDescription eventForm={eventForm} setEventForm={setEventForm}/>
          <AdditionalMaterial eventForm={eventForm} setEventForm={setEventForm}/>
          <Section9 eventForm={eventForm} setEventForm={setEventForm} />
          {eventForm?.onlineInPersonEventType === "In-person" && 
          <Section7 eventForm={eventForm} setEventForm={setEventForm} /> } 
          <LocationName eventForm={eventForm} setEventForm={setEventForm}/>
          <LocationAddress eventForm={eventForm} setEventForm={setEventForm}/>
          <ZipCode eventForm={eventForm} setEventForm={setEventForm}/>
        {/*   <Section3 eventForm={eventForm} setEventForm={setEventForm} eventTypes={eventTypes}/> */}
          <Section4 eventForm={eventForm} setEventForm={setEventForm} />
          <Section5 eventForm={eventForm} setEventForm={setEventForm} />
          <Section6 eventForm={eventForm} setEventForm={setEventForm} />
          <Section8 eventForm={eventForm} setEventForm={setEventForm} />
          
        </div>
        
      </div>
      <div className="flex justify-center">
       {loading && <Loader/>} 
        </div>   
      <div className="flex justify-center my-10">
        
        <button className="py-2 px-5 flex items-center rounded bg-black text-white font-semibold" onClick={submitEventForm}>
            <img src="/check-save-and-finish.svg" alt="register event icon" className="mr-2"/>
            Create event
        </button>
        </div> 
    </Layout>
    {showResponseStatus && <ResponseStatusModal setShowResponseStatus={setShowResponseStatus} responseStatus={responseStatus}/>}
    </>
  );
};

export default Register;

export const getServerSideProps = withPageAuthRequired({
    async getServerSideProps(ctx) {
      const [programs, locationTypes, areasOfFocus, eventTypes] = await Promise.all([
        fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/programs`).then((r) =>
          r.json()
        ),
        fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/event_location_type`).then((r) =>
          r.json()
        ),
        fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/health_area_of_focus`).then((r) =>
          r.json()
        ),
        fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/event_type`).then((r) =>
          r.json()
        ),

      ]);
      return { props: { programs: programs, locationTypes:locationTypes, areasOfFocus:areasOfFocus, eventTypes: eventTypes } };
  
    },
  });

