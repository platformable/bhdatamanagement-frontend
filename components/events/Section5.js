import React from 'react';

const Section5 = ({eventForm, setEventForm}) => {

    const handleForm = (e) => {
        setEventForm(previous => ({...previous, eventStartTime: e.target.value}))
      }
    return (
        <label className='mb-7 flex flex-col'>
            <h1 className=' font-black mb-5'>What time will the event start?</h1> 
            <input type="time" 
            name="eventStartTime" 
            className='border rounded p-2 text-lg w-40' 
            onChange={handleForm}
            defaultValue={eventForm.eventStartTime}
            />
        </label>
    );
}

export default Section5;
