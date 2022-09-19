import React from "react";

const PostEventReportSection29 = ({ eventForm, setEventForm, isNumberKey }) => {
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
    <div className="px-7 grid grid-cols-1 gap-7 my-10">
      <h2 className="font-black">COVID-19 Testing</h2>
      <label className="grid md:flex gap-5 items-center">
        <p className="md:w-80 ">COVID-19 Testing Agency</p>
        <input
          className="border-black p-4"
          type="text"
          //placeholder="Please specify"
          name="covidTestingAgency"
          defaultValue={eventForm.covidTestingAgency || ""}
          onChange={(e) =>
            setEventForm((prev) => ({
              ...prev,
              [e.target.name]: e.target.value,
            }))
          }
        />
      </label>
      <label className="grid md:flex gap-5 items-center">
        <p className="md:w-80 ">Total tested for COVID-19</p>
        <input
          className="border-black p-4"
          type="number"
          onWheelCapture={(e) => e.target.blur()}
          onKeyUp={handleMaxNumber}
          maxLength={3}
          //placeholder="type a number"
          name="covidTestedTotal"
          defaultValue={eventForm.covidTestedTotal || 0}
          onChange={handleNumberForm}
          onKeyDown={isNumberKey}
        />
      </label>
    </div>
  );
};

export default PostEventReportSection29;
