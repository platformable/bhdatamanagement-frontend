import React from 'react'

const GenderSurveySection = ({setEventForm}) => {
  const handleForm =(e) => {
    setEventForm(prev => ({...prev, [e.target.name]: e.target.value}))
  }
  return (
    <div className='grid grid-cols-1 gap-5'>
      
      <h2 className=''>Gender</h2>
      <label className='grid grid-cols-3'><p>Female</p>
      <input type="number" name="hivFemale" onChange={handleForm} className="border-black"/>
      </label>
      <label className='grid grid-cols-3'><p>Male</p>
      <input type="number" name="hivMale" onChange={handleForm} className="border-black"/>
      </label>
      <label className='grid grid-cols-3'><p>Transgender female</p>
      <input type="number" name="hivTransgenderFemale" onChange={handleForm} className="border-black"/>
      </label>
      <label className='grid grid-cols-3'><p>Transgender male</p>
      <input type="number" name="hivTransgenderMale" onChange={handleForm} className="border-black"/>
      </label>
      <label className='grid grid-cols-3'><p>Gender non-conforming</p>
      <input type="number" name="hivGenderNonConforming" onChange={handleForm} className="border-black"/>
      </label>
      <label className='grid grid-cols-3'><p>Non-binary</p>
      <input type="number" name="hivNonBinary" onChange={handleForm} className="border-black"/>
      </label>
      <label className='grid grid-cols-3'><p>Other gender identity</p>
      <input type="number" name="hivOtherGenderIdentity" onChange={handleForm} className="border-black"/>
      </label>
      <label className='grid grid-cols-3'><p>Decline to answer</p>
      <input type="number" name="hivGenderDeclinedToAnswer" onChange={handleForm} className="border-black"/>
      </label>
    </div>
  )
}

export default GenderSurveySection