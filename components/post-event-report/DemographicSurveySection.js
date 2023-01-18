import React, { useEffect, useState } from 'react'
import AgeSurveySection from './AgeSurveySection'
import EthnicitySurveySection from './EthnicitySurveySection'
import GenderSurveySection from './GenderSurveySection'
import RaceSurveySection from './RaceSurveySection'
import SexualOrientationSurveySection from './SexualOrientationSurveySection'

const DemographicSurveySection = ({setEventForm, eventForm, typeOfTest}) => {
  const capitalizeFirstLetter = (string) => string.charAt(0).toUpperCase() + string.slice(1)
  console.log('demographics oef post event', eventForm)
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
    function isNumberKey(){
      const invalidChars = [
        "-",
        "+",
        "e",
      ];
      if (invalidChars.includes(e.key)) {
        e.preventDefault();
      } 
  }
    let {value} = e.target
    value > 100 && (e.target.value = 100)
  }
  const disableWheelInputNumber = (e) => {
    e.target.blur()
  }
  const isNumberKey = (e) => {
    const invalidChars = [
      "-",
      "+",
      "e",
    ];
    if (invalidChars.includes(e.key)) {
      e.preventDefault();
    } 
}
  return (
    <div className=''>
      <h2 className='mb-10'>Demographics</h2>
      <div className='grid grid-cols-1 gap-10'>
      <GenderSurveySection setEventForm={setEventForm} eventForm={eventForm} typeOfTest={typeOfTest} typeOfTestForTitles={typeOfTestForTitles} handleMaxNumber={handleMaxNumber} disableWheelInputNumber={disableWheelInputNumber} isNumberKey={isNumberKey}/>
      <AgeSurveySection setEventForm={setEventForm} eventForm={eventForm} typeOfTest={typeOfTest} typeOfTestForTitles={typeOfTestForTitles} handleMaxNumber={handleMaxNumber} disableWheelInputNumber={disableWheelInputNumber} isNumberKey={isNumberKey}/>
      <RaceSurveySection setEventForm={setEventForm} eventForm={eventForm} typeOfTest={typeOfTest} typeOfTestForTitles={typeOfTestForTitles} handleMaxNumber={handleMaxNumber} disableWheelInputNumber={disableWheelInputNumber} isNumberKey={isNumberKey}/>
      <EthnicitySurveySection setEventForm={setEventForm} eventForm={eventForm} typeOfTest={typeOfTest} typeOfTestForTitles={typeOfTestForTitles} handleMaxNumber={handleMaxNumber} disableWheelInputNumber={disableWheelInputNumber} isNumberKey={isNumberKey}/>
      {eventForm?.programName !== 'OEF' && 
      <SexualOrientationSurveySection setEventForm={setEventForm} eventForm={eventForm} typeOfTest={typeOfTest} typeOfTestForTitles={typeOfTestForTitles} handleMaxNumber={handleMaxNumber} disableWheelInputNumber={disableWheelInputNumber} isNumberKey={isNumberKey}/>
    }
      </div>
     
    </div>
  )
}

export default DemographicSurveySection