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
      value:"Word of mouth"
    },
    {
      id:2,
      value:"Faith-Based Organization / Place of worship (Eg. church, mosque, etc.)"
    },
    {
      id:3,
      value:"Community-Based Organization"
    },
    {
      id:4,
      value:"Social media"
    },
    {
      id:5,
      value:"Signs / Flyers "
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
      value:"Government or city agency (E.g., DOH, DOE, Health + Hospitals)"
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
    <div className="px-7 ">
    <h2 className="font-black">
      {/* <span className="">32 </span>  */}
      How did you hear about this event?  
    </h2>
    <div className="mt-7 grid grid-cols-1 space-between gap-5">
    {options.map((option, index) => {

if(index===options.length-1){
  return (
    <label className="text-lg flex flex-col md:flex-row gap-y-5 md:gap-x-5 items-start md:items-center" key={index}>
      <div className='flex gap-x-5'>
      <input
        type="checkbox"
        name="participantReferral"
        className=""
        value={option.value}
        id={index}
        onChange={(e)=>handleForm(e.target.value)}
      />
     {option.value}
      </div>
     
     <input type="text" 
          // placeholder="Please specify" 
          onChange={(e)=>setSurveyForm({...eventForm,participantReferralOther:e.target.value})}
          className="border-black rounded px-4 self-start p-1 w-full text-xl w-134" />
    </label>

  )

} else {
          return (
            <label className="text-lg flex gap-x-5 items-center" key={index}>
              <input
                type="checkbox"
                name="participantReferral"
                className=""
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

