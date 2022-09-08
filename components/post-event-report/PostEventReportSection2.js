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
    <h1 className="font-black">What was your role at the event? (if you had more than one role, what was your MAIN role at this event?)</h1>
    <div className="mt-5 grid grid-cols-1 space-between gap-5" >
    {roles.map((role,index)=>{
    if(index===roles.length-1){
      return (
        <label className="text-lg flex items-center" key={role.id}>
          <input
            type="radio"
            name="mainRole"
            className="mr-10 w-6 h-6"
            value={role.value}
            id={role.id}
            //defaultChecked={program.id===event?.programid?'checked':""}
            onChange={(e) =>
              setEventForm((previous) => ({
                ...previous,
                [e.target.name]: role.value
              }))
            }
          />
          {role.value}
          <input type="text" 
          placeholder="Please specify" 
          onChange={(e)=>setEventForm({...eventForm,mainRoleOther:e.target.value})}
          className="border-black rounded px-2 self-start p-1 ml-2 w-96" />
        </label>

      )
    } else {
      return (
        <label className="text-lg flex items-center" key={role.id}>
          <input
            type="radio"
            name="mainRole"
            className="mr-10 w-6 h-6"
            value={role.value}
            id={role.id}
            //defaultChecked={program.id===event?.programid?'checked':""}
            onChange={(e) =>
              setEventForm((previous) => ({
                ...previous,
                [e.target.name]: role.value
              }))
            }
          />
          {role.value}
          
        </label>

      )
    }
  })}
      </div>
</div>
  )
}

export default PostEventReportSection2