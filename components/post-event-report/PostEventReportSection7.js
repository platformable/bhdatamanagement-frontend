import React from "react";

const PostEventReportSection7 = () => {
  return (
    <div className="p-5 py-10 rounded">
      <h2 className="mb-3 font-black">
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
          
          // onChange={(e) =>
          //   setEventForm((previous) => ({
          //     ...previous,
          //     programName: e.target.value.toUpperCase(),
          //     programID: e.target.id,
          //   }))
          // }
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
          // id={program.id}
          // onChange={handleFormId}
        />
        Other
        <input
          // onChange={handleForm}
          type="text"
          className="ml-3 p-1 text-base border-black rounded w-full"
          placeholder="Please type location name"
        />
      </label>

      </div>
      
    </div>
  );
};

export default PostEventReportSection7;
