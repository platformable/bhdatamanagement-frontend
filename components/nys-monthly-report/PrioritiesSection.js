import React, {useState} from 'react'
import TypeOfEventChart from "./TypeOfEventChart";
import EventLocationChart from "./EventLocationChart";

const PrioritiesSection = ({selectedEvents, selectedEventsOutputs, getHrefImage}) => {
    

  return (
    <div className="grid grid-cols-1 gap-10">
        <TypeOfEventChart getHrefImage={getHrefImage} chartData={selectedEvents} />
        <EventLocationChart getHrefImage={getHrefImage} chartData={selectedEvents}/>
        <section >
          <h1 className='font-black'>List of in-person events</h1>
          <div id="events-description" className='grid gap-7'>
            {selectedEvents?.map(event => event.onlineinpersoneventtype === "In-person" && 
            (<div>
              <h3 className='font-black'>{new Date(event.eventdate).toLocaleDateString("en-US", {month:"long", day: "numeric", year:"numeric"})}</h3>
              <p>{event.eventdescription}</p>
              </div>)) }
          </div>
          <button  className='px-5 mt-5 py-2 text-lg border hover:bg-black hover:text-white rounded shadow'>Copy to clipboard</button>
        </section>
    </div>
  )
}
function copyText() {
      
  /* Select text area by id*/
  var Text = document.getElementById("events-description");
  console.log(Text.innerHTML)
  /* Select the text inside text area. */
  // Text.select();

  /* Copy selected text into clipboard */
  navigator.clipboard.writeText(Text.innerHTML);

  /* Set the copied text as text for 
  div with id clipboard */
  // document.getElementById("clipboard").innerHTML = Text.value;
}
export default PrioritiesSection