import React from 'react';
import {languajes} from "../../utils/sharedData";


const PostEventReportSection13 = () => {
  return (
    <div className="p-5 py-10 rounded">
      <h2 className="mb-3 font-black">
        <span className="">13 </span> What languages was your team able to support?
      </h2>
      <div className="mt-5 grid grid-cols-1 space-between gap-5">
        {languajes &&
          languajes.map((lang, index) => (
            <label className="flex items-center" key={index}>
              <input
                type="checkbox"
                name="languages"
                className="mr-10 w-6 h-6"
                value={lang}
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
              {lang}
            </label>
          ))}
      </div>
    </div>
  )
}

export default PostEventReportSection13