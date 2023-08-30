import React,{useState,useEffect} from 'react';
import {eventChecklist} from "../../utils/sharedData";

const PostEventReportSection14 = ({eventForm, setEventForm}) => {

const [data,setData]=useState(false)
  
  const handleForm=(field)=>{
      setEventForm((previous) => ({
        ...previous,
        [field]:!eventForm[field]
      }))
  
  }


  

// console.log("eventForm",eventForm)
  return (
    <div className="px-7 mt-10 rounded">
      <h2 className="font-black">
        Please check off all of the following events that you are aware happened today.
      </h2>
      <div className="mt-7 grid grid-cols-1 space-between gap-5">
        {eventChecklist &&
          eventChecklist.map((eventItem, index) => (
            <label className="flex gap-x-5" key={index} >
              <input
                type="checkbox"
                name={eventItem.dataField}
                className=""
                id={index}
                onChange={(e)=>handleForm(e.target.name)}
                defaultChecked={eventForm[eventItem.dataField]? 'checked': ''}
              />
              <p className='text-lg'>{eventItem.event}</p>
            </label>
          ))}
      </div>
    </div>
  )
}

export default PostEventReportSection14