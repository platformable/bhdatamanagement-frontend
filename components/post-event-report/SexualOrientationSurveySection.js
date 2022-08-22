import React, {useMemo} from 'react';

const dataFieldStrings = (raiz) => {
  const hivGayOrLesbian = raiz + "GayOrLesbian"
  const hivStraightOrHeterosexual = raiz + "StraightOrHeterosexual"
  const hivBisexual = raiz + "Bisexual"
  const hivQueer = raiz + "Queer"
  const hivQuestioningOrNotSure = raiz + "QuestioningOrNotSure"
  const hivSexualOrientationUnknown = raiz + "SexualOrientationUnknown"
  const hivSexualOrientationDeclinedToAnswer = raiz + "SexualOrientationDeclinedToAnswer"

  return [
    hivGayOrLesbian,
    hivStraightOrHeterosexual,
    hivBisexual,
    hivQueer,
    hivQuestioningOrNotSure,
    hivSexualOrientationUnknown,
    hivSexualOrientationDeclinedToAnswer,
  ]
}
const SexualOrientationSurveySection = ({setEventForm, typeOfTest}) => {
  const fields = useMemo(() => dataFieldStrings(typeOfTest), [typeOfTest])
  const handleForm =(e) => {
    setEventForm(prev => ({...prev, [e.target.name]: e.target.value}))
  }
  return (
    <div className='grid grid-cols-1 gap-5'>
      <h2 className='font-black'>Sexual orientation: How many people doing HIV testing identified with the following sexual orientation?</h2>
      <label className='grid grid-cols-3'><p>Gay or lesbian</p><input type="number" className='border-black' name={fields[0]} onChange={handleForm} /></label>
      <label className='grid grid-cols-3'><p>Straight or heterosexual</p><input type="number" className='border-black' name={fields[1]} onChange={handleForm} /></label>
      <label className='grid grid-cols-3'><p>Bisexual</p><input type="number" className='border-black' name={fields[1]} onChange={handleForm} /></label>
      <label className='grid grid-cols-3'><p>Queer</p><input type="number" className='border-black' name={fields[2]} onChange={handleForm} /></label>
      <label className='grid grid-cols-3'><p>Questioning or not sure</p><input type="number" className='border-black' name={fields[3]} onChange={handleForm} /></label>
      <label className='grid grid-cols-3'><p>Unknown</p><input type="number" className='border-black' name={fields[4]} onChange={handleForm} /></label>
      <label className='grid grid-cols-3'><p>Declined to answer</p><input type="number" className='border-black' name={fields[5]} onChange={handleForm} /></label>
    </div>
  )
}

export default SexualOrientationSurveySection