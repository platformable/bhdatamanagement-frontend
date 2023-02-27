import React, { useState } from "react";
import TypeOfEventChart from "./TypeOfEventChart";
import EventLocationChart from "./EventLocationChart";

const AdministrativeSection = ({
  selectedEvents,
  selectedEventsOutputs,
  selectedDate,
}) => {
  function handleCopy() {
    const data = document.querySelector("#events-description").innerText;
    console.log("data", data);
    navigator.clipboard.writeText(data);
  }


  console.log("selectedEvents",selectedEvents)
  console.log("selectedEventsOutputs",selectedEventsOutputs)

  const numbersOfOefEvents =selectedEvents.length
  const totalNumberOfParticipantsSurveys=selectedEventsOutputs.length

  /* totalAttendees */

  let totalAttendees=0
  const sumTotalAttendees=selectedEvents.forEach(element => {
    if(element.totalattendees===0){
      return null
    } else {
      totalAttendees+=element.totalattendees
    }  
   });

   /* NationalAwarenessDay */
   const totallNationalAwarenessDay=[]

   const sumTotalNationalAwarenessDay=selectedEvents.forEach(element => {
    if(element.nationalawarenessday===null || element.nationalawarenessday===''){
      return 
    } else {
 
      totallNationalAwarenessDay.push(element.nationalawarenessday)
    }  
   });

  const totallNationalAwarenessDayOther=[]

   const sumTotalNationalAwarenessDayOther=selectedEvents.forEach(element => {
    if(element.nationalawarenessdayother===null || element.nationalawarenessdayother===''){
      return 
    } else {
    
      totallNationalAwarenessDay.push(element.nationalawarenessdayother)
    }  
   });

   /* PREPSAFESEX */
   let totalTalkedHivPrepSaferSex=0
   const sumTotalTalkedHivPrepSaferSex=selectedEvents.forEach(element => {
     if(element.totaltalkedhivprepsafersex===0){
       return null
     } else {
      totalTalkedHivPrepSaferSex+=element.totaltalkedhivprepsafersex
     }  
    });

    /* IS CLUSTER */
   let isClusterEvent=0
   const sumIsClusterEvent=selectedEvents.forEach(element => {
     if(!element.isclusterevent){
       return null
     } else {
      isClusterEvent+=1
     }  
    });


    /* SURVEYNAME = bh-cbt-post-event */
   let totalNumberOfCbtPostEvent=0
   const sumNumberOfCbtPostEvents=selectedEvents.forEach(element => {
     if(element.surveyname==='bh-cbt-post-event'){
      totalNumberOfCbtPostEvent+=1
     }  
    });

    let totalNumberOfCabPostEvent=0
   const sumNumberOfCabPostEvents=selectedEvents.forEach(element => {
     if(element.surveyname==='oef-cab'){
      totalNumberOfCabPostEvent+=1
     }  
    });
   


  return (
    <section>
      <h1 className="font-black mb-7">Administrative</h1>
      <div className="grid grid-cols-1 gap-10">
        <p>{`[manually type number] ${numbersOfOefEvents} events were delivered in [manually insert month here], reaching a total ${totalAttendees} people. National Awareness Days this month included: ${totallNationalAwarenessDay.join(', ')}. A total of ${totalNumberOfParticipantsSurveys} participant sign-in sheets were completed at the events. Of the people reached,  ${totalTalkedHivPrepSaferSex}  received verbal and educational information about HIV, PrEP, and safer sex messages. There were ${isClusterEvent} cluster events in January.

There was ${totalNumberOfCbtPostEvent}  CBT workshop held as well as  ${totalNumberOfCabPostEvent} CAB meetings.`}</p>
        
      </div>
      <button
          // onClick={() => textToClipboard("resources-table")}
          className="mt-7 px-5 py-2 text-lg border hover:bg-black pointer-events-none hover:text-white rounded shadow"
        >
          Select and right-click to copy the text 
        </button>
    </section>
  );
};

export default AdministrativeSection;
