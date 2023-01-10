import React from "react";

const Section7 = ({eventForm, setEventForm}) => {
  const handleForm = (e) => {
    setEventForm(previous => ({...previous, eventStartTime: e.target.value}))
  }
  return (
    <label className="flex flex-col">
      <h2 className=" font-black">
       Event start time
      </h2><br />
      <input type="time" 
      name="eventStartTime" 
      className='border rounded p-2 text-lg w-48' 
      onChange={handleForm}
      defaultValue={eventForm?.eventStartTime}
      />
    </label>
  );
};

export default Section7;
