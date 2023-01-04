import React from 'react';

const Section1 = ({eventForm, setEventForm,event}) => {

    const uppercaseWords = str => str.replace(/^(.)|\s+(.)/g, c => c.toUpperCase().replaceAll("[<>'\"/;% ]+", " "));


    const handleFormName = (e) => {
        setEventForm(previous => ({...previous, createdByName: uppercaseWords(e.target.value)}))
      }
      const handleFormLastName = (e) => {
        setEventForm(previous => ({...previous, createdByLastname: uppercaseWords(e.target.value)}))
      }
    return (
        <div className=''>
            <h2 className='mb-7 font-black'>Submitted By:</h2>

            <label> 
            <input type="text" 
            className="w-134 p-2 border-black rounded text-lg" 

            placeholder='First Name' 

            onChange={handleFormName}
            defaultValue={event?event.createdByName:""}
            />
            </label>
            <input type="text" 
            className="w-134 p-2 border-black rounded text-lg mt-5" 

            placeholder='Last Name' 

            onChange={handleFormLastName}
            defaultValue={event?event.createdByLastName:""}
            />
            
        </div>
    );
}

export default Section1;
