import React,{useState,useEffect} from 'react';
import {languages} from "../../utils/sharedData";


const FboName = ({form, setForm,fbos,isEditPage}) => {
  
  const [data,setData]=useState([...form.taFbo])

  const handleForm=(value)=>{
    if (value === 'Other') setForm(prev => ({...prev, tafboOther: ''}))
    const isValueOnData=data?.includes(value)
   
    const filteredData=data.filter(oldValues=> oldValues != value) 

    isValueOnData?
    setData(filteredData) :
    setData((previous)=>([
      ...previous,value
    ]))
    
  }

  useEffect(()=>{
    setForm((previous) => ({
      ...previous,
      taFbo: data ,
    }))
  },[data])



  return (
    <div className="px-7 my-7">
      <h2 className="font-black">FBO Name</h2>
      <div className="grid md:grid-cols-2 mt-7 gap-5">
        <div className="grid gap-5">
        <label  className="flex gap-x-5 items-center">
              <input
                type="checkbox"
                name="taFbo"
                value={'All FBOs'}
                onChange={(e)=>handleForm(e.target.value)}
                disabled={isEditPage?true:false}
              />
              <p>All FBOs</p>
              
            </label>
        {fbos?.sort((a, b) => a.namefbo.localeCompare(b.namefbo, 'en')).slice(0, Math.round(fbos?.length / 2)).map((fbo, index) => (
           <label className="flex items-center gap-5 text-lg" key={index}>
           <input
             type="checkbox"
             name="taFbo"
             className=""
             value={fbo.namefbo}
             id={index}
             onChange={(e)=>handleForm(e.target.value)}
             defaultChecked={form.taFbo.includes(fbo.namefbo) ? 'checked' : ""}
             disabled={isEditPage?true:false}
           />
           {fbo.namefbo}
         </label>
        ))}
        </div>
        <div className="grid gap-5">
      
        {fbos?.sort((a, b) => a.namefbo.localeCompare(b.namefbo, 'en')).slice(Math.round(fbos?.length / 2)).map((fbo, index) => (
           <label className="flex items-center gap-5 text-lg" key={index}>
           <input
             type="checkbox"
             name="taFbo"
             className=""
             value={fbo.namefbo}
             id={index}
             onChange={(e)=>handleForm(e.target.value)}
             defaultChecked={form.taFbo.includes(fbo.namefbo) ? 'checked' : ""}
             disabled={isEditPage?true:false}
           />
           {fbo.namefbo}
         </label>
        ))}
          <label  className="flex md:flex-row flex-col gap-x-5 md:items-center md:gap-y-0 gap-y-5">
          <div className="flex md:flex-row gap-x-5 ">
              <input
                type="checkbox"
                name="taFbo"
                value={'Other'}
                onChange={(e)=>handleForm(e.target.value)}
                disabled={isEditPage?true:false}
              />
              <p>Other</p>
              </div>
              <input disabled={isEditPage?true:false} type="text" placeholder='Please specify' onChange={(e) => setForm(prev => ({...prev, taFboOther: e.target.value}))} />
            </label>
        </div>
      </div>
    </div>
  )
}

export default FboName