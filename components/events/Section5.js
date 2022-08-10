import React from 'react';

const Section5 = ({eventForm, setEventForm}) => {
    return (
        <div className='p-5'>
            <h2 className='mb-3 font-bold'><span className='text-color-violet'>5</span> What time will the event start?</h2>
            <input type="time" className='border-dark-violet rounded p-2 text-lg'/>
        </div>
    );
}

export default Section5;
