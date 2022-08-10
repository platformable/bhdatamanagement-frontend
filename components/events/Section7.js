import React, {useState, useEffect} from 'react';

const Section7 = ({eventForm, setEventForm, locationTypes}) => {
    // const eventLocationTypes = {
    //     OEF: [
    //         "Faith-Based Organization",
    //         "Homeless Shelter",
    //         "College or University",
    //         "Food Bank",
    //         "Community Health Center/Clinic",
    //         "Community Organization",
    //         "Public Housing",
    //         "School",
    //         "In the neighborhood/on the street",
    //         "Facebook Live",
    //         "Instagram Live",
    //         "Webinar",
    //         "Other (please specify)"
    //     ],
    //     T2: [
    //         "Virtual/online - For texting events please put use the Other category and specify texting",
    //         "Community based organization site",
    //         "COVID-19 Testing location",
    //         "Faith based location/Place of worship",
    //         "Hospital/Clinic",
    //         "NYCHA location",
    //         "Subway Station",
    //         "Park/Playground",
    //         "School",
    //         "Food Bank/Pantry",
    //         "Other (including texting, please specify)"
    //     ],
    //     NYS: [
    //         "Virtual/online (no physical location)",
    //         "Community based organization site",
    //         "COVID-19 Testing location",
    //         "Faith based location/Place of worship",
    //         "Hospital/Clinic",
    //         "Public housing location",
    //         "Public transportation hub or station",
    //         "Park/Playground",
    //         "College/School/Trades school/community-based learning center",
    //         "Food Bank/Pantry/Food Kitchen",
    //         "Local neighborhood small business",
    //         "COVID vaccine location"
    //     ]
    // }
    const [fields, setFields] = useState([])

    useEffect(() => {
        const filtered = locationTypes.filter(location => Object.values(location).some(locationType => locationType === "1") )
        setFields(filtered)
    }, [eventForm.programName])


    console.log("fields",fields)
    const handleForm = (e) => {
        setEventForm(previous => ({...previous, eventLocationTypeName: e.target.value}))
      }

    return (
        <div className='p-5 bg-extra-light-violet rounded'>
            <h2 className='mb-3 font-bold'><span className='text-color-violet'>7</span> What type of event location will the event be held at?</h2>
             <div className='grid grid-cols-1 gap-5  md:grid-cols-5 '>
                {fields && fields.map(location => (
                    <label className='text-lg flex items-center' key={location.id}>
                    <input type="radio" name="eventLocationTypeName" className='mr-2 w-5 h-5' value="OEF" onChange={handleForm}/>
                    {location.name}
                    </label>
                ))}
                <label className="flex items-center p-2 ">
                    <input type="radio" name="eventLocationTypeName" className='mr-2 w-5 h-5' onChange={handleForm}/>
                    <p className="mr-2">Other</p>
                    <input type="text" name="eventLocationTypeName" className='w-full p-2 border-dark-violet rounded' placeholder="Please specify here"/>
                </label>
             </div>
        </div>
    );
}

export default Section7;
