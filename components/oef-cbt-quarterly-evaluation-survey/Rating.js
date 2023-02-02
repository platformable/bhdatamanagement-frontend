import React from 'react'

function Rating({ surveyForm,setSurveyForm, stateValue, options, title}) {

  const handleForm = (e) => {
    setSurveyForm({...surveyForm,[stateValue]:e.target.value})
  };
  
  return (
    <div className="question-body">
    <h2 className="font-black">{title}</h2>
    <div className="grid md:grid-cols-5 gap-7 md:gap-10 lg:gap-20">
      
      {options.map((option,indx)=>{
        return (
        <button  name={stateValue} value={option.value} className={`${surveyForm?.[stateValue] === option.value ? option.bgColor : null} border-black py-4 rounded shadow-lg ${option.bgColorHover}`} 
        onClick={handleForm}>
        {option.text}
        </button>)
      })}

    </div>
  </div>
);
}

export default Rating;