import React, { useMemo } from "react";
const dataFieldStrings = (raiz) => {
  const capitalizeFirstLetter = (string) =>
    string.charAt(0).toUpperCase() + string.slice(1);
  const patologyWord = capitalizeFirstLetter(raiz);
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
/*   const declinedToAnswer = raiz + "AgeDeclinedToAnswer"; */
  const altAgeUnder13 = "altAge" + patologyWord + "Under13";
  const altAge13_18 = "altAge" + patologyWord + "13_18";
  const altAge19_24 = "altAge" + patologyWord + "19_24";
  return [
    { ddbb_label: altAgeUnder13, label: "Under 13" },
    { ddbb_label: altAge13_18, label: "13-18" },
    { ddbb_label: altAge19_24, label: "19-24" },
    // { ddbb_label: hivUnder15, label: "Under 15" },
    // { ddbb_label: hiv16_19, label: "16-19" },
    // { ddbb_label: hiv20_24, label: "20-24" },
    { ddbb_label: hiv25_29, label: "25-29" },
    { ddbb_label: hiv30_34, label: "30-34" },
    { ddbb_label: hiv35_39, label: "35-39" },
    { ddbb_label: hiv40_44, label: "40-44" },
    { ddbb_label: hiv45_49, label: "45-49" },
    { ddbb_label: hiv50_54, label: "50-54" },
    { ddbb_label: hiv55_59, label: "55-59" },
    { ddbb_label: hiv60_64, label: "60-64" },
    { ddbb_label: hiv65_69, label: "65-69" },
    { ddbb_label: hiv70, label: "70+" },

/*     { ddbb_label: declinedToAnswer, label: "Declined to answer" }, */

  ];
};

const AgeSurveySection = ({
  setEventForm,
  eventForm,
  typeOfTest,
  typeOfTestForTitles,
  handleMaxNumber,
  isNumberKey,
  disableWheelInputNumber,
}) => {
  const fields = useMemo(() => dataFieldStrings(typeOfTest), [typeOfTest]);
  const handleForm = (e) => {
    console.log("e.target.value", e.target.name);
  };
  return (
    <div className="grid gap-7">
      <h2 className="font-black">
        Age: How many people were in each of the following age groups for{" "}
        {typeOfTestForTitles(typeOfTest)} Testing?
      </h2>
      {fields.map((field, index) => {
        // OEF Program Age Under 13 is not an option
        if (eventForm?.programName === 'OEF' && field.label === 'Under 13') return;
        return (
          <label className="flex flex-col gap-2" key={index}>
            <p className="w-80">{field.label}</p>
            <input
              type="number"
              onWheelCapture={disableWheelInputNumber}
              onKeyUp={handleMaxNumber}
              defaultValue={eventForm[field.ddbb_label] ?? 0}
              maxLength={3}
              name={fields.ddbb_label}
              className="border-black p-4 w-20 rounded "
              onChange={(e) => {
                let { value } = e.target;
                let finalValue;
                value > 100 ? (finalValue = 100) : (finalValue = value);
                setEventForm((prev) => ({
                  ...prev,
                  [field.ddbb_label]: Number(finalValue),
                }));
              }}
              onKeyDown={isNumberKey}
  
            />
          </label>
        )
      })}
      {/* <label className="flex flex-col gap-2">
        <p className="w-80">{field.label}</p>
        <input
          type="number"
          onWheelCapture={disableWheelInputNumber}
          onKeyUp={handleMaxNumber}
        defaultValue={eventForm[fields[0]] || 0}
          maxLength={3}
          name={fields[]}
          className="border-black p-4 w-20 rounded "
          onChange={handleForm}
        />
      </label>
      <label className="flex flex-col gap-2">
        <p className="w-80">{field.label}</p>
        <input
          type="number"
          onWheelCapture={disableWheelInputNumber}
          onKeyUp={handleMaxNumber}
        defaultValue={eventForm[fields[0]] || 0}
          maxLength={3}
          name={fields[]}
          className="border-black p-4 w-20 rounded "
          onChange={handleForm}
        />
      </label>
      <label className="flex flex-col gap-2">
        <p className="w-80">{field.label}</p>
        <input
          type="number"
          onWheelCapture={disableWheelInputNumber}
          onKeyUp={handleMaxNumber}
        defaultValue={eventForm[fields[0]] || 0}
          maxLength={3}
          name={fields[]}
          className="border-black p-4 w-20 rounded "
          onChange={handleForm}
        />
      </label>
      <label className="flex flex-col gap-2">
        <p className="w-80">{field.label}</p>
        <input
          type="number"
          onWheelCapture={disableWheelInputNumber}
          onKeyUp={handleMaxNumber}
        defaultValue={eventForm[fields[0]] || 0}
          maxLength={3}
          name={fields[]}
          className="border-black p-4 w-20 rounded "
          onChange={handleForm}
        />
      </label>
      <label className="flex flex-col gap-2">
        <p className="w-80">{field.label}</p>
        <input
          type="number"
          onWheelCapture={disableWheelInputNumber}
          onKeyUp={handleMaxNumber}
        defaultValue={eventForm[fields[0]] || 0}
          maxLength={3}
          name={fields[]}
          className="border-black p-4 w-20 rounded "
          onChange={handleForm}
        /> */}
      {/* </label>
      <label className="flex flex-col gap-2">
        <p className="w-80">{field.label}</p>
        <input
          type="number"
          onWheelCapture={disableWheelInputNumber}
          onKeyUp={handleMaxNumber}
        defaultValue={eventForm[fields[0]] || 0}
          maxLength={3}
          name={fields[]}
          className="border-black p-4 w-20 rounded "
          onChange={handleForm}
        />
      </label>
      <label className="flex flex-col gap-2">
        <p className="w-80">{field.label}</p>
        <input
          type="number"
          onWheelCapture={disableWheelInputNumber}
          onKeyUp={handleMaxNumber}
        defaultValue={eventForm[fields[0]] || 0}
          maxLength={3}
          name={fields[]}
          className="border-black p-4 w-20 rounded "
          onChange={handleForm}
        />
      </label>
      <label className="flex flex-col gap-2">
        <p className="w-80">{field.label}</p>
        <input
          type="number"
          onWheelCapture={disableWheelInputNumber}
          onKeyUp={handleMaxNumber}
        defaultValue={eventForm[fields[0]] || 0}
          maxLength={3}
          name={fields[]}
          className="border-black p-4 w-20 rounded "
          onChange={handleForm}
        />
      </label>
      <label className="flex flex-col gap-2">
        <p className="w-80">{field.label}</p>
        <input
          type="number"
          onWheelCapture={disableWheelInputNumber}
          onKeyUp={handleMaxNumber}
        defaultValue={eventForm[fields[0]] || 0}
          maxLength={3}
          name={fields[]}
          className="border-black p-4 w-20 rounded "
          onChange={handleForm}
        />
      </label>
      <label className="flex flex-col gap-2">
        <p className="w-80">{field.label}</p>
        <input
          type="number"
          onWheelCapture={disableWheelInputNumber}
          onKeyUp={handleMaxNumber}
        defaultValue={eventForm[fields[0]] || 0}
          maxLength={3}
          name={fields[]}
          className="border-black p-4 w-20 rounded "
          onChange={handleForm}
        />
      </label>
      <label className="flex flex-col gap-2">
        <p className="w-80">{field.label}</p>
        <input
          type="number"
          onWheelCapture={disableWheelInputNumber}
          onKeyUp={handleMaxNumber}
        defaultValue={eventForm[fields[0]] || 0}
          maxLength={3}
          name={fields[0]}
          className="border-black p-4 w-20 rounded "
          onChange={handleForm}
        />
      </label>
      <label className="flex flex-col gap-2">
        <p className="w-80">{field.label}</p>
        <input
          type="number"
          onWheelCapture={disableWheelInputNumber}
          onKeyUp={handleMaxNumber}
        defaultValue={eventForm[fields[0]] || 0}
          maxLength={3}
          name={fields[1]}
          className="border-black p-4 w-20 rounded "
          onChange={handleForm}
        />
      </label>
      <label className="flex flex-col gap-2">
        <p className="w-80+{field.label}</p>
        <input
          type="number"
          onWheelCapture={disableWheelInputNumber}
          onKeyUp={handleMaxNumber}
        defaultValue={eventForm[fields[0]] || 0}
          maxLength={3}
          name={fields[2]}
          className="border-black p-4 w-20 rounded "
          onChange={handleForm}
        />
      </label> */}
      {/* <label className="flex flex-col gap-2">
        <p className="w-80">Decline {field.label}</p>
        <input
          type="number"
          onWheelCapture={disableWheelInputNumber}
          onKeyUp={handleMaxNumber}
          defaultValue={eventForm[fields[0]] || 0}
          maxLength={3}
          name={fields[3]}
          className="border-black p-4 w-20 rounded "
          onChange={handleForm}
        />
      </label> */}
    </div>
  );
};

export default AgeSurveySection;
