import React,{useState,useEffect} from 'react';
import {languajes} from "../../utils/sharedData";


const PostEventReportSection13 = ({eventForm, setEventForm}) => {
  
  const [data,setData]=useState([])

  const handleForm=(value)=>{
    const isValueOnData=data?.includes(value)
   
    const filteredData=data.filter(oldValues=> oldValues != value) 
    
    isValueOnData?
    setData(filteredData) :
    setData((previous)=>([
      ...previous,value
    ]))

  }

  useEffect(()=>{
    setEventForm((previous) => ({
      ...previous,
      languajes: data,
    }))
  },[data])



  return (
    <div className="p-5 py-10 rounded">
      <h2 className="mb-3 font-black">
        <span className="">13 </span> What languages was your team able to support?
      </h2>
      <div className="mt-5 grid grid-cols-1 space-between gap-5">
        {languajes &&
          languajes.map((lang, index) => (
            <label className="flex items-center" key={index}>
              <input
                type="checkbox"
                name="languages"
                className="mr-10 w-6 h-6"
                value={lang}
                id={index}
                onChange={(e)=>handleForm(e.target.value)}
              />
              {lang}
            </label>
          ))}
      </div>
    </div>
  )
}

export default PostEventReportSection13