import React from 'react';

const options = [
    {id:1,value:"Program Leader"},
{id:2,value:"Lead Facilitator"},
{id:3,value:"Co-facilitator"},
{id:4,value:"Guest speaker"},
{id:5,value:"Program/workshop support staff or intern"},
{id:6,value:"Other (please specify)"}]


const MainRoles = ({eventForm,setEventForm}) => {
    return (
        <div className="question-body">
      <h2 className=" font-black">
        Who was your target audience? Select all that apply.
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
                name="targetAudience"
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
                name="targetAudienceOther"
                className=""
                id={""}
                defaultValue={eventForm?.mainRoles}
                onChange={(e)=> setEventForm(prev => ({...prev, targetAudienceOther: e.target.value}))}
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
                name="targetAudience"
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

export default MainRoles;
