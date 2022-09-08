import React from "react";

export const ParticipantSurveySection20 = ({ surveyForm, setSurveyForm }) => {
  const options = [
    {
      id: 1,
      value: "Not at all",
    },
    {
      id: 2,
      value: "Several days",
    },
    {
      id: 3,
      value: "More than half the days",
    },
    {
      id: 4,
      value: "Nearly every day",
    },
  ];

  return (
    <div className="px-7">
      <h1 className="font-black">
        {/* <span className="">20 </span>   */}
        Over the{" "}
        <span className="underline underline-offset-1">last 2 weeks</span>, how
        often have you been bothered by the following problems?
      </h1>
      <div className="mt-7 grid grid-cols-1 space-between gap-7">
        <div className="flex flex-col gap-y-5  items-start  rounded">
          <h3 className="">
            Little interest or pleasure in doing things
          </h3>
          <div className="grid grid-cols-1 gap-y-5 md:grid-cols-5 md:gap-24">
            {options.map((option, index) => {
              return (
                <label
                  className="text-lg flex gap-x-5 items-center"
                  key={index}
                >
                  <input
                    type="radio"
                    name="participantPHQ2a"
                    className="mr-1 w-6 h-6"
                    value={option.value}
                    id={index}
                    //defaultChecked={program.id===event?.programid?'checked':""}
                    onChange={(e) =>
                      setSurveyForm((previous) => ({
                        ...previous,
                        [e.target.name]: option.value,
                      }))
                    }
                  />
                  {option.value}
                </label>
              );
            })}
          </div>
        </div>
        <div className="flex flex-col gap-y-5 items-start rounded">
          <h3 className="">
            Feeling down, depressed or hopeless
          </h3>
          <div className="grid grid-cols-1 gap-y-5 md:grid-cols-5 md:gap-24">
            {options.map((option, index) => {
              return (
                <label className="text-lg flex gap-x-5 items-center" key={index}>
                  <input
                    type="radio"
                    name="participantPHQ2b"
                    className="mr-1 w-6 h-6"
                    value={option.value}
                    id={index}
                    //defaultChecked={program.id===event?.programid?'checked':""}
                    onChange={(e) =>
                      setSurveyForm((previous) => ({
                        ...previous,
                        [e.target.name]: option.value,
                      }))
                    }
                  />
                  {option.value}
                </label>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
