import React from 'react';

const Section5 = ({eventForm, setEventForm,event}) => {

    


    const handleForm = (e) => {
        setEventForm(previous => ({...previous, eventName: e.target.value}))
      }
    return (
        <div className=''>
            <h2 className=' font-black'>Event title:</h2>

            <label> 
            <input type="text" 
            className="w-134 p-2 border-black rounded text-lg" 

            placeholder='name of the event' 

            onChange={handleForm}
            defaultValue={event?event.eventname:""}
            />
            </label>

            
        </div>
    );
}

export default Section5;
