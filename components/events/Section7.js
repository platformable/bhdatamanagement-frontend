import React, {useState, useEffect} from 'react';
import {inPersonEventLocationType} from "../../utils/sharedData"

const Section7 = ({eventForm, setEventForm,event}) => {

    const convertStringTocompareWithProgramName = (string) => string.toLowerCase().replace(/\s/g, '');
    const  capitalizeFirstLetter = (string) => string.charAt(0).toUpperCase() + string.slice(1);


    const handleForm = (e) => {
        setEventForm(previous => ({...previous, eventLocationTypeName: capitalizeFirstLetter(e.target.value),  eventLocationTypeID: Number(e.target.id)}))
      };
    

    return (
        <div className=''>
            <h2 className='mb-7 font-black'>What type of event location will the event be held at?</h2>
             <div className='grid grid-cols-1 gap-5'>
                {inPersonEventLocationType && inPersonEventLocationType.filter(type => type.nyscmp).map(location => (
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
                    value={'Other'}
                    onChange={handleForm}
                    defaultChecked={eventForm?.eventLocationTypeID === 11 ?'checked':""}
                    
                    />
                    <p className="">Other</p>
                    <input type="text" 
                    name="eventLocationTypeNameOther"
                    onChange={(e) => setEventForm(prev => ({...prev, eventLocationTypeNameOther: e.target.value}))} 
                    className='w-96 border-dark-violet rounded ' 
                    placeholder="Eg. Sporting facility"
                    defaultValue={eventForm?.eventLocationTypeID === 11 ? eventForm.eventLocationTypeName : ''}
                    />
                </label></div>)

                ))}
                
             </div>
        </div>
    );
}

export default Section7;
