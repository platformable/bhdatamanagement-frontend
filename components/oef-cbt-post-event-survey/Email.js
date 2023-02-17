import React from 'react';

const Email = ({eventForm, setEventForm }) => {

   

    const handleForm = (e) => {
        setEventForm(previous => ({...previous, externalFacilitatorEmail: e.target.value}))
      }
    return (
        <div className='question-body'>
            <h2 className='mb-7 font-black'>Enter your email address:</h2>

            <label> 
            <input type="text" 
            className={`w-134 p-2 border-black rounded text-lg`} 

            placeholder='abc@myemail.com' 

            onChange={handleForm}
            defaultValue={eventForm?.externalFacilitatorEmail}
            />
            </label>

            
        </div>
    );
}

export default Email;
