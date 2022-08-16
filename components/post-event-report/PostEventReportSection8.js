import React from 'react';
import { resourcesDistributed } from '../../utils/sharedData';

const PostEventReportSection8 = () => {
  return (
    <div className="p-5  rounded">
      <h2 className="mb-3 font-black">
        <span className="text-color-violet">8 </span>
        Resources Distributed:
      </h2>
      <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
        {resourcesDistributed &&
          resourcesDistributed.map((resource, index) => (
            <label className="text-lg flex items-center" key={index}>
              <img src='' alt=""/>
              <input
                type="number"
                name={resource}
                className="mr-2 w-20 p-1 border-dark-violet rounded"
                value={resource}
                id={index}
                placeholder="eg. 5"
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
              {resource}
            </label>
          ))}
      </div>
    </div>
  )
}

export default PostEventReportSection8