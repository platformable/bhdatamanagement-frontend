import React from "react";

const PostEventReportSection7 = () => {
  return (
    <div className="p-5 bg-extra-light-violet rounded">
      <h2 className="mb-3 font-black">
        <span className="text-color-violet">7 </span>
         Enter the event location name, eg. business name or faith-based
        organization name
      </h2>
      <div className="grid grid-cols-4">
      <label className="text-lg flex items-center" >
        <input
          type="radio"
          name="locationName"
          className="mr-2 w-4 h-4"
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
          className="mr-2 w-4 h-4"
          value="Other"
          // id={program.id}
          // onChange={handleFormId}
        />
        Other
        <input
          // onChange={handleForm}
          type="text"
          className="ml-3 p-1 text-base border-dark-violet rounded w-full"
          placeholder="Please specify here"
        />
      </label>

      </div>
      
    </div>
  );
};

export default PostEventReportSection7;
