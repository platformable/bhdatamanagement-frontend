import React from 'react'

export const ParticipantSurveySection4 = () => {
  return (
    <div className="p-5 py-10">
      <h2 className="font-black">
        <span className="">4</span> Are you of Hispanic, Latino/a, or Spanish origin?
      </h2>
      <div className="mt-5 grid grid-cols-1 space-between gap-5">
      <label className="flex gap-x-5 items-center">
          <input type="radio" className="mr-10 w-4 h-4" name="participantEthnicity"/>
          <p className="">No, not of Hispanic, Latino, or Spanish origin </p>
        </label>
        <label className="flex gap-x-5 items-center">
          <input type="radio" className="mr-10 w-4 h-4" name="participantEthnicity"/>
          <p className="">Yes, I identify as Mexican, Mexican American, or Chicano </p>
        </label>
        <label className="flex gap-x-5 items-center">
          <input type="radio" className="mr-10 w-4 h-4" name="participantEthnicity"/>
          <p className="">Yes, I identify as Puerto Rican  </p>
        </label>
        <label className="flex gap-x-5 items-center">
          <input type="radio" className="mr-10 w-4 h-4" name="participantEthnicity"/>
          <p className="">Yes, I identify as Cuban </p>
        </label>
        <label className="flex gap-x-5 items-center">
          <input type="radio" className="mr-10 w-4 h-4" name="participantEthnicity"/>
          <p className="">Yes, I identify as Dominican  </p>
        </label>
        <label className="flex gap-x-5 items-center">
          <input type="radio" className="mr-10 w-4 h-4" name="participantEthnicity"/>
          <p className="">Yes, I identify as Ecuadorian  </p>
        </label>
        <label className="flex gap-x-5 items-center">
          <input type="radio" className="mr-10 w-4 h-4" name="participantEthnicity"/>
          <p className="">Yes, I identify with another Hispanic, Latino, or Spanish origin (Please specify)  </p>
        </label>
        <label className="flex gap-x-5 items-center">
          <input type="radio" className="mr-10 w-4 h-4" name="participantEthnicity"/>
          <p className="">Decline to answer  </p>
        </label>
        
      </div>
    </div>
  )
}
