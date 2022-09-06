import React from 'react'

export const ParticipantSurveySection23 = ({surveyForm,setSurveyForm}) => {

  const options=[
    {
      id:1,
      value:"Massaging, hugging, kissing"
    },
    {
      id:2,
      value:"Oral sex"
    },
    {
      id:3,
      value:"Sex with an HIV-positive sex partner"
    },
    {
      id:4,
      value:"Sex without a condom"
    },
    {
      id:5,
      value:"Sex without a condom with a partner whose HIV status is unknown "
    },
    {
      id:6,
      value:"Sharing needles"
    },
    {
      id:7,
      value:"Don’t know/Not sure"
    }
  ]
  return (
    <div className="p-5 py-10">
    <h2 className="font-black">
      <span className="">23 </span>
      Which of the following can put you at risk for sexually transmitted HIV? (Select all that apply.) 
    </h2>
    <div className="mt-5 grid grid-cols-1 space-between gap-5">
    {options.map((option, index) => {
          return (
            <label className="text-lg flex items-center" key={index}>
              <input
                type="checkbox"
                name="participantHIVKnowledge"
                className="mr-10 w-4 h-4"
                value={option.value}
                id={index}
                //defaultChecked={program.id===event?.programid?'checked':""}
                onChange={(e) =>
                  setSurveyForm((previous) => ({
                    ...previous,
                    [e.target.name]: aroption.valueea,
                  }))
                }
              />
             {option.value}
            </label>

          );
        })}
    </div>
  </div>
  )
}
