import React from "react";

const PostEventReportSection12 = () => {
  return (
    <div className="p-5 rounded">
      <h2 className="mb-3 font-black">
        <span className="">12 </span>
         How many YOUTH volunteers (aged 13-18) helped you?
      </h2>
      <div className='flex mt-5 gap-5'>
        {/* <img src='/post_event_report/ADULT_volunteers_icon.svg' alt='adult volunteers icon' /> */}
      <input
        type="number"
        className="p-2 rounded border-black"
        placeholder="Type a number"
        name="adultVolunteers"
        // onChange={handleForm}
        // defaultValue={event?event.eventname:""}
      />
    </div>
    </div>
  );
};

export default PostEventReportSection12;
