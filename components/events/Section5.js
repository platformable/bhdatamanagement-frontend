import React from 'react';

const Section5 = ({eventForm, setEventForm}) => {

    const handleForm = (e) => {
        setEventForm(previous => ({...previous, eventStartTime: e.target.value}))
      }
    return (
        <label className='mb-7 flex flex-col'>
            <h2 className=' font-black mb-5'>What time will the event start?
            <span className='text-xl text-red-500 ml-2'>*required</span></h2> 
            <input type="time" 
            name="eventStartTime" 
            className='border rounded p-2 text-lg w-48' 
            onChange={handleForm}
            defaultValue={eventForm.eventStartTime}
            />
        </label>
    );
}

export default Section5;
