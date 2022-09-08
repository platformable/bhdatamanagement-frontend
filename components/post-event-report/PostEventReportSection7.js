import React from "react";

const PostEventReportSection7 = ({eventForm,setEventForm}) => {

  return (
    <div className="p-5 py-10 rounded">
      <h1 className=" font-black">
         Enter the event location name, eg. business name or faith-based
        organization name
      </h1>
      <div className="mt-5 grid grid-cols-1 space-between gap-5">
      <label className="text-lg flex items-center" >
        <input
          type="radio"
          name="locationName"
          className="mr-10 w-6 h-6"
          // value={program.name}
          value="Black Health Office"
          onChange={(e) =>
            setEventForm((previous) => ({
              ...previous,
              [e.target.name]:e.target.value
            }))
          }
          // defaultChecked={program.id === event?.programid ? "checked" : ""}
        />
        Black Health Office
      </label>
      <label className="text-lg flex items-center w-full">
        <input
          type="radio"
          name="locationName"
          className="mr-10 w-6 h-6"
          value="Other"
          onChange={(e) =>
            setEventForm((previous) => ({
              ...previous,
              [e.target.name]:e.target.value
            }))
          }
        />
        Other
        <input
        name="locationNameOther"
          onChange={(e) => 
            setEventForm((previous) => ({
              ...previous,
              [e.target.name]:e.target.value
            }))}
          type="text"
          className="ml-3 p-1 text-base border-black rounded w-60"
          placeholder="Please type location name"
        />
      </label>

      </div>
      
    </div>
  );
};

export default PostEventReportSection7;
