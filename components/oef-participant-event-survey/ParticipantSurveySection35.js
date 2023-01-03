import React from 'react'
import { crearFecha2 } from '../../utils/helpers'

export const ParticipantSurveySection35 = ({surveyForm, setSurveyForm}) => {
  const handleForm = (e) => {
    setSurveyForm(previous => ({...previous, eventDate: e.target.value}))
  }
  return (
    
    <label className='question-body flex flex-col'>            
            <h2 className='font-black mb-5'>Event date: </h2>
            <input type="date" 
            name="eventDate" 
            className='border rounded p-2 text-lg w-48 uppercase' 
            onChange={handleForm}
            defaultValue={crearFecha2({eventdate: new Date()})}
            />
    </label>
);
}
