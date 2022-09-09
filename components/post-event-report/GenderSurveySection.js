import React, { useMemo } from "react";
const dataFieldStrings = (raiz) => {
  const Female = raiz + "Female";
  const Male = raiz + "Male";
  const TransgenderFemale = raiz + "TransgenderFemale";
  const TransgenderMale = raiz + "TransgenderMale";
  const GenderNonConforming = raiz + "GenderNonConforming";
  const NonBinary = raiz + "NonBinary";
  const OtherGenderIdentity = raiz + "OtherGenderIdentity";
  const GenderDeclinedToAnswer = raiz + "GenderDeclinedToAnswer";

  return [
    Female,
    Male,
    TransgenderFemale,
    TransgenderMale,
    GenderNonConforming,
    NonBinary,
    OtherGenderIdentity,
    GenderDeclinedToAnswer,
  ];
};
const GenderSurveySection = ({
  setEventForm,
  typeOfTest,
  typeOfTestForTitles,
  handleMaxNumber,
  disableWheelInputNumber
}) => {
  const fields = useMemo(() => dataFieldStrings(typeOfTest), [typeOfTest]);

  const handleForm = (e) => {
    let {value} = e.target
    let finalValue;
    value > 100 ? finalValue = 100:finalValue=value
   
    setEventForm((prev) => ({
      ...prev,
      [e.target.name]: Number(finalValue),
    }));
  };
  return (
    <div className="grid grid-cols-1 gap-7">
      <h1 className="font-black">
        Gender: How many people identified as the following for{" "}
        {typeOfTestForTitles(typeOfTest)} Testing?
      </h1>
      <label className="flex flex-col gap-5">
        <h3 className="">Female</h3>
        <input
          type="number"
          onWheelCapture={disableWheelInputNumber}
          onKeyUp={handleMaxNumber}
        defaultValue={0}
          maxLength={3}
          name={fields[0]}
          onChange={handleForm}
          className="border-black p-4 rounded w-20 "
        />
      </label>
      <label className="flex flex-col gap-5">
        <h3 className="">Male</h3>
        <input
          type="number"
          onWheelCapture={disableWheelInputNumber}
          onKeyUp={handleMaxNumber}
        defaultValue={0}
          maxLength={3}
          name={fields[1]}
          onChange={handleForm}
          className="border-black p-4  rounded w-20"
        />
      </label>
      <label className="flex flex-col gap-5">
        <h3 className="">Transgender female</h3>
        <input
          type="number"
          onWheelCapture={disableWheelInputNumber}
          onKeyUp={handleMaxNumber}
        defaultValue={0}
          maxLength={3}
          name={fields[2]}
          onChange={handleForm}
          className="border-black p-4  rounded w-20"
        />
      </label>
      <label className="flex flex-col gap-5">
        <h3 className="">Transgender male</h3>
        <input
          type="number"
          onWheelCapture={disableWheelInputNumber}
          onKeyUp={handleMaxNumber}
        defaultValue={0}
          maxLength={3}
          name={fields[3]}
          onChange={handleForm}
          className="border-black p-4  rounded w-20"
        />
      </label>
      <label className="flex flex-col gap-5">
        <h3 className="">Gender non-conforming</h3>
        <input
          type="number"
          onWheelCapture={disableWheelInputNumber}
          onKeyUp={handleMaxNumber}
        defaultValue={0}
          maxLength={3}
          name={fields[4]}
          onChange={handleForm}
          className="border-black p-4  rounded w-20"
        />
      </label>
      <label className="flex flex-col gap-5">
        <h3 className="">Non-binary</h3>
        <input
          type="number"
          onWheelCapture={disableWheelInputNumber}
          onKeyUp={handleMaxNumber}
        defaultValue={0}
          maxLength={3}
          name={fields[5]}
          onChange={handleForm}
          className="border-black p-4  rounded w-20"
        />
      </label>
      <label className="flex flex-col gap-5">
        <h3 className="">Other gender identity</h3>
        <input
          type="number"
          onWheelCapture={disableWheelInputNumber}
          onKeyUp={handleMaxNumber}
        defaultValue={0}
          maxLength={3}
          name={fields[6]}
          onChange={handleForm}
          className="border-black p-4  rounded w-20"
        />
      </label>
      <label className="flex flex-col gap-5">
        <h3 className="">Decline to answer</h3>
        <input
          type="number"
          onWheelCapture={disableWheelInputNumber}
          onKeyUp={handleMaxNumber}
        defaultValue={0}
          maxLength={3}
          name={fields[7]}
          onChange={handleForm}
          className="border-black p-4  rounded w-20"
        />
      </label>
    </div>
  );
};

export default GenderSurveySection;
