import React from 'react'

export const ParticipantSurveySection20 = () => {

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
    <div className="p-5 py-10">
    <h2 className="font-black">
      <span className="">20 </span>  
       Over the <span className="underline underline-offset-1">last 2 weeks</span>, how often have you been bothered by the following problems? 
    </h2>
    <div className="mt-5 grid grid-cols-1 space-between gap-5">
      <div className="flex gap-x-5 px-5 rounded">
        <p className="w-96 mr-5">Little interest or pleasure in doing things</p>
        {options.map((option, index) => {
          return (
            <label className="text-lg flex items-center" key={index}>
              <input
                type="radio"
                name="participantPHQ2a"
                className="mr-1 w-4 h-4"
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
      <div className="flex gap-x-5  px-5 rounded">
        <p className="w-96 mr-5">Feeling down, depressed or hopeless</p>
        {options.map((option, index) => {
          return (
            <label className="text-lg flex items-center" key={index}>
              <input
                type="radio"
                name="participantPHQ2b"
                className="mr-1 w-4 h-4"
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
  </div>
  )
}
