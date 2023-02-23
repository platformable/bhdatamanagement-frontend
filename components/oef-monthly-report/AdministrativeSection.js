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

  return (
    <section>
      <h1 className="font-black mb-7">Administrative</h1>
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

export default AdministrativeSection;
