import React, {useMemo} from 'react'
const dataFieldStrings = (raizName) => {
  const NotHispanic = raizName + "NotHispanic"
  const MexicanMexicanAmericanOrChicano = raizName + "MexicanMexicanAmericanOrChicano"
  const PuertoRican = raizName + "PuertoRican"
  const Cuban = raizName + "Cuban"
  const Dominican = raizName + "Dominican"
  const Ecuadorian = raizName + "Ecuadorian"
  const OtherHispanic = raizName + "OtherHispanic"
  const EthnicityDeclinedToAnswer = raizName + "EthnicityDeclinedToAnswer"
  return [
    NotHispanic,
    MexicanMexicanAmericanOrChicano,
    PuertoRican,
    Cuban,
    Dominican,
    Ecuadorian,
    OtherHispanic,
    EthnicityDeclinedToAnswer,]
}
 const EthnicitySurveySection = ({typeOfTest,setEventForm}) => {
  const fields = useMemo(() => dataFieldStrings(typeOfTest), [typeOfTest])

  const handleForm =(e) => {
    setEventForm(prev => ({...prev, [e.target.name]: e.target.value}))
  }
  return (
    <div className='grid grid-cols-1 gap-5'>
      <h2>Ethnicity: How many people doing HIV testing identified with the following Hispanic and Latin ethnicities?</h2>
      
      <label className='grid grid-cols-2'><p>Not of Hispanic, Latino/a or Spanish origin</p><input type="number" className='border-black p-1' name={fields[0]} onChange={handleForm} /></label>
      <label className='grid grid-cols-2'><p>Mexican, Mexican American or Chicano</p><input type="number" className='border-black p-1' name={fields[1]} onChange={handleForm} /></label>
      <label className='grid grid-cols-2'><p>Puerto Rican</p><input type="number" className='border-black p-1' name={fields[2]} onChange={handleForm} /></label>
      <label className='grid grid-cols-2'><p>Cuban</p><input type="number" className='border-black p-1' name={fields[3]} onChange={handleForm} /></label>
      <label className='grid grid-cols-2'><p>Dominican</p><input type="number" className='border-black p-1' name={fields[4]} onChange={handleForm} /></label>
      <label className='grid grid-cols-2'><p>Ecuadorian</p><input type="number" className='border-black p-1' name={fields[5]} onChange={handleForm} /></label>
      <label className='grid grid-cols-2'><p>Other Hispanic, Latino/a, or Spanish origin</p><input type="number" className='border-black p-1' name={fields[6]} onChange={handleForm} /></label>
      <label className='grid grid-cols-2'><p>Declined to answer</p><input type="number" className='border-black p-1' name={fields[7]} onChange={handleForm} /></label>
    </div>
  )
}

export default EthnicitySurveySection