import React from 'react';

const Section4 = ({eventForm, setEventForm,event}) => {

    const handleForm = (e) => {
        setEventForm(previous => ({...previous, eventDate: e.target.value}))
      }
    return (
        <label className='md:text-left'>            
                <h1 className='mb-7 font-black'>What date is the event?</h1>
                <input type="date" 
                name="eventDate" 
                className='border rounded text-lg ' 
                onChange={handleForm}
                value={eventForm.eventDate}
                />
        </label>
    );
}

export default Section4;
