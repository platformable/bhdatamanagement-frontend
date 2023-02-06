import React from "react";

const StartTime = ({dispatch,surveyForm,updateEventStartTime}) => {
  const handleForm = (e) => {
    dispatch(updateEventStartTime({eventStartTime:e.target.value}))
  }
  return (
    <div className="question-body">
    <label className="flex flex-col">
      <h2 className=" font-black">
       Event start time
      </h2><br />
      <input type="time" 
      name="eventStartTime" 
      className='border rounded p-2 text-lg w-48' 
      onChange={handleForm}
      defaultValue={surveyForm?.eventStartTime}
      />
    </label>
    </div>
  );
};

export default StartTime;
