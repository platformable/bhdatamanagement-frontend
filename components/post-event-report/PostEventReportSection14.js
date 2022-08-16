import React from 'react';
import {eventChecklist} from "../../utils/sharedData";


const PostEventReportSection14 = () => {
  return (
    <div className="p-5  rounded">
      <h2 className="mb-3 font-black">
        <span className="text-color-violet">14 </span>
        Please check off all of the following events that you are aware happened today.
      </h2>
      <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
        {eventChecklist &&
          eventChecklist.map((eventItem, index) => (
            <label className="text-lg flex items-center" key={index}>
              <input
                type="checkbox"
                name="eventChecklist"
                className="mr-2 w-4 h-4"
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
              {eventItem}
            </label>
          ))}
      </div>
    </div>
  )
}

export default PostEventReportSection14