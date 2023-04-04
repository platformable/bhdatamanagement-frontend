import React from "react";

const Month = ({eventForm, setEventForm,stateValue}) => {
    
    const uppercaseWords = str => str.replace(/^(.)|\s+(.)/g, c => c.toUpperCase().replaceAll("[<>'\"/;% ]+", " "));

    const handleFormName = (e) => {
        setEventForm(previous => ({...previous, [stateValue]: uppercaseWords(e.target.value)}))
      }
     
    return (
        <div className=''>
            <h2 className='mb-7 font-black'>What month did you start attending YIP workshops?</h2>

            <label> 
            <input type="text" 
            className={` border-black rounded text-lg}`} 

            placeholder='Eg. December' 

            onChange={handleFormName}
            defaultValue={eventForm?.[stateValue]}
            />
            </label>
            
        </div>
    );
}


export default Month;