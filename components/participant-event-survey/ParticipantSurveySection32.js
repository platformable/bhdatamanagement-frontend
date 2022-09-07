import React,{useState,useEffect} from 'react'




export const ParticipantSurveySection32 = ({surveyForm,setSurveyForm}) => {

  const [data,setData]=useState([])

  const handleForm=(value)=>{
    const isValueOnData=data?.includes(value)
   
    const filteredData=data.filter(oldValues=> oldValues !=value) 
    
    isValueOnData?
    setData(filteredData) :
    setData((previous)=>([
      ...previous,value
    ]))

  }

  useEffect(()=>{
    setSurveyForm((previous) => ({
      ...previous,
      participantReferral: data,
    }))
  },[data])


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
    <div className="p-5 ">
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
        type="checkbox"
        name="participantReferral"
        className="mr-10 w-6 h-6"
        value={option.value}
        id={index}
        onChange={(e)=>handleForm(e.target.value)}
      />
     {option.value}
     <input type="text" 
          placeholder="Please specify" 
          onChange={(e)=>setSurveyForm({...eventForm,participantReferralOther:e.target.value})}
          className="border-black rounded px-2 self-start p-1 ml-2" />
    </label>

  )

} else {
          return (
            <label className="text-lg flex items-center" key={index}>
              <input
                type="checkbox"
                name="participantReferral"
                className="mr-10 w-6 h-6"
                value={option.value}
                id={index}
                onChange={(e)=>handleForm(e.target.value)}
              />
             {option.value}
            </label>

          );}
        })}
    </div>
  </div>
  )
}

