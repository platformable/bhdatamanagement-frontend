import React from 'react'

export default function RadioGroup({dispatch,surveyForm,updateEventFinishTime}) {
  return (
    <div className="question-body">
  <h2 className=" font-black">
    What was your primary role today?
  </h2>
  <div className="mt-7 grid grid-cols-2 space-between gap-5">
    {options &&
      options.map((option, index) => {
        if(option.value==='Other (please specify)'){
            return (
              <div className="flex gap-x-5">
              <label className="flex items-center gap-5 text-lg" key={index}>
          <input
            type="checkbox"
            name="mainRoles"
            className=""
            value={option.value}
            id={index}
            onChange={(e)=>handleForm(e.target.value)}
            defaultChecked={eventForm?.mainRoles?.includes(option.value) ? 'checked' : ""}
          />
          {option.value}
        </label>
              <label className="flex items-center gap-5 text-lg" key={""}>
          <input
            type="text"
            name="mainRolesOther"
            className=""
            id={""}
            defaultValue={eventForm?.mainRolesOther}
            onChange={(e)=> setEventForm(prev => ({...prev, mainRolesOther: e.target.value}))}
          />
        </label>
              </div>
            )
        } else {
        return (
          <>
        <label className="flex items-center gap-5 text-lg" key={index}>
          <input
            type="checkbox"
            name="mainRoles"
            className=""
            value={option.value}
            id={index}
            onChange={(e)=>handleForm(e.target.value)}
            defaultChecked={eventForm?.mainRoles?.includes(option.value) ? 'checked' : ""}
          />
          {option.value}
        </label>
        </>
      )}
        }
      )}
        
  </div>
</div>
);
}
