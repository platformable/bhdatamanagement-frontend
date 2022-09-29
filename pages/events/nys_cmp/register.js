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
import Loader from "../../../components/Loader";
import EventDescription from "../../../components/events/EventDescription";
import AdditionalMaterial from "../../../components/events/AdditionalMaterial";
import Layout from "../../../components/Layout";
import PageTopHeading from "../../../components/PageTopHeading";
import { useRouter } from 'next/router'
import { nysActivity } from "../../../utils/sharedData";

import {  useUser, withPageAuthRequired } from "@auth0/nextjs-auth0";

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
    eventStartTime: "",
    eventFinishTime: "",
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
createdByLastname:user && user["https://lanuevatest.herokuapp.com/lastname"]
  });
  const userId = user && user.sub
  
  useEffect(() => {
    setEventForm({...eventForm, userID: userId})
  }, [userId])
  
  console.log("nys state form",eventForm)

  const submitEventForm = async () => {
    
    setLoading(true)
        axios.post(`${process.env.NEXT_PUBLIC_SERVER_URL}/events`, eventForm)
        .then(response => {
            if (response.data.statusText==='OK') {
              makeIcsFile({start: eventForm.eventStartTime,end: eventForm.eventStartTime}, eventForm.eventName, eventForm.eventDescription)
              setLoading(false)
              setResponseStatus({ success: true, statusMessage: "Your Event has been saved"})
              setShowResponseStatus(!showResponseStatus)
              setTimeout(()=>{
                 router.push("/events") 
              },1500)
            } 
        })
        .catch(function (error) {
            setResponseStatus({ success: false, statusMessage: "Request Failed"})
            setShowResponseStatus(!showResponseStatus)
            console.error("error: ", error)
    });
  }
  function convertDate(date) {
    console.log(date)
    var event = new Date(date).toISOString();
    event = event.split("T")[0];
    event = event.split("-");
    event = event.join("");
    return event;
  }
  function makeIcsFile(date, summary, description) {
    let icsFile
    var test =
      "BEGIN:VCALENDAR\n" +
      "CALSCALE:GREGORIAN\n" +
      "METHOD:PUBLISH\n" +
      "PRODID:-//Test Cal//EN\n" +
      "VERSION:2.0\n" +
      "BEGIN:VEVENT\n" +
      "UID:test-1\n" +
      "DTSTART;VALUE=DATE:" +
      date.start +
      "\n" +
      "DTEND;VALUE=DATE:" +
      date.end +
      "\n" +
      "SUMMARY:" +
      summary +
      "\n" +
      "DESCRIPTION:" +
      description +
      "\n" +
      "END:VEVENT\n" +
      "END:VCALENDAR";
  
    var data = new File([test], { type: "text/plain" });
  
    // If we are replacing a previously generated file we need to
    // manually revoke the object URL to avoid memory leaks.
    if (icsFile !== null) {
      window.URL.revokeObjectURL(icsFile);
    }
  
    icsFile = window.URL.createObjectURL(data);
  
    return icsFile;
  }


  return (
    <>
    <Layout showStatusHeader={true}>
      <PageTopHeading
        backBtn={true}
        dashboardBtn={true}
        pageTitle={"Register an event"}
      />
      <div className="container mx-auto border rounded-lg mb-10">
        <div className="register-envent-form-container  grid gap-10 bg-white  rounded-lg px-7 my-10 ">
          {/* <Section1 eventForm={eventForm} setEventForm={setEventForm} programs={programs} /> */}
          <Section3_2 eventForm={eventForm} setEventForm={setEventForm} nysActivity={nysActivity}/>
          <Section2 eventForm={eventForm} setEventForm={setEventForm} />
          <EventDescription eventForm={eventForm} setEventForm={setEventForm}/>
          <AdditionalMaterial eventForm={eventForm} setEventForm={setEventForm}/>
          <Section9 eventForm={eventForm} setEventForm={setEventForm} />
        {/*   <Section3 eventForm={eventForm} setEventForm={setEventForm} eventTypes={eventTypes}/> */}
          <Section4 eventForm={eventForm} setEventForm={setEventForm} />
          <Section5 eventForm={eventForm} setEventForm={setEventForm} />
          <Section6 eventForm={eventForm} setEventForm={setEventForm} />
          {/* <Section7 eventForm={eventForm} setEventForm={setEventForm} locationTypes={locationTypes}/> */}
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

