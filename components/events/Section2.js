import React from 'react';

const Section2 = ({eventForm, setEventForm}) => {
    return (
        <div className='p-5 '>
            <h2 className='mb-3 font-bold'><span className='text-color-violet'>2</span> What is the name of the event?</h2>
            <input type="text" className="w-full p-2 border-dark-violet rounded" placeholder='Type the name of the event here'/>
        </div>
    );
}

export default Section2;
