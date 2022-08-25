import React from 'react'
import DemographicSurveySection from './DemographicSurveySection'

const PostEventReportSection29 = ({setEventForm}) => {
  return (
    <div className="p-5 grid grid-cols-1 gap-7 my-10">
    <h2 className="font-black">COVID-19 Testing</h2>
    <label className="flex gap-5">
      <p className="w-40">COVID Testing Agency</p>
      <input
        className="border-black ml-2 p-2"
        type="text"
        //placeholder="Please specify"
        name="covidTestingAgency"
        onChange={(e) =>
          setEventForm((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
          }))
        }
      />
    </label>
    <label className="flex gap-5">
      <p>Total tested for COVID-19</p>
      <input
        className="border-black ml-2 p-2"
        type="number"
        //placeholder="type a number"
        name="covidTestedTotal"
        onChange={(e) =>
          setEventForm((prev) => ({
            ...prev,
            [e.target.name]: Number(e.target.value),
          }))
        }
      />
    </label>
    
  </div>
  )
}

export default PostEventReportSection29