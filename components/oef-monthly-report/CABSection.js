import React, { useState, useEffect } from "react";
import useCopyToClipboard from "../../utils/useCopyToClipboard";
import ResourcesDistributedChart from "./ResourcesDistributedChart";
import {reverseDate} from '../../utils/helpers'
const CABSection = ({
  selectedEventsOutputs,
  selectedEvents,
  getHrefImage,
  selectedDate,
}) => {
  const [cabEvents, setCabEvents] = useState(selectedEvents.filter(event => event._surveyname === 'oef-cab'))
  const [stadistics, setStadistics] = useState([]);
  const [value, copy] = useCopyToClipboard();
  const reversedDate = {
    start: reverseDate(selectedDate.start),
    finish: reverseDate(selectedDate.finish),
  };
 
  const clusters = cabEvents.reduce((acc, current) => {
    if (!current.cluster ) return acc;  
    const oneWordValue = current.cluster.replace('Cluster', '').trim();
    if (!acc.includes(oneWordValue)) {
      return [...acc, oneWordValue] 
    }
    return acc;
    // (acc.length > 1 && acc.includes(oneWordValue)) ? null : [...acc, oneWordValue] 
  }, [])

  const textToClipboard = async (htmlID) => {
    const element = document.getElementById(htmlID);
    console.log(element.innerHTML);
    const blob = new Blob([element.textContent], { type: "text/plain" });
    await copy(blob);
  };
  return (
    <section className="grid gap-7">
     <h1 className="bg-red bg-red-200 text-white py-2 px-3">Community Advisory Board Meetings</h1>
     <div className="grid gap-10">
      <p>There were {cabEvents.length} CAB meetings held in [insert month and year manually], representing the clusters: {clusters.join(', ')}.</p>
      <div className="grid gap-7 mb-10">
        {cabEvents &&
          cabEvents.map((event, index) => (
            <div key={index} className="">
              <h3 className="font-bold mb-2">
                {event.eventname} - {" "}
                {new Date(event.eventdate).toLocaleDateString("en-US", {
                  month: "long",
                  day: "2-digit",
                  year: "numeric",
                })}{" "}
                <br /> {event.deliverypartner}
              </h3>
              <p>{event.eventhighlights}</p>
            </div>
          ))}
      </div>
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

export default CABSection;
