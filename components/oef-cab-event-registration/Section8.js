import React from "react";

const Section8 = ({eventForm, setEventForm,event}) => {
  const handleForm = (e) => {
    setEventForm(previous => ({...previous, eventFinishTime: e.target.value}))
  }
  return (
    <label className="mb-7 flex flex-col">
      <h2 className=" font-black">
       End time
      </h2><br />
      <input type="time" 
      name="eventFinishTime" 
      className='border rounded p-2 text-lg w-48' 
      onChange={handleForm}
      defaultValue={event?.eventfinishtime}
      />
    </label>
  );
};

export default Section8;
