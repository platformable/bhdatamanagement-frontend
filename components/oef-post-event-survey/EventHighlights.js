import React from "react";

const EventHighlights = ({eventForm,setEventForm,event}) => {
  return (
    <div className='question-body'>
      <h2 className="mb-7 font-black">Event narrative: Please briefly describe the details of your event. Please note any highlights, such as a special guest or title of a film you showed that discussed HIV, PrEP and/or safer sex.</h2>
      <label htmlFor="partnerOrganization1">
        <textarea
          className="p-4 block md:w-full w-5/6 text-lg h-52 bg-white break-all border-black rounded-md overflow-hidden"
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
