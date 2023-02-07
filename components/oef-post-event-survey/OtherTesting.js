import React from "react";
const OtherTesting = ({
  eventForm ,
  setEventForm, isNumberKey
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
      <h2 className="font-black">Other Testing</h2>
      <label className="grid md:flex gap-5 items-center items-center">
        <p className="md:w-80">What other testing was done at the event?</p>
        <input
          className="border-black w-96"
          type="text"
          /* placeholder="Please specify" */
          name="otherTestingType"
          defaultValue={eventForm?.otherTestingType}
          onChange={(e) =>
            setEventForm((prev) => ({
              ...prev,
              [e.target.name]: e.target.value,
            }))
          }
        //   defaultValue={eventForm. || ""}
        />
      </label>
      <label className="grid gap-2 items-center">
        <p className="md:w-80">How many people were tested?</p>
        <input
          className="border-black w-20"
          type="number"
          onKeyDown={isNumberKey}
          onWheelCapture={(e) => e.target.blur()}
          defaultValue={eventForm?.otherTestedTotal || 0}
          onKeyUp={handleMaxNumber}
          /* placeholder="type a number" */
          name="otherTestedTotal"
          onChange={handleNumberForm}
        />
      </label>
     
     

    </div>
  );
};

export default OtherTesting;
