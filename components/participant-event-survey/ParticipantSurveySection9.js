import React,{useState,useEffect} from 'react'


export const ParticipantSurveySection9 = ({surveyForm,setSurveyForm}) => {
console.log("surveyForm",surveyForm)

  const options= [
{id:1,value:"Employed for wages"},
{id:2,value:"Self-employed"},
{id:3,value:"Out of work for 1 year or more"},
{id:4,value:"Out of work for less than 1 year"},
{id:5,value:"A Homemaker"},
{id:6,value:"A Student"},
{id:7,value:"Retired"},
{id:8,value:"Unable to work"},
{id:9,value:"Decline to Answer"},
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
      participantEmployment: data,
    }))
  },[data])

  return (
    <div className="p-5 py-10">
    <h2 className="font-black">
      <span className="">9</span> Are you currently...? 
    </h2>
    <div className="mt-5 grid grid-cols-1 space-between gap-5">

      {options?.map((option,index)=>{
        return (
          <label className="flex gap-x-5 items-center" key={index}>
          <input type="checkbox" className="mr-10 w-4 h-4" name="participantEmployment"
          onChange={(e)=>handleForm(option.value)}/>
          <p className="">{option.value}</p>
       </label>
        )
      })}
 
       
    </div>
  </div>
  )
}
