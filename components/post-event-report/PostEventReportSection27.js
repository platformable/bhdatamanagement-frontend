import React from 'react'
import DemographicSurveySection from './DemographicSurveySection'

const PostEventReportSection27 = ({setEventForm}) => {
  return (
    <div className="grid grid-cols-1 gap-7">
    <h2 className="font-black">Blood Pressure Testing</h2>
    <label className="grid grid-cols-4">
      <p>Blood Pressure Testing Agency</p>
      <input
        className="border-black ml-2"
        type="text"
        placeholder="Please specify"
        name="bloodPressureTestingAgency"
        onChange={(e) =>
          setEventForm((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
          }))
        }
      />
    </label>
    <label className="grid grid-cols-4">
      <p>Total tested for Blood Pressure</p>
      <input
        className="border-black ml-2"
        type="number"
        placeholder="type a number"
        name="bloodPressureTestedTotal"
        onChange={(e) =>
          setEventForm((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
          }))
        }
      />
    </label>
    <label className="grid grid-cols-4">
      <p>Total # of Reactive Results</p>
      <input
        className="border-black ml-2"
        type="number"
        placeholder="type a number"
        name="bloodPressureReactiveResults"
        onChange={(e) =>
          setEventForm((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
          }))
        }
      />
    </label>
    <label className="grid grid-cols-4">
      <p>Total # Linked to Care</p>
      <input
        className="border-black ml-2"
        type="number"
        placeholder="type a number"
        name="bloodPressureLinkedToCare"
        onChange={(e) =>
          setEventForm((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
          }))
        }
      />
    </label>
    <label className="grid grid-cols-4">
      <p>Which services were they referred to?</p>
      <input
        className="border-black ml-2"
        type="text"
        placeholder="type a number"
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