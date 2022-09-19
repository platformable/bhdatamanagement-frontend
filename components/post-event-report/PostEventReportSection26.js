import React from "react";
import DemographicSurveySection from "./DemographicSurveySection";

const PostEventReportSection26 = ({ eventForm, setEventForm, isNumberKey }) => {
  const handleMaxNumber = (e) => {
    let { value } = e.target;
    value > 100 && (e.target.value = 100);
  };
  const handleNumberForm = (e) => {
    let { value } = e.target;
    let finalValue;
    value > 100 ? (finalValue = 100) : (finalValue = value);
    setEventForm((previous) => ({
      ...previous,
      [e.target.name]: Number(finalValue),
    }));
  };
  return (
    <div className="px-7 grid grid-cols-1 mt-10 gap-7">
      <h2 className="font-black">STI Testing</h2>
      <label className="grid md:flex gap-5 items-center">
        <p className="md:w-80">STI Testing Agency</p>
        <input
          className="border-black "
          type="text"
          // placeholder="Please specify"
          defaultValue={eventForm.stiTestingAgency || ""}
          name="stiTestingAgency"
          onChange={(e) =>
            setEventForm((prev) => ({
              ...prev,
              [e.target.name]: e.target.value,
            }))
          }
        />
      </label>

      <label className="grid gap-2">
        <p className="md:w-80">Total tested for STI</p>
        <input
          className="border-black w-20"
          type="number"
          onKeyDown={isNumberKey}
          onWheelCapture={(e) => e.target.blur()}
          defaultValue={eventForm.stiTestedTotal || 0}
          // placeholder="Type a number"
          onKey={handleMaxNumber}
          name="stiTestedTotal"
          onChange={handleNumberForm}
        />
      </label>

      <label className="grid gap-2">
        <p className="md:w-80">Total # of Reactive Results</p>
        <input
          className="border-black w-20"
          type="number"
          onKeyDown={isNumberKey}
          onWheelCapture={(e) => e.target.blur()}
          defaultValue={eventForm.stiReactiveResults || 0}
          // placeholder="Type a number"
          onKey={handleMaxNumber}
          name="stiReactiveResults"
          onChange={handleNumberForm}
        />
      </label>

      <label className="grid gap-2">
        <p className="md:w-80">Total # Linked to Care</p>
        <input
          className="border-black w-20 "
          type="number"
          onKeyDown={isNumberKey}
          onWheelCapture={(e) => e.target.blur()}
          defaultValue={eventForm.stiLinkedToCare || 0}
          // placeholder="Type a number"
          onKey={handleMaxNumber}
          name="stiLinkedToCare"
          onChange={handleNumberForm}
        />
      </label>

      <label className="grid md:flex gap-5 items-center">
        <p className="md:w-80">Which services were they referred to ?</p>
        <input
          className="border-black "
          type="text"
          // placeholder="Type a number"
          defaultValue={eventForm.stiServicesReferr || ""}
          name="stiServicesReferredTo"
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
        eventForm={eventForm}
        typeOfTest="sti"
      />
    </div>
  );
};

export default PostEventReportSection26;
