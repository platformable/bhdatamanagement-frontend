import React from 'react'

const PostEventReportSection21 = ({eventForm,setEventForm}) => {

  return (
    <div className="p-5 rounded py-10">
      <h2 className="mb-3 font-black">
        Was testing done at the event
      </h2>
      <div className="grid grid-cols-1">
      <p className="text-lg flex items-center" >
        <input
          type="radio"
          name="eventTestingDone"
          className="mr-10 w-6 h-6"
          
          onChange={(e) =>
            setEventForm((previous) => ({
              ...previous,
              [e.target.name]: true,
            }))
          }
          // defaultChecked={program.id === event?.programid ? "checked" : ""}
        />
        Yes
      </p>
      <p className="text-lg flex items-center ">
        <input
          type="radio"
          name="eventTestingDone"
          className="mr-10 w-6 h-6"
          onChange={(e) =>
            setEventForm((previous) => ({
              ...previous,
              [e.target.name]: false,
            }))
          }
        />
        No
      </p>

      </div>
      
    </div>
  )
}

export default PostEventReportSection21