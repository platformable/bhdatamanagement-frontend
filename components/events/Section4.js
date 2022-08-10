import React from 'react';

const Section4 = ({eventForm, setEventForm}) => {
    return (
        <div className='p-5'>
            <h2 className='mb-3 font-bold'><span className='text-color-violet'>4</span> What date is the event?</h2>
            <input type="date" className='border-dark-violet rounded p-2 text-lg'/>
        </div>
    );
}

export default Section4;
