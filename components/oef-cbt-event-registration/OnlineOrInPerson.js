import React, { useEffect, useState } from "react";

import {
    inPersonEventLocationType,
  onlineEventTypeName,
} from "../../utils/sharedData";

const OnlineOrInPerson = ({ eventForm, setEventForm, event }) => {
  const options = [
    {
      id: 1,
      value: "Online",
    },
    {
      id: 2,
      value: "In-person",
    },
  ];

  const handleForm = (e) => {
    e.target.value === "Online"
      ? setEventForm((previous) => ({
          ...previous,
          onlineInPersonEventType: 'Online',
          eventLocationTypeID: null,
          eventLocationTypeName: "",
          inPersonEventTypeName: "",
          inPersonEventTypeID: null,
          onlineEventTypeName:'Webinar',
          onlineEventTypeID:3
        }))
      : setEventForm((previous) => ({
          ...previous,
          onlineInPersonEventType: e.target.value,
          onlineEventTypeName: "",
          onlineEventTypeID: null,
        }));
  };

  return (
    <div className="">
      <h2 className="mb-5 font-black">Is this event in-person or online?{/* ?<span className='text-xl text-red-500 ml-2'>*required</span> */}</h2>
      <div className="grid grid-cols-1 gap-5">
        {options &&
          options.map((option, index) => {
            return (
              <label className="flex items-center  gap-x-5" key={index}>
                <input
                  type="radio"
                  name="onlineInPersonEventType"
                  className=""
                  id={option.id}
                  onChange={handleForm}
                  value={option.value}
                  defaultChecked={
                    option.value === eventForm?.onlineInPersonEventType
                      ? "checked"
                      : ""
                  }
                />
                <p className="">{option.value}</p>
              </label>
            );
          })}
      </div>

     

      <div className="my-5">


        {eventForm?.onlineInPersonEventType === "In-person" && (
          <h2 className="mt-10 mb-5 font-black">
            What type of in-person event is it?
          </h2>
        )}


        {eventForm?.onlineInPersonEventType === "In-person"
          ? (
            <div className="mt-7 grid grid-cols-2 space-between gap-5">
        {inPersonEventLocationType &&
          inPersonEventLocationType.filter(location=>location.oefcbt===true).map((option, index) => {
            if(option.value==='Other'){
                return (
                  <div className="flex gap-x-5">
                  <label className="flex items-center gap-5 text-lg" key={index}>
              <input
                type="radio"
                name="inPersonEventTypeName"
                className=""
                value={option.value}
                id={index}
                onChange={(e)=>setEventForm({...eventForm,inPersonEventTypeName:e.target.value,inPersonEventTypeID:option.id})}
                defaultChecked={eventForm?.inPersonEventTypeName?.includes(option.value) ? 'checked' : ""}
              />
              {option.value}
            </label>
                  <label className="flex items-center gap-5 text-lg" key={""}>
              <input
                type="text"
                name="inPersonEventTypeNameOther"
                className=""
                id={""}
                defaultValue={eventForm?.inpersonEventTypeNameOther}
                onChange={(e)=> {
                    if (e.target.value !== 'Other') setEventForm(prev => ({...prev, inPersonEventTypeNameOther: ''}));
                    setEventForm({...eventForm,inPersonEventTypeName:e.target.value,inPersonEventTypeID:option.id})
                  }}
              />
            </label>
                  </div>
                )
            } else {
            return (
              <>
            <label className="flex items-center gap-5 text-lg" key={index}>
              <input
                type="radio"
                name="inPersonEventTypeName"
                className=""
                value={option.value}
                id={index}
                onChange={(e)=>setEventForm({...eventForm,inPersonEventTypeName:e.target.value,inPersonEventTypeID:option.id, inPersonEventTypeNameOther: ''})}
                defaultChecked={eventForm?.inPersonEventTypeName?.includes(option.value) ? 'checked' : ""}
              />
              {option.value}
            </label>
            </>
          )}
            }
          )}
            
      </div>
          )

          : null}
      </div>
    </div>
  );
};

export default OnlineOrInPerson;
