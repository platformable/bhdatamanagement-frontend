import React from 'react'
import DemographicSurveySection from './DemographicSurveySection'

const PostEventReportSection26 = ({setEventForm}) => {
  return (
    <div className="grid grid-cols-1 gap-7">
    <h2 className="font-black">Hepatitis C Testing</h2>
    <label className="grid grid-cols-4">
      <p>STI Testing Agency</p>
      <input
        className="border-black ml-2"
        type="text"
        placeholder="Please specify"
        name="stiTestingAgency"
        onChange={(e) =>
          setEventForm((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
          }))
        }
      />
    </label>
    <label className="grid grid-cols-4">
      <p>Total tested for STI</p>
      <input
        className="border-black ml-2"
        type="number"
        placeholder="type a number"
        name="stiTestedTotal"
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
        name="stiReactiveResults"
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
        name="stiLinkedToCare"
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