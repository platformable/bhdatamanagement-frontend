import React from 'react'

export const ParticipantSurveySection33 = ({surveyForm,setSurveyForm}) => {
  return (
    <div className="px-7">
      <h2 className=" font-black">
        {/* <span className="">33 </span> */}
        Do you have any comments or suggestions? 
      </h2>
      
        <textarea
        className="mt-7 p-4 text-lg block w-full h-52 bg-white break-all border-black rounded-md overflow-hidden"
        role="textbox"
        name="participantSuggestions"
        placeholder=""
        onChange={(e) =>
          setSurveyForm((previous) => ({
            ...previous,
            [e.target.name]:e.target.value
          }))
        }
      />
    </div>
  )
}