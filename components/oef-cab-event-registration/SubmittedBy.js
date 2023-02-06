import React from 'react';

const SubmittedBy = ({eventForm, setEventForm,event, maskField,stateValueName,stateValueLastname}) => {

    const uppercaseWords = str => str.replace(/^(.)|\s+(.)/g, c => c.toUpperCase().replaceAll("[<>'\"/;% ]+", " "));


    const handleFormName = (e) => {
        setEventForm(previous => ({...previous, [stateValueName]: uppercaseWords(e.target.value)}))
      }
      const handleFormLastName = (e) => {
        setEventForm(previous => ({...previous, [stateValueLastname]: uppercaseWords(e.target.value)}))
      }
    return (
        <div className=''>
            <h2 className='mb-7 font-black'>Submitted By:</h2>

            <label> 
            <input type="text" 
            className={`w-134 border-black rounded text-lg ${maskField && 'filter blur-sm'}`} 

            placeholder='First Name' 

            onChange={handleFormName}
            defaultValue={event?event.createdbyname:""}
            />
            </label>
            <label>
            <input type="text" 
            className={`w-134 border-black rounded text-lg mt-5 ${maskField && 'filter blur-sm'}`} 

            placeholder='Last Name' 

            onChange={handleFormLastName}
            defaultValue={event?event.createdbylastname:""}
            />
            </label>
            
            
        </div>
    );
}

export default SubmittedBy;
