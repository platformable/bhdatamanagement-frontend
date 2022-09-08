import React,{useState,useEffect} from 'react'

export const ParticipantSurveySection30 = ({surveyForm,setSurveyForm}) => {

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
      participantPRePResourceKnowledge: data,
    }))
  },[data])



  const options=[
    {
      id:1,
      value:"HIV/STDs Testing and Prevention"
    },
    {
      id:2,
      value:"PrEP (Pre-Exposure Prophylaxis) "
    },
    {
      id:3,
      value:"Hepatitis C Testing"
    },
    {
      id:4,
      value:"Immigration Services"
    },
    {
      id:5,
      value:"Health Screens (Mammogram, Prostate Cancer Screening, etc.)"
    },
    {
      id:6,
      value:"Vaccines (Flu, Covid, etc.)"
    },
    {
      id:7,
      value:"Mental Health Care"
    },
    {
      id:8,
      value:"Substance Use Treatment/ Services"
    },
    {
      id:9,
      value:"Chronic disease management (Diabetes, high blood pressure, etc.)"
    },
    {
      id:10,
      value:"Other"
    }
  ]
  return (
    <div className="px-7">
    <h1 className="font-black">
      <span className="">30 </span> 
      What services would you like to obtain more information about (Select all that apply)?   
    </h1>
    <div className="mt-7 grid grid-cols-1 space-between gap-5">
    {options.map((option, index) => {

if(index===options.length-1){
  return (
    <label className="text-lg flex gap-x-5 items-center" key={index}>
      <input
        type="checkbox"
        name="participantPRePResourceKnowledge"
        className=""
        value={option.value}
        id={index}
        //defaultChecked={program.id===event?.programid?'checked':""}
        onChange={(e)=>handleForm(e.target.value)}
      />
     {option.value}
     <input type="text" 
          placeholder="Please specify" 
          onChange={(e)=>setSurveyForm({...surveyForm,participantPRePResourceKnowledgeOther:e.target.value})}
          className="border-black rounded px-4 text-xl self-start p-1 ml-2" />
    </label>

  )

} else {
          return (
            <label className="text-lg flex gap-x-5  items-center" key={index}>
              <input
                type="checkbox"
                name="participantPRePResourceKnowledge"
                className=""
                value={option.value}
                id={index}
                //defaultChecked={program.id===event?.programid?'checked':""}
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

