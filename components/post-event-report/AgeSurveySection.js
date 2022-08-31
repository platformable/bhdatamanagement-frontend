import React, { useMemo } from "react";
const dataFieldStrings = (raiz) => {
  const hivUnder15 = raiz + "Under15";
  const hiv16_19 = raiz + "16_19";
  const hiv20_24 = raiz + "20_24";
  const hiv25_29 = raiz + "25_29";
  const hiv30_34 = raiz + "30_34";
  const hiv35_39 = raiz + "35_39";
  const hiv40_44 = raiz + "40_44";
  const hiv45_49 = raiz + "45_49";
  const hiv50_54 = raiz + "50_54";
  const hiv55_59 = raiz + "55_59";
  const hiv60_64 = raiz + "60_64";
  const hiv65_69 = raiz + "65_69";
  const hiv70 = raiz + "70";
  const declinedToAnswer = raiz + "AgeDeclinedToAnswer";

  return [
    hivUnder15,
    hiv16_19,
    hiv20_24,
    hiv25_29,
    hiv30_34,
    hiv35_39,
    hiv40_44,
    hiv45_49,
    hiv50_54,
    hiv55_59,
    hiv60_64,
    hiv65_69,
    hiv70,
    declinedToAnswer,
  ];
};
const AgeSurveySection = ({
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
    <div className="grid gap-5">
      <h2 className="font-black">
        Age: How many people were in each of the following age groups for{" "}
        {typeOfTestForTitles(typeOfTest)} Testing?
      </h2>
      <label className="flex gap-x-5">
        <p className="w-20">Under 15</p>
        <input
          type="number"
          onWheelCapture={disableWheelInputNumber}
          onKeyUp={handleMaxNumber}
        defaultValue={0}
          maxLength={3}
          name={fields[0]}
          className="border-black p-1"
          onChange={handleForm}
        />
      </label>
      <label className="flex gap-x-5">
        <p className="w-20">16-19</p>
        <input
          type="number"
          onWheelCapture={disableWheelInputNumber}
          onKeyUp={handleMaxNumber}
        defaultValue={0}
          maxLength={3}
          name={fields[1]}
          className="border-black p-1"
          onChange={handleForm}
        />
      </label>
      <label className="flex gap-x-5">
        <p className="w-20">20-24</p>
        <input
          type="number"
          onWheelCapture={disableWheelInputNumber}
          onKeyUp={handleMaxNumber}
        defaultValue={0}
          maxLength={3}
          name={fields[2]}
          className="border-black p-1"
          onChange={handleForm}
        />
      </label>
      <label className="flex gap-x-5">
        <p className="w-20">25-29</p>
        <input
          type="number"
          onWheelCapture={disableWheelInputNumber}
          onKeyUp={handleMaxNumber}
        defaultValue={0}
          maxLength={3}
          name={fields[3]}
          className="border-black p-1"
          onChange={handleForm}
        />
      </label>
      <label className="flex gap-x-5">
        <p className="w-20">30-34</p>
        <input
          type="number"
          onWheelCapture={disableWheelInputNumber}
          onKeyUp={handleMaxNumber}
        defaultValue={0}
          maxLength={3}
          name={fields[4]}
          className="border-black p-1"
          onChange={handleForm}
        />
      </label>
      <label className="flex gap-x-5">
        <p className="w-20">35-39</p>
        <input
          type="number"
          onWheelCapture={disableWheelInputNumber}
          onKeyUp={handleMaxNumber}
        defaultValue={0}
          maxLength={3}
          name={fields[5]}
          className="border-black p-1"
          onChange={handleForm}
        />
      </label>
      <label className="flex gap-x-5">
        <p className="w-20">40-44</p>
        <input
          type="number"
          onWheelCapture={disableWheelInputNumber}
          onKeyUp={handleMaxNumber}
        defaultValue={0}
          maxLength={3}
          name={fields[6]}
          className="border-black p-1"
          onChange={handleForm}
        />
      </label>
      <label className="flex gap-x-5">
        <p className="w-20">45-49</p>
        <input
          type="number"
          onWheelCapture={disableWheelInputNumber}
          onKeyUp={handleMaxNumber}
        defaultValue={0}
          maxLength={3}
          name={fields[7]}
          className="border-black p-1"
          onChange={handleForm}
        />
      </label>
      <label className="flex gap-x-5">
        <p className="w-20">50-54</p>
        <input
          type="number"
          onWheelCapture={disableWheelInputNumber}
          onKeyUp={handleMaxNumber}
        defaultValue={0}
          maxLength={3}
          name={fields[8]}
          className="border-black p-1"
          onChange={handleForm}
        />
      </label>
      <label className="flex gap-x-5">
        <p className="w-20">55-59</p>
        <input
          type="number"
          onWheelCapture={disableWheelInputNumber}
          onKeyUp={handleMaxNumber}
        defaultValue={0}
          maxLength={3}
          name={fields[9]}
          className="border-black p-1"
          onChange={handleForm}
        />
      </label>
      <label className="flex gap-x-5">
        <p className="w-20">60-64</p>
        <input
          type="number"
          onWheelCapture={disableWheelInputNumber}
          onKeyUp={handleMaxNumber}
        defaultValue={0}
          maxLength={3}
          name={fields[10]}
          className="border-black p-1"
          onChange={handleForm}
        />
      </label>
      <label className="flex gap-x-5">
        <p className="w-20">65-69</p>
        <input
          type="number"
          onWheelCapture={disableWheelInputNumber}
          onKeyUp={handleMaxNumber}
        defaultValue={0}
          maxLength={3}
          name={fields[11]}
          className="border-black p-1"
          onChange={handleForm}
        />
      </label>
      <label className="flex gap-x-5">
        <p className="w-20">70+</p>
        <input
          type="number"
          onWheelCapture={disableWheelInputNumber}
          onKeyUp={handleMaxNumber}
        defaultValue={0}
          maxLength={3}
          name={fields[12]}
          className="border-black p-1"
          onChange={handleForm}
        />
      </label>
      <label className="flex gap-x-5">
        <p className="w-20">Declined to answer</p>
        <input
          type="number"
          onWheelCapture={disableWheelInputNumber}
          onKeyUp={handleMaxNumber}
          defaultValue={0}
          maxLength={3}
          name={fields[13]}
          className="border-black p-1"
          onChange={handleForm}
        />
      </label>
    </div>
  );
};

export default AgeSurveySection;
