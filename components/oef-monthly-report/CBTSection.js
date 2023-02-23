import React from "react";

const CBTSection = ({selectedDate, selectedEvents, selectedEventsOutputs }) => {
  function handleCopy() {
    const data = document.querySelector("#challengesList").innerText;
    console.log("data", data);
    navigator.clipboard.writeText(data);
  }

  return (
    <div className="">
      <h1 className="font-black mb-7">Capacity Building Training</h1>
     
      <button
          // onClick={() => textToClipboard("resources-table")}
          className="mt-7 px-5 py-2 text-lg border hover:bg-black pointer-events-none hover:text-white rounded shadow"
        >
          Select and right-click to copy the text 
        </button>
    </div>
  );
};

export default CBTSection;
