import React, {useEffect, useState} from 'react';

const Section3_2 = ({eventForm, setEventForm, nysActivity,event}) => {

    const [fields, setFields] = useState(nysActivity);

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
        setEventForm(previous => ({...previous, nysActivity: e.target.value, nysActivityOther: ""}))
    }
    const handleFormId = (e) => {

        setEventForm(previous => ({...previous, eventTypeID: e.target.id}))
    }


    return (
        <div className=''>
            <h2 className='mb-1 font-black'>Which NYS Activity is being conducted?<span className='text-xl text-red-500 ml-2'>*required</span></h2>
            <p className="mb-7">According to your framework plan</p>
            <div className='grid grid-cols-1 gap-5'>
            {fields && fields.map(activity => {
               
                return (
                activity.value !== "Other" ? 

                
                (<label className='text-lg flex items-center gap-5' key={activity.id}>
                    <input type="radio" 
                    name="nysActivity" 
                    className='' 
                    value={activity.value} 
                    id={activity.id} 
                    onChange={handleForm}
                    defaultChecked={activity.value===eventForm.nysActivity ?'checked':""}
                    />
                    {activity.value}
                    
                </label>) :
                
                (<label className="flex items-center  gap-x-5" key={activity.id}>
                    <input type="radio" 
                    name="nysActivity" 
                    className='' 
                    id={activity.id}
                    onChange={handleForm}
                    value="Other"
                    defaultChecked={activity.value === eventForm.nysActivity?'checked':""}
                    />
                    <p className="">Other</p>
                    <input type="text" 
                    name="nysActivityOther" 
                    onChange={(e) =>
                        setEventForm(previous => ({...previous, nysActivityOther: e.target.value}))
                    }
                    className='border rounded' 
                    value={eventForm.nysActivityOther}
/>
                 </label>)
            )})}
             
            </div>
        </div>
    );
}

export default Section3_2;
