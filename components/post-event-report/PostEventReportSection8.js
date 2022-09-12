import React from 'react';
import { resourcesDistributed } from '../../utils/sharedData';

const PostEventReportSection8 = ({eventForm,setEventForm}) => {
const handleForm = (e) => {
  let {value} = e.target
    let finalValue;
    value > 500 ? finalValue = 500:finalValue=value
    setEventForm((previous) => ({
      ...previous,
      [e.target.name]:Number(finalValue)
    }))
}
  return (
    <div className="px-7 mt-10 rounded">
      <h2 className="font-black">
        Resources Distributed:
      </h2>
      <div className="mt-7 grid grid-cols-1 text-lg gap-7">
        {resourcesDistributed &&
          resourcesDistributed.map((resource, index) => (
            <div className='grid grid-cols-1 gap-2'>{resource.name}
            <label className="" key={index}>
              {/* <img src={resource.source} alt={`${resource.name} icon`} className="w-8 h-8 md:w-12 md:h-12"/> */}
              <input
                type="number"
                name={resource.dataFieldName}
                className=" w-20 p-4 border-black rounded"
                id={index}
                defaultValue={0}
                onChange={handleForm}
                onKeyUp={(e) => {
                  let {value} = e.target
                  value > 500 && (e.target.value = 500) 
                }}
              />
              
            </label>
            </div>
          ))}
      </div>
    </div>
  )
}

export default PostEventReportSection8