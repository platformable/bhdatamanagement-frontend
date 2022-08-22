import React from 'react'

const AgeSurveySection = ({setEventForm}) => {
  const handleForm =(e) => {
    setEventForm(prev => ({...prev, [e.target.name]: e.target.value}))
  }
  return (
    <div className='grid gap-5'>
      <h2 className='font-black'>Age</h2>
      <label className='grid grid-cols-3'><p>Under 15</p><input type="number" name="hivUnder15" className='border-black' onChange={handleForm}/></label>
      <label className='grid grid-cols-3'><p>16-19</p><input type="number" name="hiv16_19" className='border-black' onChange={handleForm}/></label>
      <label className='grid grid-cols-3'><p>20-24</p><input type="number" name="hiv20_24" className='border-black' onChange={handleForm}/></label>
      <label className='grid grid-cols-3'><p>25-29</p><input type="number" name="hiv25_29" className='border-black' onChange={handleForm}/></label>
      <label className='grid grid-cols-3'><p>30-34</p><input type="number" name="hiv30_34" className='border-black' onChange={handleForm}/></label>
      <label className='grid grid-cols-3'><p>35-39</p><input type="number" name="hiv35_39" className='border-black' onChange={handleForm}/></label>
      <label className='grid grid-cols-3'><p>40-44</p><input type="number" name="hiv40_44" className='border-black' onChange={handleForm}/></label>
      <label className='grid grid-cols-3'><p>45-49</p><input type="number" name="hiv45_49" className='border-black' onChange={handleForm}/></label>
      <label className='grid grid-cols-3'><p>50-54</p><input type="number" name="hiv50_54" className='border-black' onChange={handleForm}/></label>
      <label className='grid grid-cols-3'><p>55-59</p><input type="number" name="hiv55_59" className='border-black' onChange={handleForm}/></label>
      <label className='grid grid-cols-3'><p>60-64</p><input type="number" name="hiv60_64" className='border-black' onChange={handleForm}/></label>
      <label className='grid grid-cols-3'><p>65-69</p><input type="number" name="hiv65_69" className='border-black' onChange={handleForm}/></label>
      <label className='grid grid-cols-3'><p>70+</p><input type="number" name="hiv70" className='border-black' onChange={handleForm}/></label>
      <label className='grid grid-cols-3'><p>Declined to answer</p><input type="number" name="hivAgeDeclinedToAnswer" className='border-black' onChange={handleForm}/></label>

    </div>
  )
}

export default AgeSurveySection