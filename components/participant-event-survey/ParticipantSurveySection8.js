import React from 'react'

export const ParticipantSurveySection8 = () => {
  return (
    <div className="p-5 py-10">
    <h2 className="font-black">
      <span className="">8</span> What is the highest grade or year of school you completed? 
    </h2>
    <div className="mt-5 grid grid-cols-1 space-between gap-5">
    <label className="flex gap-x-5 items-center">
          <input type="radio" className="mr-10 w-4 h-4" />
          <p className=""> Never attended school or only attended kindergarten  </p>
        </label>
        <label className="flex gap-x-5 items-center">
          <input type="radio" className="mr-10 w-4 h-4" />
          <p className=""> Grades 1 through 8 (Elementary)  </p>
        </label>
        <label className="flex gap-x-5 items-center">
          <input type="radio" className="mr-10 w-4 h-4" />
          <p className=""> Grades 9 through 11 (Some high school)  </p>
        </label>
        <label className="flex gap-x-5 items-center">
          <input type="radio" className="mr-10 w-4 h-4" />
          <p className=""> Grade 12 or GED (High school graduate) </p>
        </label>
        <label className="flex gap-x-5 items-center">
          <input type="radio" className="mr-10 w-4 h-4" />
          <p className=""> College 1 year to 3 years (Some college or technical school)   </p>
        </label>
        <label className="flex gap-x-5 items-center">
          <input type="radio" className="mr-10 w-4 h-4" />
          <p className=""> College 4 years or more (College graduate)   </p>
        </label>
        <label className="flex gap-x-5 items-center">
          <input type="radio" className="mr-10 w-4 h-4" />
          <p className=""> Decline to Answer  </p>
        </label>
    </div>
  </div>
  )
}
