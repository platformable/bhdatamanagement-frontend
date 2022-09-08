import React from 'react'
import { nysActivity } from '../../utils/sharedData';

const PostEventReportSection3 = ({setEventForm,eventForm}) => {
  
  const styles = {
    display: "grid",
    gridTemplateColumns: "repeat(5,1fr)",
    justifyContent:'space-between',
    placeItems:'items-center',
    gap:'5px'
  };
  return (
    <div className="px-7 mt-10">
    <h1 className="font-black">Which NYS Activity was conducted (according to your framework plan)?</h1>
    <div className="mt-7 grid grid-cols-1 space-between gap-5" >

    {nysActivity.map((activity,index)=>{
    if(index===nysActivity.length-1){
      return (
        <label className="text-lg flex items-center" key={activity.id}>
          <input
            type="radio"
            name="nysActivity"
            className="mr-10 w-6 h-6"
            value={activity.value}
            id={activity.id}
            onChange={(e) =>
              setEventForm((previous) => ({
                ...previous,
                [e.target.name]: activity.value
              }))
            }
            //defaultChecked={program.id===event?.programid?'checked':""}
          />
          {activity.value}
          <input type="text" placeholder="Please specify" 
          className="border border-black rounded px-2 self-start p-1 ml-2"
          onChange={(e)=>setEventForm({...eventForm,nysActivityOther:e.target.value})}
          />
        </label>

      )
    } else {
      return (
        <label className="text-lg flex items-center" key={activity.id}>
          <input
            type="radio"
            name="nysActivity"
            className="mr-10 w-6 h-6"
            value={activity.value}
            id={activity.id}
            //defaultChecked={program.id===event?.programid?'checked':""}
            onChange={(e) =>
              setEventForm((previous) => ({
                ...previous,
                [e.target.name]: activity.value
              }))
            }
          />
          {activity.value}
          
        </label>

      )
    }
  })}

       
      </div>
</div>
  ) 
      
}

export default PostEventReportSection3