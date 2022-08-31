import React, { useMemo } from "react";
const dataFieldStrings = (raizName) => {
  const NotHispanic = raizName + "NotHispanic";
  const MexicanMexicanAmericanOrChicano =
    raizName + "MexicanMexicanAmericanOrChicano";
  const PuertoRican = raizName + "PuertoRican";
  const Cuban = raizName + "Cuban";
  const Dominican = raizName + "Dominican";
  const Ecuadorian = raizName + "Ecuadorian";
  const OtherHispanic = raizName + "OtherHispanic";
  const EthnicityDeclinedToAnswer = raizName + "EthnicityDeclinedToAnswer";
  return [
    NotHispanic,
    MexicanMexicanAmericanOrChicano,
    PuertoRican,
    Cuban,
    Dominican,
    Ecuadorian,
    OtherHispanic,
    EthnicityDeclinedToAnswer,
  ];
};
const EthnicitySurveySection = ({
  typeOfTest,
  setEventForm,
  typeOfTestForTitles,
  handleMaxNumber,
  disableWheelInputNumber
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
        Ethnicity: How many people doing {typeOfTestForTitles(typeOfTest)}{" "}
        testing identified with the following Hispanic and Latin ethnicities?
      </h2>

      <label className="flex gap-x-5">
        <p className="w-40">Not of Hispanic, Latino/a or Spanish origin</p>
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
        <p className="w-40">Mexican, Mexican American or Chicano</p>
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
        <p className="w-40">Puerto Rican</p>
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
        <p className="w-40">Cuban</p>
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
        <p className="w-40">Dominican</p>
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
        <p className="w-40">Ecuadorian</p>
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
        <p className="w-40">Other Hispanic, Latino/a, or Spanish origin</p>
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
        <p className="w-40">Declined to answer</p>
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
    </div>
  );
};

export default EthnicitySurveySection;
