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
      <div className="px-7 rounded mt-10">
        <h1 className="font-black">
          What testing was done at the event
        </h1>
        <div className="grid mt-7 grid-cols-1 gap-5">
          <p className="flex gap-x-5">
            <input type="checkbox" className="" name="hivTesting" onChange={handleForm} />
         {' '} HIV Testing
          </p>
          <p className="flex gap-x-5">
            <input type="checkbox" className="" name="stiTesting" onChange={handleForm} />
            {' '}  STI Testing
          </p>

          <p className="flex gap-x-5">
            <input type="checkbox" className="" name="hepCTesting" onChange={handleForm} />
            {' '}   Hep C Testing
          </p>

        {/*   <p className="flex gap-x-5">
            <input
              type="checkbox" className=""
              name="bloodPressureTesting"
              onChange={handleForm}
            />
          {' '} Blood Pressure Testing

          </p>

          <p className="flex gap-x-5">
            <input
              type="checkbox" className=""
              name="cholesterolTesting"
              onChange={handleForm}
            />
         {' '}  Cholesterol Testing

          </p> */}

          <p className="flex gap-x-5">
            <input type="checkbox" className="" name="covidTesting" onChange={handleForm} />
            {' '}  COVID-19 Testing
          </p>

      {/*     <p className="flex gap-x-5">
            <input type="checkbox" className="" name="otherTesting" onChange={handleForm} />
            {' '}  Other Testing
          </p> */}
        </div>
      </div>
    </>
  );
};

export default PostEventReportSection22;
