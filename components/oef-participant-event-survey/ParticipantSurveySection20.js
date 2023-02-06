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
      <h2 className="font-black mb-7">
        {/* <span className="">20 </span>   */}
        Over the last 2 weeks, how
        often have you been bothered by the following problems?
      </h2>
      <div className="grid  grid-cols-1 gap-7">
  
        <div className="flex flex-col gap-y-5 items-start rounded">
          <h2 className="font-black">
          Little interest or pleasure in doing things
          </h2>
          <div className="grid grid-cols-1 gap-y-5">
            {options.map((option, index) => {
              return (
                <label className="text-lg flex gap-x-5 items-center" key={index}>
                  <input
                    type="radio"
                    name="participantPHQ2a"
                    className=""
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

        <div className="flex flex-col gap-y-5 items-start rounded ">
          <h2 className="font-black">
            Feeling down, depressed or hopeless
          </h2>
          <div className="grid grid-cols-1 gap-y-5">
            {options.map((option, index) => {
              return (
                <label className="text-lg flex gap-x-5 items-center" key={index}>
                  <input
                    type="radio"
                    name="participantPHQ2b"
                    className=""
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
