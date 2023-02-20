import React from "react";


const DateComponent = ({eventForm,setSurveyForm,stateValue}) => {
 
 
  const handleForm = (e) => {
    setSurveyForm(previous => ({...previous, [stateValue]: e.target.value}))
  }

  return (
    <label className="flex flex-col">
      <h2 className=" font-black">
       Event date
      </h2><br />
      <input type="date" 
      name={stateValue} 
      className='border rounded p-2 text-lg w-48' 
      onChange={handleForm}
      defaultValue={ eventForm?.[stateValue].split('T')[0]  }
      />
    </label>
  );
}

export default DateComponent;



