import React from 'react';

const PostEventReportSection11 = ({eventForm, setEventForm}) => {
 
    return (
      <div className="p-5 rounded">
      <h2 className="mb-3 font-black">
        <span className="">11 </span>
         How many ADULT volunteers helped you?
      </h2>
      <div className='flex gap-5'>
        {/* <img src='/post_event_report/ADULT_volunteers_icon.svg' alt='adult volunteers icon' /> */}
      <input
        type="number"
        className="p-2 border-black rounded"
        placeholder="Type a number"
        name="adultVolunteers"
        onChange={(e) =>
          setEventForm((previous) => ({
            ...previous,
            [e.target.name]:e.target.value
          }))
        }
      />
    </div>
    </div>
    );
}

export default PostEventReportSection11;
