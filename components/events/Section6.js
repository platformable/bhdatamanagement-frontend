import React from "react";

const Section6 = ({eventForm, setEventForm}) => {
  return (
    <div className="p-5">
      <h2 className="mb-3 font-bold">
        <span className="text-color-violet">6</span> What time will the event finish?
      </h2>
      <input type="time" className='border-dark-violet rounded p-2 text-lg'/>
    </div>
  );
};

export default Section6;
