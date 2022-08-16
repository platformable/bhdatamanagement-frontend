import React from 'react';
import { resourcesDistributed } from '../../utils/sharedData';

const PostEventReportSection8 = () => {
  return (
    <div className="p-5  rounded">
      <h2 className="mb-3 font-black">
        <span className="text-color-violet">8 </span>
        Resources Distributed:
      </h2>
      <div className="grid grid-cols-1 gap-7 md:grid-cols-2">
        {resourcesDistributed &&
          resourcesDistributed.map((resource, index) => (
            <label className="text-lg flex items-center" key={index}>
              <img src={resource.source} alt={`${resource.name} icon`} className="w-6 md:w-10"/>
              <input
                type="number"
                name={resource.name}
                className="mx-2 w-20 p-1 border-dark-violet rounded"
                value={resource.name}
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
              {resource.name}
            </label>
          ))}
      </div>
    </div>
  )
}

export default PostEventReportSection8