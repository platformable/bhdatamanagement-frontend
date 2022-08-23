import React from 'react'
import DemographicSurveySection from './DemographicSurveySection'

const PostEventReportSection24 = ({setEventForm}) => {
  
  return (
    <div className="grid grid-cols-1 gap-7">
    <h2 className="font-black">Other Testing</h2>
    <label className="grid grid-cols-4">
      <p>What type of health screening was conducted?</p>
      <input
        className="border-black ml-2"
        type="text"
        placeholder="Please specify"
        name="otherTestingType"
        onChange={(e) =>
          setEventForm((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
          }))
        }
      />
    </label>
    <label className="grid grid-cols-4">
      <p>Other Testing Agency</p>
      <input
        className="border-black ml-2"
        type="text"
        placeholder="type a number"
        name="otherTestingAgency"
        onChange={(e) =>
          setEventForm((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
          }))
        }
      />
    </label>
    <label className="grid grid-cols-4">
      <p>Total tested for Other</p>
      <input
        className="border-black ml-2"
        type="number"
        placeholder="type a number"
        name="otherTestedTotal"
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
        name="otherLinkedToCare"
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
        name="otherServicesReferredTo"
        onChange={(e) =>
          setEventForm((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
          }))
        }
      />
    </label>
    
    <DemographicSurveySection setEventForm={setEventForm} typeOfTest="other"/>
  </div>
  )
}

export default PostEventReportSection24