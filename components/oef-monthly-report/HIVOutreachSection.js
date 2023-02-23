import React, { useState, useEffect } from "react";
import GenderIdentityChart from "../nys-monthly-report/GenderIdentityChart";
import AgeChart from "../nys-monthly-report/AgeChart";
import RaceChart from "../nys-monthly-report/RaceChart";
import SexualOrientationChart from "../nys-monthly-report/SexualOrientationChart";
const HIVOutreachSection = ({
  selectedEvents,
  selectedEventsOutputs,
  getHrefImage,
  selectedDate,
}) => {
  function handleCopy() {
    const data = document.querySelector("#events-description").innerText;
    console.log("data", data);
    navigator.clipboard.writeText(data);
  }

  return (
    <section>
      <h1 className="font-black mb-7">HIV Outreach Events</h1>
      <div className="grid grid-cols-1 gap-10">
        
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

export default HIVOutreachSection;
