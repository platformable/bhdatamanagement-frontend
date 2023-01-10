import React from "react";

const EventDescription = ({eventForm,setEventForm,event}) => {
  
  return (
    <div className="">
       <h2 className="mb-7 font-black">Event description<span className='text-xl text-red-500 ml-2'>*required</span></h2>

      <textarea
        className="p-4 block w-full text-lg h-52 bg-white break-all border-black rounded-md overflow-hidden"
        role="textbox"
        name="eventDescription"
        placeholder=""
        onChange={(e) =>
          setEventForm((previous) => ({
            ...previous,
            [e.target.name]:e.target.value
          }))
        }
        defaultValue={event?event.eventdescription:""}
      />
     
    </div>
  );
};

export default EventDescription;
