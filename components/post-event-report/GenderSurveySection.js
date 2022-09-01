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
    <div className="grid grid-cols-1 gap-5">
      <h2 className="font-black">
        Gender: How many people identified as the following for{" "}
        {typeOfTestForTitles(typeOfTest)} Testing?
      </h2>
      <label className="flex gap-x-5">
        <p className="w-40">Female</p>
        <input
          type="number"
          onWheelCapture={disableWheelInputNumber}
          onKeyUp={handleMaxNumber}
        defaultValue={0}
          maxLength={3}
          name={fields[0]}
          onChange={handleForm}
          className="border-black p-1"
        />
      </label>
      <label className="flex gap-x-5">
        <p className="w-40">Male</p>
        <input
          type="number"
          onWheelCapture={disableWheelInputNumber}
          onKeyUp={handleMaxNumber}
        defaultValue={0}
          maxLength={3}
          name={fields[1]}
          onChange={handleForm}
          className="border-black p-1"
        />
      </label>
      <label className="flex gap-x-5">
        <p className="w-40">Transgender female</p>
        <input
          type="number"
          onWheelCapture={disableWheelInputNumber}
          onKeyUp={handleMaxNumber}
        defaultValue={0}
          maxLength={3}
          name={fields[2]}
          onChange={handleForm}
          className="border-black p-1"
        />
      </label>
      <label className="flex gap-x-5">
        <p className="w-40">Transgender male</p>
        <input
          type="number"
          onWheelCapture={disableWheelInputNumber}
          onKeyUp={handleMaxNumber}
        defaultValue={0}
          maxLength={3}
          name={fields[3]}
          onChange={handleForm}
          className="border-black p-1"
        />
      </label>
      <label className="flex gap-x-5">
        <p className="w-40">Gender non-conforming</p>
        <input
          type="number"
          onWheelCapture={disableWheelInputNumber}
          onKeyUp={handleMaxNumber}
        defaultValue={0}
          maxLength={3}
          name={fields[4]}
          onChange={handleForm}
          className="border-black p-1"
        />
      </label>
      <label className="flex gap-x-5">
        <p className="w-40">Non-binary</p>
        <input
          type="number"
          onWheelCapture={disableWheelInputNumber}
          onKeyUp={handleMaxNumber}
        defaultValue={0}
          maxLength={3}
          name={fields[5]}
          onChange={handleForm}
          className="border-black p-1"
        />
      </label>
      <label className="flex gap-x-5">
        <p className="w-40">Other gender identity</p>
        <input
          type="number"
          onWheelCapture={disableWheelInputNumber}
          onKeyUp={handleMaxNumber}
        defaultValue={0}
          maxLength={3}
          name={fields[6]}
          onChange={handleForm}
          className="border-black p-1"
        />
      </label>
      <label className="flex gap-x-5">
        <p className="w-40">Decline to answer</p>
        <input
          type="number"
          onWheelCapture={disableWheelInputNumber}
          onKeyUp={handleMaxNumber}
        defaultValue={0}
          maxLength={3}
          name={fields[7]}
          onChange={handleForm}
          className="border-black p-1"
        />
      </label>
    </div>
  );
};

export default GenderSurveySection;
