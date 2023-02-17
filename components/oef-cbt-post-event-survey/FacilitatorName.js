import React from "react";

const FacilitatorName = ({eventForm, setEventForm}) => {
    
    const uppercaseWords = str => str.replace(/^(.)|\s+(.)/g, c => c.toUpperCase().replaceAll("[<>'\"/;% ]+", " "));

    const handleFormName = (e) => {
        setEventForm(previous => ({...previous, externalFacilitatorName: uppercaseWords(e.target.value)}))
      }
     
    return (
        <div className='question-body'>
            <h2 className='mb-7 font-black'>Submitted By:</h2>

            <label> 
            <input type="text" 
            className={`w-134 border-black rounded text-lg}`} 

            placeholder='Name and Last name' 

            onChange={handleFormName}
            defaultValue={eventForm?.externalFacilitatorName}
            />
            </label>
            
        </div>
    );
}


export default FacilitatorName;