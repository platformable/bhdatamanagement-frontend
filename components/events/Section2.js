import React from 'react';

const Section2 = ({eventForm, setEventForm,event}) => {

    const uppercaseWords = str => str.replace(/^(.)|\s+(.)/g, c => c.toUpperCase().replaceAll("[<>'\"/;% ]+", " "));


    const handleForm = (e) => {
        setEventForm(previous => ({...previous, eventName: uppercaseWords(e.target.value)}))
      }
    return (
        <div className=''>
            <h2 className=' font-black'>What is the name of the event?</h2>
            <p className="mb-7">Please only use letters and numbers in the name</p>
            <label>
            <input type="text" 
            className="w-134 p-2 border-black rounded text-lg" 
            placeholder='eg. Syracuse: Community HIV Forum' 
            onChange={handleForm}
            defaultValue={event?event.eventname:""}
            />
            </label>
            
        </div>
    );
}

export default Section2;
