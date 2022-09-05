import React from 'react'

export const ParticipantSurveySection28 = () => {
  const options=[
    {
      id:1,
      value:"Not at all aware "
    },
    {
      id:2,
      value:"Slightly aware"
    },
    {
      id:3,
      value:"Somewhat aware"
    },
    {
      id:4,
      value:"Moderately aware"
    },
    {
      id:5,
      value:"Extremely aware "
    }
  ]
  return (
    <div className="p-5 py-10">
    <h2 className="font-black">
      <span className="">28 </span> 
      Are you aware of HIV testing resources within your community?  
    </h2>
    <div className="mt-5 grid grid-cols-1 space-between gap-5">
    {options.map((option, index) => {
          return (
            <label className="text-lg flex items-center" key={index}>
              <input
                type="radio"
                name=""
                className="mr-10 w-4 h-4"
                value={option.value}
                id={index}
                //defaultChecked={program.id===event?.programid?'checked':""}
                /* onChange={(e) =>
                  setEventForm((previous) => ({
                    ...previous,
                    [e.target.name]: area,
                  }))
                } */
              />
             {option.value}
            </label>

          );
        })}
    </div>
  </div>
  )
}
