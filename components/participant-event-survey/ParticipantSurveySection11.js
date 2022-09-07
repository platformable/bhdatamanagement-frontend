import React from 'react'

export const ParticipantSurveySection11 = ({surveyForm, setSurveyForm}) => {
  const handleForm = (e) => {
    setSurveyForm({...surveyForm, [e.target.name]: e.target.value, "housingID": Number(e.target.id) })
  }
  return (
    <div className="p-5 py-10">
    <h2 className="font-black">
      <span className="">11</span> Do you own or rent your home?
    </h2>
    <div className="mt-5 grid grid-cols-1 space-between gap-5">
    <label className="flex gap-x-5 items-center">
          <input type="radio" className="mr-10 w-6 h-6" value="Own" id={1} name="participantHousing" onChange={handleForm}/>
          <p className="">Own</p>
        </label>
        <label className="flex gap-x-5 items-center">
          <input type="radio" className="mr-10 w-6 h-6" value="Rent" id={2} name="participantHousing" onChange={handleForm}/>
          <p className="">Rent</p>
        </label>
        <label className="flex gap-x-5 items-center">
          <input type="radio" className="mr-10 w-6 h-6" value="Other arrangement" id={3} name="participantHousing" onChange={handleForm}/>
          <p className="">Other arrangement</p>
        </label>
        <label className="flex gap-x-5 items-center">
          <input type="radio" className="mr-10 w-6 h-6" value="Don’t know / Not sure" id={4} name="participantHousing" onChange={handleForm}/>
          <p className="">Don’t know / Not sure</p>
        </label>
        <label className="flex gap-x-5 items-center">
          <input type="radio" className="mr-10 w-6 h-6" value="Decline to answer" id={5} name="participantHousing" onChange={handleForm}/>
          <p className="">Decline to answer</p>
        </label>
    </div>
  </div>
  )
}
