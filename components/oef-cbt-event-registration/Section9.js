import React, {useEffect, useState} from "react";

const Section9 = ({ eventForm, setEventForm}) => {
    // const  capitalizeFirstLetter = (string) => string.charAt(0).toUpperCase() + string.slice(1)
    // let areas = eventForm?.healthAreaOfFocusName.startsWith(",") ? eventForm.healthAreaOfFocusName.substring(1).split(",") : eventForm.healthAreaOfFocusName.split(",") 
    // let ids = eventForm.healthAreaOfFocusID.startsWith(",") ? eventForm.healthAreaOfFocusID.substring(1).split(",") : eventForm.healthAreaOfFocusID.split(",") 
    const [data,setData]=useState({
      areas: [...eventForm.healthAreaOfFocusName],
      ids: [...eventForm.healthAreaOfFocusID]
    })
    useEffect(() => {
        setEventForm(previous => ({...previous, healthAreaOfFocusName: data.areas, healthAreaOfFocusID : data.ids}))

    }, [data])

    const handleForm = (e) => {

        const isValueOnData=data.areas.includes(e.target.value) && data.ids.includes
        const filteredData=data.areas.filter(oldValues=> oldValues != e.target.value) 
        const filteredIds=data.ids.filter(oldValues=> oldValues != e.target.id) 
        
        isValueOnData?
         setData(previous => ({...previous, areas: filteredData, ids : filteredIds}))
         :
        setData((previous)=>({
          ...previous,
          areas: [...filteredData, e.target.value],
          ids: [...filteredIds, Number(e.target.id)]
    }))
    };
    const handleFormId = (e) => {
      setEventForm(previous => ({...previous,  healthAreaOfFocusID : e.target.id}))
    };

  return (
    <div className="rounded">
      <h2 className="mb-7 font-black">
       What is the event's health area of focus?
      </h2>
      <div className="grid gap-5">
        <label className="flex items-center gap-5">
            <input 
            type="checkbox" 
            name="healthAreaOfFocusName"
            value="Breast cancer" 
            id="1" 
            className='w-6 h-6'
            onChange={handleForm}
            defaultChecked={eventForm?.healthAreaOfFocusName.includes("Breast cancer") ? "checked" : ""}
            />
            {/* <img src="/events/breast_cancer_icon.svg" alt=""/> */}
            <p className="">Breast cancer</p>       
        </label>
        <label className="flex items-center gap-x-5">
            <input 
            type="checkbox" 
            name="healthAreaOfFocusName"
            value="Cardiovascular disease" 
            id="2" 
            className='w-6 h-6'
            onChange={handleForm}
            defaultChecked={eventForm?.healthAreaOfFocusName.includes("Cardiovascular disease") ? "checked" : ""}
            />
            {/* <img src="/events/cardiovascular_disease_icon.svg" alt=""/> */}
            <p className="">Cardiovascular disease</p>    
        </label>
        <label className="flex items-center gap-x-5">
            <input 
            type="checkbox" 
            name="healthAreaOfFocusName"
            value="COVID-19" 
            id="3" 
            className='w-6 h-6'
            onChange={handleForm}
            defaultChecked={eventForm?.healthAreaOfFocusName.includes("COVID-19") ? "checked" : ""}
            />
            {/* <img src="/events/covid19_icon.svg" alt=""/> */}
            <p className="">COVID-19</p>    
        </label>
        <label className="flex items-center gap-x-5">
            <input 
            type="checkbox" 
            name="healthAreaOfFocusName"
            value="Diabetes" 
            id="4" 
            className='w-6 h-6'
            onChange={handleForm}
            defaultChecked={eventForm?.healthAreaOfFocusName.includes("Diabetes") ? "checked" : ""}
            />
            {/* <img src="/events/diabetes_icon.svg" alt=""/> */}
            <p className="">Diabetes</p>    
        </label>
        <label className="flex items-center gap-x-5">
            <input 
            type="checkbox" 
            name="healthAreaOfFocusName"
            value="Hepatitis C" 
            id="5" 
            className='w-6 h-6'
            onChange={handleForm}
            defaultChecked={eventForm?.healthAreaOfFocusName.includes("Hepatitis C") ? "checked" : ""}
            />
            {/* <img src="/events/hepatitis_C_icon.svg" alt=""/> */}
            <p className="">Hepatitis C</p>    
        </label>
        <label className="flex items-center gap-x-5">
            <input 
            type="checkbox" 
            name="healthAreaOfFocusName"
            value="HIV/AIDS" 
            id="6" 
            className='w-6 h-6'
            onChange={handleForm}
            defaultChecked={eventForm?.healthAreaOfFocusName.includes("HIV/AIDS") || eventForm?.programName==="OEF" ? "checked" : ""}
            disabled={eventForm?.programName==="NYS_CMP" ? "disabled" : false}
            />
            {/* <img src="/events/HIV_icon.svg" alt=""/> */}
            <p className="">HIV/AIDS</p>    
        </label>
        <label className="flex items-center gap-x-5">
            <input 
            type="checkbox" 
            name="healthAreaOfFocusName"
            value="Maternal health" 
            id="11" 
            className='w-6 h-6'
            onChange={handleForm}
            defaultChecked={eventForm?.healthAreaOfFocusName.includes("Maternal health") ? "checked" : ""}
            />
            {/* <img src="/events/Maternal_health_icon.svg" alt=""/> */}
            <p className="">Maternal Health</p>    
        </label>
        <label className="flex items-center gap-x-5">
            <input 
            type="checkbox" 
            name="healthAreaOfFocusName"
            value="Mental health" 
            id="7" 
            className='w-6 h-6'
            onChange={handleForm}
            defaultChecked={eventForm?.healthAreaOfFocusName.includes("Mental health") ? "checked" : ""}
            />
            {/* <img src="/events/mental_health_icon.svg" alt=""/> */}
            <p className="">Mental Health</p>    
        </label>
        <label className="flex items-center gap-x-5">
            <input 
            type="checkbox" 
            name="healthAreaOfFocusName"
            value="Obesity" 
            id="8" 
            className='w-6 h-6'
            onChange={handleForm}
            defaultChecked={eventForm?.healthAreaOfFocusName.includes("Obesity") ? "checked" : ""}
            />
            {/* <img src="/events/obesity_icon.svg" alt=""/> */}
            <p className="">Obesity</p>    
        </label>
        <label className="flex items-center gap-x-5">
            <input 
            type="checkbox" 
            name="healthAreaOfFocusName"
            value="Prostate cancer" 
            id="9" 
            className='w-6 h-6'
            onChange={handleForm}
            defaultChecked={eventForm?.healthAreaOfFocusName.includes("Prostate cancer") ? "checked" : ""}
            />
            {/* <img src="/events/prostate_cancer_icon.svg" alt=""/> */}
            <p className="">Prostate cancer</p>    
        </label>
        <label className="flex items-center gap-x-5">
            <input 
            type="checkbox" 
            name="healthAreaOfFocusName"
            value="Sickle cell" 
            id="10" 
            className='w-6 h-6'
            onChange={handleForm}
            defaultChecked={eventForm?.healthAreaOfFocusName.includes("Sickle cell") ? "checked" : ""}
            />
            {/* <img src="/events/sickle_cell_icon.svg" alt=""/> */}
            <p className="">Sickle cell</p>    
        </label>
        
        {/* <label className="flex items-center gap-x-5 col-start-2 col-end-6">
            <input 
            type="checkbox" 
            name="healthAreaOfFocusName"
            id="12" 
            onChange={handleFormId} 
            className='w-6 h-6'
            defaultChecked={eventForm?.healthAreaOfFocusName.includes("Other") ? "checked" : ""}
              />
            <p className="mr-2">Other</p>
            <input type="text" 
            name="healthAreaOfFocusName"
             onChange={handleForm}
             className='w-full gap-x-5 border-dark-violet rounded' 
             placeholder="Please specify here"/>
        </label> */}
      </div>
    </div>
  );
};

export default Section9;
