import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";

const Section1 = ({ eventForm, setEventForm, programs, event }) => {
  const router = useRouter();
  const location = router.route;

  /*    const handleForm = (e) => {
        console.log("eventForm",eventForm)
     
    } */

  const handleFormId = (e) => {
    setEventForm((previous) => ({ ...previous, programID: e.target.id }));
  };

  
  return (
    <div className=" py-0 rounded">
      <h2 className="mb-7 font-black">Which program is your event for?</h2>
      <div className="grid grid-cols-1 gap-5">
        {programs &&
          programs.map((program) =>
            program.name !== "Other" ? (
              <label
                className="text-lg flex items-center gap-5"
                key={program.id}
              >
                <input
                  type="radio"
                  name="program"
                  className=""
                  value={program.name}
                  id={program.id}
                  onChange={(e) => {
                    const isValueOnHealthAreaOfFocusName=eventForm.healthAreaOfFocusName?.includes('HIV/AIDS')
                    const filteredData=isValueOnHealthAreaOfFocusName ?eventForm.healthAreaOfFocusName.filter(oldValues=> oldValues !='HIV/AIDS'): ""
                   
                   if(isValueOnHealthAreaOfFocusName && program.name !=='NYS CMP'){
                    setEventForm((previous)=>({
                        ...previous,
                        programName: e.target.value.toUpperCase(),
                      programID: e.target.id,
                      healthAreaOfFocusName:[filteredData]
                    }))
                   }
                   if(!isValueOnHealthAreaOfFocusName && program.name==='NYS CMP'){
                    setEventForm((previous)=>({
                        ...previous,
                        programName: e.target.value.toUpperCase(),
                      programID: e.target.id,
                      healthAreaOfFocusName:['HIV/AIDS']
                    }))
                   }
                   if(!isValueOnHealthAreaOfFocusName && program.name !=='NYS CMP'){
                    setEventForm((previous)=>({
                        ...previous,
                        programName: e.target.value.toUpperCase(),
                      programID: e.target.id
                    }))
                   }
                    // isValueOnHealthAreaOfFocusName?
                    // setEventForm((previous)=>({
                    //     ...previous,
                    //     programName: e.target.value.toUpperCase(),
                    //   programID: e.target.id,
                    //   healthAreaOfFocusName:[filteredData]
                    // })) :
                    // setEventForm((previous)=>({
                    //     ...previous,
                    //     programName: e.target.value.toUpperCase(),
                    //   programID: e.target.id,
                    //   healthAreaOfFocusName:['HIV/AIDS']
                    // }))
                  }}
                  defaultChecked={
                    program.id === event?.programid ? "checked" : ""
                  }
                  // checked={program.name === "NYS CMP"?'checked' : ""}
                />
                {program.name}
              </label>
            ) : (
              <label className="text-lg flex items-center">
                <input
                  type="radio"
                  name="program"
                  className=""
                  value="Other"
                  id={program.id}
                  onChange={handleFormId}
                />
                Other
                <input
                  onChange={handleForm}
                  type="text"
                  className="ml-3 p-1 text-base border-dark-violet rounded"
                  // placeholder="Please specify here"
                />
              </label>
            )
          )}
      </div>
    </div>
  );
};

export default Section1;
