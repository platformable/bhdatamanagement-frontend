import React from 'react'
import DemographicSurveySection from './DemographicSurveySection'
const PostEventReportSection25 = ({setEventForm}) => {
  
  return (
    <div className="grid grid-cols-1 gap-7">
    <h2 className="font-black">Hepatitis C Testing</h2>
    <label className="grid grid-cols-4">
      <p>Hepatitis C Testing Agency</p>
      <input
        className="border-black ml-2"
        type="text"
        placeholder="Please specify"
        name="hepCTestingAgency"
        onChange={(e) =>
          setEventForm((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
          }))
        }
      />
    </label>
    <label className="grid grid-cols-4">
      <p>Total tested for Hepatitis C</p>
      <input
        className="border-black ml-2"
        type="number"
        placeholder="type a number"
        name="hepCTestedTotal"
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
        name="hepCReactiveResults"
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
        name="hepCLinkedToCare"
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
        name="hepCServicesReferredTo"
        onChange={(e) =>
          setEventForm((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
          }))
        }
      />
    </label>
    
    <DemographicSurveySection setEventForm={setEventForm}  typeOfTest="hepC"/>
  </div>
  )
}

export default PostEventReportSection25