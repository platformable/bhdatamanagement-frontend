import React from 'react';

const Section4 = ({eventForm, setEventForm,event}) => {

    const handleForm = (e) => {
        setEventForm(previous => ({...previous, eventDate: e.target.value}))
      }
    return (
        <div className='p-5  rounded  md:text-left'>            
                <h1 className='mb-3 font-black'>What date is the event?</h1>
                <input type="date" 
                name="eventDate" 
                className='border rounded p-2 text-lg ' 
                onChange={handleForm}
                value={eventForm.eventDate}
                />
        </div>
    );
}

export default Section4;
