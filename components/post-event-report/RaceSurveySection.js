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

  return [
    hivBlackOrAfricanAmerican,
    hivHispanic,
    hivAsian,
    hivAmericanIndianOrAlaskaNative,
    hivMiddleEasternOrNorthAfrican,
    hivNativeHawaiianOrOtherPacificIslander,
    hivWhite,
    hivSomeOtherRace,
    hivRaceDeclinedToAnswer,
  ];
};

const RaceSurveySection = ({
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
        Race: How many people identified with the following for racial identity
        during {typeOfTestForTitles(typeOfTest)} Testing?
      </h1>
      <label className="flex flex-col gap-5">
        <h3 className="">Black or African American</h3>
        <input
          type="number"
          onWheelCapture={disableWheelInputNumber}
          onKeyUp={handleMaxNumber}
        defaultValue={0}
          maxLength={3}
          className="border-black p-4 w-20 rounded"
          name={fields[0]}
          onChange={handleForm}
        />
      </label>
      <label className="flex flex-col gap-5">
        <h3 className="">Hispanic, Latino/a or Spanish</h3>
        <input
          type="number"
          onWheelCapture={disableWheelInputNumber}
          onKeyUp={handleMaxNumber}
        defaultValue={0}
          maxLength={3}
          className="border-black p-4 w-20 rounded"
          name={fields[1]}
          onChange={handleForm}
        />
      </label>
      <label className="flex flex-col gap-5">
        <h3 className="">Asian</h3>
        <input
          type="number"
          onWheelCapture={disableWheelInputNumber}
          onKeyUp={handleMaxNumber}
        defaultValue={0}
          maxLength={3}
          className="border-black p-4 w-20 rounded"
          name={fields[2]}
          onChange={handleForm}
        />
      </label>
      <label className="flex flex-col gap-5">
        <h3 className="">American Indian or Alaska Native</h3>
        <input
          type="number"
          onWheelCapture={disableWheelInputNumber}
          onKeyUp={handleMaxNumber}
        defaultValue={0}
          maxLength={3}
          className="border-black p-4 w-20 rounded"
          name={fields[3]}
          onChange={handleForm}
        />
      </label>
      <label className="flex flex-col gap-5">
        <h3 className="">Middle Eastern or North African</h3>
        <input
          type="number"
          onWheelCapture={disableWheelInputNumber}
          onKeyUp={handleMaxNumber}
        defaultValue={0}
          maxLength={3}
          className="border-black p-4 w-20 rounded"
          name={fields[4]}
          onChange={handleForm}
        />
      </label>
      <label className="flex flex-col gap-5">
        <h3 className="">Native Hawaiian or Other Pacific Islander</h3>
        <input
          type="number"
          onWheelCapture={disableWheelInputNumber}
          onKeyUp={handleMaxNumber}
        defaultValue={0}
          maxLength={3}
          className="border-black p-4 w-20 rounded"
          name={fields[5]}
          onChange={handleForm}
        />
      </label>
      <label className="flex flex-col gap-5">
        <h3 className="">White</h3>
        <input
          type="number"
          onWheelCapture={disableWheelInputNumber}
          onKeyUp={handleMaxNumber}
        defaultValue={0}
          maxLength={3}
          className="border-black p-4 w-20 rounded"
          name={fields[6]}
          onChange={handleForm}
        />
      </label>
      <label className="flex flex-col gap-5">
        <h3 className="">Some other race or origin</h3>
        <input
          type="number"
          onWheelCapture={disableWheelInputNumber}
          onKeyUp={handleMaxNumber}
        defaultValue={0}
          maxLength={3}
          className="border-black p-4 w-20 rounded"
          name={fields[7]}
          onChange={handleForm}
        />
      </label>
      <label className="flex flex-col gap-5">
        <h3 className="">Declined to answer</h3>
        <input
          type="number"
          onWheelCapture={disableWheelInputNumber}
          onKeyUp={handleMaxNumber}
        defaultValue={0}
          maxLength={3}
          className="border-black p-4 w-20 rounded"
          name={fields[8]}
          onChange={handleForm}
        />
      </label>
    </div>
  );
};

export default RaceSurveySection;
