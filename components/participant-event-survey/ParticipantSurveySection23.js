import React,{useState,useEffect} from 'react'

export const ParticipantSurveySection23 = ({surveyForm,setSurveyForm}) => {

  const options=[
    {
      id:1,
      value:"Massaging, hugging, kissing"
    },
    {
      id:2,
      value:"Oral sex"
    },
    {
      id:3,
      value:"Sex with an HIV-positive sex partner"
    },
    {
      id:4,
      value:"Sex without a condom"
    },
    {
      id:5,
      value:"Sex without a condom with a partner whose HIV status is unknown "
    },
    {
      id:6,
      value:"Sharing needles"
    },
    {
      id:7,
      value:"Don’t know/Not sure"
    }
  ]

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
      participantHIVKnowledge: data,
    }))
  },[data])
  return (
    <div className="px-7">
    <h1 className="font-black">
      <span className="">23 </span>
      Which of the following can put you at risk for sexually transmitted HIV? (Select all that apply.) 
    </h1>
    <div className="mt-7 grid grid-cols-1 space-between gap-5">
    {options.map((option, index) => {
          return (
            <label className="text-lg flex items-center" key={index}>
              <input
                type="checkbox"
                name="participantHIVKnowledge"
                className="mr-10 w-6 h-6"
                value={option.value}
                id={index}
                //defaultChecked={program.id===event?.programid?'checked':""}
                onChange={(e)=>handleForm(e.target.value)}
              />
             {option.value}
            </label>

          );
        })}
    </div>
  </div>
  )
}
