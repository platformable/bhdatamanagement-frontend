import React from 'react';

const Section4 = ({eventForm, setEventForm,event}) => {

    const handleForm = (e) => {
        setEventForm(previous => ({...previous, eventDate: e.target.value}))
      }
    return (
        <label className='mb-7 flex flex-col'>            
                <h2 className='font-black mb-5'>What date is the event?</h2>
                <input type="date" 
                name="eventDate" 
                className='border rounded p-2 text-lg w-48 uppercase' 
                onChange={handleForm}
                value={eventForm.eventDate}
                />
        </label>
    );
}

export default Section4;
