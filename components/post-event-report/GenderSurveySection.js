import React, {useMemo} from 'react'
const dataFieldStrings = (raiz) => {
  const hivFemale = raiz + "Female"
  const hivMale = raiz + "Male"
  const hivTransgenderFemale = raiz + "TransgenderFemale"
  const hivTransgenderMale = raiz + "TransgenderMale"
  const hivGenderNonConforming = raiz + "GenderNonConforming"
  const hivNonBinary = raiz + "NonBinary"
  const hivOtherGenderIdentity = raiz + "OtherGenderIdentity"
  const hivGenderDeclinedToAnswer = raiz + "GenderDeclinedToAnswer"

  return [
    hivFemale,
    hivMale,
    hivTransgenderFemale,
    hivTransgenderMale,
    hivGenderNonConforming,
    hivNonBinary,
    hivOtherGenderIdentity,
    hivGenderDeclinedToAnswer,
  ]
}
const GenderSurveySection = ({setEventForm, typeOfTest}) => {
  const fields = useMemo(() => dataFieldStrings(typeOfTest), [typeOfTest])

  const handleForm =(e) => {
    setEventForm(prev => ({...prev, [e.target.name]: e.target.value}))
  }
  return (
    <div className='grid grid-cols-1 gap-5'>
      
      <h2 className=''>Gender</h2>
      <label className='grid grid-cols-3'><p>Female</p>
      <input type="number" name={fields[0]} onChange={handleForm} className="border-black p-1"/>
      </label>
      <label className='grid grid-cols-3'><p>Male</p>
      <input type="number" name={fields[1]} onChange={handleForm} className="border-black p-1"/>
      </label>
      <label className='grid grid-cols-3'><p>Transgender female</p>
      <input type="number" name={fields[2]} onChange={handleForm} className="border-black p-1"/>
      </label>
      <label className='grid grid-cols-3'><p>Transgender male</p>
      <input type="number" name={fields[3]} onChange={handleForm} className="border-black p-1"/>
      </label>
      <label className='grid grid-cols-3'><p>Gender non-conforming</p>
      <input type="number" name={fields[4]} onChange={handleForm} className="border-black p-1"/>
      </label>
      <label className='grid grid-cols-3'><p>Non-binary</p>
      <input type="number" name={fields[5]} onChange={handleForm} className="border-black p-1"/>
      </label>
      <label className='grid grid-cols-3'><p>Other gender identity</p>
      <input type="number" name={fields[6]} onChange={handleForm} className="border-black p-1"/>
      </label>
      <label className='grid grid-cols-3'><p>Decline to answer</p>
      <input type="number" name={fields[7]} onChange={handleForm} className="border-black p-1"/>
      </label>
    </div>
  )
}

export default GenderSurveySection