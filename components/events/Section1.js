import React,{useState,useEffect} from 'react';
import { useRouter } from 'next/router'

const Section1 = ({eventForm, setEventForm, programs,event}) => {



    const router = useRouter()
    const location = router.route

 
 /*    const handleForm = (e) => {
        console.log("eventForm",eventForm)
     
    } */
    const handleFormId = (e) => {
        setEventForm(previous => ({...previous, programID: e.target.id}))
      }


    useEffect(()=>{
            console.log("eventForm",eventForm)
    },[eventForm.programName])
    return (
        <div className='px-5 py-0 rounded'>
            <h1 className='mb-3 font-black'>Which program is your event for?</h1>
            <div className='md:items-center'>
                {programs && programs.map(program => (
                        
                        program.name !== "Other" ?

                        <label className='text-lg flex items-center my-5' key={program.id}>
                        <input type="radio" 
                        name="program" 
                        className='mr-2 w-6 h-6'
                        value={program.name} 
                        id={program.id} 
                        onChange={(e)=>setEventForm(previous => ({...previous, programName: e.target.value.toUpperCase(), programID: e.target.id}))}
                        defaultChecked={program.id===event?.programid?'checked':""}
                        />
                        {program.name}
                        </label> :

                        <label className='text-lg flex items-center'>
                        <input type="radio" 
                        name="program" 
                        className='mr-2 w-6 h-6' 
                        value="Other" 
                        id={program.id}
                        onChange={handleFormId}/>
                        Other
                        <input 
                        onChange={handleForm}
                        type="text"
                        className='ml-3 p-1 text-base border-dark-violet rounded'
                        placeholder='Please specify here'/>
                        </label>
                ))}
                
                
            </div>
        </div>
    );
}

export default Section1;
