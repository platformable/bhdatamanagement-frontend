import React from 'react'

export const ParticipantSurveySection33 = () => {
  return (
    <div className="p-5 py-10 rounded">
      <h2 className="mb-3 font-black">
        <span className="">33 </span>
        Do you have any comments or suggestions? 
      </h2>
      
        <textarea
        className="p-2 block w-full h-32 bg-white break-all border-black rounded-md overflow-hidden"
        role="textbox"
        name="participantSuggestions"
        placeholder=""
        /* onChange={(e) =>
          setEventForm((previous) => ({
            ...previous,
            [e.target.name]:e.target.value
          }))
        } */
      />
    </div>
  )
}