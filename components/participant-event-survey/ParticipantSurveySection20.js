import React from 'react'

export const ParticipantSurveySection20 = ({surveyForm,setSurveyForm}) => {


const options=[
  {
    id:1,
    value:"Not at all"
  },
  {
    id:2,
    value:"Several days"
  },
  {
    id:3,
    value:"More than half the days"
  },
  {
    id:4,
    value:"Nearly every day"
  }
]


  return (
    <div className="px-7">
    <h1 className="font-black">
      <span className="">20 </span>  
       Over the <span className="underline underline-offset-1">last 2 weeks</span>, how often have you been bothered by the following problems? 
    </h1>
    <div className="mt-7 grid grid-cols-1 space-between gap-5">
      <div className="block md:flex gap-x-5  rounded">
        <h3 className="md:w-96 w-100 mb-2">Little interest or pleasure in doing things</h3>
        {options.map((option, index) => {
          return (
            <label className="text-lg flex gap-x-5 items-center" key={index}>
              <input
                type="radio"
                name="participantPHQ2a"
                className="mr-1 w-6 h-6"
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
      <div className="block md:flex gap-x-5   rounded">
        <h3 className="md:w-96 w-100  mb-2">Feeling down, depressed or hopeless</h3>
        {options.map((option, index) => {
          return (
            <label className="text-lg flex items-center" key={index}>
              <input
                type="radio"
                name="participantPHQ2b"
                className="mr-1 w-6 h-6"
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
  </div>
  )
}
