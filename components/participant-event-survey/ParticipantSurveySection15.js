import React from 'react'

export const ParticipantSurveySection15 = () => {
  return (
    <div className="p-5 py-10">
    <h2 className="font-black">
      <span className="">15</span> Would you say that in general your health is:
    </h2>
    <div className="mt-5 grid grid-cols-1 space-between gap-5">
    <label className="flex gap-x-5 items-center">
          <input type="radio" className="mr-10 w-4 h-4" name="participantHealth"/>
          <p className="">Excellent </p>
        </label>
        <label className="flex gap-x-5 items-center">
          <input type="radio" className="mr-10 w-4 h-4" name="participantHealth"/>
          <p className="">Very Good </p>
        </label>
        <label className="flex gap-x-5 items-center">
          <input type="radio" className="mr-10 w-4 h-4" name="participantHealth"/>
          <p className="">Good</p>
        </label>
        <label className="flex gap-x-5 items-center">
          <input type="radio" className="mr-10 w-4 h-4" name="participantHealth"/>
          <p className="">Fair  </p>
        </label>
        <label className="flex gap-x-5 items-center">
          <input type="radio" className="mr-10 w-4 h-4" name="participantHealth"/>
          <p className="">Poor</p>
        </label>
        <label className="flex gap-x-5 items-center">
          <input type="radio" className="mr-10 w-4 h-4" name="participantHealth"/>
          <p className="">Don’t know/Not sure</p>
        </label>
        <label className="flex gap-x-5 items-center">
          <input type="radio" className="mr-10 w-4 h-4" name="participantHealth"/>
          <p className="">Decline to answer</p>
        </label>
    </div>
  </div>
  )
}
