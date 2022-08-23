import React from "react";

const Section6 = ({eventForm, setEventForm}) => {
  const handleForm = (e) => {
    setEventForm(previous => ({...previous, eventFinishTime: e.target.value}))
  }
  return (
    <div className="p-5 rounded ">
      <h2 className="mb-3 font-bold">
        <span className="">6</span> What time will the event finish?
      </h2>
      <input type="time" 
      name="eventFinishTime" 
      className='border rounded p-2 text-lg' 
      onChange={handleForm}
      defaultValue={eventForm.eventFinishTime}
      />
    </div>
  );
};

export default Section6;
