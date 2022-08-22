import React from 'react'
import AgeSurveySection from './AgeSurveySection'
import GenderSurveySection from './GenderSurveySection'

const PostEventReportSection45 = ({setEventForm}) => {

  return (
    <div className='font-black'>
      <h2>Demographics</h2>
      <GenderSurveySection setEventForm={setEventForm} />
      <AgeSurveySection setEventForm={setEventForm}/>
    </div>
  )
}

export default PostEventReportSection45