import React from 'react'

export const ParticipantSurveySection3 = () => {
  return (
    <div className="p-5 py-10">
      <h2 className="font-black">
        <span className="">3</span> Do you identify as (Select all that apply):
      </h2>
      <div className="mt-5 grid grid-cols-1 space-between gap-5">
      <label className="flex gap-x-5 items-center">
          <input type="radio" className="mr-10 w-4 h-4" />
          <p className="">Black or African American </p>
        </label>
        <label className="flex gap-x-5 items-center">
          <input type="radio" className="mr-10 w-4 h-4" />
          <p className="">Hispanic, Latino/a or Spanish </p>
        </label>
        <label className="flex gap-x-5 items-center">
          <input type="radio" className="mr-10 w-4 h-4" />
          <p className="">Asian </p>
        </label>
        <label className="flex gap-x-5 items-center">
          <input type="radio" className="mr-10 w-4 h-4" />
          <p className="">American Indian or Alaska Native </p>
        </label>
        <label className="flex gap-x-5 items-center">
          <input type="radio" className="mr-10 w-4 h-4" />
          <p className="">Middle Eastern or North African </p>
        </label>
        <label className="flex gap-x-5 items-center">
          <input type="radio" className="mr-10 w-4 h-4" />
          <p className="">Native Hawaiian or Other Pacific Islander </p>
        </label>
        <label className="flex gap-x-5 items-center">
          <input type="radio" className="mr-10 w-4 h-4" />
          <p className="">White </p>
        </label>
        <label className="flex gap-x-5 items-center">
          <input type="radio" className="mr-10 w-4 h-4" />
          <p className="">Some other race or origin (Please specify) </p>
        </label>
        <label className="flex gap-x-5 items-center">
          <input type="radio" className="mr-10 w-4 h-4" />
          <p className="">Decline to answer </p>
        </label>
      </div>
    </div>
  )
}
