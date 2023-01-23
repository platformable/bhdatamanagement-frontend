import React from "react";

const DateComponent = ({dispatch,surveyForm,updateEventDate}) => {
  const handleForm = (e) => {
    dispatch(updateEventDate({eventDate:e.target.value}))
  }
  return (
    <div className="question-body">
    <label className="flex flex-col">
      <h2 className=" font-black">
       Date of event
      </h2><br />
      <input type="date" 
      name="eventDate" 
      className='border rounded p-2 text-lg w-48' 
      onChange={handleForm}
      defaultValue={surveyForm?.eventDate.split('T')[0]}
      />
    </label>
    </div>
  );
};

export default DateComponent;
