import React from "react";

const PostEventReportSection18 = ({eventForm,setEventForm}) => {
  
  return (
    <div className="px-7 mt-10 rounded">
       <h2 className="mb-7 font-black">Please describe the event: <br/>Describe the event including highlights, partners, event objectives and outcomes, etc</h2>

      <textarea
        className="p-4 block w-full text-lg h-52 whitespace-pre-wrap bg-white break-all border-black rounded-md overflow-hidden"
        role="textbox"
        name="eventHighlights"
        placeholder=""
        onChange={(e) =>
          setEventForm((previous) => ({
            ...previous,
            [e.target.name]:e.target.value
          }))
        }
        defaultValue={eventForm?.eventHighlights || "" }

      />
     
    </div>
  );
};

export default PostEventReportSection18;
