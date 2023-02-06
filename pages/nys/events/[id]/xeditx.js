import React from 'react';

const Xeditx = () => {
  return (
    <div>
      
    </div>
  );
}

export default Xeditx;



/* import React, { useEffect, useState } from "react";
import Section1 from "../../../components/events/Section1";
import Section2 from "../../../components/events/Section2";
import Section3 from "../../../components/events/Section3";
import Section3_2 from "../../../components/events/Section3-2";
import Section4 from "../../../components/events/Section4";
import Section5 from "../../../components/events/Section5";
import Section6 from "../../../components/events/Section6";
import Section7 from "../../../components/events/Section7";
import Section8 from "../../../components/events/Section8";
import Layout from "../../../components/Layout";
import PageTopHeading from "../../../components/PageTopHeading";
import { useRouter } from 'next/router'
import { nysActivity } from "../../../utils/sharedData";

import {  useUser, withPageAuthRequired } from "@auth0/nextjs-auth0";

import axios from "axios"
import ResponseStatusModal from "../../../components/ResponseStatusModal";

const EditEvent = ({event,programs,locationTypes, areasOfFocus, eventTypes}) => {
  const router = useRouter()
  const { user, error, isLoading } = useUser();
  const [showResponseStatus, setShowResponseStatus] = useState(false)
  const [responseStatus, setResponseStatus] = useState ({})
  const [eventForm, setEventForm] = useState({
    eventid: event?.id,
    userID: "",
    eventDateCreated: new Date(),
    programID: event?.programid || "",
    programName: event?.programname || "",
    eventName: event?.eventname || "",  
    eventDate: event?.eventdate.split('T')[0] || "",
    eventStartTime: event?.eventstarttime|| "",
    eventFinishTime: event?.eventfinishtime|| "",
    eventLocationTypeID: event?.eventlocationtypeid || "",
    eventLocationTypeName: event?.eventlocationtypename,
    // eventZipCode: "",
    healthAreaOfFocusID: event?.healthareaoffocusid || [],
    healthAreaOfFocusName: event?.healthareaoffocusname|| [],
    eventTypeID: event?.eventtypeid || "",
    nysActivity:event?.nysactivity || "",
    nysActivityOther:event?.nysactivityother || "",
    eventTypeName: event?.eventtypename,
  });
  const userId = user && user.sub;
  
  useEffect(() => {
    setEventForm({...eventForm, userID: userId})
  }, [userId])
  

  const submitEventForm = async () => {

    const isEmpty = Object.values(eventForm).some(value => !value)
    
    // if (!isEmpty) {
        axios.put(`${process.env.NEXT_PUBLIC_SERVER_URL}/events`, eventForm)
        .then(response => {
            console.log("response",response)

            if (response.data.statusText==='OK') {
              setResponseStatus({ success: true, statusMessage: "Your Event has been saved"})
              setShowResponseStatus(!showResponseStatus)
              setTimeout(()=>{
                router.push("/events") 
             },1500 )
            } 
        })
        .catch(function (error) {
            setResponseStatus({ success: false, statusMessage: error.message})
            setShowResponseStatus(!showResponseStatus)
            console.error("error: ", error)
    });
    // } else {
    //   setResponseStatus({ success: false, statusMessage: "Please complete all the fields"})
    //   setShowResponseStatus(!showResponseStatus)
    // }
  }
  
  return (
    <>
    <Layout showStatusHeader={true}>
      <PageTopHeading
        backBtn={true}
        dashboardBtn={true}
        pageTitle={"Update event"}
      />
      <div className="container mx-auto md:px-0 px-5 mb-10 items-center">
        <div className="register-envent-form-container  grid gap-10 bg-white border rounded-lg p-7 mb-5 pb-10 shadow-lg">

          <Section3_2 eventForm={eventForm} setEventForm={setEventForm} nysActivity={nysActivity}/>
          <Section2 eventForm={eventForm} setEventForm={setEventForm} event={event}/>
          <Section3 eventForm={eventForm} setEventForm={setEventForm} eventTypes={eventTypes} event={event}/>
            <Section4 eventForm={eventForm} setEventForm={setEventForm} event={event}/>
            <Section5 eventForm={eventForm} setEventForm={setEventForm} />
            <Section6 eventForm={eventForm} setEventForm={setEventForm} />
          <Section7 eventForm={eventForm} setEventForm={setEventForm} locationTypes={locationTypes} event={event}/>
          <Section8 eventForm={eventForm} setEventForm={setEventForm} event={event}/>
        </div>
        <div className="py-5 flex justify-center">
        <button className="py-2 px-5 flex items-center rounded bg-black text-white font-semibold" onClick={submitEventForm}>
            Update event
        </button>
        </div>
      </div>    
    </Layout>
    {showResponseStatus && <ResponseStatusModal setShowResponseStatus={setShowResponseStatus} responseStatus={responseStatus}/>}
    </>
  );
};

export default EditEvent;

export const getServerSideProps = withPageAuthRequired({
    async getServerSideProps(ctx) {
      const {id}=ctx.params
      const [event,programs, locationTypes, areasOfFocus, eventTypes] = await Promise.all([
        fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/events/${id}`)
        .then((r) =>r.json())
        .then(response=>response[0]),
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
      return { props: {event:event, programs: programs, locationTypes:locationTypes, areasOfFocus:areasOfFocus, eventTypes: eventTypes } };
  
    },
  });

 */