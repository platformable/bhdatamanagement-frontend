import React, { useState, useEffect } from "react";
import { race } from "../../utils/sharedData";

export const ParticipantSurveySection3 = ({ surveyForm, setSurveyForm }) => {
  const [data, setData] = useState([]);
  const [dataId, setDataId] = useState([]);

  const handleForm = (e) => {
    const isValueOnData = data?.includes(e.target.value);
    const isIdOnDataId = dataId?.includes(Number(e.target.id));

    const filteredData = data.filter(
      (oldValues) => oldValues != e.target.value
    );
    const filteredDataIds = dataId.filter(
      (oldValues) => oldValues != e.target.id
    );

    isValueOnData
      ? setData(filteredData)
      : setData((previous) => [...previous, e.target.value]);

    isIdOnDataId
      ? setDataId(filteredDataIds)
      : setDataId((previous) => [...previous, Number(e.target.id)]);
  };

  useEffect(() => {
    setSurveyForm((previous) => ({
      ...previous,
      participantRace: data,
      raceID: dataId,
    }));
  }, [data]);
  return (
    <div className="">
      <h2 className="font-black">
        {/* <span className="">3</span>  */}
        Do you identify as:
      </h2>
      <p>Select all that apply</p>
      <div className="mt-7 grid grid-cols-1 md:grid-cols-2 ">
        <div className="grid gap-5">
          {race.slice(0, Math.round(race.length / 2)).map((option) => (
            <label className="flex gap-x-5 items-center">
              <input
                type="checkbox"
                className=""
                value={option.value}
                id={option.id}
                onChange={handleForm}
                name="participantRace"
              />
              <p className="">{option.value}</p>
            </label>
          ))}
        </div>
        <div className="grid gap-5">
          {race.slice(Math.round(race.length / 2)).map((option) =>
            option.value !== "Some other race or origin" ? (
              <label className="flex gap-x-5 items-center">
                <input
                  type="checkbox"
                  className=""
                  value={option.value}
                  id={option.id}
                  onChange={handleForm}
                  name="participantRace"
                />
                <p className="">{option.value}</p>
              </label>
            ) : (
              <label className="flex md:flex-row flex-col gap-x-5 md:items-center md:gap-y-0 gap-y-5">
                <div className="flex gap-x-5 ">
                <input
                  type="checkbox"
                  className=""
                  value={option.value}
                  id={option.id}
                  onChange={handleForm}
                  name="participantRace"
                />
                <p className="">{option.value}</p>
                </div>
                <input
                  type="text"
                  placeholder="Please specify"
                  onChange={(e) =>
                    setSurveyForm({
                      ...surveyForm,
                      participantRaceOther: e.target.value,
                    })
                  }
                  className="border-black rounded p-4 self-start p-1 w-full text-lg md:w-134"
                />
              </label>
            )
          )}
        </div>
      </div>
    </div>
  );
};
