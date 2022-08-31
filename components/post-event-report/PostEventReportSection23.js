import React from "react";
import DemographicSurveySection from "./DemographicSurveySection";

const PostEventReportSection23 = ({ setEventForm }) => {
  const handleMaxNumber = (e) => {
    let { value } = e.target;
    value > 100 && (e.target.value = 100);
  };
  return (
    <div className="p-5 grid grid-cols-1 gap-7 mt-10">
      <h2 className="font-black">HIV Testing</h2>
      <label className="flex gap-5 ">
        <p className="w-40"> HIV Testing Agency</p>
        <input
          className="border-black ml-2 p-2"
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
      <label className="flex gap-x-5 ">
        <p className="w-40"> Total tested for HIV</p>
        <input
          className="border-black ml-2 p-2"
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
      <label className="flex gap-x-5 ">
        <p className="w-40"> Total # of Reactive Results</p>
        <input
          className="border-black ml-2 p-2"
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
      <label className="flex gap-5 ">
        <p className="w-40"> Total # of PrEP Referrals</p>
        <input
          className="border-black ml-2 p-2"
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
      <label className="flex gap-5 ">
        <p className="w-40"> Total # Linked to Care</p>
        <input
          className="border-black ml-2 p-2"
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
      <label className="flex gap-5 ">
        <p className="w-40"> Which services were they referred to? </p>
        <input
          className="border-black ml-2 p-2"
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
