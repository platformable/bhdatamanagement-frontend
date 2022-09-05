import React from 'react'

export const ParticipantSurveySection25 = () => {
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
      value:"Don’t Know/ Not Sure"
    },
    {
      id:4,
      value:"Refused"
    }
  ]
  return (
    <div className="p-5 py-10">
    <h2 className="font-black">
      <span className="">25 </span> 
      Have you ever heard of PrEP (Pre- Exposures Prophylaxis)? (NYC DOH SURVEY) 
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