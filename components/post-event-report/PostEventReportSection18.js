import React from "react";

const PostEventReportSection18 = ({eventForm,setEventForm}) => {
  
  return (
    <div className="px-7 mt-10 rounded">
       <h1 className="mb-7 font-black">In regards to HIV/AIDS prevention and reducing stigma/discrimination, please: <br/>Describe the highlights from the event</h1>

      <textarea
        className="block w-full text-lg h-52 bg-white break-all border-black rounded-md overflow-hidden"
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
