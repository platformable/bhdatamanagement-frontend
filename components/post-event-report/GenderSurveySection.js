import React, { useMemo } from "react";
const dataFieldStrings = (raiz) => {
  const Female = raiz + "Female";
  const Male = raiz + "Male";
  const TransgenderFemale = raiz + "TransgenderFemale";
  const TransgenderMale = raiz + "TransgenderMale";
  const GenderNonConforming = raiz + "GenderNonConforming";
  const NonBinary = raiz + "NonBinary";
  const NotSureQuestioning = raiz + "GenderNotSureQuestioning";
  const OtherGenderIdentity = raiz + "OtherGenderIdentity";
  const GenderDeclinedToAnswer = raiz + "GenderDeclinedToAnswer";

  return [
    Female,
    Male,
    TransgenderFemale,
    TransgenderMale,
    GenderNonConforming,
    NonBinary,
    NotSureQuestioning,
    OtherGenderIdentity,
    GenderDeclinedToAnswer,
  ];
};
const GenderSurveySection = ({
  setEventForm,
  eventForm,
  typeOfTest,
  typeOfTestForTitles,
  handleMaxNumber,
  disableWheelInputNumber,
  isNumberKey,
}) => {
  const fields = useMemo(() => dataFieldStrings(typeOfTest), [typeOfTest]);

  const handleForm = (e) => {
    let { value } = e.target;
    let finalValue;
    value > 100 ? (finalValue = 100) : (finalValue = value);

    setEventForm((prev) => ({
      ...prev,
      [e.target.name]: Number(finalValue),
    }));
  };
  return (
    <div className="grid grid-cols-1 gap-7">
      <h2 className="font-black">
        Gender: How many people identified as the following for{" "}
        {typeOfTestForTitles(typeOfTest)} Testing?
      </h2>
      <label className="flex flex-col gap-2">
        <p className="">Female</p>
        <input
          type="number"
          onWheelCapture={disableWheelInputNumber}
          onKeyUp={handleMaxNumber}
          defaultValue={eventForm[fields[0]] ?? 0}
          maxLength={3}
          name={fields[0]}
          onChange={handleForm}
          onKeyDown={isNumberKey}
          className="border-black p-4 rounded w-20 "
        />
      </label>
      <label className="flex flex-col gap-2">
        <p className="">Male</p>
        <input
          type="number"
          onWheelCapture={disableWheelInputNumber}
          onKeyUp={handleMaxNumber}
          defaultValue={eventForm[fields[1]] ?? 0}
          maxLength={3}
          name={fields[1]}
          onChange={handleForm}
          onKeyDown={isNumberKey}
          className="border-black p-4  rounded w-20"
        />
      </label>
      <label className="flex flex-col gap-2">
        <p className="">Transgender female</p>
        <input
          type="number"
          onWheelCapture={disableWheelInputNumber}
          onKeyUp={handleMaxNumber}
          defaultValue={eventForm[fields[2]] ?? 0}
          maxLength={3}
          name={fields[2]}
          onChange={handleForm}
          onKeyDown={isNumberKey}
          className="border-black p-4  rounded w-20"
        />
      </label>
      <label className="flex flex-col gap-2">
        <p className="">Transgender male</p>
        <input
          type="number"
          onWheelCapture={disableWheelInputNumber}
          onKeyUp={handleMaxNumber}
          defaultValue={eventForm[fields[3]] ?? 0}
          maxLength={3}
          name={fields[3]}
          onChange={handleForm}
          onKeyDown={isNumberKey}
          className="border-black p-4  rounded w-20"
        />
      </label>
      <label className="flex flex-col gap-2">
        <p className="">Gender non-conforming</p>
        <input
          type="number"
          onWheelCapture={disableWheelInputNumber}
          onKeyUp={handleMaxNumber}
          defaultValue={eventForm[fields[4]] ?? 0}
          maxLength={3}
          name={fields[4]}
          onChange={handleForm}
          onKeyDown={isNumberKey}
          className="border-black p-4  rounded w-20"
        />
      </label>
      <label className="flex flex-col gap-2">
        <p className="">Non-binary</p>
        <input
          type="number"
          onWheelCapture={disableWheelInputNumber}
          onKeyUp={handleMaxNumber}
          defaultValue={eventForm[fields[5]] ?? 0}
          maxLength={3}
          name={fields[5]}
          onChange={handleForm}
          onKeyDown={isNumberKey}
          className="border-black p-4  rounded w-20"
        />
      </label>
      <label className="flex flex-col gap-2">
        <p className="">Not sure / Questioning</p>
        <input
          type="number"
          onWheelCapture={disableWheelInputNumber}
          onKeyUp={handleMaxNumber}
          defaultValue={eventForm[fields[6]] ?? 0}
          maxLength={3}
          name={fields[6]}
          onChange={handleForm}
          onKeyDown={isNumberKey}
          className="border-black p-4  rounded w-20"
        />
      </label>
      <label className="flex flex-col gap-2">
        <p className="">Other gender identity</p>
        <input
          type="number"
          onWheelCapture={disableWheelInputNumber}
          onKeyUp={handleMaxNumber}
          defaultValue={eventForm[fields[7]] ?? 0}
          maxLength={3}
          name={fields[7]}
          onChange={handleForm}
          onKeyDown={isNumberKey}
          className="border-black p-4  rounded w-20"
        />
      </label>
      <label className="flex flex-col gap-2">
        <p className="">Decline to answer</p>
        <input
          type="number"
          onWheelCapture={disableWheelInputNumber}
          onKeyUp={handleMaxNumber}
          defaultValue={eventForm[fields[8]] ?? 0}
          maxLength={3}
          name={fields[8]}
          onChange={handleForm}
          onKeyDown={isNumberKey}
          className="border-black p-4  rounded w-20"
        />
      </label>
    </div>
  );
};

export default GenderSurveySection;
