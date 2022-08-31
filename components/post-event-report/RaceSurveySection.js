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
  handleMaxNumber
}) => {
  const fields = useMemo(() => dataFieldStrings(typeOfTest), [typeOfTest]);

  const handleForm = (e) => {
    setEventForm((prev) => ({
      ...prev,
      [e.target.name]: Number(e.target.value),
    }));
  };
  return (
    <div className="grid grid-cols-1 gap-5">
      <h2 className="font-black">
        Race: How many people identified with the following for racial identity
        during {typeOfTestForTitles(typeOfTest)} Testing?
      </h2>
      <label className="flex gap-x-5">
        <p className="w-40">Black or African American</p>
        <input
          type="number"
          onWheelCapture={disableWheelInputNumber}
          onKeyUp={handleMaxNumber}
        defaultValue={0}
          maxLength={3}
          className="border-black p-1"
          name={fields[0]}
          onChange={handleForm}
        />
      </label>
      <label className="flex gap-x-5">
        <p className="w-40">Hispanic, Latino/a or Spanish</p>
        <input
          type="number"
          onWheelCapture={disableWheelInputNumber}
          onKeyUp={handleMaxNumber}
        defaultValue={0}
          maxLength={3}
          className="border-black p-1"
          name={fields[1]}
          onChange={handleForm}
        />
      </label>
      <label className="flex gap-x-5">
        <p className="w-40">Asian</p>
        <input
          type="number"
          onWheelCapture={disableWheelInputNumber}
          onKeyUp={handleMaxNumber}
        defaultValue={0}
          maxLength={3}
          className="border-black p-1"
          name={fields[2]}
          onChange={handleForm}
        />
      </label>
      <label className="flex gap-x-5">
        <p className="w-40">American Indian or Alaska Native</p>
        <input
          type="number"
          onWheelCapture={disableWheelInputNumber}
          onKeyUp={handleMaxNumber}
        defaultValue={0}
          maxLength={3}
          className="border-black p-1"
          name={fields[3]}
          onChange={handleForm}
        />
      </label>
      <label className="flex gap-x-5">
        <p className="w-40">Middle Eastern or North African</p>
        <input
          type="number"
          onWheelCapture={disableWheelInputNumber}
          onKeyUp={handleMaxNumber}
        defaultValue={0}
          maxLength={3}
          className="border-black p-1"
          name={fields[4]}
          onChange={handleForm}
        />
      </label>
      <label className="flex gap-x-5">
        <p className="w-40">Native Hawaiian or Other Pacific Islander</p>
        <input
          type="number"
          onWheelCapture={disableWheelInputNumber}
          onKeyUp={handleMaxNumber}
        defaultValue={0}
          maxLength={3}
          className="border-black p-1"
          name={fields[5]}
          onChange={handleForm}
        />
      </label>
      <label className="flex gap-x-5">
        <p className="w-40">White</p>
        <input
          type="number"
          onWheelCapture={disableWheelInputNumber}
          onKeyUp={handleMaxNumber}
        defaultValue={0}
          maxLength={3}
          className="border-black p-1"
          name={fields[6]}
          onChange={handleForm}
        />
      </label>
      <label className="flex gap-x-5">
        <p className="w-40">Some other race or origin</p>
        <input
          type="number"
          onWheelCapture={disableWheelInputNumber}
          onKeyUp={handleMaxNumber}
        defaultValue={0}
          maxLength={3}
          className="border-black p-1"
          name={fields[7]}
          onChange={handleForm}
        />
      </label>
      <label className="flex gap-x-5">
        <p className="w-40">Declined to answer</p>
        <input
          type="number"
          onWheelCapture={disableWheelInputNumber}
          onKeyUp={handleMaxNumber}
        defaultValue={0}
          maxLength={3}
          className="border-black p-1"
          name={fields[8]}
          onChange={handleForm}
        />
      </label>
    </div>
  );
};

export default RaceSurveySection;
