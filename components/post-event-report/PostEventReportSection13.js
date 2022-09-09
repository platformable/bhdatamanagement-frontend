import React,{useState,useEffect} from 'react';
import {languages} from "../../utils/sharedData";


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
      languages: data,
    }))
  },[data])



  return (
    <div className="px-7 mt-10 rounded">
      <h2 className=" font-black">
    What languages was your team able to support?
      </h2>
      <div className="mt-7 grid grid-cols-1 space-between gap-5">
        {languages &&
          languages.map((lang, index) => (
            <label className="flex items-center gap-5 text-lg" key={index}>
              <input
                type="checkbox"
                name="languages"
                className=""
                value={lang.value}
                id={index}
                onChange={(e)=>handleForm(e.target.value)}
              />
              {lang.value}
            </label>
          ))}
      </div>
    </div>
  )
}

export default PostEventReportSection13