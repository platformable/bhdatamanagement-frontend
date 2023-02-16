import React, { useState } from "react";
import Layout from "../Layout";
import PageTopHeading from "../PageTopHeading";
import { useUser, withPageAuthRequired } from "@auth0/nextjs-auth0";
/* import AirsEventSession from "../../components/airsForm/AirsEventSession";
import AirsDemographics from "../../components/airsForm/AirsDemographics";
import AirsMaterials from "../../components/airsForm/AirsMaterials";
import { Footer } from "./Footer"; */
import Section1 from "../oef-event-registration/Section1";
const CabRegisterPrint = React.forwardRef((props, ref) => {
  let { event} = props;
  // console.log("event", event);

  return (
    <>
    <div className="flex items-center gap-x-52 container mx-auto px-5 py-3 my-1 ">
        <img src="/airs_toprint/airs-form-logo.png" alt="airs form logo" width={45} />
        <h4 className="font-black justify-self-center text-center mt-2 mb-2">
          OEF HIV Outreach
        </h4>
      </div>
      <div ref={ref} className="grid gap-5 mx-3 border-black rounded-lg px-5 py-7">
      <div className="flex gap-x-1">
        <h3 className="font-black">Submitted by:</h3>
        <p>{event?.createdbyname}</p>
        <p>{event?.createdbylastname}</p>
      </div>

      <div className="flex gap-x-1">
        <h3 className="font-black">Enter your email address:</h3>
        <p>{event?.oefeventemail}</p>
      </div>

      <div className="flex gap-x-1">
        <h3 className="font-black">What is your role in your FBO:</h3>
        <p>{event?.eventrole}</p>
      </div>

      <div className="flex gap-x-1">
        <h3 className="font-black">Name of your Faith-Based Organization:</h3>
        <p>{event?.deliverypartner}</p>
      </div>

      <div className="flex gap-x-1">
        <h3 className="font-black">Which Quarter is meeting for?</h3>
        <p>{event?.eventname}</p>
      </div>

      <div className="flex gap-x-1">
        <h3 className="font-black">Event date:</h3>
        <p>{new Date(event.eventdate).toLocaleDateString('en-US', {month:'long', day: 'numeric', year: 'numeric'})}</p>
      </div>

      <div className="flex gap-x-1">
        <h3 className="font-black">Start time:</h3>
        <p>{event?.eventstarttime}</p>
      </div>

      <div className="flex gap-x-1">
        <h3 className="font-black">End time:</h3>
        <p>{event?.eventfinishtime}</p>
      </div>

      <div className="flex gap-x-1">
        <h3 className="font-black">Which cluster is this submission for?</h3>
        <p>{event?.cluster}</p>
      </div>
      
      <div className="">
        <h3 className="font-black">Which FBOs were involved?</h3>
        <ol className="mt-2" style={{marginLeft:'1rem', listStyle: 'ordinated'}}>{event?.clusterfbos.map(fbo => (
          <li><p>{fbo}</p></li>
        ))}</ol>
      </div>

      <div className="flex gap-x-1">
        <h3 className="font-black">How many CAB members attended this meeting? </h3>
        <p>{event?.totalattendees || 0}</p>
      </div>

      <div className="flex gap-x-1">
        <h3 className="font-black">How was HIV discussed at the CAB Meeting?</h3>
        <p>{event?.eventquestions}</p>
      </div>

      <div className="">
        <h3 className="font-black">Event narrative: Please use enough detail that we can picture your event. Mention any special guests or conversation topics that came up. 
        Include what your next steps are - what do you plan to do after this discussion:</h3>
        <p>{event?.eventhighlights || '-'}</p>
      </div>

      <div className="flex gap-x-1">
        <h3 className="font-black">Status:</h3>
        <p>{event.submissionstatus}</p>
      </div>

      <div className="flex gap-x-1">
        <h3 className="font-black">Notes:</h3>
        <p>{event?.submissionnotes || '-'}</p>
      </div>

      
    </div>
    </>
    
  );
});

CabRegisterPrint.displayName = "CabRegisterPrint";
export default CabRegisterPrint;

export const getServerSideProps = withPageAuthRequired({
  async getServerSideProps(ctx) {
    const { id } = ctx.params;
    const [event] = await Promise.all([
      fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/events/oef/cab/data_to_print${id}`
      )
        .then((r) => r.json())
        .then((response) => response[0]),
    ]);
    return {
      props: {
        event: event,
        selectedEventId: id,
      },
    };
  },
});
