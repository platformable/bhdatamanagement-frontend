import React, {useEffect, useState} from 'react';

const Section3 = ({eventForm, setEventForm, eventTypes}) => {
    
    const [fields, setFields] = useState([])

    useEffect(() => {
        const filtered = eventTypes.filter(type => Object.values(type).some(type => type === "1") )
        setFields(filtered)
    }, [eventForm.programName])


    console.log("fields",fields)

    const handleForm = (e) => {
        setEventForm(previous => ({...previous, eventTypeName: e.target.value}))
    }
    return (
        <div className='p-5 bg-extra-light-violet rounded'>
            <h2 className='mb-3 font-bold'><span className='text-color-violet'>3</span> What type of event is it?</h2>
            <div className='grid grid-cols-1 gap-5 md:grid-rows-auto  md:grid-cols-3'>
            {fields && fields.map(eventType => (
                <label className='text-lg flex items-center' key={eventType.id}>
                    <input type="radio" name="eventTypeName" className='mr-2 w-5 h-5' value="OEF" onChange={handleForm}/>
                    {eventType.name}
                </label>
            ))}
             <label className="flex items-center p-2 ">
                    <input type="radio" name="eventTypeName" className='mr-2 w-5 h-5' onChange={handleForm}/>
                    <p className="mr-2">Other</p>
                    <input type="text" name="eventTypeName" className='w-full p-2 border-dark-violet rounded' placeholder="Please specify here"/>
                </label>
            </div>
        </div>
    );
}

export default Section3;
