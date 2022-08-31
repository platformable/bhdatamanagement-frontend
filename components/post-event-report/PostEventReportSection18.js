import React from "react";

const PostEventReportSection18 = ({eventForm,setEventForm}) => {
  
  return (
    <div className="p-5 py-10 rounded">
       <h2 className="my-5 font-black">In regards to HIV/AIDS prevention and reducing stigma/discrimination, please:</h2>
      <h2 className="mb-3 font-black">
       
        <span className="">18 </span>
        Describe the highlights from the event
      </h2>
      <textarea
        className="p-2 block w-full h-32 bg-white break-all border-black rounded-md overflow-hidden"
        role="textbox"
        name="eventHighlights"
        placeholder=""
        onChange={(e) =>
          setEventForm((previous) => ({
            ...previous,
            [e.target.name]:e.target.value
          }))
        }
      />
     
    </div>
  );
};

export default PostEventReportSection18;
