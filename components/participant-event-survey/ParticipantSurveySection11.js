import React from 'react'

export const ParticipantSurveySection11 = () => {
  return (
    <div className="p-5 py-10">
    <h2 className="font-black">
      <span className="">11</span> Do you own or rent your home?
    </h2>
    <div className="mt-5 grid grid-cols-1 space-between gap-5">
    <label className="flex gap-x-5 items-center">
          <input type="radio" className="mr-10 w-4 h-4" />
          <p className="">Own  </p>
        </label>
        <label className="flex gap-x-5 items-center">
          <input type="radio" className="mr-10 w-4 h-4" />
          <p className="">Rent  </p>
        </label>
        <label className="flex gap-x-5 items-center">
          <input type="radio" className="mr-10 w-4 h-4" />
          <p className="">Other arrangement   </p>
        </label>
        <label className="flex gap-x-5 items-center">
          <input type="radio" className="mr-10 w-4 h-4" />
          <p className="">Don’t know / Not sure  </p>
        </label>
        <label className="flex gap-x-5 items-center">
          <input type="radio" className="mr-10 w-4 h-4" />
          <p className="">Decline to answer </p>
        </label>
    </div>
  </div>
  )
}
