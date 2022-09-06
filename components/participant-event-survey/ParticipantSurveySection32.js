import React from 'react'

export const ParticipantSurveySection32 = () => {
  const options=[
    {
      id:1,
      value:"Word of Mouth "
    },
    {
      id:2,
      value:"Faith-Based Organization / Place of worship (Ex. church, mosque, etc.)"
    },
    {
      id:3,
      value:"Community-Based Organization"
    },
    {
      id:4,
      value:"Social Media"
    },
    {
      id:5,
      value:"Signs/Flyers "
    },
    {
      id:6,
      value:"Referral from local health provider or services "
    },
    {
      id:7,
      value:"Referral from another Black Health program"
    },
    {
      id:8,
      value:"Government or City Agency (E.g., DOH, DOE, Health + Hospitals)"
    },
    {
      id:9,
      value:"Local Community Leader or Politician"
    },
    {
      id:10,
      value:"NYCHA or public housing "
    },
    {
      id:11,
      value:"Other"
    }
  ]
  return (
    <div className="p-5 py-10">
    <h2 className="font-black">
      <span className="">32 </span> 
      How did you hear about this event?  
    </h2>
    <div className="mt-5 grid grid-cols-1 space-between gap-5">
    {options.map((option, index) => {

if(index===options.length-1){
  return (
    <label className="text-lg flex items-center" key={index}>
      <input
        type="radio"
        name="participantReferral"
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
     <input type="text" 
          placeholder="Please specify" 
          onChange={(e)=>setEventForm({...eventForm,workAreaOther:e.target.value})}
          className="border-black rounded px-2 self-start p-1 ml-2" />
    </label>

  )

} else {
          return (
            <label className="text-lg flex items-center" key={index}>
              <input
                type="radio"
                name="participantReferral"
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

          );}
        })}
    </div>
  </div>
  )
}

