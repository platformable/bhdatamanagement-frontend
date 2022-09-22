import React from "react";

const PostEventReportSection35 = ({eventForm,setEventForm,event}) => {
  return (
    <div className='question-body'>
      <h2 className="mb-7 font-black">Which other organizations did you work with (if any?)</h2>
      <label htmlFor="partnerOrganization1">
        <textarea
          className="p-4 block w-full text-lg h-52 bg-white break-all border-black rounded-md overflow-hidden"
          role="textbox"
          name="partnerOrganization1"
          placeholder=""
          onChange={(e) =>
            setEventForm((previous) => ({
              ...previous,
              [e.target.name]: e.target.value,
            }))
          }
          defaultValue={event ? event.partnerOrganization1 : ""}
        />
      </label>
    </div>
  );
};

export default PostEventReportSection35;
