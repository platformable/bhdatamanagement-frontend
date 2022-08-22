import React from "react";

const PostEventReportSection17 = () => {
  return (
    <div className="p-5 py-10 rounded">
      <h2 className="mb-3 font-black">
        <span className="">17 </span>
        How many people did you send an email blast to about the event?
      </h2>
      <div className='flex gap-5 justify-start'>
        {/* <img src='/post_event_report/email_icon.svg' alt='adult volunteers icon' /> */}
      <input
        type="number"
        className="p-2 border-black rounded"
        placeholder="type a number"
        name="sendEmail"
        // onChange={handleForm}
        // defaultValue={event?event.eventname:""}
      />
    </div>
    </div>
  );
};

export default PostEventReportSection17;
