import React from 'react';

const Section1 = ({eventForm, setEventForm}) => {
    return (
        <div className='p-5 '>
            <h2 className='mb-3 font-bold'><span className='text-color-violet'>1</span> Which program is your event for?</h2>
            <div className='flex justify-between items-center'>
                <label className='text-lg flex items-center'>
                    <input type="radio" name="program" className='mr-2 w-5 h-5'/>
                    OEF
                </label>
                <label className='text-lg flex items-center'>
                    <input type="radio" name="program" className='mr-2 w-5 h-5'/>
                    HRSA
                </label>
                <label className='text-lg flex items-center'>
                    <input type="radio" name="program" className='mr-2 w-5 h-5'/>
                    NYS HIV CMP
                </label>
                <label className='text-lg flex items-center'>
                    <input type="radio" name="program" className='mr-2 w-5 h-5'/>
                    Black Health
                </label>
                <label className='text-lg flex items-center'>
                    <input type="radio" name="program" className='mr-2 w-5 h-5'/>
                    CDG
                </label>
                <label className='text-lg flex items-center'>
                    <input type="radio" name="program" className='mr-2 w-5 h-5'/>
                    Other
                    <input type="text" className='ml-3 p-1 text-base border-dark-violet rounded' placeholder='Please specify here'/>
                </label>
                
            </div>
        </div>
    );
}

export default Section1;
