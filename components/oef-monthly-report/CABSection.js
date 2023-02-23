import React, { useState, useEffect } from "react";
import useCopyToClipboard from "../../utils/useCopyToClipboard";
import ResourcesDistributedChart from "./ResourcesDistributedChart";
import {reverseDate} from '../../utils/helpers'
const CABSection = ({
  selectedEventsOutputs,
  getHrefImage,
  selectedDate,
}) => {
  const [stadistics, setStadistics] = useState([]);
  const [value, copy] = useCopyToClipboard();
  
  const reversedDate = {
    start: reverseDate(selectedDate.start),
    finish: reverseDate(selectedDate.finish),
  };
 

  const textToClipboard = async (htmlID) => {
    const element = document.getElementById(htmlID);
    console.log(element.innerHTML);
    const blob = new Blob([element.textContent], { type: "text/plain" });
    await copy(blob);
  };
  return (
    <section className="grid gap-7">
     <h1 className="font-black">Community Advisory Board Meetings</h1>
     <button
          // onClick={() => textToClipboard("resources-table")}
          className="mt-7 px-5 py-2 text-lg border hover:bg-black pointer-events-none hover:text-white rounded shadow"
        >
          Select and right-click to copy the text 
        </button>
    </section>
  );
};

export default CABSection;
