import React from 'react'

export default function RadioGroup({options,eventForm,setEventForm,title,stateValue,event}) {


console.log("stateValue",stateValue)
  
  return (
    <div className="">
    <h2 className="font-black">
      {title}
    </h2>
    <div className="mt-7 grid grid-cols-1 space-between gap-5">
      {options?.map((option, index) => {
        return (
          <label className="flex gap-x-5 items-center" key={index}>
            <input
              type="radio"
              className=""
              value={option.value}
              id={option.id}
              onChange={(e) =>
               setEventForm({...eventForm,[stateValue]:e.target.value})
              }
              name={stateValue}
              defaultChecked={
                option.value === event?.[stateValue.toLowerCase()] ? "checked" : ""
              }
            />
            <p className="">{option.value}</p>
          </label>
        );
      })}
    </div>
  </div>
);
}
