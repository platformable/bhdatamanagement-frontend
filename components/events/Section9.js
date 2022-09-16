import React, {useEffect, useState} from 'react';

import {inPersonEventTypeName,onlineEventTypeName} from '../../utils/sharedData'

const Section9 = ({eventForm, setEventForm,event}) => {


    console.log("inPersonEventTypeName",inPersonEventTypeName)
    const options = [
        {
            id:1,
            value:"Online"
        },
        {
            id:2,
            value:"In-person"
        }
    ]

    const handleForm = (e) => {
        setEventForm(previous => ({...previous, onlineInPersonEventType: e.target.value}))
    }

    return (
        <div className=''>
            <h2 className='mb-5 font-black'>Is this event online or in-person?</h2>
            <div className='grid grid-cols-1 gap-5'>
            {options && options.map((option,index) => {
               
              return   (<label className="flex items-center  gap-x-5" key={index}>
                    <input type="radio" 
                    name="onlineInPersonEventType" 
                    className='' 
                    id={option.id}
                    onChange={handleForm}
                    value={option.value}/>
                    <p className="">{option.value}</p>
                 </label>)
                })}
            </div>

            <div className="my-5">
            {eventForm?.onlineInPersonEventType==='Online' &&  <h2 className='mt-10 mb-5 font-black'>What type of online event is it?</h2>}
                {
                    eventForm?.onlineInPersonEventType==='Online' ?  (
                        onlineEventTypeName && onlineEventTypeName.filter((option)=>option.nyscmp===true).map((option,index) => {
               
                            return   (
                                <label className="flex items-center  gap-x-5 my-5" key={index}>
                                  <input type="radio" 
                                  name="inPersonEventTypeName" 
                                  className='' 
                                  id={option.id}
                                  onChange={(e)=>{setEventForm(previous => ({...previous, 
                                    onlineEventTypeName: e.target.value,
                                    onlineEventTypeID:Number(option.id),
                                    inPersonEventTypeName:"",
                                    inPersonEventTypeID:null                                
                                }))}}
                                  value={option.value}/>
                                  <p className="">{option.value}</p>
                               </label>
                              )
                              })
                    ):""
                }
             </div>


             <div className="my-5">
            {eventForm?.onlineInPersonEventType==='In-person' &&  <h2 className='mt-10 mb-5 font-black'>What type of event location will the event be held at?</h2>}
                {
                    eventForm?.onlineInPersonEventType==='In-person' ?  (
                        inPersonEventTypeName && inPersonEventTypeName.filter((option)=>option.nyscmp===true).map((option,index) => {
               
                            return   (
                                <label className="flex items-center  gap-x-5 my-5" key={index}>
                                  <input type="radio" 
                                  name="inPersonEventTypeName" 
                                  className='' 
                                  id={option.id}
                                  onChange={(e)=>{setEventForm(previous => ({...previous, 
                                    inPersonEventTypeName: e.target.value,
                                    inPersonEventTypeID:Number(option.id),
                                    onlineEventTypeID:null,
                                    onlineEventTypeName:"",
                                }))}}
                                  value={option.value}/>
                                  <p className="">{option.value}</p>
                               </label>
                              )
                              })
                    ):""
                }
             </div>
        </div>
    );
}

export default Section9;
