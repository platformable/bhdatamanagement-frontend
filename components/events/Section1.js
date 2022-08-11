import React from 'react';

const Section1 = ({eventForm, setEventForm, programs}) => {
    console.log(eventForm)

    const handleForm = (e) => {
        
        setEventForm(previous => ({...previous, programName: e.target.value.toUpperCase(), programID: e.target.id}))
    }
    const handleFormId = (e) => {
        setEventForm(previous => ({...previous, programID: e.target.id}))
      }
    
    return (
        <div className='p-5 bg-extra-light-violet rounded'>
            <h2 className='mb-3 font-bold'><span className='text-color-violet'>1</span> Which program is your event for?</h2>
            <div className='grid grid-cols-1 gap-3 md:flex md:justify-between md:items-center'>
                {programs && programs.map(program => (
                        
                        program.name !== "Other" ?

                        <label className='text-lg flex items-center' key={program.id}>
                        <input type="radio" 
                        name="program" 
                        className='mr-2 w-4 h-4'
                        value={program.name} 
                        id={program.id} 
                        onChange={handleForm}/>
                        {program.name}
                        </label> :

                        <label className='text-lg flex items-center'>
                        <input type="radio" 
                        name="program" 
                        className='mr-2 w-4 h-4' 
                        value="Other" 
                        id={program.id}
                        onChange={handleFormId}/>
                        Other
                        <input 
                        onChange={handleForm}
                        type="text"
                        className='ml-3 p-1 text-base border-dark-violet rounded'
                        placeholder='Please specify here'/>
                        </label>
                ))}
                
                
            </div>
        </div>
    );
}

export default Section1;
