import React from "react";

const RadioBoolean = ({
  title,
  surveyForm,
  options,
  stateValue,
  updateFunction,
  dispatch,
}) => {
  const handleForm = (e) => {
    console.log("gfsdfgsdfgd");
    dispatch(updateFunction({ [stateValue]: e.target.value }));
  };
console.log(options, surveyForm?.[stateValue])
  return (
    <div className="px-7">
      <h2 className="font-black">
        {/* <span className="">4</span>  */}
        {title}
      </h2>
      <div className="mt-7 grid grid-cols-1 space-between gap-5">
        {options?.map((option, index) => {
          return (
            <label className="flex gap-x-5 items-center" key={index}>
              <input
                type="radio"
                className=""
                value={option.value}
                id={option.id}
                onChange={() =>
                  dispatch(updateFunction({ [stateValue]: option.value }))
                }
                name={stateValue}
                defaultChecked={
                  option.value === surveyForm?.[stateValue] ? "checked" : ""
                }
              />
              <p className="">{option.text}</p>
            </label>
          );
        })}
      </div>
    </div>
  );
};

export default RadioBoolean;
