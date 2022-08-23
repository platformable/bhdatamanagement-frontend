import React from 'react'
import DemographicSurveySection from './DemographicSurveySection'

const PostEventReportSection27 = ({setEventForm}) => {
  return (
    <div className="grid grid-cols-1 mt-10 gap-7">
    <h2 className="font-black">Blood Pressure Testing</h2>
    <label className="flex gap-x-10">
      <div className='w-40'>Blood Pressure Testing Agency</div>
      <input
        className="border-black ml-2"
        type="text"
        // placeholder="Please specify"
        name="bloodPressureTestingAgency"
        onChange={(e) =>
          setEventForm((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
          }))
        }
      />
    </label>
    <label className="flex gap-x-10">
      <div className='w-40'>Total tested for Blood Pressure</div>
      <input
        className="border-black ml-2"
        type="number"
        // placeholder="Type a number"
        name="bloodPressureTestedTotal"
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
        name="bloodPressureReactiveResults"
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
        name="bloodPressureLinkedToCare"
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
        name="bloodPressureServicesReferredTo"
        onChange={(e) =>
          setEventForm((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
          }))
        }
      />
    </label>
    
    <DemographicSurveySection setEventForm={setEventForm} typeOfTest="bloodPressure"/>
  </div>
  )
}

export default PostEventReportSection27