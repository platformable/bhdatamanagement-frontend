import React from 'react';

const Section4 = ({eventForm, setEventForm,event}) => {

    const handleForm = (e) => {
        setEventForm(previous => ({...previous, eventDate: e.target.value}))
      }
    return (
        <div className='p-5 bg-extra-light-violet rounded text-center md:text-left'>            
                <h2 className='mb-3 font-bold'><span className='text-color-violet'>4</span> What date is the event?</h2>
                <input type="date" 
                name="eventDate" 
                className='border-dark-violet rounded p-2 text-lg ml-4 md:ml-14' 
                onChange={handleForm}
                value={eventForm.eventDate}
                />
        </div>
    );
}

export default Section4;
