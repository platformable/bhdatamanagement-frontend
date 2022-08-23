import React, { useEffect, useState } from "react";
import Section1 from "../../components/events/Section1";
import Section2 from "../../components/events/Section2";
import Section3 from "../../components/events/Section3";
import Section4 from "../../components/events/Section4";
import Section5 from "../../components/events/Section5";
import Section6 from "../../components/events/Section6";
import Section7 from "../../components/events/Section7";
import Section8 from "../../components/events/Section8";
import Layout from "../../components/Layout";
import PageTopHeading from "../../components/PageTopHeading";
import { useRouter } from 'next/router'

import {  useUser, withPageAuthRequired } from "@auth0/nextjs-auth0";

import axios from "axios"
import ResponseStatusModal from "../../components/ResponseStatusModal";

const Register = ({programs,locationTypes, areasOfFocus, eventTypes}) => {
  const router = useRouter()
  const { user, error, isLoading } = useUser();
  const [showResponseStatus, setShowResponseStatus] = useState(false)
  const [responseStatus, setResponseStatus] = useState ({})
  const [eventForm, setEventForm] = useState({
    userID: "",
    eventDateCreated: new Date(),
    programID: "",
    programName: "",
    eventName: "",
    eventDate: "",
    eventStartTime: "",
    eventFinishTime: "",
    eventLocationTypeID: "",
    eventLocationTypeName: "",
    // eventZipCode: "",
    healthAreaOfFocusID: "",
    healthAreaOfFocusName: "",
    eventTypeID: "",
    eventTypeName: "",
  });
  const userId = user && user.sub
  
  useEffect(() => {
    setEventForm({...eventForm, userID: userId})
  }, [userId])
  
  
  const submitEventForm = async () => {
 
    const isEmpty = Object.values(eventForm).some(value => !value)
    
    if (!isEmpty) {
        axios.post(`${process.env.NEXT_PUBLIC_SERVER_URL}/events`, eventForm)
        .then(response => {
            if (response.data.statusText==='OK') {
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
    } else {
      setResponseStatus({ success: false, statusMessage: "Please complete all the fields"})
      setShowResponseStatus(!showResponseStatus)
    }
  }
  

  console.log("eventForm",eventForm)
  return (
    <>
    <Layout>
      <PageTopHeading
        backBtn={true}
        dashboardBtn={true}
        pageTitle={"Register an event"}
      />
      <div className="container mx-auto md:px-0 px-5  border rounded-lg my-10 py-5">
        <div className="register-envent-form-container  grid gap-1 bg-white  rounded-lg p-1 my-10 ">
          <Section1 eventForm={eventForm} setEventForm={setEventForm} programs={programs} />
          <Section2 eventForm={eventForm} setEventForm={setEventForm} />
          <Section3 eventForm={eventForm} setEventForm={setEventForm} eventTypes={eventTypes}/>
         
            <Section4 eventForm={eventForm} setEventForm={setEventForm} />
            <Section5 eventForm={eventForm} setEventForm={setEventForm} />
            <Section6 eventForm={eventForm} setEventForm={setEventForm} />

          <Section7 eventForm={eventForm} setEventForm={setEventForm} locationTypes={locationTypes}/>
          <Section8 eventForm={eventForm} setEventForm={setEventForm} />
        </div>
        <div className="flex justify-center">
        <button className="py-2 px-5 flex items-center rounded bg-black text-white font-semibold" onClick={submitEventForm}>
            <img src="/check-save-and-finish.svg" alt="register event icon" className="mr-2"/>
            Create event
        </button>
        </div>
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

