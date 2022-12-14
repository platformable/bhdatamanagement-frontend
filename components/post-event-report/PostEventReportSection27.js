import React from "react";
import DemographicSurveySection from "./DemographicSurveySection";

const PostEventReportSection27 = ({ setEventForm }) => {
  const handleMaxNumber = (e) => {
    let { value } = e.target;
    value > 100 && (e.target.value = 100);
  };
  return (
    <div className="px-7 grid grid-cols-1 mt-10 gap-7">
      <h2 className="font-black">Blood Pressure Testing</h2>
      <label className="grid md:flex gap-5 items-center">
        <p className="md:w-80 ">Blood Pressure Testing Agency</p>
        <input
          className="border-black  p-4"
          type="text"
          // placeholder="Please specify"

          name="bloodPressureTestingAgency"
          onChange={(e) =>
            setEventForm((prev) => ({
              ...prev,
              [e.target.name]: e.target.value,
            }))
          }
        />
      </label>

      <label className="grid md:flex gap-5">
        <p className="md:w-80 ">Total tested for Blood Pressure</p>
        <input
          className="border-black  p-4"
          type="number"
          onWheelCapture={(e) => e.target.blur()}
          defaultValue={0}
          // placeholder="Type a number"
          onKeyUp={handleMaxNumber}
          name="bloodPressureTestedTotal"
          onChange={(e) =>
            setEventForm((prev) => ({
              ...prev,
              [e.target.name]: e.target.value,
            }))
          }
        />
      </label>

      {/* <label className="grid md:flex gap-5">
      <p className='md:w-80 '>Total # of Reactive Results</p>
      <input
        className="border-black  p-4"
        type="number"
                onWheelCapture={(e) => e.target.blur()}

          defaultValue={0}
        // placeholder="Type a number"
          onKeyUp={handleMaxNumber}

        name="bloodPressureReactiveResults"
        onChange={(e) =>
          setEventForm((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
          }))
        }
      />
    </label> */}

      <label className="grid md:flex gap-5">
        <p className="md:w-80">Total # Linked to Care</p>
        <input
          className="border-black  p-4"
          type="number"
          onWheelCapture={(e) => e.target.blur()}
          defaultValue={0}
          // placeholder="Type a number"
          onKeyUp={handleMaxNumber}
          name="bloodPressureLinkedToCare"
          onChange={(e) =>
            setEventForm((prev) => ({
              ...prev,
              [e.target.name]: e.target.value,
            }))
          }
        />
      </label>

      <label className="grid md:flex gap-5 items-center">
        <p className="md:w-80 ">Which services were they referred to ?</p>
        <input
          className="border-black  p-4"
          type="text"
          // placeholder="Type a number"

          name="bloodPressureServicesReferredTo"
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
        typeOfTest="bloodPressure"
      />
    </div>
  );
};

export default PostEventReportSection27;
