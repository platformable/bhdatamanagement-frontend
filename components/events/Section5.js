import React from 'react';

const Section5 = ({eventForm, setEventForm}) => {

    const handleForm = (e) => {
        setEventForm(previous => ({...previous, eventStartTime: e.target.value}))
      }
    return (
        <div className='p-5 rounded '>
            <h2 className='mb-3 font-black'><span className=''>5</span> What time will the event start?</h2>
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
