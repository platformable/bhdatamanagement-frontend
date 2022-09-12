import React from 'react'

export const ParticipantSurveySection29 = ({surveyForm,setSurveyForm}) => {
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
      value:"Don’t know / Not sure"
    },
  ]
  return (
    <div className="px-7">
    <h2 className="font-black">
      {/* <span className="">29 </span>  */}
      Are you aware of where to obtain PreP (Pre- Exposures Prophylaxis) in your community?  
    </h2>
    <div className="mt-7 grid grid-cols-1 space-between gap-5">
    {options.map((option, index) => {
          return (
            <label className="text-lg flex gap-x-5 items-center" key={index}>
              <input
                type="radio"
                name="participantPRePResourceKnowledge"
                className=""
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
