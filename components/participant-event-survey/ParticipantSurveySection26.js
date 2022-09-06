import React from 'react'

export const ParticipantSurveySection26 = ({surveyForm,setSurveyForm}) => {

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
    <div className="p-5 py-10">
    <h2 className="font-black">
      <span className="">26 </span> 
      Have you ever used Prep (Pre- Exposures Prophylaxis) to prevent getting infected with HIV?
    </h2>
    <div className="mt-5 grid grid-cols-1 space-between gap-5">
    {options.map((option, index) => {
          return (
            <label className="text-lg flex items-center" key={index}>
              <input
                type="radio"
                name="participantPrEPUse"
                className="mr-10 w-4 h-4"
                value={option.value}
                id={index}
                //defaultChecked={program.id===event?.programid?'checked':""}
                onChange={(e) =>
                  setEventForm((previous) => ({
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