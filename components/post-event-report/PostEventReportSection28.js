import React from 'react';
import DemographicSurveySection from './DemographicSurveySection';

const PostEventReportSection28 = ({setEventForm}) => {
  return (
    <div className="grid grid-cols-1 mt-10 gap-7">
    <h2 className="font-black">Cholesterol Testing</h2>
    <label className="flex gap-5">
      <div className="w-40">Cholesterol Testing Agency</div>
      <input
        className="border-black ml-2"
        type="text"
        // placeholder="Please specify"
        name="cholesterolTestingAgency"
        onChange={(e) =>
          setEventForm((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
          }))
        }
      />
    </label>
    <label className="flex gap-5">
      <div className="w-40">Total tested for Cholesterol</div>
      <input
        className="border-black ml-2"
        type="number"
        // placeholder="Type a number"
        name="cholesterolTestedTotal"
        onChange={(e) =>
          setEventForm((prev) => ({
            ...prev,
            [e.target.name]:  Number(e.target.value),
          }))
        }
      />
    </label>
    <label className="flex gap-5">
      <div className="w-40">Total # of Reactive Results</div>
      <input
        className="border-black ml-2"
        type="number"
        // placeholder="Type a number"
        name="cholesterolReactiveResults"
        onChange={(e) =>
          setEventForm((prev) => ({
            ...prev,
            [e.target.name]:  Number(e.target.value),
          }))
        }
      />
    </label>
    <label className="flex gap-5">
      <div className="w-40">Total # Linked to Care</div>
      <input
        className="border-black ml-2"
        type="number"
        // placeholder="Type a number"
        name="cholesterolLinkedToCare"
        onChange={(e) =>
          setEventForm((prev) => ({
            ...prev,
            [e.target.name]: Number(e.target.value),
          }))
        }
      />
    </label>
    <label className="flex gap-5">
      <div className="w-40">Which services were they referred to?</div>
      <input
        className="border-black ml-2"
        type="text"
        // placeholder="Type a number"
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