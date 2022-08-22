import React from 'react';
import {eventChecklist} from "../../utils/sharedData";

const PostEventReportSection14 = () => {
  return (
    <div className="p-5 py-10 rounded">
      <h2 className="mb-3 font-black">
        <span className="">14 </span>
        Please check off all of the following events that you are aware happened today.
      </h2>
      <div className="grid grid-cols-1 gap-3">
        {eventChecklist &&
          eventChecklist.map((eventItem, index) => (
            <label className="text-lg grid" key={index} style={{gridTemplateColumns: '1fr 16fr'}}>
              <input
                type="checkbox"
                name="eventChecklist"
                className="mr-2 mt-1 w-6 h-6"
                value={eventItem}
                id={index}
                // onChange={(e) =>
                //   setEventForm((previous) => ({
                //     ...previous,
                //     programName: e.target.value.toUpperCase(),
                //     programID: e.target.id,
                //   }))
                // }
                // defaultChecked={
                //   program.id === event?.programid ? "checked" : ""
                // }
              />
              <p className='text-lg'>{eventItem}</p>
            </label>
          ))}
      </div>
    </div>
  )
}

export default PostEventReportSection14