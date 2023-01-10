import React from "react";

const Section6 = ({eventForm, setEventForm}) => {
  const handleForm = (e) => {
    setEventForm(previous => ({...previous, eventFinishTime: e.target.value}))
  }
  return (
    <label className="mb-7 flex flex-col">
      <h2 className=" font-black">
       What time will the event finish?
       <span className='text-xl text-red-500 ml-2'>*required</span>
      </h2><br />
      <input type="time" 
      name="eventFinishTime" 
      className='border rounded p-2 text-lg w-48' 
      onChange={handleForm}
      defaultValue={eventForm.eventFinishTime}
      />
    </label>
  );
};

export default Section6;
