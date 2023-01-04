import React,{useState,useEffect} from 'react';
import {languages} from "../../utils/sharedData";


const TargetAudience = ({eventForm, setEventForm}) => {

  const options = [
    {id:1,value:"Adolescents"},
{id:2,value:"General population"},
{id:3,value:"Heterosexual Men"},
{id:4,value:"Heterosexual Women"},
{id:5,value:"Trans/Non-binary people"},
{id:6,value:"Lesbian/Gay/Bisexual people"},
{id:7,value:"MSM: Men who have sex with men, regardless of their sexual identity"},
{id:8,value:"Other (please specify)"},

  ]
  
  const [data,setData]=useState([...eventForm.targetAudience])

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
    setEventForm((previous) => ({
      ...previous,
      targetAudience: data ,
    }))
  },[data])



  return (
    <div className="px-7 mt-10 rounded">
      <h2 className=" font-black">
        Who was your target audience? Select all that apply.
      </h2>
      <div className="mt-7 grid grid-cols-2 space-between gap-5">
        {options &&
          options.map((option, index) => {
            if(option.value==='Other (please specify)'){
                return (
                  <div className="flex gap-x-5">
                  <label className="flex items-center gap-5 text-lg" key={index}>
              <input
                type="checkbox"
                name="targetAudience"
                className=""
                value={option.value}
                id={index}
                onChange={(e)=>handleForm(e.target.value)}
                defaultChecked={eventForm.targetAudience.includes(option.value) ? 'checked' : ""}
              />
              {option.value}
            </label>
                  <label className="flex items-center gap-5 text-lg" key={""}>
              <input
                type="text"
                name="targetAudience"
                className=""
                value={""}
                id={""}
                onChange={(e)=>handleForm(e.target.value)}
              />
            </label>
                  </div>
                )
            } else {
            return (
              <>
            <label className="flex items-center gap-5 text-lg" key={index}>
              <input
                type="checkbox"
                name="languages"
                className=""
                value={option.value}
                id={index}
                onChange={(e)=>handleForm(e.target.value)}
                defaultChecked={eventForm.languages.includes(option.value) ? 'checked' : ""}
              />
              {option.value}
            </label>
            </>
          )}
            }
          )}
            
      </div>
    </div>
  )
}

export default TargetAudience