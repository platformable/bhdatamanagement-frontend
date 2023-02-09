import React from "react";

const EventQuestions = ({eventForm,setEventForm,event}) => {
  return (
    <div className='question-body'>
      <h2 className="mb-7 font-black">What were the main discussion topics people raised about HIV, PrEP, or safer sex?</h2>
      <label htmlFor="partnerOrganization1">
        <textarea
          className="p-4 block md:w-full w-5/6 text-lg h-52 bg-white break-all border-black rounded-md overflow-hidden"
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
