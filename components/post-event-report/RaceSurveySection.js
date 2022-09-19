import React, { useMemo } from "react";

const dataFieldStrings = (raiz) => {
  const hivBlackOrAfricanAmerican = raiz + "BlackOrAfricanAmerican";
  const hivHispanic = raiz + "Hispanic";
  const hivAsian = raiz + "Asian";
  const hivAmericanIndianOrAlaskaNative = raiz + "AmericanIndianOrAlaskaNative";
  const hivMiddleEasternOrNorthAfrican = raiz + "MiddleEasternOrNorthAfrican";
  const hivNativeHawaiianOrOtherPacificIslander =
    raiz + "NativeHawaiianOrOtherPacificIslander";
  const hivWhite = raiz + "White";
  const hivSomeOtherRace = raiz + "SomeOtherRace";
  const hivRaceDeclinedToAnswer = raiz + "RaceDeclinedToAnswer";
  const hivMoreThanOneRace = raiz + "MoreThanOneRace";

  return [
    hivBlackOrAfricanAmerican,
    hivHispanic,
    hivAsian,
    hivAmericanIndianOrAlaskaNative,
    hivMiddleEasternOrNorthAfrican,
    hivNativeHawaiianOrOtherPacificIslander,
    hivWhite,
    hivSomeOtherRace,
    hivMoreThanOneRace,
    hivRaceDeclinedToAnswer,
  ];
};

const RaceSurveySection = ({
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
    console.log("name: ",e.target.name)
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
        Race: How many people identified with the following for racial identity
        during {typeOfTestForTitles(typeOfTest)} Testing?
      </h2>
      <label className="flex flex-col gap-2">
        <p className="">Black or African American</p>
        <input
          type="number"
          onWheelCapture={disableWheelInputNumber}
          onKeyUp={handleMaxNumber}
          defaultValue={eventForm[fields[0]] ?? 0}
          maxLength={3}
          className="border-black p-4 w-20 rounded"
          name={fields[0]}
          onChange={handleForm}
          onKeyDown={isNumberKey}
        />
      </label>
      <label className="flex flex-col gap-2">
        <p className="">Hispanic, Latino/a or Spanish</p>
        <input
          type="number"
          onWheelCapture={disableWheelInputNumber}
          onKeyUp={handleMaxNumber}
          defaultValue={eventForm[fields[1]] ?? 0}
          maxLength={3}
          className="border-black p-4 w-20 rounded"
          name={fields[1]}
          onChange={handleForm}
          onKeyDown={isNumberKey}
        />
      </label>
      <label className="flex flex-col gap-2">
        <p className="">Asian</p>
        <input
          type="number"
          onWheelCapture={disableWheelInputNumber}
          onKeyUp={handleMaxNumber}
          defaultValue={eventForm[fields[2]] ?? 0}
          maxLength={3}
          className="border-black p-4 w-20 rounded"
          name={fields[2]}
          onChange={handleForm}
          onKeyDown={isNumberKey}
        />
      </label>
      <label className="flex flex-col gap-2">
        <p className="">American Indian or Alaska Native</p>
        <input
          type="number"
          onWheelCapture={disableWheelInputNumber}
          onKeyUp={handleMaxNumber}
          defaultValue={eventForm[fields[3]] ?? 0}
          maxLength={3}
          className="border-black p-4 w-20 rounded"
          name={fields[3]}
          onChange={handleForm}
          onKeyDown={isNumberKey}
        />
      </label>
      <label className="flex flex-col gap-2">
        <p className="">Middle Eastern or North African</p>
        <input
          type="number"
          onWheelCapture={disableWheelInputNumber}
          onKeyUp={handleMaxNumber}
          defaultValue={eventForm[fields[4]] ?? 0}
          maxLength={3}
          className="border-black p-4 w-20 rounded"
          name={fields[4]}
          onChange={handleForm}
          onKeyDown={isNumberKey}
        />
      </label>
      <label className="flex flex-col gap-2">
        <p className="">Native Hawaiian or Other Pacific Islander</p>
        <input
          type="number"
          onWheelCapture={disableWheelInputNumber}
          onKeyUp={handleMaxNumber}
          defaultValue={eventForm[fields[5]] ?? 0}
          maxLength={3}
          className="border-black p-4 w-20 rounded"
          name={fields[5]}
          onChange={handleForm}
          onKeyDown={isNumberKey}
        />
      </label>
      <label className="flex flex-col gap-2">
        <p className="">White</p>
        <input
          type="number"
          onWheelCapture={disableWheelInputNumber}
          onKeyUp={handleMaxNumber}
          defaultValue={eventForm[fields[6]] ?? 0}
          maxLength={3}
          className="border-black p-4 w-20 rounded"
          name={fields[6]}
          onChange={handleForm}
          onKeyDown={isNumberKey}
        />
      </label>
      <label className="flex flex-col gap-2">
        <p className="">Some other race or origin</p>
        <input
          type="number"
          onWheelCapture={disableWheelInputNumber}
          onKeyUp={handleMaxNumber}
          defaultValue={eventForm[fields[7]] ?? 0}
          maxLength={3}
          className="border-black p-4 w-20 rounded"
          name={fields[7]}
          onChange={handleForm}
          onKeyDown={isNumberKey}
        />
      </label>
      <label className="flex flex-col gap-2">
        <p className="">More than one race/ethnicity</p>
        <input
          type="number"
          onWheelCapture={disableWheelInputNumber}
          onKeyUp={handleMaxNumber}
          defaultValue={eventForm[fields[8]] ?? 0}
          maxLength={3}
          className="border-black p-4 w-20 rounded"
          name={fields[8]}
          onChange={handleForm}
          onKeyDown={isNumberKey}
        />
      </label>
      <label className="flex flex-col gap-2">
        <p className="">Decline to answer</p>
        <input
          type="number"
          onWheelCapture={disableWheelInputNumber}
          onKeyUp={handleMaxNumber}
          defaultValue={eventForm[fields[9]] ?? 0}
          maxLength={3}
          className="border-black p-4 w-20 rounded"
          name={fields[9]}
          onChange={handleForm}
          onKeyDown={isNumberKey}
        />
      </label>
    </div>
  );
};

export default RaceSurveySection;
