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
  const handleMaxNumber = (e) => {
    let {value} = e.target
    value > 100 && (e.target.value = 100)
  }
  const disableWheelInputNumber = (e) => {
    e.target.blur()
  }
  
  return (
    <div className=''>
      <h1 className='mb-10'>Demographics</h1>
      <div className='grid grid-cols-1 gap-10'>
      <GenderSurveySection setEventForm={setEventForm} typeOfTest={typeOfTest} typeOfTestForTitles={typeOfTestForTitles} handleMaxNumber={handleMaxNumber} disableWheelInputNumber={disableWheelInputNumber}/>
      <AgeSurveySection setEventForm={setEventForm} typeOfTest={typeOfTest} typeOfTestForTitles={typeOfTestForTitles} handleMaxNumber={handleMaxNumber} disableWheelInputNumber={disableWheelInputNumber}/>
      <RaceSurveySection setEventForm={setEventForm} typeOfTest={typeOfTest} typeOfTestForTitles={typeOfTestForTitles} handleMaxNumber={handleMaxNumber} disableWheelInputNumber={disableWheelInputNumber}/>
      <EthnicitySurveySection setEventForm={setEventForm} typeOfTest={typeOfTest} typeOfTestForTitles={typeOfTestForTitles} handleMaxNumber={handleMaxNumber} disableWheelInputNumber={disableWheelInputNumber}/>
      <SexualOrientationSurveySection setEventForm={setEventForm} typeOfTest={typeOfTest} typeOfTestForTitles={typeOfTestForTitles} handleMaxNumber={handleMaxNumber} disableWheelInputNumber={disableWheelInputNumber}/>
      </div>
     
    </div>
  )
}

export default DemographicSurveySection