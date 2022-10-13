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
  
  useEffect(() => {
    setEventForm({...eventForm, userID: userId})
  }, [userId])
  
  console.log("nys state form",eventForm)
 function makeIcsFile(event) {
    function convertDate(date, time) {
      console.log("this is the time", time)
      const dateParts = date.split("T")[0]
      const dateString = dateParts.split("-").join("")
      const timeString = time.split(":").join("") + "00"
      console.log("this is the time stirng ", timeString)

      return dateString + "T" + timeString + "Z"
    }
    //   Name of Event
    // Date of Event
    // Start Time of Event
    // Finish Time of Event
    // Online or in-person
    // Event type
    // Event location name
    // Event location address
    // Zip code
    // City Location
    let icsFile
    let test =
      "BEGIN:VCALENDAR\n" +
      "CALSCALE:GREGORIAN\n" +
      "METHOD:PUBLISH\n" +
      "PRODID:-//Black Health//EN\n" +
      "VERSION:2.0\n" +
      "BEGIN:VEVENT\n" +
      "UID:test-1\n" +
      `DTSTART;TZID=America/New_York:${convertDate(event?.eventDate, event?.eventStartTime)}` +
      "\n" +
      `DTEND;TZID=America/New_York:${convertDate(event?.eventDate, event?.eventFinishTime)}` +
      "\n" +
      "SUMMARY:" + event?.eventName +
      "\n" +
      "DESCRIPTION:" + "(" + event?.onlineInPersonEventType + ") - " + (event.inPersonEventTypeName === "" ? event.onlineEventTypeName : event.inPersonEventTypeName) + " - "+ event?.eventDescription +
      "\n" +
      "LOCATION:" + event?.locationAddress + ", " + event?.locationName + ", " + String(event?.eventZipCode) +
      "\n" +
      "END:VEVENT\n" +
      "END:VCALENDAR";
  
    var data = new File([test],{ type: "text/calendar" });
  
    // If we are replacing a previously generated file we need to
    // manually revoke the object URL to avoid memory leaks.
    if (icsFile !== null) {
      window.URL.revokeObjectURL(icsFile);
    }
  
    icsFile = window.URL.createObjectURL(data);
    setEventForm((prev)=> ({...prev, icsUrlFile: icsFile}))
  
    // return icsFile;
  }

  const notifyMessage = () => {
    toast.success("The event is being created", {
      position: toast.POSITION.TOP_CENTER,
    });
  };

  const submitEventForm = async () => {
    makeIcsFile(eventForm)
    setLoading(true)
        axios.post(`http://localhost:3500/events`, eventForm)
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
            }, 30000);
            } 
        })
        .catch(function (error) {
            setResponseStatus({ success: false, statusMessage: "Request Failed"})
            setShowResponseStatus(!showResponseStatus)
            console.error("error: ", error)
    });
  }
 
  


  return (
    <>
    <Layout showStatusHeader={true}>
    <ToastContainer autoClose={30000} />
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

