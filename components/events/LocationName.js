import React from "react";

const LocationName = ({eventForm,setEventForm}) => {

  return (
    <div className="rounded">
      <h2 className=" font-black">
      Enter the event location name, eg. business name or faith-based organization name
      <span className='text-xl text-red-500 ml-2'>*required</span>
      </h2>
      <div className="mt-7 grid grid-cols-1 gap-5">
      <label className="text-lg flex gap-x-5 items-center" >
        <input
          type="radio"
          name="locationName"
          className=""
          // value={program.name}
          value="Black Health Office"
          onChange={(e) =>
            setEventForm((previous) => ({
              ...previous,
              [e.target.name]:e.target.value
            }))
          }
          defaultChecked={eventForm.locationName === 'Black Health Office' ? "checked" : ""}
        />
        Black Health Office
      </label>
      <label className="text-lg flex flex-col md:flex-row gap-y-5 md:gap-x-5 items-start md:items-center">
          <div className="flex gap-5">
          <input
          type="radio"
          name="locationName"
          className=""
          value="Other"
          onChange={(e) =>
            setEventForm((previous) => ({
              ...previous,
              [e.target.name]:e.target.value
            }))
          }
          defaultChecked={eventForm.locationName === 'Other' ? "checked" : ""}
        />
        Other
          </div>
        
        <input
        name="locationNameOther"
          onChange={(e) => 
            setEventForm((previous) => ({
              ...previous,
              [e.target.name]:e.target.value
            }))}
          type="text"
          className="p-4 text-base border-black rounded w-72"
          placeholder="Eg. Inwood Gourmet Deli"
          defaultValue={eventForm.locationNameOther}
        />
      </label>

      </div>
      
    </div>
  );
};

export default LocationName;
