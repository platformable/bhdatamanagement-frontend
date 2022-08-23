import React, { useEffect, useState } from 'react'
import AgeSurveySection from './AgeSurveySection'
import EthnicitySurveySection from './EthnicitySurveySection'
import GenderSurveySection from './GenderSurveySection'
import RaceSurveySection from './RaceSurveySection'
import SexualOrientationSurveySection from './SexualOrientationSurveySection'

const DemographicSurveySection = ({setEventForm, eventForm, typeOfTest}) => {
  
  return (
    <div className='font-black'>
      <h2 className='mb-10'>Demographics</h2>
      <div className='grid grid-cols-1 gap-16'>
      <GenderSurveySection setEventForm={setEventForm} typeOfTest={typeOfTest}/>
      <AgeSurveySection setEventForm={setEventForm} typeOfTest={typeOfTest}/>
      <RaceSurveySection setEventForm={setEventForm} typeOfTest={typeOfTest}/>
      <EthnicitySurveySection setEventForm={setEventForm} typeOfTest={typeOfTest}/>
      <SexualOrientationSurveySection setEventForm={setEventForm} typeOfTest={typeOfTest}/>
      </div>
     
    </div>
  )
}

export default DemographicSurveySection