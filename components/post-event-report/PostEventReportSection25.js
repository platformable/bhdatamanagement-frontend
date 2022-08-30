import React from 'react'
import DemographicSurveySection from './DemographicSurveySection'
const PostEventReportSection25 = ({setEventForm}) => {
  
  return (
    <div className="p-5 grid grid-cols-1 gap-7 mt-10">
    <h2 className="font-black">Hepatitis C Testing</h2>
    <label className="flex gap-5">
    <p className="w-40">Hepatitis C Testing Agency</p>
      <input
        className="border-black ml-2 p-2"
        type="text"
        /* placeholder="Please specify" */
        name="hepCTestingAgency"
        onChange={(e) =>
          setEventForm((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
          }))
        }
      />
    </label>
    <label className="flex gap-5">
    <p className="w-40">   Total tested for Hepatitis C</p>
      <input
        className="border-black ml-2 p-2"
        type="number"
        /* placeholder="type a number" */
        name="hepCTestedTotal"
        onChange={(e) =>
          setEventForm((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
          }))
        }
      />
    </label>
    <label className="flex gap-5">
    <p className="w-40">   Total # of Reactive Results</p>
      <input
        className="border-black ml-2 p-2"
        type="number"
        /* placeholder="type a number" */
        name="hepCReactiveResults"
        onChange={(e) =>
          setEventForm((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
          }))
        }
      />
    </label>
    <label className="flex gap-5">
    <p className="w-40">   Total # Linked to Care</p>
      <input
        className="border-black ml-2 p-2"
        type="number"
        /* placeholder="type a number" */
        name="hepCLinkedToCare"
        onChange={(e) =>
          setEventForm((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
          }))
        }
      />
    </label>
    <label className="flex gap-5">
    <p className="w-40">   Which services were they referred to? </p>
      <input
        className="border-black ml-2 p-2"
        type="text"
        /* placeholder="type a number" */
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