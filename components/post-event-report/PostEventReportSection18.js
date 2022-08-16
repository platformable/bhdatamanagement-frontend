import React from "react";

const PostEventReportSection18 = () => {
  return (
    <div className="p-5 py-10 rounded">
      <h2 className="mb-3 font-black">
        <span className="text-color-violet">18 </span>
        Describe the highlights from the event
      </h2>
      <textarea
        className="p-2 block w-full h-32 bg-white break-all border-dark-violet rounded-md overflow-hidden"
        role="textbox"
        name="eventHighlights"
        placeholder=""
        contentEditable
      />
     
    </div>
  );
};

export default PostEventReportSection18;
