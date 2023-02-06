import React from "react";

const TypesOfTesting = ({ eventForm, setEventForm }) => {
  const handleForm = (e) =>
    setEventForm((prev) => ({ ...prev, [e.target.name]: !eventForm[e.target.name]}));
  const options = [
    {
      value: true,
      label: "HIV Testing",
      label_db: "hivTesting"
    },
    {
      value: false,
      label: "Hepatitis C Testing",
      label_db: "hepCTesting"
    },
    {
      value: false,
      label: "Other Testing",
      label_db: "otherTesting"
    },
  ];
  return (
    <>
      <div className="question-body">
        <h2 className="font-black">What type of testing was done? </h2>
        <div>
          {options.map((option, index) => (
            <label key={index}>
              <input
                type="checkbox"
                name={option.label_db}
                onChange={handleForm}
                defaultChecked={eventForm[option.label_db]}
              />
              <p>{option.label}</p>
            </label>
          ))}
        </div>
      </div>
      
    </>
  );
};

export default TypesOfTesting;
