import React,{useState,useEffect} from 'react';
import {languages} from "../../utils/sharedData";


const FboName = ({form, setForm,fbos}) => {
  
  const [data,setData]=useState([...form.taFbo])

  const handleForm=(value)=>{
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
    <div className="px-7">
      <h2 className="font-black">FBO Name</h2>
      <div className="grid grid-cols-2 mt-7 gap-5">
        <div className="grid gap-5">
        {fbos?.slice(0, Math.round(fbos?.length / 2)).sort((a, b) => a.namefbo.localeCompare(b.namefbo, 'en')).map((fbo, index) => (
           <label className="flex items-center gap-5 text-lg" key={index}>
           <input
             type="checkbox"
             name="taFbo"
             className=""
             value={fbo.namefbo}
             id={index}
             onChange={(e)=>handleForm(e.target.value)}
             defaultChecked={form.taFbo.includes(fbo.namefbo) ? 'checked' : ""}
           />
           {fbo.namefbo}
         </label>
        ))}
        </div>
        <div className="grid gap-5">
        {fbos?.slice(Math.round(fbos?.length / 2)).sort((a, b) => a.namefbo.localeCompare(b.namefbo, 'en')).map((fbo, index) => (
           <label className="flex items-center gap-5 text-lg" key={index}>
           <input
             type="checkbox"
             name="taFbo"
             className=""
             value={fbo.namefbo}
             id={index}
             onChange={(e)=>handleForm(e.target.value)}
             defaultChecked={form.taFbo.includes(fbo.namefbo) ? 'checked' : ""}
           />
           {fbo.namefbo}
         </label>
        ))}
          <label  className="flex gap-x-5 items-center">
              <input
                type="checkbox"
                name="taFbo"
                value={'Other'}
                onChange={(e)=>handleForm(e.target.value)}
              />
              <p>Other</p>
              <input type="text" placeholder='Please specify' onChange={(e) => setForm(prev => ({...prev, taFboOther: e.target.value}))} />
            </label>
        </div>
      </div>
    </div>
  )
}

export default FboName