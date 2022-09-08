import React from 'react';


export const ParticipantSurveySection8 = ({surveyForm, setSurveyForm}) => {
  const handleForm = (e) => {
    setSurveyForm({...surveyForm, [e.target.name]: e.target.value, "educationID": Number(e.target.id) })
  }
  return (
    <div className="px-7">
    <h1 className="font-black">
      {/* <span className="">8</span>  */}
      What is the highest grade or year of school you completed? 
    </h1>
    <div className="mt-7 grid grid-cols-1 space-between gap-5">
    <label className="flex gap-x-5 items-center">
          <input type="radio" className="" id={1} name="participantEducation" value="Never attended school or only attended kindergarten" onChange={handleForm}/>
          <h3 className=""> Never attended school or only attended kindergarten  </h3>
        </label>
        <label className="flex gap-x-5 items-center">
          <input type="radio" className="" id={2} name="participantEducation" value="Grades 1 through 8 (Elementary)" onChange={handleForm}/>
          <h3 className=""> Grades 1 through 8 (Elementary)  </h3>
        </label>
        <label className="flex gap-x-5 items-center">
          <input type="radio" className="" id={3} name="participantEducation" value="Grades 9 through 11 (Some high school)" onChange={handleForm}/>
          <h3 className=""> Grades 9 through 11 (Some high school)  </h3>
        </label>
        <label className="flex gap-x-5 items-center">
          <input type="radio" className="" id={4} name="participantEducation" value="Grade 12 or GED (High school graduate)" onChange={handleForm}/>
          <h3 className=""> Grade 12 or GED (High school graduate) </h3>
        </label>
        <label className="flex gap-x-5 items-center">
          <input type="radio" className="" id={5} name="participantEducation" value="College 1 year to 3 years (Some college or technical school)" onChange={handleForm}/>
          <h3 className=""> College 1 year to 3 years (Some college or technical school)   </h3>
        </label>
        <label className="flex gap-x-5 items-center">
          <input type="radio" className="" id={6} name="participantEducation" value="College 4 years or more (College graduate)" onChange={handleForm}/>
          <h3 className=""> College 4 years or more (College graduate)   </h3>
        </label>
        <label className="flex gap-x-5 items-center">
          <input type="radio" className="" id={7} name="participantEducation" value="Decline to Answer" onChange={handleForm}/>
          <h3 className=""> Decline to Answer  </h3>
        </label>
    </div>
  </div>
  )
}
