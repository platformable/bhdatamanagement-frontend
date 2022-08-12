import React from "react";

const Section8 = ({event, eventForm, setEventForm}) => {
    const  capitalizeFirstLetter = (string) => string.charAt(0).toUpperCase() + string.slice(1)
    let areas = eventForm.healthAreaOfFocusName.split(","); 
    let ids = eventForm.healthAreaOfFocusID.split(",");

    const handleForm = (e) => {
        areas.includes(e.target.value) ? 
        areas = areas.filter(area => area !== e.target.value) : areas.push(e.target.value)

        ids.includes(e.target.id) ? 
        ids = ids.filter(id => id !== e.target.id) : ids.push(e.target.id)

        setEventForm(previous => ({...previous, healthAreaOfFocusName: areas.toString(), healthAreaOfFocusID : ids.toString()}))
      }
    const handleFormId = (e) => {
      setEventForm(previous => ({...previous,  healthAreaOfFocusID : e.target.id}))
    }
    console.log(eventForm)
  return (
    <div className="p-5 bg-extra-light-violet rounded">
      <h2 className="mb-3 font-bold">
        <span className="text-color-violet">8</span> What is the event's health
        area of focus?
      </h2>
      <div className="md:grid md:grid-cols-5 gap-x-16 gap-y-5">
        <label className="grid grid-cols-3 items-center p-2">
            <input 
            type="checkbox" 
            name="healthAreaOfFocusName"
            value="Breast cancer" 
            id="1" 
            className='mr-2 w-6 h-6'
            onChange={handleForm}
            defaultChecked={eventForm.healthAreaOfFocusName.includes("Breast cancer") ? "checked" : ""}
            />
            <img src="/events/breast_cancer_icon.svg" alt=""/>
            <p className="">Breast<br/>cancer</p>       
        </label>
        <label className="grid grid-cols-3 items-center p-2">
            <input 
            type="checkbox" 
            name="healthAreaOfFocusName"
            value="Cardiovascular disease" 
            id="2" 
            className='mr-2 w-6 h-6'
            onChange={handleForm}
            defaultChecked={eventForm.healthAreaOfFocusName.includes("Cardiovascular disease") ? "checked" : ""}
            />
            <img src="/events/cardiovascular_disease_icon.svg" alt=""/>
            <p className="">Cardiovascular<br/>disease</p>    
        </label>
        <label className="grid grid-cols-3 items-center p-2">
            <input 
            type="checkbox" 
            name="healthAreaOfFocusName"
            value="COVID-19" 
            id="3" 
            className='mr-2 w-6 h-6'
            onChange={handleForm}
            defaultChecked={eventForm.healthAreaOfFocusName.includes("COVID-19") ? "checked" : ""}
            />
            <img src="/events/covid19_icon.svg" alt=""/>
            <p className="">COVID-19</p>    
        </label>
        <label className="grid grid-cols-3 items-center p-2">
            <input 
            type="checkbox" 
            name="healthAreaOfFocusName"
            value="Diabetes" 
            id="4" 
            className='mr-2 w-6 h-6'
            onChange={handleForm}
            defaultChecked={eventForm.healthAreaOfFocusName.includes("Diabetes") ? "checked" : ""}
            />
            <img src="/events/diabetes_icon.svg" alt=""/>
            <p className="">Diabetes</p>    
        </label>
        <label className="grid grid-cols-3 items-center p-2">
            <input 
            type="checkbox" 
            name="healthAreaOfFocusName"
            value="Hepatitis C" 
            id="5" 
            className='mr-2 w-6 h-6'
            onChange={handleForm}
            defaultChecked={eventForm.healthAreaOfFocusName.includes("Hepatitis C") ? "checked" : ""}
            />
            <img src="/events/hepatitis_C_icon.svg" alt=""/>
            <p className="">Hepatitis C</p>    
        </label>
        <label className="grid grid-cols-3 items-center p-2">
            <input 
            type="checkbox" 
            name="healthAreaOfFocusName"
            value="HIV/AIDS" 
            id="6" 
            className='mr-2 w-6 h-6'
            onChange={handleForm}
            defaultChecked={eventForm.healthAreaOfFocusName.includes("HIV/AIDS") ? "checked" : ""}
            />
            <img src="/events/HIV_icon.svg" alt=""/>
            <p className="">HIV/AIDS</p>    
        </label>
        <label className="grid grid-cols-3 items-center p-2">
            <input 
            type="checkbox" 
            name="healthAreaOfFocusName"
            value="Mental health" 
            id="7" 
            className='mr-2 w-6 h-6'
            onChange={handleForm}
            defaultChecked={eventForm.healthAreaOfFocusName.includes("Mental health") ? "checked" : ""}
            />
            <img src="/events/mental_health_icon.svg" alt=""/>
            <p className="">Mental<br/>Health</p>    
        </label>
        <label className="grid grid-cols-3 items-center p-2">
            <input 
            type="checkbox" 
            name="healthAreaOfFocusName"
            value="Obesity" 
            id="8" 
            className='mr-2 w-6 h-6'
            onChange={handleForm}
            defaultChecked={eventForm.healthAreaOfFocusName.includes("Obesity") ? "checked" : ""}
            />
            <img src="/events/obesity_icon.svg" alt=""/>
            <p className="">Obesity</p>    
        </label>
        <label className="grid grid-cols-3 items-center p-2">
            <input 
            type="checkbox" 
            name="healthAreaOfFocusName"
            value="Prostate cancer" 
            id="9" 
            className='mr-2 w-6 h-6'
            onChange={handleForm}
            defaultChecked={eventForm.healthAreaOfFocusName.includes("Prostate cancer") ? "checked" : ""}
            />
            <img src="/events/prostate_cancer_icon.svg" alt=""/>
            <p className="">Prostate<br/>cancer</p>    
        </label>
        <label className="grid grid-cols-3 items-center p-2">
            <input 
            type="checkbox" 
            name="healthAreaOfFocusName"
            value="Sickle cell" 
            id="10" 
            className='mr-2 w-6 h-6'
            onChange={handleForm}
            defaultChecked={eventForm.healthAreaOfFocusName.includes("Sickle cell") ? "checked" : ""}
            />
            <img src="/events/sickle_cell_icon.svg" alt=""/>
            <p className="">Sickle cell</p>    
        </label>
        <label className="grid grid-cols-3 items-center p-2">
            <input 
            type="checkbox" 
            name="healthAreaOfFocusName"
            value="Maternal health" 
            id="11" 
            className='mr-2 w-6 h-6'
            onChange={handleForm}
            defaultChecked={eventForm.healthAreaOfFocusName.includes("Maternal health") ? "checked" : ""}
            />
            <img src="/events/Maternal_health_icon.svg" alt=""/>
            <p className="">Maternal<br/>Health</p>    
        </label>
        {/* <label className="flex items-center p-2 col-start-2 col-end-6">
            <input 
            type="checkbox" 
            name="healthAreaOfFocusName"
            id="12" 
            onChange={handleFormId} 
            className='mr-2 w-6 h-6'
            defaultChecked={eventForm.healthAreaOfFocusName.includes("Other") ? "checked" : ""}
              />
            <p className="mr-2">Other</p>
            <input type="text" 
            name="healthAreaOfFocusName"
             onChange={handleForm}
             className='w-full p-2 border-dark-violet rounded' 
             placeholder="Please specify here"/>
        </label> */}
      </div>
    </div>
  );
};

export default Section8;
