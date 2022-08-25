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
    setEventForm(prev => ({...prev, [e.target.name]: Number(e.target.value)}))
  }
  return (
    <div className='grid grid-cols-1 gap-5'>
      <h2 className='font-black'>Sexual orientation: How many people doing HIV testing identified with the following sexual orientation?</h2>
      <label className='flex gap-x-5'><p className="w-60 gap-x-5 text-lg">Gay or lesbian</p><input type="number" className='border-black' name={fields[0]} onChange={handleForm} /></label>
      <label className='flex gap-x-5'><p className="w-60 gap-x-5">Straight or heterosexual</p><input type="number" className='border-black' name={fields[1]} onChange={handleForm} /></label>
      <label className='flex gap-x-5'><p className="w-60 gap-x-5">Bisexual</p><input type="number" className='border-black' name={fields[2]} onChange={handleForm} /></label>
      <label className='flex gap-x-5'><p className="w-60 gap-x-5">Queer</p><input type="number" className='border-black' name={fields[3]} onChange={handleForm} /></label>
      <label className='flex gap-x-5'><p className="w-60 gap-x-5">Questioning or not sure</p><input type="number" className='border-black' name={fields[4]} onChange={handleForm} /></label>
      <label className='flex gap-x-5'><p className="w-60 gap-x-5">Unknown</p><input type="number" className='border-black' name={fields[5]} onChange={handleForm} /></label>
      <label className='flex gap-x-5'><p className="w-60 gap-x-5">Declined to answer</p><input type="number" className='border-black' name={fields[6]} onChange={handleForm} /></label>
    </div>
  )
}

export default SexualOrientationSurveySection