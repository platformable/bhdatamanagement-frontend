import React, {useState, useEffect} from 'react';

const Section7 = ({eventForm, setEventForm, locationTypes,event}) => {
   
    const [fields, setFields] = useState([]);

    useEffect(() => {
        /* if (eventForm.programName) {
            const programNameConverted = convertStringTocompareWithProgramName(eventForm.programName)
            const filtered = locationTypes.filter(locationType => locationType[programNameConverted] === "1" )
            setFields(filtered)
        } */
        if (eventForm.programName && !event) {
            const programNameConverted = convertStringTocompareWithProgramName(eventForm?.programName)
            //const eventProgramNameConverted = convertStringTocompareWithProgramName(event?.programname)
            const filtered = locationTypes.filter(locationType => locationType[programNameConverted] === "1")
            setFields(filtered)
        } 

        if (eventForm.programName && event) {
            const programNameConverted = convertStringTocompareWithProgramName(eventForm?.programName)
            const eventProgramNameConverted = convertStringTocompareWithProgramName(event?.programname)
            const filtered = locationTypes.filter(locationType => event?locationType[programNameConverted] === "1": locationType[eventProgramNameConverted] === "1")
            setFields(filtered)
        } 

    }, [eventForm.programName]);

    const convertStringTocompareWithProgramName = (string) => string.toLowerCase().replace(/\s/g, '');
    const  capitalizeFirstLetter = (string) => string.charAt(0).toUpperCase() + string.slice(1);


    const handleForm = (e) => {
        setEventForm(previous => ({...previous, eventLocationTypeName: capitalizeFirstLetter(e.target.value),  eventLocationTypeID: e.target.id}))
      };
    const handleFormId = (e) => {
        setEventForm(previous => ({...previous, eventLocationTypeID: e.target.id}))
    };

    return (
        <div className='p-5  rounded'>
            <h1 className='mb-3 font-black'>What type of event location will the event be held at?</h1>
             <div className=''>
                {fields && fields.map(location => (
                    location.name !== "Other" ?

                    <label className='text-lg flex items-center my-4' key={location.id}>
                    <input type="radio" 
                    name="eventLocationTypeName" 
                    className='mr-2 w-6 h-6' 
                    value={location.name} 
                    id={location.id}
                    onChange={handleForm}
                    defaultChecked={location.name===eventForm.eventLocationTypeName ?'checked':""}
                    />
                    {location.name}
                    </label> :

                    <label className="flex items-center p-2 my-2">
                    <input type="radio" 
                    name="eventLocationTypeId" className='mr-2 w-6 h-6' 
                    id={location.id}
                    onChange={handleFormId}/>
                    <p className="mr-2">Other</p>
                    <input type="text" 
                    name="eventLocationTypeName"
                    onChange={handleForm} 
                    className='w-full p-2 border-dark-violet rounded' 
                    placeholder="Please specify here"/>
                </label>

                ))}
                
             </div>
        </div>
    );
}

export default Section7;
