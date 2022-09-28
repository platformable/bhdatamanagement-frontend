import React from 'react';


export const ParticipantSurveySection8 = ({surveyForm, setSurveyForm}) => {
  const handleForm = (e) => {
    setSurveyForm({...surveyForm, [e.target.name]: e.target.value, "educationID": Number(e.target.id) })
  }
  return (
    <div className="px-7">
    <h2 className="font-black">
      {/* <span className="">8</span>  */}
      What is the highest grade or year of school you completed? 
    </h2>
    <div className="mt-7 grid grid-cols-1 space-between gap-5">
    <label className="flex gap-x-5 items-center">
          <input type="radio" className="" id={1} name="participantEducation" value="Never attended school or only attended kindergarten" onChange={handleForm}/>
          <p className=""> Never attended school or only attended kindergarten  </p>
        </label>
        <label className="flex gap-x-5 items-center">
          <input type="radio" className="" id={2} name="participantEducation" value="Grades 1 through 8 (Elementary)" onChange={handleForm}/>
          <p className=""> Grades 1 through 8 (Elementary)  </p>
        </label>
        <label className="flex gap-x-5 items-center">
          <input type="radio" className="" id={3} name="participantEducation" value="Grades 9 through 11 (Some high school)" onChange={handleForm}/>
          <p className=""> Grades 9 through 11 (Some high school)  </p>
        </label>
        <label className="flex gap-x-5 items-center">
          <input type="radio" className="" id={4} name="participantEducation" value="Grade 12 or GED (High school graduate)" onChange={handleForm}/>
          <p className=""> Grade 12 or GED (High school graduate) </p>
        </label>
        <label className="flex gap-x-5 items-center">
          <input type="radio" className="" id={5} name="participantEducation" value="College 1 year to 3 years (Some college or technical school)" onChange={handleForm}/>
          <p className=""> College 1 year to 3 years (Some college or technical school)   </p>
        </label>
        <label className="flex gap-x-5 items-center">
          <input type="radio" className="" id={6} name="participantEducation" value="College 4 years or more (College graduate)" onChange={handleForm}/>
          <p className=""> College 4 years or more (College graduate)   </p>
        </label>
        <label className="flex gap-x-5 items-center">
          <input type="radio" className="" id={7} name="participantEducation" value="Decline to Answer" onChange={handleForm}/>
          <p className=""> Decline to Answer  </p>
        </label>
    </div>
  </div>
  )
}
