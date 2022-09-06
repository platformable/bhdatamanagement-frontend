import React from 'react'

export const ParticipantSurveySection17 = () => {
  return (
    <div className="p-5 py-10">
    <h2 className="font-black">
      <span className="">17</span> About how long has it been since you last visited a doctor for a routine checkup?
    </h2>
    <div className="mt-5 grid grid-cols-1 space-between gap-5">
    <label className="flex gap-x-5 items-center">
          <input type="radio" className="mr-10 w-4 h-4" name="participantRoutine"/>
          <p className="">Within the last 6 months</p>
        </label>
        <label className="flex gap-x-5 items-center">
          <input type="radio" className="mr-10 w-4 h-4" name="participantRoutine"/>
          <p className="">Within the past year (Anytime between 7- 12 months ago)</p>
        </label>
        <label className="flex gap-x-5 items-center">
          <input type="radio" className="mr-10 w-4 h-4" name="participantRoutine"/>
          <p className="">Within the past 2 years (1 year but less than 2 years ago)</p>
        </label>
        <label className="flex gap-x-5 items-center">
          <input type="radio" className="mr-10 w-4 h-4" name="participantRoutine"/>
          <p className="">Within the past 5 years (2 years but less than 5 years ago)</p>
        </label>
        <label className="flex gap-x-5 items-center">
          <input type="radio" className="mr-10 w-4 h-4" name="participantRoutine"/>
          <p className="">5 or more years ago</p>
        </label>
        <label className="flex gap-x-5 items-center">
          <input type="radio" className="mr-10 w-4 h-4" name="participantRoutine"/>
          <p className="">Don’t know / Not sure</p>
        </label>
        <label className="flex gap-x-5 items-center">
          <input type="radio" className="mr-10 w-4 h-4" name="participantRoutine"/>
          <p className="">Never</p>
        </label>
        <label className="flex gap-x-5 items-center">
          <input type="radio" className="mr-10 w-4 h-4" name="participantRoutine"/>
          <p className="">Decline to answer</p>
        </label>
    </div>
  </div>
  )
}
