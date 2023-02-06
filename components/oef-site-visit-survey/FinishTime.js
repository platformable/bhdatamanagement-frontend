import React from "react";

const StartTime = ({dispatch,surveyForm,updateEventFinishTime}) => {
  const handleForm = (e) => {
    dispatch(updateEventFinishTime({eventFinishTime:e.target.value}))
  }
  return (
    <div className="question-body">
    <label className="flex flex-col">
      <h2 className=" font-black">
       End time
      </h2><br />
      <input type="time" 
      name="eventFinishTime" 
      className='border rounded p-2 text-lg w-48' 
      onChange={handleForm}
      defaultValue={surveyForm?.eventFinishTime}
      />
    </label>
    </div>
  );
};

export default StartTime;
