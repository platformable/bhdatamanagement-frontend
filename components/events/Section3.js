import React, {useEffect, useState} from 'react';

const Section3 = ({eventForm, setEventForm, eventTypes,event}) => {



    const [fields, setFields] = useState([])



    useEffect(() => {
        if (eventForm.programName && !event) {
            const programNameConverted = convertStringTocompareWithProgramName(eventForm?.programName)
            //const eventProgramNameConverted = convertStringTocompareWithProgramName(event?.programname)
            const filtered = eventTypes.filter(type => type[programNameConverted] === "1")
            setFields(filtered)
        } 

        if (eventForm.programName && event) {
            const programNameConverted = convertStringTocompareWithProgramName(eventForm?.programName)
            const eventProgramNameConverted = convertStringTocompareWithProgramName(event?.programname)
            const filtered = eventTypes.filter(type => event?type[programNameConverted] === "1": type[eventProgramNameConverted] === "1")
            setFields(filtered)
        } 


    }, [eventForm.programName])

    const convertStringTocompareWithProgramName = (string) => string.toLowerCase().replace(/\s/g, '')
    const  capitalizeFirstLetter = (string) => string.charAt(0).toUpperCase() + string.slice(1)

    const handleForm = (e) => {
        setEventForm(previous => ({...previous, eventTypeName: capitalizeFirstLetter(e.target.value), eventTypeID: e.target.id,}))
    }
    const handleFormId = (e) => {

        setEventForm(previous => ({...previous, eventTypeID: e.target.id}))
    }


    return (
        <div className='p-5  rounded'>
            <h2 className='mb-3 font-black'><span className=''>3</span> What type of event is it?</h2>
            <div className='grid grid-cols-1 '>
            {fields && fields.map(eventType => (
                eventType.name !== "Other" ? 

                (<label className='text-lg flex items-center' key={eventType.id}>
                    <input type="radio" 
                    name="eventTypeName" 
                    className='mr-2 w-6 h-6' 
                    value={eventType.name} 
                    id={eventType.id} 
                    onChange={handleForm}
                    defaultChecked={eventType.name===eventForm.eventTypeName ?'checked':""}
                    />
                    {eventType.name}
                    
                </label>) :
                
                (<label className="flex items-center p-2 ">
                    <input type="radio" 
                    name="eventTypeId" 
                    className='mr-2 w-6 h-6' 
                    id={eventType.id}
                    onChange={handleFormId}/>
                    <p className="mr-2">Other</p>
                    <input type="text" 
                    name="eventTypeName" 
                    onChange={handleForm}
                    className='w-full p-2 border-dark-violet rounded' 
                    placeholder="Please specify here"/>
                 </label>)
            ))}
             
            </div>
        </div>
    );
}

export default Section3;
