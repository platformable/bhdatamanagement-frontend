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
        <h2 className="mb-3 font-black">
          <span className="">22 </span>
          What testing was done at the event
        </h2>
        <div className="grid grid-cols-1">
          <label>
            <input type="checkbox" name="hivTesting" onChange={handleForm} />
          HIV Testing
          </label>
          <label>
            <input type="checkbox" name="stiTesting" onChange={handleForm} />
          STI Testing
          </label>

          <label>
            <input type="checkbox" name="hepCTesting" onChange={handleForm} />
            Hep C Testing
          </label>

          <label>
            <input
              type="checkbox"
              name="bloodPressureTesting"
              onChange={handleForm}
            />
          Blood Pressure Testing

          </label>

          <label>
            <input
              type="checkbox"
              name="cholesterolTesting"
              onChange={handleForm}
            />
          Cholesterol Testing

          </label>

          <label>
            <input type="checkbox" name="covidTesting" onChange={handleForm} />
          COVID-19 Testing
          </label>

          <label>
            <input type="checkbox" name="otherTesting" onChange={handleForm} />
          Other Testing
          </label>
        </div>
      </div>
    </>
  );
};

export default PostEventReportSection22;
