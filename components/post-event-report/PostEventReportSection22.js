import React from "react";

const PostEventReportSection22 = ({ eventForm, setEventForm }) => {
  const handleForm = (e) => {
    setEventForm((prev) => ({
      ...prev,
      [e.target.name]: !prev[e.target.name],
    }));
  };
  return (
    <>
      <div className="px-7 rounded mt-10">
        <h2 className="font-black">What testing was done at this event?</h2>
        <div className="grid mt-7 grid-cols-1 gap-5">
          <label className="flex  gap-x-5">
            <input
              type="checkbox"
              className=""
              name="hivTesting"
              onChange={handleForm}
              defaultChecked={eventForm?.hivTesting }
            />{" "}
            HIV Testing
          </label>
          <label className="flex  gap-x-5">
            <input
              type="checkbox"
              className=""
              name="stiTesting"
              onChange={handleForm}
              defaultChecked={eventForm?.stiTesting }
            />{" "}
            STI Testing
          </label>

          <label className="flex  gap-x-5">
            <input
              type="checkbox"
              className=""
              name="hepCTesting"
              onChange={handleForm}
              defaultChecked={eventForm?.hepCTesting }
            />{" "}
            Hep C Testing
          </label>

          {/*   <label className="flex  gap-x-5">
            <input
              type="checkbox" className=""
              name="bloodPressureTesting"
              onChange={handleForm} defaultChecked={eventForm?.}
            /> 
                     {' '} Blood Pressure Testing

          </label>

          <label className="flex  gap-x-5">
            <input
              type="checkbox" className=""
              name="cholesterolTesting"
              onChange={handleForm} defaultChecked={eventForm?.}
            /> 
                    {' '}  Cholesterol Testing

          </label> */}

          <label className="flex  gap-x-5">
            <input
              type="checkbox"
              className=""
              name="covidTesting"
              onChange={handleForm}
              defaultChecked={eventForm?.covidTesting }
            />{" "}
            COVID-19 Testing
          </label>

          {/*     <label className="flex  gap-x-5">
            <input type="checkbox" className="" name="otherTesting" onChange={handleForm} />
            {' '}  Other Testing
          </label> */}
        </div>
      </div>
    </>
  );
};

export default PostEventReportSection22;
