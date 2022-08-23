import React from "react";

const PostEventReportSection22 = ({eventForm, setEventForm}) => {
  
  const handleForm = (e) => {
    setEventForm((prev) => ({
      ...prev,
      [e.target.name]: !prev[e.target.name],
    }));
  };
  return (
    <>
      <div className="p-5 rounded py-10">
        <h2 className="font-black">
          <span className="">22 </span>
          What testing was done at the event
        </h2>
        <div className="grid mt-5 grid-cols-1 gap-5">
          <label className="flex gap-x-10">
            <input type="checkbox" className="w-6 h-6" name="hivTesting" onChange={handleForm} />
         {' '} HIV Testing
          </label>
          <label className="flex gap-x-10">
            <input type="checkbox" className="w-6 h-6" name="stiTesting" onChange={handleForm} />
            {' '}  STI Testing
          </label>

          <label className="flex gap-x-10">
            <input type="checkbox" className="w-6 h-6" name="hepCTesting" onChange={handleForm} />
            {' '}   Hep C Testing
          </label>

          <label className="flex gap-x-10">
            <input
              type="checkbox" className="w-6 h-6"
              name="bloodPressureTesting"
              onChange={handleForm}
            />
          {' '} Blood Pressure Testing

          </label>

          <label className="flex gap-x-10">
            <input
              type="checkbox" className="w-6 h-6"
              name="cholesterolTesting"
              onChange={handleForm}
            />
         {' '}  Cholesterol Testing

          </label>

          <label className="flex gap-x-10">
            <input type="checkbox" className="w-6 h-6" name="covidTesting" onChange={handleForm} />
            {' '}  COVID-19 Testing
          </label>

          <label className="flex gap-x-10">
            <input type="checkbox" className="w-6 h-6" name="otherTesting" onChange={handleForm} />
            {' '}  Other Testing
          </label>
        </div>
      </div>
    </>
  );
};

export default PostEventReportSection22;
