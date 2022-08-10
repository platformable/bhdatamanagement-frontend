import React from "react";

const Section6 = ({eventForm, setEventForm}) => {
  const handleForm = (e) => {
    setEventForm(previous => ({...previous, eventFinishTime: e.target.value}))
  }
  return (
    <div className="p-5 bg-extra-light-violet rounded text-center">
      <h2 className="mb-3 font-bold">
        <span className="text-color-violet">6</span> What time will the event finish?
      </h2>
      <input type="time" className='border-dark-violet rounded p-2 text-lg' onChange={handleForm}/>
    </div>
  );
};

export default Section6;
