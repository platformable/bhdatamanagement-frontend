import React, { useEffect, useState } from "react";

const TwoColumnCheckbox = ({
  options,
  surveyForm,
  setSurveyForm,
  title,
  stateValue,
  message,
  columns = 2,
}) => {
  const [data, setData] = useState([...surveyForm?.[stateValue]]);
  const sortedOptions = options.sort();
  const columnLength = Math.ceil(options.length / columns);

  const handleForm = (value) => {
    data.includes('Other') && setSurveyForm(prev => ({...prev, [`${stateValue}Other`]: ''})) 
    const isValueOnData = data?.includes(value);

    const filteredData = data.filter((oldValues) => oldValues != value);

    isValueOnData
      ? setData(filteredData)
      : setData((previous) => [...previous, value]);
  };

  useEffect(() => {
    setSurveyForm({ ...surveyForm, [stateValue]: data });
  }, [data]);
  return (
    <div className="question-body">
      <h2 className=" font-black">{title}</h2>
      {message && <p>{message}</p>}
      <div className={`grid-cols-${columns}`}>
        {Array.from({ length: columns }, (_, i) => (
          <div key={i} className="flex flex-col gap-5 ">
            {sortedOptions
              .slice(i * columnLength, (i + 1) * columnLength)
              .map((option, index) => (
                <label key={index} className="flex items-center gap-5">
                  <input
                    type="checkbox"
                    value={option.value}
                    onChange={(e) => handleForm(e.target.value)}
                    name={stateValue}
                    id={index}
                    defaultChecked={
                      surveyForm[stateValue]?.includes(option.value)
                        ? "checked"
                        : ""
                    }
                  />
                  {option.value}
                  {option.vaue === "Other" && (
                    <input
                      type="text"
                      value={option.value}
                      onChange={(e) =>
                        setSurveyForm({
                          ...surveyForm,
                          [stateValue + "Other"]: e.target.value,
                        })
                      }
                      name={`${stateValue}Other`}
                      defaultValue={surveyForm?.[stateValue]+'Other'}
                    />
                  )}
                </label>
              ))}
          </div>
        ))}
      </div>

      {/* <div className="mt-7 grid grid-cols-2 space-between gap-5">
        {options &&
          options?.map((option, index) => {
            if (option.value === "Other") {
              return (
                <div className="flex gap-x-5">
                  <label
                    className="flex items-center gap-5 text-lg"
                    key={index}
                  >
                    <input
                      type="checkbox"
                      name={stateValue}
                      className=""
                      value={option.value}
                      id={index}
                      onChange={(e) => handleForm(option.value)}
                      defaultChecked={
                        surveyForm[stateValue]?.includes(option.value)
                          ? "checked"
                          : ""
                      }
                    />
                    {option?.value}
                  </label>
                  <label className="flex items-center gap-5 text-lg" key={""}>
                    <input
                      type="text"
                      name=""
                      className=""
                      id={""}
                      //defaultValue={surveyForm[stateValue]+'Other'}
                      onChange={(e) =>
                        setSurveyForm({
                          ...surveyForm,
                          [stateValue + "Other"]: e.target.value,
                        })
                      }
                    />
                  </label>
                </div>
              );
            } else {
              return (
                <>
                  <label
                    className="flex items-center gap-5 text-lg"
                    key={index}
                  >
                    <input
                      type="checkbox"
                      name={stateValue}
                      className=""
                      value={option?.value}
                      id={index}
                      onChange={(e) => handleForm(option.value)}
                      defaultChecked={
                        surveyForm[stateValue]?.includes(option.value)
                          ? "checked"
                          : ""
                      }
                    />
                    {option.value}
                  </label>
                </>
              );
            }
          })}
      </div> */}
    </div>
  );
};

export default TwoColumnCheckbox;
