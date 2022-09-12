import React, {useState,useEffect} from 'react'

const PostEventReportSection4 = ({setEventForm,eventForm}) => {

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
    setEventForm((previous) => ({
      ...previous,
      nysPrograms: data,
    }))
  },[data])


 
  return (
<div className="px-7 mt-10">
      <h2 className="font-black">
        Is this part of:
      </h2>
      <div className="mt-7 grid grid-cols-1  gap-5">
        <label className="flex items-center gap-x-5">
            <input 
            type="checkbox" 
            name="nysPrograms"
            value="leadership Training Institute" 
            id="1" 
            className=''
            onChange={(e)=>handleForm(e.target.value)}
            />
            <p>Leadership Training Institute</p>       
        </label>

        <label className="flex items-center gap-x-5">
            <input 
            type="checkbox" 
            name="nysPrograms"
            value="HIV Hight Impact" 
            id="2" 
            className=''
            onChange={(e)=>handleForm(e.target.value)}
            />
            <p>HIV High Impact</p>    
        </label>
       
    
    

      </div>
    </div>
  )
}

export default PostEventReportSection4