import React from "react";

const PostEventReportSection18 = ({eventForm,setEventForm}) => {
  
  return (
    <div className="px-7 mt-10 rounded">
       <h1 className="mb-3 font-black">In regards to HIV/AIDS prevention and reducing stigma/discrimination, please:</h1>
      <h2 className="mb-7 ">
        Describe the highlights from the event
      </h2>
      <textarea
        className="p-4 block w-full text-lg h-52 bg-white break-all border-black rounded-md overflow-hidden"
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
