import React from "react";

const EventChallenges = ({eventForm,setEventForm,event}) => {
  return (
    <div className='question-body'>
      <h2 className="mb-7 font-black">Event challenges: Please briefly describe any challenges you faced when organizing or running your event.</h2>
      <label htmlFor="eventChallenges">
        <textarea
          className="p-4 block md:w-full w-5/6 text-lg h-52 bg-white break-all border-black rounded-md overflow-hidden"
          role="textbox"
          name="eventChallenges"
          placeholder=""
          onChange={(e) =>
            setEventForm((previous) => ({
              ...previous,
              [e.target.name]: e.target.value,
            }))
          }
          defaultValue={eventForm ? eventForm.eventChallenges : ""}
        />
      </label>
    </div>
  );
};

export default EventChallenges;
