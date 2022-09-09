import React from 'react';

const Section5 = ({eventForm, setEventForm}) => {

    const handleForm = (e) => {
        setEventForm(previous => ({...previous, eventStartTime: e.target.value}))
      }
    return (
        <div className=''>
            <h1 className='mb-7 font-black'>What time will the event start?</h1>
            <input type="time" 
            name="eventStartTime" 
            className='border rounded p-2 text-lg' 
            onChange={handleForm}
            defaultValue={eventForm.eventStartTime}
            />
        </div>
    );
}

export default Section5;
