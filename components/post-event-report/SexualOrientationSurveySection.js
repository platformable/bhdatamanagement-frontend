import React, { useMemo } from "react";

const dataFieldStrings = (raiz) => {
  const hivGayOrLesbian = raiz + "GayOrLesbian";
  const hivStraightOrHeterosexual = raiz + "StraightOrHeterosexual";
  const hivBisexual = raiz + "Bisexual";
  const hivQueer = raiz + "Queer";
  const hivQuestioningOrNotSure = raiz + "QuestioningOrNotSure";
  const hivSexualOrientationUnknown = raiz + "SexualOrientationUnknown";
  const hivSexualOrientationDeclinedToAnswer =
    raiz + "SexualOrientationDeclinedToAnswer";

  return [
    hivGayOrLesbian,
    hivStraightOrHeterosexual,
    hivBisexual,
    hivQueer,
    hivQuestioningOrNotSure,
    hivSexualOrientationUnknown,
    hivSexualOrientationDeclinedToAnswer,
  ];
};
const SexualOrientationSurveySection = ({
  setEventForm,
  eventForm,
  typeOfTest,
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
        Sexual orientation: How many people doing testing identified with the following
        sexual orientation?
      </h2>
      <label className="flex flex-col gap-2">
        <p className="w-60 gap-x-5 text-lg">Gay or lesbian</p>
        <input
          type="number"
          onWheelCapture={disableWheelInputNumber}
          onKeyUp={handleMaxNumber}
        defaultValue={eventForm[fields[0]] || 0}
          maxLength={3}
          className="border-black p-4  rounded w-20"
          name={fields[0]}
          onChange={handleForm}
          onKeyDown={isNumberKey}

        />
      </label>
      <label className="flex flex-col gap-2">
        <p className="w-60 gap-x-5">Straight or heterosexual</p>
        <input
          type="number"
          onWheelCapture={disableWheelInputNumber}
          onKeyUp={handleMaxNumber}
        defaultValue={eventForm[fields[1]] || 0}
          maxLength={3}
          className="border-black p-4  rounded w-20"
          name={fields[1]}
          onChange={handleForm}
          onKeyDown={isNumberKey}

        />
      </label>
      <label className="flex flex-col gap-2">
        <p className="w-60 gap-x-5">Bisexual</p>
        <input
          type="number"
          onWheelCapture={disableWheelInputNumber}
          onKeyUp={handleMaxNumber}
        defaultValue={eventForm[fields[2]] || 0}
          maxLength={3}
          className="border-black p-4  rounded w-20"
          name={fields[2]}
          onChange={handleForm}
          onKeyDown={isNumberKey}

        />
      </label>
      <label className="flex flex-col gap-2">
        <p className="w-60 gap-x-5">Queer</p>
        <input
          type="number"
          onWheelCapture={disableWheelInputNumber}
          onKeyUp={handleMaxNumber}
        defaultValue={eventForm[fields[3]] || 0}
          maxLength={3}
          className="border-black p-4  rounded w-20"
          name={fields[3]}
          onChange={handleForm}
          onKeyDown={isNumberKey}

        />
      </label>
      <label className="flex flex-col gap-2">
        <p className="w-60 gap-x-5">Questioning or not sure</p>
        <input
          type="number"
          onWheelCapture={disableWheelInputNumber}
          onKeyUp={handleMaxNumber}
        defaultValue={eventForm[fields[4]] || 0}
          maxLength={3}
          className="border-black p-4  rounded w-20"
          name={fields[4]}
          onChange={handleForm}
          onKeyDown={isNumberKey}

        />
      </label>
      <label className="flex flex-col gap-2">
        <p className="w-60 gap-x-5">Unknown</p>
        <input
          type="number"
          onWheelCapture={disableWheelInputNumber}
          onKeyUp={handleMaxNumber}
        defaultValue={eventForm[fields[5]] || 0}
          maxLength={3}
          className="border-black p-4  rounded w-20"
          name={fields[5]}
          onChange={handleForm}
          onKeyDown={isNumberKey}

        />
      </label>
      <label className="flex flex-col gap-2">
        <p className="w-60 gap-x-5">Decline to answer</p>
        <input
          type="number"
          onWheelCapture={disableWheelInputNumber}
          onKeyUp={handleMaxNumber}
        defaultValue={eventForm[fields[6]] || 0}
          maxLength={3}
          className="border-black p-4  rounded w-20"
          name={fields[6]}
          onChange={handleForm}
          onKeyDown={isNumberKey}

        />
      </label>
    </div>
  );
};

export default SexualOrientationSurveySection;
