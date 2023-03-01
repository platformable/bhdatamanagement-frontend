import React from "react";

const timeComponent = ({stateValue, setSurveyForm,title,surveyForm}) => {
  const handleForm = (e) => {
    setSurveyForm(previous => ({...previous, [stateValue]: e.target.value}))
  }
  return (
    <label className=" flex flex-col">
      <h2 className=" font-black">
      {title}
      </h2><br />
      <input type="time" 
      name={stateValue} 
      className='border rounded p-2 text-lg w-48' 
      onChange={handleForm}
      defaultValue={surveyForm[stateValue] || '-'}
      />
    </label>
  );
};

export default timeComponent;
