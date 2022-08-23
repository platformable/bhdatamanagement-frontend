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
      
      <h2 className='font-black'>Gender</h2>
      <label className='flex gap-x-5'><p className="w-40">Female</p>
      <input type="number" name={fields[0]} onChange={handleForm} className="border-black p-1"/>
      </label>
      <label className='flex gap-x-5'><p className="w-40">Male</p>
      <input type="number" name={fields[1]} onChange={handleForm} className="border-black p-1"/>
      </label>
      <label className='flex gap-x-5'><p className="w-40">Transgender female</p>
      <input type="number" name={fields[2]} onChange={handleForm} className="border-black p-1"/>
      </label>
      <label className='flex gap-x-5'><p className="w-40">Transgender male</p>
      <input type="number" name={fields[3]} onChange={handleForm} className="border-black p-1"/>
      </label>
      <label className='flex gap-x-5'><p className="w-40">Gender non-conforming</p>
      <input type="number" name={fields[4]} onChange={handleForm} className="border-black p-1"/>
      </label>
      <label className='flex gap-x-5'><p className="w-40">Non-binary</p>
      <input type="number" name={fields[5]} onChange={handleForm} className="border-black p-1"/>
      </label>
      <label className='flex gap-x-5'><p className="w-40">Other gender identity</p>
      <input type="number" name={fields[6]} onChange={handleForm} className="border-black p-1"/>
      </label>
      <label className='flex gap-x-5'><p className="w-40">Decline to answer</p>
      <input type="number" name={fields[7]} onChange={handleForm} className="border-black p-1"/>
      </label>
    </div>
  )
}

export default GenderSurveySection