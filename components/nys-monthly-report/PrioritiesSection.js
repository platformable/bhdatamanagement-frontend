import React, { useState } from "react";
import TypeOfEventChart from "./TypeOfEventChart";
import EventLocationChart from "./EventLocationChart";

const PrioritiesSection = ({
  selectedEvents,
  selectedEventsOutputs,
  selectedDate,
  getHrefImage,
}) => {
  function handleCopy() {
    const data = document.querySelector("#events-description").innerText;
    console.log("data", data);
    navigator.clipboard.writeText(data);
  }
console.log("priorities", selectedEventsOutputs)
  return (
    <section>
      <h1 className="font-black mb-7">Priorities and Program Accomplishments / Highlights</h1>
      <div className="grid grid-cols-1 gap-10">
        <TypeOfEventChart
          getHrefImage={getHrefImage}
          chartData={selectedEventsOutputs}
          selectedDate={selectedDate}
        />
        <EventLocationChart
          getHrefImage={getHrefImage}
          chartData={selectedEventsOutputs}
          selectedDate={selectedDate}

        />
        <div>
          <div id="events-description" className="mb-10">
            <h1 className="font-black mb-7">List of in-person events</h1>
            <div className="grid gap-7">
              {selectedEventsOutputs
                ?.sort((a, b) => new Date(a.eventdate) - new Date(b.eventdate))
                .map(
                  (event) =>
                    event.onlineinpersoneventtype === "In-person" && (
                      <div>
                        <h3 className="font-black mb-2">
                          {new Date(event.eventdate).toLocaleDateString(
                            "en-US",
                            {
                              month: "long",
                              day: "numeric",
                              year: "numeric",
                            }
                          )}
                        </h3>
                        <p>{event.eventdescription}</p>
                        <p>{event.eventhighlights}</p>
                      </div>
                    )
                )}
            </div>

            <button
          // onClick={() => textToClipboard("resources-table")}
          className="mt-7 px-5 py-2 text-lg border hover:bg-black pointer-events-none hover:text-white rounded shadow"
        >
          Select and right-click to copy the text 
        </button>
          </div>
          <div>
            <h1 className="font-black mb-7">Online learning</h1>
            
            <div  className="grid gap-7">
              {selectedEventsOutputs
                ?.sort((a, b) => new Date(a.eventdate) - new Date(b.eventdate))
                .map(
                  (event) =>
                    event.onlineinpersoneventtype === "Online" && (
                      <div>
                        <h3 className="font-black">
                          {new Date(event.eventdate).toLocaleDateString(
                            "en-US",
                            {
                              month: "long",
                              day: "numeric",
                              year: "numeric",
                            }
                          )}
                        </h3>
                        <p>{event.eventdescription}</p>
                        <p>{event.eventhighlights}</p>
                      </div>
                    )
                )}
            </div>

            <button
          // onClick={() => textToClipboard("resources-table")}
          className="mt-7 px-5 py-2 text-lg border hover:bg-black pointer-events-none hover:text-white rounded shadow"
        >
          Select and right-click to copy the text 
        </button>
          </div>
          {/* <button onClick={handleCopy} className="px-5 mt-5 py-2 text-lg border hover:bg-black hover:text-white rounded shadow">
            Copy to clipboard
          </button> */}
        </div>
      </div>
    </section>
  );
};
function copyText() {
  var Text = document.getElementById("events-description");
  // console.log(Text.innerHTML);
  navigator.clipboard.writeText(Text.innerHTML);

}
export default PrioritiesSection;
