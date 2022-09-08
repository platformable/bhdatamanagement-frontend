import React from "react";
import DemographicSurveySection from "./DemographicSurveySection";

const PostEventReportSection28 = ({ setEventForm }) => {
  const handleMaxNumber = (e) => {
    let { value } = e.target;
    value > 100 && (e.target.value = 100);
  };
  return (
    <div className="px-5 grid grid-cols-1 mt-10 gap-7">
      <h1 className="font-black">Cholesterol Testing</h1>
      <label className="flex gap-5">
        <p className="w-40 ">Cholesterol Testing Agency</p>
        <input
          className="border-black p-4"
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
        <p className="w-40 ">Total tested for Cholesterol</p>
        <input
          className="border-black p-4"
          type="number"
          onWheelCapture={(e) => e.target.blur()}
          defaultValue={0}
          onKeyUp={handleMaxNumber}
          // placeholder="Type a number"
          name="cholesterolTestedTotal"
          onChange={(e) =>
            setEventForm((prev) => ({
              ...prev,
              [e.target.name]: Number(e.target.value),
            }))
          }
        />
      </label>
      {/* <label className="flex gap-5">
        <p className="w-40 ">Total # of Reactive Results</p>
        <input
          className="border-black p-4"
          type="number"
          onWheelCapture={(e) => e.target.blur()}
          defaultValue={0}
          onKeyUp={handleMaxNumber}
          // placeholder="Type a number"
          name="cholesterolReactiveResults"
          onChange={(e) =>
            setEventForm((prev) => ({
              ...prev,
              [e.target.name]: Number(e.target.value),
            }))
          }
        />
      </label> */}
      <label className="flex gap-5">
        <p className="w-40 ">Total # Linked to Care</p>
        <input
          className="border-black p-4"
          type="number"
          onWheelCapture={(e) => e.target.blur()}
          defaultValue={0}
          onKeyUp={handleMaxNumber}
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
        <p className="w-40 ">Which services were they referred to?</p>
        <input
          className="border-black p-4"
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

      <DemographicSurveySection
        setEventForm={setEventForm}
        typeOfTest="cholesterol"
      />
    </div>
  );
};

export default PostEventReportSection28;
