import React from 'react'

const PostEventReportSection21 = ({eventForm,setEventForm}) => {

  return (
    <div className="p-5 rounded py-10">
      <h2 className="mb-3 font-black">
        <span className="">21 </span>
        Was testing done at the event
      </h2>
      <div className="grid grid-cols-1">
      <label className="text-lg flex items-center" >
        <input
          type="radio"
          name="eventTestingDone"
          className="mr-2 w-4 h-4"
          
          onChange={(e) =>
            setEventForm((previous) => ({
              ...previous,
              [e.target.name]: true,
            }))
          }
          // defaultChecked={program.id === event?.programid ? "checked" : ""}
        />
        Yes
      </label>
      <label className="text-lg flex items-center ">
        <input
          type="radio"
          name="eventTestingDone"
          className="mr-2 w-4 h-4"
          onChange={(e) =>
            setEventForm((previous) => ({
              ...previous,
              [e.target.name]: false,
            }))
          }
        />
        No
      </label>

      </div>
      
    </div>
  )
}

export default PostEventReportSection21