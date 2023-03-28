import React from 'react'

function LeichardtScale({ surveyForm,setSurveyForm, stateValue, options, title}) {

/*   const handleForm = (e) => {
    console.log("e.value.name",e.target.value)
    setSurveyForm({...surveyForm,[stateValue]:e.target.value})
  }; */
  
  return (
    <div className="">
    <h2 className="font-black bg-black text-white px-5 rounded-tl-md rounded-tr-md">{title}</h2>
   
      
      {options.map((option,indx)=>{
        return (
            <div className={`grid LeichardTScale gap-x-3 items-center px-5 py-2 shadow-inner ${indx%2===0?'bg-white':'bg-gray-50'}`}>
        <p>{option.question}</p>
        {option.options.map(opt=> (
                    <button  name={opt.stateValue} value={opt.value} className={`${surveyForm?.[option.stateValue] === opt?.value ? opt?.bgColor : null} border-black py-4 rounded shadow-lg ${opt?.bgColorHover}`} 
                    onClick={(e)=>{
                        console.log("opt.stateValue",opt.stateValue)
                        setSurveyForm({...surveyForm,[option.stateValue]:opt.value})}}>
                    {opt.value}
                    </button>
        )

        )}    
        </div>)
      })}

    </div>
);
}

export default LeichardtScale;