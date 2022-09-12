import React from "react";
import DemographicSurveySection from "./DemographicSurveySection";

const PostEventReportSection23 = ({ setEventForm }) => {
  const handleMaxNumber = (e) => {
    let { value } = e.target;
    value > 100 && (e.target.value = 100);
  };
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
        />
      </label>
      <label className="grid gap-2">
        <h3 className="md:w-80"> Total tested for HIV</h3>
        <input
          className="border-black  w-20 rounded"
          type="number"
          onWheelCapture={(e) => e.target.blur()}
          onKeyUp={handleMaxNumber}
          defaultValue={0}
          name="hivTestedTotal"
          onChange={(e) =>
            setEventForm((prev) => ({
              ...prev,
              [e.target.name]: Number(e.target.value),
            }))
          }
        />
      </label>
      <label className="grid gap-2">
        <h3 className="md:w-80"> Total # of Reactive Results</h3>
        <input
          className="border-black  w-20 rounded"
          type="number"
          onWheelCapture={(e) => e.target.blur()}
          onKeyUp={handleMaxNumber}
          defaultValue={0}
          name="hivReactiveResults"
          onChange={(e) =>
            setEventForm((prev) => ({
              ...prev,
              [e.target.name]: Number(e.target.value),
            }))
          }
        />
      </label>
      <label className="grid gap-2">
        <h3 className="md:w-80"> Total # of PrEP Referrals</h3>
        <input
          className="border-black  w-20 rounded"
          type="number"
          onWheelCapture={(e) => e.target.blur()}
          onKeyUp={handleMaxNumber}
          defaultValue={0}
          name="prepReferrals"
          onChange={(e) =>
            setEventForm((prev) => ({
              ...prev,
              [e.target.name]: Number(e.target.value),
            }))
          }
        />
      </label>
      <label className="grid gap-2">
        <h3 className="md:w-80"> Total # Linked to Care</h3>
        <input
          className="border-black  w-20 rounded"
          type="number"
          onWheelCapture={(e) => e.target.blur()}
          onKeyUp={handleMaxNumber}
          defaultValue={0}
          name="hivLinkedToCare"
          onChange={(e) =>
            setEventForm((prev) => ({
              ...prev,
              [e.target.name]: Number(e.target.value),
            }))
          }
        />
      </label>
      <label className="grid md:flex gap-5 items-center">
        <h3 className="md:w-80"> Which services were they referred to? </h3>
        <input
          className="border-black rounded w-96 "
          type="text"
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
      <DemographicSurveySection setEventForm={setEventForm} typeOfTest="hiv" />
    </div>
  );
};

export default PostEventReportSection23;
