import React, { useEffect, useState } from "react";

import {
  inPersonEventTypeName,
  onlineEventTypeName,
} from "../../utils/sharedData";

const Section9 = ({ eventForm, setEventForm, event }) => {
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
          onlineInPersonEventType: e.target.value,
          eventLocationTypeID: null,
          eventLocationTypeName: "",
          inPersonEventTypeName: "",
          inPersonEventTypeID: null,
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
      <h2 className="mb-5 font-black">Is this event online or in-person?<span className='text-xl text-red-500 ml-2'>*required</span></h2>
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
        {eventForm?.onlineInPersonEventType === "Online" && (
          <h2 className="mt-10 mb-5 font-black">
            What type of online event is it?
          </h2>
        )}
        {eventForm?.onlineInPersonEventType === "Online"
          ? onlineEventTypeName &&
            onlineEventTypeName
              .filter((option) => option.nyscmp === true)
              .map((option, index) => {
                return (
                  <label
                    className="flex items-center  gap-x-5 my-5"
                    key={index}
                  >
                    <input
                      type="radio"
                      name="OnlineEventTypeName"
                      className=""
                      id={option.id}
                      onChange={(e) => {
                        setEventForm((previous) => ({
                          ...previous,
                          onlineEventTypeName: e.target.value,
                          onlineEventTypeID: Number(option.id),
                          inPersonEventTypeName: "",
                          inPersonEventTypeID: null,
                        }));
                      }}
                      value={option.value}
                      defaultChecked={
                        option.value === eventForm?.onlineEventTypeName
                          ? "checked"
                          : ""
                      }
                    />
                    <p className="">{option.value}</p>
                  </label>
                );
              })
          : ""}
      </div>

      <div className="my-5">
        {eventForm?.onlineInPersonEventType === "In-person" && (
          <h2 className="mt-10 mb-5 font-black">
            What type of in-person event is it?
          </h2>
        )}
        {eventForm?.onlineInPersonEventType === "In-person"
          ? inPersonEventTypeName &&
            inPersonEventTypeName
              .filter((option) => option.nyscmp === true)
              .map((option, index) => {
                return (
                  <label
                    className="flex items-center  gap-x-5 my-5"
                    key={index}
                  >
                    <input
                      type="radio"
                      name="inPersonEventTypeName"
                      className=""
                      id={option.id}
                      onChange={(e) => {
                        setEventForm((previous) => ({
                          ...previous,
                          inPersonEventTypeName: e.target.value,
                          inPersonEventTypeID: Number(option.id),
                          onlineEventTypeID: null,
                          onlineEventTypeName: "",
                        }));
                      }}
                      value={option.value}
                      defaultChecked={
                        option.value === eventForm?.inPersonEventTypeName
                          ? "checked"
                          : ""
                      }
                    />
                    <p className="">{option.value}</p>
                  </label>
                );
              })
          : ""}
      </div>
    </div>
  );
};

export default Section9;
