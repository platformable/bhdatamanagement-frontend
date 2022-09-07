import React from 'react'

export const ParticipantSurveySection19 = ({surveyForm,setSurveyForm}) => {
  
  return (
    <div className="px-7 rounded">
      <h1 className="font-black">
        <span className="">19 </span>
        How would you describe your relationship with your medical provider? 
      </h1>
      
        <textarea
        className="mt-7 p-2 block w-full h-32 bg-white break-all border-black rounded-md overflow-hidden"
        role="textbox"
        name="participantRelationship"
        placeholder=""
        onChange={(e) =>
          //console.log("hello")
          setSurveyForm((previous) => ({
            ...previous,
            [e.target.name]:e.target.value
          }))
        }
      />
    </div>
  )
}
