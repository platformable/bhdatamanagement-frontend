import React from "react";
import DemographicSurveySection from "./DemographicSurveySection";

const PostEventReportSection26 = ({ setEventForm }) => {
  const handleMaxNumber = (e) => {
    let { value } = e.target;
    value > 100 && (e.target.value = 100);
  };
  return (
    <div className="p-5 grid grid-cols-1 mt-10 gap-7">
      <h2 className="font-black">STI Testing</h2>
      <label className="flex gap-5">
        <p className="w-40">STI Testing Agency</p>
        <input
          className="border-black ml-2 p-2"
          type="text"
          // placeholder="Please specify"

          name="stiTestingAgency"
          onChange={(e) =>
            setEventForm((prev) => ({
              ...prev,
              [e.target.name]: e.target.value,
            }))
          }
        />
      </label>

      <label className="flex gap-5">
        <p className="w-40">Total tested for STI</p>
        <input
          className="border-black ml-2 p-2"
          type="number"
          onWheelCapture={(e) => e.target.blur()}
          defaultValue={0}
          // placeholder="Type a number"
          onKeyUp={handleMaxNumber}
          name="stiTestedTotal"
          onChange={(e) =>
            setEventForm((prev) => ({
              ...prev,
              [e.target.name]: e.target.value,
            }))
          }
        />
      </label>

      <label className="flex gap-5">
        <p className="w-40">Total # of Reactive Results</p>
        <input
          className="border-black ml-2 p-2"
          type="number"
          onWheelCapture={(e) => e.target.blur()}
          defaultValue={0}
          // placeholder="Type a number"
          onKeyUp={handleMaxNumber}
          name="stiReactiveResults"
          onChange={(e) =>
            setEventForm((prev) => ({
              ...prev,
              [e.target.name]: e.target.value,
            }))
          }
        />
      </label>

      <label className="flex gap-5">
        <p className="w-40">Total # Linked to Care</p>
        <input
          className="border-black ml-2 p-2"
          type="number"
          onWheelCapture={(e) => e.target.blur()}
          defaultValue={0}
          // placeholder="Type a number"
          onKeyUp={handleMaxNumber}
          name="stiLinkedToCare"
          onChange={(e) =>
            setEventForm((prev) => ({
              ...prev,
              [e.target.name]: e.target.value,
            }))
          }
        />
      </label>

      <label className="flex gap-5">
        <p className="w-40">Which services were they referred to ?</p>
        <input
          className="border-black ml-2 p-2"
          type="text"
          // placeholder="Type a number"

          name="stiServicesReferredTo"
          onChange={(e) =>
            setEventForm((prev) => ({
              ...prev,
              [e.target.name]: e.target.value,
            }))
          }
        />
      </label>

      <DemographicSurveySection setEventForm={setEventForm} typeOfTest="sti" />
    </div>
  );
};

export default PostEventReportSection26;
