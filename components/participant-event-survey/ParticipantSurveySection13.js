import React from 'react'

export const ParticipantSurveySection13 = () => {
  return (
    <div className="p-5 py-10">
    <h2 className="font-black">
      <span className="">13</span> Within the past 12 months, the food you bought just didn't last and you didn't have money to get more.
    </h2>
    <div className="mt-5 grid grid-cols-1 space-between gap-5">
        <label className="flex gap-x-5 items-center">
          <input type="radio" className="mr-10 w-4 h-4" />
          <p className="">Often true  </p>
        </label>
        <label className="flex gap-x-5 items-center">
          <input type="radio" className="mr-10 w-4 h-4" />
          <p className="">Sometimes true  </p>
        </label>
        <label className="flex gap-x-5 items-center">
          <input type="radio" className="mr-10 w-4 h-4" />
          <p className="">Never true  </p>
        </label>
        <label className="flex gap-x-5 items-center">
          <input type="radio" className="mr-10 w-4 h-4" />
          <p className="">Decline to answer</p>
        </label>
    </div>
  </div>
  )
}
