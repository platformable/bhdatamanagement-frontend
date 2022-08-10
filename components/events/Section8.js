import React from "react";

const Section8 = ({eventForm, setEventForm}) => {
  return (
    <div className="p-5">
      <h2 className="mb-3 font-bold">
        <span className="text-color-violet">8</span> What is the event's health
        area of focus?
      </h2>
      <div className="grid grid-cols-5  gap-x-16 gap-y-5">
        <label className="grid grid-cols-3 items-center p-2">
            <input type="radio" name="area-focus" className='mr-2 w-6 h-6'/>
            <img src="/events/breast_cancer_icon.svg" alt=""/>
            <p className="">Breast<br/>cancer</p>    
        </label>
        <label className="grid grid-cols-3 items-center p-2">
            <input type="radio" name="area-focus" className='mr-2 w-6 h-6'/>
            <img src="/events/cardiovascular_disease_icon.svg" alt=""/>
            <p className="">Cardiovascular<br/>disease</p>    
        </label>
        <label className="grid grid-cols-3 items-center p-2">
            <input type="radio" name="area-focus" className='mr-2 w-6 h-6'/>
            <img src="/events/covid19_icon.svg" alt=""/>
            <p className="">COVID-19</p>    
        </label>
        <label className="grid grid-cols-3 items-center p-2">
            <input type="radio" name="area-focus" className='mr-2 w-6 h-6'/>
            <img src="/events/diabetes_icon.svg" alt=""/>
            <p className="">Diabetes</p>    
        </label>
        <label className="grid grid-cols-3 items-center p-2">
            <input type="radio" name="area-focus" className='mr-2 w-6 h-6'/>
            <img src="/events/hepatitis_C_icon.svg" alt=""/>
            <p className="">Hepatitis C</p>    
        </label>
        <label className="grid grid-cols-3 items-center p-2">
            <input type="radio" name="area-focus" className='mr-2 w-6 h-6'/>
            <img src="/events/HIV_icon.svg" alt=""/>
            <p className="">HIV/AIDS</p>    
        </label>
        <label className="grid grid-cols-3 items-center p-2">
            <input type="radio" name="area-focus" className='mr-2 w-6 h-6'/>
            <img src="/events/mental_health_icon.svg" alt=""/>
            <p className="">Mental<br/>Health</p>    
        </label>
        <label className="grid grid-cols-3 items-center p-2">
            <input type="radio" name="area-focus" className='mr-2 w-6 h-6'/>
            <img src="/events/obesity_icon.svg" alt=""/>
            <p className="">Obesity</p>    
        </label>
        <label className="grid grid-cols-3 items-center p-2">
            <input type="radio" name="area-focus" className='mr-2 w-6 h-6'/>
            <img src="/events/prostate_cancer_icon.svg" alt=""/>
            <p className="">Prostate<br/>cancer</p>    
        </label>
        <label className="grid grid-cols-3 items-center p-2">
            <input type="radio" name="area-focus" className='mr-2 w-6 h-6'/>
            <img src="/events/sickle_cell_icon.svg" alt=""/>
            <p className="">Sickle cell</p>    
        </label>
        <label className="grid grid-cols-3 items-center p-2">
            <input type="radio" name="area-focus" className='mr-2 w-6 h-6'/>
            <img src="/events/Maternal_health_icon.svg" alt=""/>
            <p className="">Maternal<br/>Health</p>    
        </label>
        <label className="flex items-center p-2 col-start-2 col-end-6">
            <input type="radio" name="area-focus" className='mr-2 w-6 h-6'/>
            <p className="mr-2">Other</p>
            <input type="text" name="area-focus" className='w-full p-2 border-dark-violet rounded' placeholder="Please specify here"/>
        </label>
      </div>
    </div>
  );
};

export default Section8;
