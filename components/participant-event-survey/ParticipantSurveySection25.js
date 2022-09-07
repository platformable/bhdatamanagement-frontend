import React from 'react'

export const ParticipantSurveySection25 = ({surveyForm,setSurveyForm}) => {
  
  const options=[
    {
      id:1,
      value:"Yes"
    },
    {
      id:2,
      value:"No"
    },
    {
      id:3,
      value:"Don’t know/ Not sure"
    },
    {
      id:4,
      value:"Refused"
    }
  ]
  return (
    <div className="p-5">
    <h2 className="font-black">
      <span className="">25 </span> 
      Have you ever heard of PrEP (Pre-Exposures Prophylaxis)? (NYC DOH SURVEY) 
    </h2>
    <div className="mt-5 grid grid-cols-1 space-between gap-5">
    {options.map((option, index) => {
          return (
            <label className="text-lg flex items-center" key={index}>
              <input
                type="radio"
                name="participantPrEPKnowledge"
                className="mr-10 w-6 h-6"
                value={option.value}
                id={index}
                //defaultChecked={program.id===event?.programid?'checked':""}
                onChange={(e) =>
                  setSurveyForm((previous) => ({
                    ...previous,
                    [e.target.name]: option.value,
                  }))
                }
              />
             {option.value}
            </label>

          );
        })}
    </div>
  </div>
  )
}