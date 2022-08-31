import React from 'react'

import { roles } from '../../utils/sharedData'

const PostEventReportSection2 = ({eventForm, setEventForm}) => {
  
  const styles = {
    display: "grid",
    gridTemplateColumns: "repeat(5,1fr)",
    justifyContent:'space-between',
    placeItems:'items-center',
    gap:'5px'
  };
  return (
    <div className="p-5 py-10">
    <h2 className="font-black"><span className="">2</span> What was your role at the event? (if you had more than one role, what was your MAIN role at this event?)</h2>
    <div className="mt-5 grid grid-cols-1 space-between gap-5" >
    {roles.map((role,index)=>{
    if(index===roles.length-1){
      return (
        <label className="text-lg flex items-center" key={index}>
          <input
            type="radio"
            name="mainRole"
            className="mr-10 w-4 h-4"
            value={role}
            id={index}
            //defaultChecked={program.id===event?.programid?'checked':""}
            onChange={(e) =>
              setEventForm((previous) => ({
                ...previous,
                [e.target.name]: role
              }))
            }
          />
          {role}
          <input type="text" placeholder="Please specify" className="border-black rounded px-2 self-start p-1 ml-2" />
        </label>

      )
    } else {
      return (
        <label className="text-lg flex items-center" key={index}>
          <input
            type="radio"
            name="mainRole"
            className="mr-10 w-4 h-4"
            value={role}
            id={index}
            //defaultChecked={program.id===event?.programid?'checked':""}
            onChange={(e) =>
              setEventForm((previous) => ({
                ...previous,
                [e.target.name]: role
              }))
            }
          />
          {role}
          
        </label>

      )
    }
  })}
      </div>
</div>
  )
}

export default PostEventReportSection2