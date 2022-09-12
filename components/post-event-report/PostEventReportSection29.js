import React from "react";

const PostEventReportSection29 = ({ setEventForm }) => {
  const handleMaxNumber = (e) => {
    let {value} = e.target
    value > 100 && (e.target.value = 100)
  }
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
          defaultValue={0}
          onKeyUp={handleMaxNumber}
          maxLength={3}
          //placeholder="type a number"
          name="covidTestedTotal"
          onChange={(e) =>
            setEventForm((prev) => ({
              ...prev,
              [e.target.name]: Number(e.target.value),
            }))
          }
        />
      </label>
    </div>
  );
};

export default PostEventReportSection29;
