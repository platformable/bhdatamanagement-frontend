import React from 'react'

export const ParticipantSurveySection7 = () => {
  return (
    <div className="p-5 py-10">
      <h2 className="font-black">
        <span className="">7</span>  What is your role? 
      </h2>
      <div className="mt-5 grid grid-cols-1 space-between gap-5">
      <label className="flex gap-x-5 items-center">
          <input type="radio" className="mr-10 w-4 h-4" />
          <p className="">Community member </p>
        </label>
        <label className="flex gap-x-5 items-center">
          <input type="radio" className="mr-10 w-4 h-4" />
          <p className="">Community-based organization leader or staff </p>
        </label>
        <label className="flex gap-x-5 items-center">
          <input type="radio" className="mr-10 w-4 h-4" />
          <p className="">Faith-based organization leader  </p>
        </label>
        <label className="flex gap-x-5 items-center">
          <input type="radio" className="mr-10 w-4 h-4" />
          <p className="">Elected Official </p>
        </label>
        <label className="flex gap-x-5 items-center">
          <input type="radio" className="mr-10 w-4 h-4" />
          <p className="">Healthcare Professional  </p>
        </label>
        <label className="flex gap-x-5 items-center">
          <input type="radio" className="mr-10 w-4 h-4" />
          <p className="">Government representative  </p>
        </label>
        <label className="flex gap-x-5 items-center">
          <input type="radio" className="mr-10 w-4 h-4" />
          <p className="">Other (Please specify)  </p>
        </label>
        
      </div>
    </div>
  )
}
