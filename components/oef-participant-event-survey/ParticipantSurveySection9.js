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
  const [dataId,setDataId]=useState([])


  const handleForm=(e)=>{
    const isValueOnData=data?.includes(e.target.value)
    const isIdOnDataId=dataId?.includes(Number(e.target.id))

   
    const filteredData=data.filter(oldValues=> oldValues != e.target.value) 
    const filteredDataIds=dataId.filter(oldValues=> oldValues != e.target.id) 

    
    isValueOnData?
    setData(filteredData)  :
    setData((previous)=>([
      ...previous,e.target.value
    ]))

    isIdOnDataId ? 
    setDataId(filteredDataIds):
    setDataId((previous)=>([
      ...previous,Number(e.target.id)
    ]))    


  }

  useEffect(()=>{
    setSurveyForm((previous) => ({
      ...previous,
      employmentID: dataId,
      participantEmployment: data
    }))
  },[data])

  return (
    <div className="px-7">
    <h2 className="font-black">
      {/* <span className="">9</span>  */}
      Are you currently...? 
    </h2>
    <div className="mt-7 grid grid-cols-1 gap-5">

      {options?.map((option,index)=>{
        return (
          <label className="flex gap-x-5 items-center" key={index}>
          <input type="checkbox" className="" id={option.id} value={option.value} name="participantEmployment"
          onChange={handleForm}/>
          <p className="">{option.value}</p>
       </label>
        )
      })}
 
       
    </div>
  </div>
  )
}
