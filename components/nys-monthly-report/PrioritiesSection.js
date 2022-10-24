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

  return (
    <section>
      <h1 className="font-black mb-7">Priorities</h1>
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
                      </div>
                    )
                )}
            </div>
          </div>
          <div>
            <h1 className="font-black mb-7">List of online events</h1>
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
                      </div>
                    )
                )}
            </div>
          </div>
          <button onClick={handleCopy} className="px-5 mt-5 py-2 text-lg border hover:bg-black hover:text-white rounded shadow">
            Copy to clipboard
          </button>
        </div>
      </div>
    </section>
  );
};
function copyText() {
  /* Select text area by id*/
  var Text = document.getElementById("events-description");
  console.log(Text.innerHTML);
  /* Select the text inside text area. */
  // Text.select();

  /* Copy selected text into clipboard */
  navigator.clipboard.writeText(Text.innerHTML);

  /* Set the copied text as text for 
  div with id clipboard */
  // document.getElementById("clipboard").innerHTML = Text.value;
}
export default PrioritiesSection;
