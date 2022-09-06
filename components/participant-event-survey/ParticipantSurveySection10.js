import React from 'react'

export const ParticipantSurveySection10 = () => {
  return (
    <div className="p-5 py-10">
    <h2 className="font-black">
      <span className="">10</span> What is your living situation today?  
    </h2>
    <div className="mt-5 grid grid-cols-1 space-between gap-5">
    <label className="flex gap-x-5 items-center">
          <input type="radio" className="mr-10 w-4 h-4" name="participantLiving"/>
          <p className="">I have a steady place to live</p>
        </label>
        <label className="flex gap-x-5 items-center">
          <input type="radio" className="mr-10 w-4 h-4" name="participantLiving"/>
          <p className="">I have a place to live today, but I am worried about losing it in the future</p>
        </label>
        <label className="flex gap-x-5 items-center">
          <input type="radio" className="mr-10 w-4 h-4" name="participantLiving"/>
          <p className="">I do not have a steady place to live (I am temporarily staying with others, in a hotel, in a shelter, living outside on the street, on a beach, in a car, abandoned building, bus or train station, or in a park) </p>
        </label>
        <label className="flex gap-x-5 items-center">
          <input type="radio" className="mr-10 w-4 h-4" name="participantLiving"/>
          <p className="">Decline to answer</p>
        </label>
        
    </div>
  </div>
  )
}
