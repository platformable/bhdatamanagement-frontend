import React from "react";
import DemographicSurveySection from "./DemographicSurveySection";
const PostEventReportSection25 = ({
  eventForm ,
  setEventForm, isNumberKey, children
}) => {
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
    <div className="px-7 grid grid-cols-1 gap-7 mt-10">
      <h2 className="font-black">Hepatitis C Testing</h2>
      {children}
      <label className="grid md:flex gap-5 items-center items-center">
        <p className="md:w-80">Hepatitis C Testing Agency</p>
        <input
          className="border-black w-96"
          type="text"
          /* placeholder="Please specify" */
          name="hepCTestingAgency"
          onChange={(e) =>
            setEventForm((prev) => ({
              ...prev,
              [e.target.name]: e.target.value,
            }))
          }
          defaultValue={eventForm.hepCTestingAgency || ""}
        />
      </label>
      <label className="grid gap-2 items-center">
        <p className="md:w-80"> Total tested for Hepatitis C</p>
        <input
          className="border-black w-20"
          type="number"
          onKeyDown={isNumberKey}
          onWheelCapture={(e) => e.target.blur()}
          defaultValue={eventForm.hepCTestedTotal || 0}
          onKeyUp={handleMaxNumber}
          /* placeholder="type a number" */
          name="hepCTestedTotal"
          onChange={handleNumberForm}
        />
      </label>
      <label className="grid gap-2 items-center">
        <p className="md:w-80"> Total # of Reactive Results</p>
        <input
          className="border-black w-20"
          type="number"
          onKeyDown={isNumberKey}
          onWheelCapture={(e) => e.target.blur()}
          defaultValue={eventForm.hepCReactiveResults || 0}
          onKeyUp={handleMaxNumber}
          /* placeholder="type a number" */
          name="hepCReactiveResults"
          onChange={handleNumberForm}
        />
      </label>
      <label className="grid gap-2 items-center">
        <p className="md:w-80"> Total # Linked to Care</p>
        <input
          className="border-black w-20 "
          type="number"
          onKeyDown={isNumberKey}
          onWheelCapture={(e) => e.target.blur()}
          defaultValue={eventForm.hepCLinkedToCare || 0}
          onKeyUp={handleMaxNumber}
          /* placeholder="type a number" */
          name="hepCLinkedToCare"
          onChange={handleNumberForm}
        />
      </label>
      <label className="grid md:flex gap-5 items-center">
        <p className="md:w-80"> Which services were they referred to? </p>
        <input
          className="border-black w-96"
          type="text"
          /* placeholder="type a number" */
          name="hepCServicesReferredTo"
          onChange={(e) =>
            setEventForm((prev) => ({
              ...prev,
              [e.target.name]: e.target.value,
            }))
          }
          defaultValue={eventForm.hepCServicesReferredTo || ""}

        />
      </label>

      <DemographicSurveySection
        setEventForm={setEventForm}
        eventForm={eventForm}
        typeOfTest="hepC"
      />
    </div>
  );
};

export default PostEventReportSection25;
