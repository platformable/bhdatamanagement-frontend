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
  eventForm,
  typeOfTestForTitles,
  handleMaxNumber,
  disableWheelInputNumber,
  isNumberKey
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
      <h2 className="font-black">
        Ethnicity: How many people doing {typeOfTestForTitles(typeOfTest)}{" "}
        testing identified with the following Hispanic and Latin ethnicities?
      </h2>

      <label className="flex flex-col gap-2">
        <p className="">Not of Hispanic, Latino/a or Spanish origin</p>
        <input
          type="number"
          onWheelCapture={disableWheelInputNumber}
          onKeyUp={handleMaxNumber}
        defaultValue={eventForm[fields[0]] ?? 0}
          maxLength={3}
          className="border-black p-4 rounded  w-20"
          name={fields[0]}
          onChange={handleForm}
          onKeyDown={isNumberKey}
        
        />
      </label>
      <label className="flex flex-col gap-2">
        <p >Mexican, Mexican American or Chicano</p>
        <input
          type="number"
          onWheelCapture={disableWheelInputNumber}
          onKeyUp={handleMaxNumber}
        defaultValue={eventForm[fields[1]] ?? 0}
          maxLength={3}
          className="border-black p-4 rounded  w-20"
          name={fields[1]}
          onChange={handleForm}
          onKeyDown={isNumberKey}
        />
      </label>
      <label className="flex flex-col gap-2">
        <p >Puerto Rican</p>
        <input
          type="number"
          onWheelCapture={disableWheelInputNumber}
          onKeyUp={handleMaxNumber}
        defaultValue={eventForm[fields[2]] ?? 0}
          maxLength={3}
          className="border-black p-4 rounded  w-20"
          name={fields[2]}
          onChange={handleForm}
          onKeyDown={isNumberKey}
        />
      </label>
      <label className="flex flex-col gap-2">
        <p >Cuban</p>
        <input
          type="number"
          onWheelCapture={disableWheelInputNumber}
          onKeyUp={handleMaxNumber}
        defaultValue={eventForm[fields[3]] ?? 0}
          maxLength={3}
          className="border-black p-4 rounded  w-20"
          name={fields[3]}
          onChange={handleForm}
          onKeyDown={isNumberKey}
        />
      </label>
      <label className="flex flex-col gap-2">
        <p >Dominican</p>
        <input
          type="number"
          onWheelCapture={disableWheelInputNumber}
          onKeyUp={handleMaxNumber}
        defaultValue={eventForm[fields[4]] ?? 0}
          maxLength={3}
          className="border-black p-4 rounded  w-20"
          name={fields[4]}
          onChange={handleForm}
          onKeyDown={isNumberKey}
        />
      </label>
      <label className="flex flex-col gap-2">
        <p >Ecuadorian</p>
        <input
          type="number"
          onWheelCapture={disableWheelInputNumber}
          onKeyUp={handleMaxNumber}
        defaultValue={eventForm[fields[5]] ?? 0}
          maxLength={3}
          className="border-black p-4 rounded  w-20"
          name={fields[5]}
          onChange={handleForm}
          onKeyDown={isNumberKey}
        />
      </label>
      <label className="flex flex-col gap-2">
        <p >Other Hispanic, Latino/a, or Spanish origin</p>
        <input
          type="number"
          onWheelCapture={disableWheelInputNumber}
          onKeyUp={handleMaxNumber}
        defaultValue={eventForm[fields[6]] ?? 0}
          maxLength={3}
          className="border-black p-4 rounded  w-20"
          name={fields[6]}
          onChange={handleForm}
          onKeyDown={isNumberKey}
        />
      </label>
      <label className="flex flex-col gap-2">
        <p >Decline to answer</p>
        <input
          type="number"
          onWheelCapture={disableWheelInputNumber}
          onKeyUp={handleMaxNumber}
        defaultValue={eventForm[fields[7]] ?? 0}
          maxLength={3}
          className="border-black p-4 rounded  w-20"
          name={fields[7]}
          onChange={handleForm}
          onKeyDown={isNumberKey}
        />
      </label>
    </div>
  );
};

export default EthnicitySurveySection;
