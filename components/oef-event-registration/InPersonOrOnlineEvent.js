import React, { useEffect, useState } from "react";

import { inPersonEventLocationType } from "../../utils/sharedData";

const InPersonOrOnlineEvent = ({ eventForm, setEventForm, event }) => {
  const onlineEventTypeName = [
    {
      id: 7,
      value: "Facebook Live",
    },
    {
      id: 8,
      value: "Instagram Live",
    },
    {
      id: 3,
      value: "Webinar",
    },
    {
      id: 9,
      value: "Other",
    },
  ];

  const handleForm = (e) => {
    if (e.target.name === "inPersonEventTypeName") {
      setEventForm((previous) => ({
        ...previous,
        onlineInPersonEventType: "inPerson",
        // eventLocationTypeID: null,
        // eventLocationTypeName: "",
        inPersonEventTypeName: e.target.value,
        inPersonEventTypeNameOther: "",
        inPersonEventTypeID: e.target.id,
        onlineEventTypeName: "",
        onlineEventTypeID: null,
      }));
    }

    if (
      e.target.name === "onlineEventTypeName" 
    ) {
      setEventForm((prev) => ({
        ...prev,
        onlineInPersonEventType: "Online",
        // eventLocationTypeID: null,
        // eventLocationTypeName: "",
        inPersonEventTypeName: "",
        inPersonEventTypeNameOther: "",
        inPersonEventTypeID: null,
        onlineEventTypeName: e.target.value,
        onlineEventTypeID: e.target.id,
      }));
    }
  };

  return (
    <div className="">
      <h2 className="font-black mb-10">Where did this event take place?</h2>
      <div className="grid gap-5 items-center">
        {/* ************************ IN PERSON TYPES **************** */}
        {inPersonEventLocationType
          ?.filter((location) => location.oefoutreach === true)
          .map((option, index) => {
            if (option.value === "Other") {
              return null;
              //    (
              //     <div className="flex gap-x-5">
              //       <label
              //         className="flex items-center gap-5 text-lg"
              //         key={index}
              //       >
              //         <input
              //           type="radio"
              //           name="inPersonEventTypeName"
              //           className=""
              //           value={option.value}
              //           id={option.id}
              //           onChange={handleForm}
              //           defaultChecked={
              //             eventForm?.inPersonEventTypeName?.includes(option.value)
              //               ? "checked"
              //               : ""
              //           }
              //         />
              //         {option.value}
              //       </label>
              //       <label className="flex items-center gap-5 text-lg" key={""}>
              //         <input
              //           type="text"
              //           name="inPersonEventTypeNameOther"
              //           className=""
              //           id={""}
              //           defaultValue={eventForm?.inPersonEventTypeNameOther}
              //           onChange={(e) => setEventForm(prev => ({...prev,inPersonEventTypeNameOther: e.target.value })) }
              //         />
              //       </label>
              //     </div>
              //   );
            } else {
              return (
                <>
                  <label
                    className="flex items-center gap-5 text-lg"
                    key={index}
                  >
                    <input
                      type="radio"
                      name="inPersonEventTypeName"
                      className=""
                      value={option.value}
                      id={option.id}
                      onChange={handleForm}
                      checked={
                        eventForm?.inPersonEventTypeName?.includes(option.value)
                          ? "checked"
                          : ""
                      }
                    />
                    {option.value}
                  </label>
                </>
              );
            }
          })}
        {/* ************************ ONLINE TYPES **************** */}
        {onlineEventTypeName?.map((option, index) =>
          option.value !== "Other" ? (
            <div>
              <label className="flex items-center gap-5 text-lg" key={index}>
                <input
                  type="radio"
                  name="onlineEventTypeName"
                  className=""
                  value={option.value}
                  id={option.id}
                  onChange={handleForm}
                  checked={
                    eventForm?.onlineEventTypeName?.includes(option.value)
                      ? "checked"
                      : ""
                  }
                />
                {option.value}
              </label>
            </div>
          ) : (
            <div className="flex flex-col md:flex-row gap-x-5 md:gap-y-0 gap-y-5">
              <label className="flex items-center gap-5 text-lg" key={index}>
                <input
                  type="radio"
                  name="inPersonEventTypeName"
                  className=""
                  value={option.value}
                  id={option.id}
                  onChange={handleForm}
                  checked={
                    eventForm?.inPersonEventTypeName?.includes(option.value)
                      ? "checked"
                      : ""
                  }
                />
                {option.value}
              </label>
              <label className="flex items-center gap-5 text-lg" key={""}>
                <input
                  type="text"
                  name="inPersonEventTypeNameOther"
                  placeholder="Please specify"
                  className=""
                  id={""}
                  value={eventForm?.inPersonEventTypeNameOther}
                  onChange={(e) =>
                    setEventForm((prev) => ({
                      ...prev,
                      inPersonEventTypeNameOther: e.target.value,
                    }))
                  }
                />
              </label>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default InPersonOrOnlineEvent;
