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
    <div className="p-5 py-10">
    <h2 className="font-black"><span className="">3</span> Which NYS Activity was conducted (according to your framework plan)?</h2>
    <div className="mt-5 grid grid-cols-1 space-between gap-5" >

    {nysActivity.map((activity,index)=>{
    if(index===nysActivity.length-1){
      return (
        <label className="text-lg flex items-center" key={index}>
          <input
            type="radio"
            name="nysActivity"
            className="mr-10 w-4 h-4"
            value={activity}
            id={index}
            onChange={(e) =>
              setEventForm((previous) => ({
                ...previous,
                [e.target.name]: activity
              }))
            }
            //defaultChecked={program.id===event?.programid?'checked':""}
          />
          {activity}
          <input type="text" placeholder="Please specify" className="border rounded px-5 self-start p-1 ml-2" />
        </label>

      )
    } else {
      return (
        <label className="text-lg flex items-center" key={index}>
          <input
            type="radio"
            name="nysActivity"
            className="mr-10 w-4 h-4"
            value={activity}
            id={index}
            //defaultChecked={program.id===event?.programid?'checked':""}
            onChange={(e) =>
              setEventForm((previous) => ({
                ...previous,
                [e.target.name]: activity
              }))
            }
          />
          {activity}
          
        </label>

      )
    }
  })}

       
      </div>
</div>
  ) 
      
}

export default PostEventReportSection3