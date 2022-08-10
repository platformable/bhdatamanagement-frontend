import React, { useState } from "react";
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

import {  withPageAuthRequired } from "@auth0/nextjs-auth0";


import axios from "axios"

const Register = ({programs,locationTypes, areasOfFocus, eventTypes}) => {
    console.log(programs,locationTypes, areasOfFocus, eventTypes)
  const [eventForm, setEventForm] = useState({
    eventDateCreated: new Date()
  });

  const submitEventForm = async () => {
    console.log(eventForm)
    const isEmpty = Object.values(eventForm).some(value => !value)
    
    if (!isEmpty) {
        axios.post(`${process.env.NEXT_PUBLIC_SERVER_URL}/`, {
            eventForm
        })
        .then(response =>
            console.log(response)
          )
          .catch(function (error) {
                // setErrorMessage(error.message)
                console.error("error: ", error.message)
          });
    }
  }
  
  return (
    <Layout>
      <PageTopHeading
        backBtn={true}
        dashboardBtn={true}
        pageTitle={"Register an event"}
      />
      <div className="container mx-auto md:px-0 px-5 flex flex-col items-center">
        <div className="register-envent-form-container  grid gap-1 bg-white border-dark-violet rounded-lg p-1 my-10 shadow-lg">
          <Section1 eventForm={eventForm} setEventForm={setEventForm} programs={programs} />
          <Section2 eventForm={eventForm} setEventForm={setEventForm} />
          <Section3 eventForm={eventForm} setEventForm={setEventForm} eventTypes={eventTypes}/>
          <div className="grid grid-cols-1 md:grid-cols-3">
            <Section4 eventForm={eventForm} setEventForm={setEventForm} />
            <Section5 eventForm={eventForm} setEventForm={setEventForm} />
            <Section6 eventForm={eventForm} setEventForm={setEventForm} />
          </div>
          <Section7 eventForm={eventForm} setEventForm={setEventForm} locationTypes={locationTypes}/>
          <Section8 eventForm={eventForm} setEventForm={setEventForm} />
        </div>
        <button className="py-2 px-5 flex items-center rounded bg-violet text-white font-semibold" onClick={submitEventForm}>
            <img src="/check-save-and-finish.svg" alt="register event icon" className="mr-2"/>
            Create event
        </button>
      </div>    
    </Layout>
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

