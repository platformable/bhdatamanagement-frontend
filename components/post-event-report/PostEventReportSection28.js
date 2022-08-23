import React from 'react';
import DemographicSurveySection from './DemographicSurveySection';

const PostEventReportSection28 = ({setEventForm}) => {
  return (
    <div className="grid grid-cols-1 gap-7">
    <h2 className="font-black">Cholesterol Testing</h2>
    <label className="grid grid-cols-4">
      <p>Cholesterol Testing Agency</p>
      <input
        className="border-black ml-2"
        type="text"
        placeholder="Please specify"
        name="cholesterolTestingAgency"
        onChange={(e) =>
          setEventForm((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
          }))
        }
      />
    </label>
    <label className="grid grid-cols-4">
      <p>Total tested for Cholesterol</p>
      <input
        className="border-black ml-2"
        type="number"
        placeholder="type a number"
        name="cholesterolTestedTotal"
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
        name="cholesterolReactiveResults"
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
        name="cholesterolLinkedToCare"
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
        name="cholesterolServicesReferredTo"
        onChange={(e) =>
          setEventForm((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
          }))
        }
      />
    </label>
    
    <DemographicSurveySection setEventForm={setEventForm} typeOfTest="cholesterol"/>
  </div>
  )
}

export default PostEventReportSection28