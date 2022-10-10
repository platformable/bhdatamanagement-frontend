import React from "react";

const AdditionalMaterials = ({eventForm,setEventForm,event}) => {
  
  return (
    
    <div className="">
       <h2 className="mb-7 font-black">Additional materials (to be completed by data and evaluation team)</h2>
        <label htmlFor="additionalMaterials">
      <textarea
        className="p-4 block w-full text-lg h-52 bg-white break-all border-black rounded-md overflow-hidden"
        role="textbox"
        name="additionalMaterials"
        placeholder="Add links here to any additional materials"
        onChange={(e) =>
          setEventForm((previous) => ({
            ...previous,
            [e.target.name]:e.target.value
          }))
        }
        defaultValue={event?event.additionalmaterials:""}
      />
     </label>
    </div>
  );
};

export default AdditionalMaterials;
