import React, {useEffect, useState} from 'react';

const Section3_2 = ({eventForm, setEventForm, nysActivity,event}) => {



    const [fields, setFields] = useState([])



    useEffect(() => {
        if (eventForm.programName && !event) {
            const programNameConverted = convertStringTocompareWithProgramName(eventForm?.programName)
            //const eventProgramNameConverted = convertStringTocompareWithProgramName(event?.programname)
            const filtered = nysActivity.filter(type => type[programNameConverted] === 1)
            setFields(filtered)
        } 

        if (eventForm.programName && event) {
            const programNameConverted = convertStringTocompareWithProgramName(eventForm?.programName)
            const eventProgramNameConverted = convertStringTocompareWithProgramName(event?.programname)
            const filtered = nysActivity.filter(type => event?type[programNameConverted] === 1: type[eventProgramNameConverted] === "1")
            setFields(filtered)
        } 


    }, [eventForm.programName])

    const convertStringTocompareWithProgramName = (string) => string.toLowerCase().replace(/\s/g, '')
    const  capitalizeFirstLetter = (string) => string.charAt(0).toUpperCase() + string.slice(1)

    const handleForm = (e) => {
        setEventForm(previous => ({...previous, nysActivity: e.target.value}))
    }
    const handleFormId = (e) => {

        setEventForm(previous => ({...previous, eventTypeID: e.target.id}))
    }


    return (
        <div className='p-5  rounded'>
            <h1 className='mb-3 font-black'>Which NYS Activity is being conducted (according to your framework plan)?</h1>
            <div className='grid grid-cols-1 '>
            {fields && fields.map(activity => (
                activity.value !== "Other" ? 

                (<label className='text-lg flex items-center my-2' key={activity.id}>
                    <input type="radio" 
                    name="nysActivity" 
                    className='mr-2 w-6 h-6' 
                    value={activity.value} 
                    id={activity.id} 
                    onChange={handleForm}
                    />
                    {activity.value}
                    
                </label>) :
                
                (<label className="flex items-center my-2 ">
                    <input type="radio" 
                    name="nysActivity" 
                    className='mr-2 w-6 h-6' 
                    id={activity.id}
                    onChange={handleForm}
                    value="Other"/>
                    <p className="mr-2">Other</p>
                    <input type="text" 
                    name="nysActivity" 
                    onChange={handleForm}
                    className=' border rounded' 
                    placeholder="Please specify here"/>
                 </label>)
            ))}
             
            </div>
        </div>
    );
}

export default Section3_2;
