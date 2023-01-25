import React from "react";

const EventQuestions = ({eventForm,setEventForm,event}) => {
  return (
    <div className='question-body'>
      <h2 className="mb-7 font-black">How was HIV discussed at the CAB Meeting?</h2>
      <label htmlFor="partnerOrganization1">
        <textarea
          className="p-4 block w-full text-lg h-52 bg-white break-all border-black rounded-md overflow-hidden"
          role="textbox"
          name="eventQuestions"
          placeholder=""
          onChange={(e) =>
            setEventForm((previous) => ({
              ...previous,
              [e.target.name]: e.target.value,
            }))
          }
          defaultValue={eventForm ? eventForm.eventQuestions : ""}
        />
      </label>
    </div>
  );
};

export default EventQuestions;
