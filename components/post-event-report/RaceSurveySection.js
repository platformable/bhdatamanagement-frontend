import React, {useMemo} from 'react'

const dataFieldStrings = (raiz) => {
  const hivBlackOrAfricanAmerican = raiz + "BlackOrAfricanAmerican"
  const hivHispanic = raiz + "Hispanic"
  const hivAsian = raiz + "Asian"
  const hivAmericanIndianOrAlaskaNative = raiz + "AmericanIndianOrAlaskaNative"
  const hivMiddleEasternOrNorthAfrican = raiz + "MiddleEasternOrNorthAfrican"
  const hivNativeHawaiianOrOtherPacificIslander = raiz + "NativeHawaiianOrOtherPacificIslander"
  const hivWhite = raiz + "White"
  const hivSomeOtherRace = raiz + "SomeOtherRace"
  const hivRaceDeclinedToAnswer = raiz + "RaceDeclinedToAnswer"
  
  return [
    hivBlackOrAfricanAmerican,
    hivHispanic,
    hivAsian,
    hivAmericanIndianOrAlaskaNative,
    hivMiddleEasternOrNorthAfrican,
    hivNativeHawaiianOrOtherPacificIslander,
    hivWhite,
    hivSomeOtherRace,
    hivRaceDeclinedToAnswer,
  ]
}

const RaceSurveySection = ({setEventForm, typeOfTest}) => {
  const fields = useMemo(() => dataFieldStrings(typeOfTest), [typeOfTest])
  
  const handleForm =(e) => {
    setEventForm(prev => ({...prev, [e.target.name]: e.target.value}))
  }
  return (
    <div className='grid grid-cols-1 gap-5'>
    <h2 className='font-black'>Race identity of people tested</h2>
    <label className='grid grid-cols-2'><p>Black or African American</p><input type="number" className="border-black p-1" name={fields[0]} onChange={handleForm}/></label>
    <label className='grid grid-cols-2'><p>Hispanic, Latino/a or Spanish</p><input type="number" className="border-black p-1" name={fields[1]} onChange={handleForm}/></label>
    <label className='grid grid-cols-2'><p>Asian</p><input type="number" className="border-black p-1" name={fields[2]} onChange={handleForm}/></label>
    <label className='grid grid-cols-2'><p>American Indian or Alaska Native</p><input type="number" className="border-black p-1" name={fields[3]} onChange={handleForm}/></label>
    <label className='grid grid-cols-2'><p>Middle Eastern or North African</p><input type="number" className="border-black p-1" name={fields[4]} onChange={handleForm}/></label>
    <label className='grid grid-cols-2'><p>Native Hawaiian or Other Pacific Islander</p><input type="number" className="border-black p-1" name={fields[5]} onChange={handleForm}/></label>
    <label className='grid grid-cols-2'><p>White</p><input type="number" className="border-black p-1" name={fields[6]} onChange={handleForm}/></label>
    <label className='grid grid-cols-2'><p>Some other race or origin (please specify)</p><input type="number" className="border-black p-1" name={fields[7]} onChange={handleForm}/></label>
    <label className='grid grid-cols-2'><p>Declined to answer</p><input type="number" className="border-black p-1" name={fields[8]} onChange={handleForm}/></label>
    </div>
  )
}

export default RaceSurveySection