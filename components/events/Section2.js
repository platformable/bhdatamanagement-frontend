import React from 'react';

const Section2 = ({eventForm, setEventForm,event}) => {

    const uppercaseWords = str => str.replace(/^(.)|\s+(.)/g, c => c.toUpperCase().replaceAll("[<>'\"/;% ]+", " "));


    const handleForm = (e) => {
        setEventForm(previous => ({...previous, eventName: uppercaseWords(e.target.value)}))
      }
    return (
        <div className=''>
            <h1 className=' font-black'>What is the name of the event?</h1>
            <p className="mb-7">Please only use letters and numbers in the name</p>
            <input type="text" 
            className="w-134 p-2 border rounded text-lg" 
            placeholder='' 
            onChange={handleForm}
            defaultValue={event?event.eventname:""}
            />
        </div>
    );
}

export default Section2;
