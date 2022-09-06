import React from 'react'

export const ParticipantSurveySection19 = () => {
  return (
    <div className="p-5 py-10 rounded">
      <h2 className="mb-3 font-black">
        <span className="">19 </span>
        How would you describe your relationship with your medical provider? 
      </h2>
      
        <textarea
        className="p-2 block w-full h-32 bg-white break-all border-black rounded-md overflow-hidden"
        role="textbox"
        name="participantRelationship"
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
