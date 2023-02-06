import React from 'react'

export const ParticipantSurveySection31 = ({surveyForm,setSurveyForm}) => {

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
      value:"Decline to answer"
    }
  ]
  return (
    <div className="px-7">
    <h2 className="font-black">
      {/* <span className="">31 </span>  */}
      Have you registered to vote? 
    </h2>
    <div className="mt-7 grid grid-cols-1 space-between gap-5">
    {options.map((option, index) => {
          return (
            <label className="text-lg flex gap-x-5 items-center" key={index}>
              <input
                type="radio"
                name="participantVote"
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
