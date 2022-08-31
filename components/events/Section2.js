import React from 'react';

const Section2 = ({eventForm, setEventForm,event}) => {

    const uppercaseWords = str => str.replace(/^(.)|\s+(.)/g, c => c.toUpperCase().replaceAll("[<>'\"/;% ]+", " "));


    const handleForm = (e) => {
        setEventForm(previous => ({...previous, eventName: uppercaseWords(e.target.value)}))
      }
    return (
        <div className='p-5  rounded'>
            <h2 className='mb-3 font-black'><span className=''>2</span>What is the name of the event? Please only use letters and numbers in the name.</h2>
            <input type="text" 
            className="w-full p-2 border rounded" 
            placeholder='Type the name of the event here' 
            onChange={handleForm}
            defaultValue={event?event.eventname:""}
            />
        </div>
    );
}

export default Section2;
