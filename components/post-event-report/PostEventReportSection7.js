import React from "react";

const PostEventReportSection7 = ({eventForm,setEventForm}) => {

  return (
    <div className="p-5 py-10 rounded">
      <h2 className=" font-black">
        <span className="">7 </span>
         Enter the event location name, eg. business name or faith-based
        organization name
      </h2>
      <div className="mt-5 grid grid-cols-1 space-between gap-5">
      <label className="text-lg flex items-center" >
        <input
          type="radio"
          name="locationName"
          className="mr-10 w-4 h-4"
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
          className="mr-10 w-4 h-4"
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
          // onChange={handleForm}
          type="text"
          className="ml-3 p-1 text-base border-black rounded"
          placeholder="Please type location name"
        />
      </label>

      </div>
      
    </div>
  );
};

export default PostEventReportSection7;
