import React,{useState,useEffect} from 'react';
import {eventChecklist} from "../../utils/sharedData";

const PostEventReportSection14 = ({eventForm, setEventForm}) => {
  // console.log("eventForm 14",eventForm)

const [data,setData]=useState(false)
  
  const handleForm=(field)=>{
  /*     console.log(field) */
      setEventForm((previous) => ({
        ...previous,
        [field]:!eventForm[field]
      }))
  
  }


  

// console.log("eventForm",eventForm)
  return (
    <div className="p-5 py-10 rounded">
      <h2 className="mb-3 font-black">
        Please check off all of the following events that you are aware happened today.
      </h2>
      <div className="mt-5 grid grid-cols-1 space-between gap-5">
        {eventChecklist &&
          eventChecklist.map((eventItem, index) => (
            <label className=" grid" key={index} style={{gridTemplateColumns: '1fr 16fr'}}>
              <input
                type="checkbox"
                name={eventItem.dataField}
                className="mr-2 mt-1 w-6 h-6"
                id={index}
                onChange={(e)=>handleForm(e.target.name)}
              />
              <p className='text-lg'>{eventItem.event}</p>
            </label>
          ))}
      </div>
    </div>
  )
}

export default PostEventReportSection14