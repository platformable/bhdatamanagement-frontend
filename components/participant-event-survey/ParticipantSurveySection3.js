import React, {useState, useEffect} from 'react';
import { race } from '../../utils/sharedData';

export const ParticipantSurveySection3 = ({surveyForm, setSurveyForm}) => {
  
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
      participantRace: data,
      raceID: dataId
    }))
  },[data])
  return (
    <div className="p-5 py-10">
      <h2 className="font-black">
        <span className="">3</span> Do you identify as (Select all that apply):
      </h2>
      <div className="mt-5 grid grid-cols-1 space-between gap-5">
      {race.map(option => (
        <label className="flex gap-x-5 items-center">
        <input type="checkbox" className="mr-10 w-6 h-6" value={option.value} id={option.id} onChange={handleForm} name="participantRace" />
        <p className="">{option.value}</p>
      </label>
      ))}
       
      </div>
    </div>
  )
}
