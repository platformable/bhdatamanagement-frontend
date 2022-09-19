import React from "react";
import DemographicSurveySection from "./DemographicSurveySection";

const PostEventReportSection23 = ({ eventForm, setEventForm }) => {
  const handleMaxNumber = (e) => {
    eventForm[e.target.name] >= 100 && (e.target.value = 100) 
    let { value } = e.target;
    value > 100 && (e.target.value = 100);
  };
  const handleNumberForm = (e) => {
      let {value} = e.target
        let finalValue;
        value > 100 ? finalValue = 100:finalValue=value
        setEventForm((previous) => ({
          ...previous,
          [e.target.name]:Number(finalValue)
        }))
  }
  return (
    <div className="px-7 grid grid-cols-1 gap-7 mt-10">
      <h2 className="font-black">HIV Testing</h2>
      <label className="grid md:flex gap-5 items-center">
        <h3 className="md:w-80"> HIV Testing Agency</h3>
        <input
          className="border-black rounded w-96"
          type="text"
          placeholder=""
          name="hivTestingAgency"
          onChange={(e) =>
            setEventForm((prev) => ({
              ...prev,
              [e.target.name]: e.target.value,
            }))
          }
          defaultValue={eventForm.hivTestingAgency || "" }
          
        />
      </label>
      <label className="grid gap-2">
        <h3 className="md:w-80"> Total tested for HIV</h3>
        <input
          className="border-black  w-20 rounded"
          type="number"
        defaultValue={eventForm?.hivTestedTotal || 0 }
          onWheelCapture={(e) => e.target.blur()}
          onKeyUp={handleMaxNumber}
          name="hivTestedTotal"
          onChange={(e) =>onChange={handleNumberForm}}
        />
      </label>
      <label className="grid gap-2">
        <h3 className="md:w-80"> Total # of Reactive Results</h3>
        <input
          className="border-black  w-20 rounded"
          type="number"
        defaultValue={eventForm?.hivReactiveResults || 0 }
          onWheelCapture={(e) => e.target.blur()}
          onKeyUp={handleMaxNumber}
          
          name="hivReactiveResults"
          onChange={handleNumberForm}
        />
      </label>
      <label className="grid gap-2">
        <h3 className="md:w-80"> Total # of PrEP Referrals</h3>
        <input
          className="border-black  w-20 rounded"
          type="number"
        defaultValue={eventForm?.prepReferrals || 0 }
          onWheelCapture={(e) => e.target.blur()}
          onKeyUp={handleMaxNumber}
          
          name="prepReferrals"
          onChange={handleNumberForm}
        />
      </label>
      <label className="grid gap-2">
        <h3 className="md:w-80"> Total # Linked to Care</h3>
        <input
          className="border-black  w-20 rounded"
          type="number"
        defaultValue={eventForm?.hivLinkedToCare || 0 }
          onWheelCapture={(e) => e.target.blur()}
          onKeyUp={handleMaxNumber}
          
          name="hivLinkedToCare"
          onChange={handleNumberForm}
        />
      </label>
      <label className="grid md:flex gap-5 items-center">
        <h3 className="md:w-80"> Which services were they referred to? </h3>
        <input
          className="border-black rounded w-96 "
          type="text"
          defaultValue={eventForm?.hivServicesReferredTo || "" }

          /* placeholder="Please specify" */
          name="hivServicesReferredTo"
          onChange={(e) =>
            setEventForm((prev) => ({
              ...prev,
              [e.target.name]: e.target.value,
            }))
          }
        />
      </label>
      <DemographicSurveySection setEventForm={setEventForm} eventForm={eventForm} typeOfTest="hiv" />
    </div>
  );
};

export default PostEventReportSection23;
