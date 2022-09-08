import React from "react";

const PostEventReportSection29 = ({ setEventForm }) => {
  const handleMaxNumber = (e) => {
    let {value} = e.target
    value > 100 && (e.target.value = 100)
  }
  return (
    <div className="p-5 grid grid-cols-1 gap-7 my-10">
      <h1 className="font-black">COVID-19 Testing</h1>
      <label className="flex gap-5">
        <p className="w-40 ">COVID-19 Testing Agency</p>
        <input
          className="border-black ml-2 p-2"
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
      <label className="flex gap-5">
        <p className="w-40 ">Total tested for COVID-19</p>
        <input
          className="border-black ml-2 p-2"
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
