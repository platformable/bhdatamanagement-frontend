import React from 'react';

const Section5 = ({eventForm, setEventForm}) => {

    


    const handleForm = (e) => {
        setEventForm(previous => ({...previous, eventName: e.target.value}))
      }
    return (
        <div className=''>
            <h2 className='mb-5 font-black'>What is the name of the CBT?</h2>
            <label> 
            <input type="text" 
            className="w-134 p-2 border-black rounded text-lg" 
            placeholder='Name of event' 
            onChange={handleForm}
            defaultValue={eventForm?.eventName}
            />
            </label>

            
        </div>
    );
}

export default Section5;
