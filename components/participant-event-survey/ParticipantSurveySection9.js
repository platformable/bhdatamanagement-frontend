import React from 'react'

export const ParticipantSurveySection9 = ({surveyForm, setSurveyForm}) => {
  const handleForm = (e) => {
    setSurveyForm({...surveyForm, [e.target.name]: e.target.value, "employmentID": Number(e.target.id) })
  }
  return (
    <div className="p-5 py-10">
    <h2 className="font-black">
      <span className="">9</span> Are you currently...? 
    </h2>
    <div className="mt-5 grid grid-cols-1 space-between gap-5">
    <label className="flex gap-x-5 items-center">
          <input type="checkbox" className="mr-10 w-4 h-4" id={1} name="participantEmployment" value="Employed for wages" onChange={handleForm}/>
          <p className="">Employed for wages</p>
        </label>
        <label className="flex gap-x-5 items-center">
          <input type="checkbox" className="mr-10 w-4 h-4" id={2} name="participantEmployment" value="Self-employed" onChange={handleForm}/>
          <p className="">Self-employed</p>
        </label>
        <label className="flex gap-x-5 items-center">
          <input type="checkbox" className="mr-10 w-4 h-4" id={3} name="participantEmployment" value="Out of work for 1 year or more" onChange={handleForm}/>
          <p className="">Out of work for 1 year or more</p>
        </label>
        <label className="flex gap-x-5 items-center">
          <input type="checkbox" className="mr-10 w-4 h-4" id={4} name="participantEmployment" value="Out of work for less than 1 year" onChange={handleForm}/>
          <p className="">Out of work for less than 1 year</p>
        </label>
        <label className="flex gap-x-5 items-center">
          <input type="checkbox" className="mr-10 w-4 h-4" id={5} name="participantEmployment" value="A homemaker" onChange={handleForm}/>
          <p className="">A Homemaker  </p>
        </label>
        <label className="flex gap-x-5 items-center">
          <input type="checkbox" className="mr-10 w-4 h-4" id={6} name="participantEmployment" value="A student" onChange={handleForm}/>
          <p className="">A Student</p>
        </label>
        <label className="flex gap-x-5 items-center">
          <input type="checkbox" className="mr-10 w-4 h-4" id={7} name="participantEmployment" value="Retired or unable to work" onChange={handleForm}/>
          <p className="">Retired or unable to work</p>
        </label>
        <label className="flex gap-x-5 items-center">
          <input type="checkbox" className="mr-10 w-4 h-4" id={8} name="participantEmployment" value="Decline to answer" onChange={handleForm}/>
          <p className="">Decline to Answer</p>
        </label>
       
    </div>
  </div>
  )
}
