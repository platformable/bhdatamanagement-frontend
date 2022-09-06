import React from 'react'

export const ParticipantSurveySection6 = () => {
  return (
    <div className="p-5 py-10">
      <h2 className="font-black">
        <span className="">6</span> How do you describe your sexual orientation? 
      </h2>
      <div className="mt-5 grid grid-cols-1 space-between gap-5">
      <label className="flex gap-x-5 items-center">
          <input type="radio" className="mr-10 w-4 h-4" name="participantOrientation"/>
          <p className="">Gay or lesbian </p>
        </label>
        <label className="flex gap-x-5 items-center">
          <input type="radio" className="mr-10 w-4 h-4" name="participantOrientation"/>
          <p className="">Straight or heterosexual </p>
        </label>
        <label className="flex gap-x-5 items-center">
          <input type="radio" className="mr-10 w-4 h-4" name="participantOrientation"/>
          <p className="">Bisexual  </p>
        </label>
        <label className="flex gap-x-5 items-center">
          <input type="radio" className="mr-10 w-4 h-4" name="participantOrientation"/>
          <p className="">Queer </p>
        </label>
        <label className="flex gap-x-5 items-center">
          <input type="radio" className="mr-10 w-4 h-4" name="participantOrientation"/>
          <p className="">Questioning or not sure  </p>
        </label>
        <label className="flex gap-x-5 items-center">
          <input type="radio" className="mr-10 w-4 h-4" name="participantOrientation"/>
          <p className="">Unknown  </p>
        </label>
        <label className="flex gap-x-5 items-center">
          <input type="radio" className="mr-10 w-4 h-4" name="participantOrientation"/>
          <p className="">A sexual orientation not listed above (Please specify)  </p>
        </label>
        <label className="flex gap-x-5 items-center">
          <input type="radio" className="mr-10 w-4 h-4" name="participantOrientation"/>
          <p className="">Decline to answer  </p>
        </label>
      </div>
    </div>
  )
}
