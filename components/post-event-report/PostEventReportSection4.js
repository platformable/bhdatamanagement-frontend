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
<div className="p-5 py-10">
      <h1 className="font-black">
        Is this part of:
      </h1>
      <div className="mt-5 grid grid-cols-1 space-between gap-5">
        <label className="flex items-center p-2">
            <input 
            type="checkbox" 
            name="nysPrograms"
            value="leadership Training Institute" 
            id="1" 
            className='mr-10 w-6 h-6'
            onChange={(e)=>handleForm(e.target.value)}
            />
            <p>Leadership Training Institute</p>       
        </label>

        <label className="flex items-center p-2">
            <input 
            type="checkbox" 
            name="nysPrograms"
            value="HIV Hight Impact" 
            id="2" 
            className='mr-10 w-6 h-6'
            onChange={(e)=>handleForm(e.target.value)}
            />
            <p>HIV High Impact</p>    
        </label>
       
    
    

      </div>
    </div>
  )
}

export default PostEventReportSection4