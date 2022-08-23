import React, {useMemo} from 'react'
const dataFieldStrings = (raiz) => {
  const hivUnder15  = raiz + "hivUnder15"
  const hiv16_19 = raiz + "hiv16_19"
  const hiv20_24 = raiz + "hiv20_24"
  const hiv25_29 = raiz + "hiv25_29"
  const hiv30_34 = raiz + "hiv30_34"
  const hiv35_39 = raiz + "hiv35_39"
  const hiv40_44 = raiz + "hiv40_44"
  const hiv45_49 = raiz + "hiv45_49"
  const hiv50_54 = raiz + "hiv50_54"
  const hiv55_59 = raiz + "hiv55_59"
  const hiv60_64 = raiz + "hiv60_64"
  const hiv65_69 = raiz + "hiv65_69"
  const hiv70 = raiz + "hiv70"

  return [
    hivUnder15,
    hiv16_19,
    hiv20_24,
    hiv25_29,
    hiv30_34,
    hiv35_39,
    hiv40_44,
    hiv45_49,
    hiv50_54,
    hiv55_59,
    hiv60_64,
    hiv65_69,
    hiv70,
  ]
}
const AgeSurveySection = ({setEventForm, typeOfTest}) => {
  const fields = useMemo(() => dataFieldStrings(typeOfTest), [typeOfTest])

  const handleForm =(e) => {
    setEventForm(prev => ({...prev, [e.target.name]: e.target.value}))
  }
  return (
    <div className='grid gap-5'>
      <h2 className='font-black'>Age</h2>
      <label className='flex gap-x-5'><p className="w-20">Under 15</p><input type="number" name={fields[0]} className='border-black p-1' onChange={handleForm}/></label>
      <label className='flex gap-x-5'><p className="w-20">16-19</p><input type="number" name={fields[1]} className='border-black p-1' onChange={handleForm}/></label>
      <label className='flex gap-x-5'><p className="w-20">20-24</p><input type="number" name={fields[2]} className='border-black p-1' onChange={handleForm}/></label>
      <label className='flex gap-x-5'><p className="w-20">25-29</p><input type="number" name={fields[3]} className='border-black p-1' onChange={handleForm}/></label>
      <label className='flex gap-x-5'><p className="w-20">30-34</p><input type="number" name={fields[4]} className='border-black p-1' onChange={handleForm}/></label>
      <label className='flex gap-x-5'><p className="w-20">35-39</p><input type="number" name={fields[5]} className='border-black p-1' onChange={handleForm}/></label>
      <label className='flex gap-x-5'><p className="w-20">40-44</p><input type="number" name={fields[6]} className='border-black p-1' onChange={handleForm}/></label>
      <label className='flex gap-x-5'><p className="w-20">45-49</p><input type="number" name={fields[7]} className='border-black p-1' onChange={handleForm}/></label>
      <label className='flex gap-x-5'><p className="w-20">50-54</p><input type="number" name={fields[8]} className='border-black p-1' onChange={handleForm}/></label>
      <label className='flex gap-x-5'><p className="w-20">55-59</p><input type="number" name={fields[9]} className='border-black p-1' onChange={handleForm}/></label>
      <label className='flex gap-x-5'><p className="w-20">60-64</p><input type="number" name={fields[10]} className='border-black p-1' onChange={handleForm}/></label>
      <label className='flex gap-x-5'><p className="w-20">65-69</p><input type="number" name={fields[11]} className='border-black p-1' onChange={handleForm}/></label>
      <label className='flex gap-x-5'><p className="w-20">70+</p><input type="number" name={fields[12]} className='border-black p-1' onChange={handleForm}/></label>
      <label className='flex gap-x-5'><p className="w-20">Declined to answer</p><input type="number" name={fields[13]} className='border-black p-1' onChange={handleForm}/></label>

    </div>
  )
}

export default AgeSurveySection