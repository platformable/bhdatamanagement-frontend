import React from 'react'

const RaceSurveySection = () => {
  return (
    <div className='grid grid-cols-1 gap-5'>
    <h2 className='font-black'>Race identity of people tested</h2>
    <p>Black or African American</p><input type="number" className="border-black" name="hivBlackOrAfricanAmerican" onChange={handleForm}/>
    <p>Hispanic, Latino/a or Spanish</p><input type="number" className="border-black" name="hivHispanic" onChange={handleForm}/>
    <p>Asian</p><input type="number" className="border-black" name="hivAsian" onChange={handleForm}/>
    <p>American Indian or Alaska Native</p><input type="number" className="border-black" name="hivAmericanIndianOrAlaskaNative" onChange={handleForm}/>
    <p>Middle Eastern or North African</p><input type="number" className="border-black" name="hivMiddleEasternOrNorthAfrican" onChange={handleForm}/>
    <p>Native Hawaiian or Other Pacific Islander</p><input type="number" className="border-black" name="hivNativeHawaiianOrOtherPacificIslander" onChange={handleForm}/>
    <p>White</p><input type="number" className="border-black" name="hivWhite" onChange={handleForm}/>
    <p>Some other race or origin (please specify)</p><input type="number" className="border-black" name="hivSomeOtherRace" onChange={handleForm}/>
    <p>Declined to answer</p><input type="number" className="border-black" name="hivRaceDeclinedToAnswer" onChange={handleForm}/>
    </div>
  )
}

export default RaceSurveySection