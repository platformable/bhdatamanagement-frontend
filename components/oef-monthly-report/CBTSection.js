import React, { useState } from "react";
import { useEffect } from "react";
import CBTTrainingFeedbackChart from "./charts/CBTTrainingFeedbackChart";

const CBTSection = ({
  selectedDate,
  selectedEvents,
  selectedEventsOutputs,
}) => {
  const [cbtEvents, setCbtEvents] = useState(
    [...selectedEvents.filter((event) => event._surveyname === "bh-cbt-register")]
  );
  const [cbtParticipants, setCbtParticipants] = useState(
    [...selectedEventsOutputs.filter(
      (participant) => participant.surveyname === "cbt-participant"
    )]
  );
 
  console.log("events output",selectedEvents);

  function handleCopy(id) {
    const data = document.getElementById(id).innerText;
    console.log("data", data);
    navigator.clipboard.writeText(data);
  }
  const cbtCounts = {
    totalAttendees: 0,
    eventNames: []
  }
  const fboPositionCounts = {
    "Leader (Pastor, Imam, Deacon)": 0,
    "Coordinator": 0,
    "Youth Leader": 0,
    "Representative": 0,
    "Community Member": 0,
  };
  const fboPositionTotals = 0;

  const addPositionCounts = cbtParticipants.map((participant) => {
    if (participant.fboposition) {
      fboPositionTotals += 1;
      fboPositionCounts[participant.fboposition] += 1;
    }
  });

  const addCbtCounts = cbtEvents.map(event => {
    cbtCounts.totalAttendees += event.totalattendees
    if (event._eventname) cbtCounts.eventNames.push(`"${event._eventname}"`);
  })
  

  return (
    <div className="">
      <h1 className="bg-red bg-red-200  py-2 px-3 mb-7">
        Capacity Building Training
      </h1>
      <div className="grid gap-5 mb-10" id='cbt-section'>
        <p>
          {cbtEvents.length} CBT/s session was held in [insert month manually
          here] on the topic/s <span className="">{cbtCounts.eventNames.join(', ')}</span>. {cbtCounts.totalAttendees} people
          attended and {cbtParticipants.length} participants in total filled in a post-CBT survey. The
          <br />
          <br />
          The facilitator/s was/were: Disleiry Benitez.
          <br />
          <br />
          <br />
          {((fboPositionCounts["Coordinator"] / fboPositionTotals).toFixed() * 100) || 0}%
          of the respondents reported the title Coordinator,{" "}
          {((fboPositionCounts["Leader (Pastor, Imam, Deacon)"] /
            fboPositionTotals) *
            100).toFixed() || 0}
          % Leader (Pastor, Imam, Deacon),{" "}
          {((fboPositionCounts["Youth Leader"] / fboPositionTotals) * 100).toFixed() || 0}%
          Youth Leader,{" "}
          {((fboPositionCounts["Community Member"] / fboPositionTotals) * 100).toFixed() || 0}%
          Community Member, and{" "}
          {((fboPositionCounts["Representative"] / fboPositionTotals) * 100).toFixed() || 0}%
          Representative. The results of the post-training survey are shown in
          Figure 6. The feedback from the training was [manually insert feedback
          summary here].
        </p>
        
        <p>Feedback from the participants included:
          <br/>
          <ul className="mt-7 px-7">
            {cbtParticipants?.map(participant => participant.participantsuggestions && (
              <li className="list-disc list-inside">{participant.participantsuggestions}</li>
            ))}
          </ul>
        </p>
        <button
        onClick={(e) => handleCopy("cbt-section")}
        className="mt-7 px-5 py-2 text-lg border hover:bg-black hover:text-white rounded shadow"
      >
        Select and right-click to copy the text
      </button>
      </div>
      
      <CBTTrainingFeedbackChart selectedDate={selectedDate} cbtParticipants={cbtParticipants} />
    </div>
  );
};

export default CBTSection;
