import React from 'react'

const PostEventReportSection21 = () => {
  return (
    <div className="p-5 bg-extra-light-violet rounded">
      <h2 className="mb-3 font-black">
        <span className="text-color-violet">21 </span>
        Was testing done at the event
      </h2>
      <div className="flex gap-7 w-full items-center justify-center">
      <label className="text-lg flex items-center" >
        <input
          type="radio"
          name="hivTesting"
          className="mr-2 w-4 h-4"
          value={true}
          
          // onChange={(e) =>
          //   setEventForm((previous) => ({
          //     ...previous,
          //     programName: e.target.value.toUpperCase(),
          //     programID: e.target.id,
          //   }))
          // }
          // defaultChecked={program.id === event?.programid ? "checked" : ""}
        />
        Yes
      </label>
      <label className="text-lg flex items-center ">
        <input
          type="radio"
          name="hivTesting"
          className="mr-2 w-4 h-4"
          value={false}
          // id={program.id}
          // onChange={handleFormId}
        />
        No
      </label>

      </div>
      
    </div>
  )
}

export default PostEventReportSection21