import React from 'react'

export default function RadioGroup({options,surveyForm,setSurveyForm,title,stateValue, IdStateValue}) {

  
  return (
    <div className="">
    <h2 className="font-black">
      {title}
    </h2>
    <div className="mt-7 grid grid-cols-1 space-between gap-5">
      {options?.map((option, index) => {
        return (
          <label className="flex gap-x-5 items-center" key={index}>
            <input
              type="radio"
              className=""
              value={option?.value}
              id={option?.id}
              onChange={(e) => {
                if (e.target.value !== 'Other') setSurveyForm(prev=> ({...prev,[`${stateValue}Other`]: '' })) ;
                if (option.id) setSurveyForm(prev=> ({...prev, [IdStateValue]: e.target.id })) ;
                setSurveyForm(prev => ({...prev, [stateValue]: option.value }));
              }
              }
              defaultChecked={option.value === surveyForm[stateValue] ? 'checked' : ''}
              name={stateValue}
              disabled={stateValue === 'yipSession'}
            />
            <p className="">{option.value}</p>
            {option.value === 'Other' && (
              <input type="text" 
              className='border p-2'
              onChange={(e) =>
               {
                setSurveyForm((prev) => ({...prev, [`${stateValue}Other`]: e.target.value }))}
              }
              value={surveyForm[`${stateValue}Other`]  }
              />
            )}
          </label>
        );
      })}
    </div>
  </div>
);
}
