import React from 'react';
import { resourcesDistributed } from '../../utils/sharedData';

const PostEventReportSection8 = ({eventForm,setEventForm}) => {

  return (
    <div className="p-5 py-10 rounded">
      <h2 className="mb-3 font-black">
        <span className="">8 </span>
        Resources Distributed:
      </h2>
      <div className="mt-5 grid grid-cols-1 space-between gap-5">
        {resourcesDistributed &&
          resourcesDistributed.map((resource, index) => (
            <label className="text-lg flex items-center" key={index}>
              {/* <img src={resource.source} alt={`${resource.name} icon`} className="w-8 h-8 md:w-12 md:h-12"/> */}
              <input
                type="tel"
                name={resource.dataFieldName}
                className="mr-2  w-40 p-1 border-black rounded"
                id={index}
                placeholder="Type a number"
                onChange={(e) =>
                  setEventForm((previous) => ({
                    ...previous,
                    [e.target.name]:Number(e.target.value)
                  }))
                }
              />
              {resource.name}
            </label>
          ))}
      </div>
    </div>
  )
}

export default PostEventReportSection8