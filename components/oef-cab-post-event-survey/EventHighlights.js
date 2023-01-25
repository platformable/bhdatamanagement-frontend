import React from "react";

const EventHighlights = ({eventForm,setEventForm,event}) => {
  return (
    <div className='question-body'>
      <h2 className="mb-7 font-black">Event narrative: Please use enough detail that we can picture your event. Mention any special guests or conversation topics that came up. Include what your next steps are - what do you plan to do after this discussion</h2>
      <label htmlFor="partnerOrganization1">
        <textarea
          className="p-4 block w-full text-lg h-52 bg-white break-all border-black rounded-md overflow-hidden"
          role="textbox"
          name="eventHighlights"
          placeholder=""
          onChange={(e) =>
            setEventForm((previous) => ({
              ...previous,
              [e.target.name]: e.target.value,
            }))
          }
          defaultValue={eventForm ? eventForm.eventHighlights : ""}
        />
      </label>
    </div>
  );
};

export default EventHighlights;
