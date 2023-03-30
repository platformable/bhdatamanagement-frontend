import React from "react";

const FacilitatorName = ({eventForm, setEventForm,stateValue}) => {
    
    const uppercaseWords = str => str.replace(/^(.)|\s+(.)/g, c => c.toUpperCase().replaceAll("[<>'\"/;% ]+", " "));

    const handleFormName = (e) => {
        setEventForm(previous => ({...previous, [stateValue]: uppercaseWords(e.target.value)}))
      }
     
    return (
        <div className=''>
            <h2 className='mb-7 font-black'>What is your name:</h2>

            <label> 
            <input type="text" 
            className={`w-134 border-black rounded text-lg}`} 

            placeholder='Name and Last name' 

            onChange={handleFormName}
            defaultValue={eventForm?.[stateValue]}
            />
            </label>
            
        </div>
    );
}


export default FacilitatorName;