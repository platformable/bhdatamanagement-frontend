import React, {useState, useEffect} from 'react';
import {inPersonEventLocationType} from "../../utils/sharedData"

const Section7 = ({eventForm, setEventForm,event}) => {
    

    // useEffect(() => {
    //     /* if (eventForm.programName) {
    //         const programNameConverted = convertStringTocompareWithProgramName(eventForm.programName)
    //         const filtered = inPersonEventLocationType.filter(locationType => locationType[programNameConverted] === "1" )
    //         setFields(filtered)
    //     } */
    //     if (eventForm.programName && !event) {
    //         const programNameConverted = convertStringTocompareWithProgramName(eventForm?.programName)
    //         //const eventProgramNameConverted = convertStringTocompareWithProgramName(event?.programname)
    //         const filtered = inPersonEventLocationType.filter(locationType => locationType[programNameConverted] === "true")
    //         setFields(filtered)
    //     } 

    //     if (eventForm.programName && event) {
    //         const programNameConverted = convertStringTocompareWithProgramName(eventForm?.programName)
    //         const eventProgramNameConverted = convertStringTocompareWithProgramName(event?.programname)
    //         const filtered = inPersonEventLocationType.filter(locationType => event?locationType[programNameConverted] === "true": locationType[eventProgramNameConverted] === "true")
    //         setFields(filtered)
    //     } 

    // }, [eventForm.programName]);

    const convertStringTocompareWithProgramName = (string) => string.toLowerCase().replace(/\s/g, '');
    const  capitalizeFirstLetter = (string) => string.charAt(0).toUpperCase() + string.slice(1);


    const handleForm = (e) => {
        setEventForm(previous => ({...previous, eventLocationTypeName: capitalizeFirstLetter(e.target.value),  eventLocationTypeID: e.target.id}))
      };
    const handleFormId = (e) => {
        setEventForm(previous => ({...previous, eventLocationTypeID: e.target.id}))
    };

    return (
        <div className=''>
            <h2 className='mb-7 font-black'>What type of event location will the event be held at?</h2>
             <div className='grid grid-cols-1 gap-5'>
                {inPersonEventLocationType && inPersonEventLocationType.map(location => (
                    location.value !== "Other" ?
                    (<div key={location.id}>
                     <label className='text-lg flex items-center gap-5' key={location.id}>
                    <input type="radio" 
                    name="eventLocationTypeName" 
                    className="" 
                    value={location.value} 
                    id={location.id}
                    onChange={handleForm}
                    defaultChecked={location.value===eventForm?.eventLocationTypeName ?'checked':""}
                    />
                    {location.value}
                    </label>
                    </div>)
                    :

                    (<div key={location.id}>
                    <label className="flex items-center flex gap-x-5">
                    <input type="radio" 
                    name="eventLocationTypeName" className='' 
                    id={location.id}
                    onChange={handleFormId}
                    defaultChecked={eventForm?.eventLocationTypeName === "Other"?'checked':""}
                    
                    />
                    <p className="">Other</p>
                    <input type="text" 
                    name="eventLocationTypeName"
                    onChange={handleForm} 
                    className='w-96 border-dark-violet rounded ' 
                    placeholder="Eg. Sporting facility"
                    />
                </label></div>)

                ))}
                
             </div>
        </div>
    );
}

export default Section7;
