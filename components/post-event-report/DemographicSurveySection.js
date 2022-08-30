import React, { useEffect, useState } from 'react'
import AgeSurveySection from './AgeSurveySection'
import EthnicitySurveySection from './EthnicitySurveySection'
import GenderSurveySection from './GenderSurveySection'
import RaceSurveySection from './RaceSurveySection'
import SexualOrientationSurveySection from './SexualOrientationSurveySection'

const DemographicSurveySection = ({setEventForm, eventForm, typeOfTest}) => {
  const capitalizeFirstLetter = (string) => string.charAt(0).toUpperCase() + string.slice(1)

  const typeOfTestForTitles = (string) => {
    switch(string) {
      case('hiv'):
        return string.toUpperCase()
        
      case('sti'):
        return string.toUpperCase()
      
      case('bloodPressure'):
        return 'Blood Pressure'
        
      case('hepC'):
        return 'Hepatitis C'

      case('cholesterol'):
        return capitalizeFirstLetter(string)
      
      case('other'):
        return capitalizeFirstLetter(string)
    }
  }
  
  return (
    <div className=''>
      <h2 className='mb-10'>Demographics</h2>
      <div className='grid grid-cols-1 gap-16'>
      <GenderSurveySection setEventForm={setEventForm} typeOfTest={typeOfTest} typeOfTestForTitles={typeOfTestForTitles}/>
      <AgeSurveySection setEventForm={setEventForm} typeOfTest={typeOfTest} typeOfTestForTitles={typeOfTestForTitles}/>
      <RaceSurveySection setEventForm={setEventForm} typeOfTest={typeOfTest} typeOfTestForTitles={typeOfTestForTitles}/>
      <EthnicitySurveySection setEventForm={setEventForm} typeOfTest={typeOfTest} typeOfTestForTitles={typeOfTestForTitles}/>
      <SexualOrientationSurveySection setEventForm={setEventForm} typeOfTest={typeOfTest} typeOfTestForTitles={typeOfTestForTitles}/>
      </div>
     
    </div>
  )
}

export default DemographicSurveySection