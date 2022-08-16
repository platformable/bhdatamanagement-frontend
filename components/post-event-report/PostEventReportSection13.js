import React from 'react';
import {languajes} from "../../utils/sharedData";


const PostEventReportSection13 = () => {
  return (
    <div className="p-5  rounded">
      <h2 className="mb-3 font-black">
        <span className="text-color-violet">13 </span> What languages was your team able to support?
      </h2>
      <div className="grid grid-cols-1 gap-3 md:flex md:justify-between md:items-center">
        {languajes &&
          languajes.map((lang, index) => (
            <label className="text-lg flex items-center" key={index}>
              <input
                type="checkbox"
                name="languages"
                className="mr-2 w-4 h-4"
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