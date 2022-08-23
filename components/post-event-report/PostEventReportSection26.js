import React from 'react'
import DemographicSurveySection from './DemographicSurveySection'

const PostEventReportSection26 = ({setEventForm}) => {
  return (
    <div className="grid grid-cols-1 mt-10 gap-7">
    <h2 className="font-black">STI Testing</h2>
    <label className="flex gap-x-10">
      <div className='w-40'>STI Testing Agency</div>
      <input
        className="border-black ml-2"
        type="text"
        // placeholder="Please specify"
        name="stiTestingAgency"
        onChange={(e) =>
          setEventForm((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
          }))
        }
      />
    </label>
    <label className="flex gap-x-10">
      <div className='w-40'>Total tested for STI</div>
      <input
        className="border-black ml-2"
        type="number"
        // placeholder="Type a number"
        name="stiTestedTotal"
        onChange={(e) =>
          setEventForm((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
          }))
        }
      />
    </label>
    <label className="flex gap-x-10">
      <div className='w-40'>Total # of Reactive Results</div>
      <input
        className="border-black ml-2"
        type="number"
        // placeholder="Type a number"
        name="stiReactiveResults"
        onChange={(e) =>
          setEventForm((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
          }))
        }
      />
    </label>
    <label className="flex gap-x-10">
      <div className='w-40'>Total # Linked to Care</div>
      <input
        className="border-black ml-2"
        type="number"
        // placeholder="Type a number"
        name="stiLinkedToCare"
        onChange={(e) =>
          setEventForm((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
          }))
        }
      />
    </label>
    <label className="flex gap-x-10">
      <div className='w-40'>Which services were they referred to</div>?
      <input
        className="border-black ml-2"
        type="text"
        // placeholder="Type a number"
        name="stiServicesReferredTo"
        onChange={(e) =>
          setEventForm((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
          }))
        }
      />
    </label>
    
    <DemographicSurveySection setEventForm={setEventForm} typeOfTest="sti"/>
  </div>
  )
}

export default PostEventReportSection26