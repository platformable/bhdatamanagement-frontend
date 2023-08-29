import React from "react";

const AirsEventSession = ({ event}) => {
  // console.log(event);
  
  return (
    <section className="divide-y divide-black border-t-2 border-t-black border-x border-x-black mx-5">
      <div className="text-xxs  grid grid-cols-2 divide-black ">
        <p className="font-bold  text-xxs px-3 py-1 ">
          * DATE:{" "}
          {new Date(event?.eventdate).toLocaleDateString("en-US", {year: "numeric", month: "long", day: "numeric"})}
        </p>
        <p className="font-bold text-xxs px-3 py-1 ">* PROGRAM: BCBS CDI - Mobilization</p>
      </div>
      <div className="px-3 py-1">
        <p className="font-bold text-xxs">
          * SERVICE CATEGORY: 00019 Community Level Intervention
        </p>
      </div>
      <div className="text-xxs px-3 py-1 text-center">
        <p className="font-bold text-xxs">EVENT / SESSION</p>
      </div>
      <div className="text-xxs  grid grid-cols-12 divide-black divide-x">
        <p className="font-bold text-xxs px-3 py-1 col-start-1 col-end-4 border-r">
          * MODEL:{" "}
        </p>
        <p className="font-bold text-xxs px-3 py-1 col-start-4 col-end-12">
          Locally Developed Intervention
        </p>
      </div>
      <div className="text-xxs  grid grid-cols-12 divide-black divide-x">
        <p className="font-bold text-xxs px-3 py-1 col-start-1 col-end-4 border-r">
          * ENCOUNTER:{" "}
        </p>
        <p className="font-bold text-xxs px-3 py-1 col-start-4 col-end-8 border-r">
            172 Social Marketing Campaign{" "}
        </p>
        <p className="font-bold text-xxs px-3 py-1 col-start-8 col-end-9 border-r text-center">
          OR
        </p>
        <p className="font-bold text-xxs px-3 py-1 col-start-9 col-end-13">
          ✔️ 36 Community Mobilization
        </p>
      </div>
      <div className="text-xxs  grid grid-cols-12 divide-black divide-x">
        <p className="font-bold text-xxs px-3 py-1 col-start-1 col-end-4 border-r">
          * SERVICE:{" "}
        </p>
        <p className="font-bold text-xxs px-3 py-1 col-start-4 col-end-8 border-r">
           780 Social Marketing Campaign
        </p>
        <p className="font-bold text-xxs px-3 py-1 col-start-8 col-end-9 border-r text-center">
          OR
        </p>
        <p className="font-bold text-xxs px-3 py-1 col-start-9 col-end-13">
          ✔️ 118 Community Mobilization
        </p>
      </div>
      <div className="text-xxs flex gap-x-10 items-start px-3 py-1">
        <p className="font-bold text-xxs">* START TIME: {new Date("2022/09/03   "+event?.eventstarttime).toLocaleTimeString('en-US', {hour: '2-digit', minute: '2-digit', hour12: true})} </p>
        <p className="font-bold text-xxs">* FINISH TIME: {new Date("2022/09/03   "+event?.eventfinishtime).toLocaleTimeString('en-US', {hour: '2-digit', minute: '2-digit', hour12: true})} </p>
      </div>
      <div className="text-xxs grid grid-cols-2 divide-black divide-x">
        <div className="text-xxs border-r px-3 py-1 grid gap-y-1">
          <p className="font-bold text-xxs ">* LOCATION: *CDC SETTING TYPE:</p>
          <div className="grid grid-cols-2 items-start">
            <div className="">
              <p className="font-bold text-xxs flex items-center mb-1">
              <input type="checkbox" className="checkbox-normal-size mr-2" checked={event?.onlineinpersoneventtype === "In-person" &&
                  event?.eventlocationtypename === "Community based organization site"
                    ? "checked"
                    : ""}/>
                  01 CBO
                    
                </p>
                
              <p className="font-bold text-xxs flex items-center ">
                <input type="checkbox" className="checkbox-normal-size mr-2" checked={event?.onlineinpersoneventtype === "In-person" &&
                  event?.eventlocationtypename !== "Community based organization site"
                  ? "checked"
                  : ""}/>
                 02 COMMUNITY SETTING
                  
              </p>
            </div>
            <p className="font-bold text-xxs flex items-center">
                <input type="checkbox" className="checkbox-normal-size mr-2" checked={event?.onlineinpersoneventtype === "Online" ? "checked" : ""}/>
                99 OTHER
              </p> 

            
          </div>
        </div>
        <div className="text-xxs px-3 py-1 grid gap-y-1">
          <p className="font-bold text-xxs">* SESSION PRESENTED BY: </p>
          <div className="flex gap-x-5 items-center">
            <label className="text-xxs">
              <input
                readOnly
                type="checkbox"
                checked={event?.sessionpresenter === "Staff" ? "checked" : ""}
                className="checkbox-normal-size pointer-events-none mr-2"
              />
              STAFF
            </label>

            <label className="text-xxs">
              <input
                readOnly
                type="checkbox"
                checked={
                  event?.sessionpresenter === "Guest professional"
                    ? "checked"
                    : ""
                }
                className="checkbox-normal-size pointer-events-none mr-2"
              />
              GUEST PROFESSIONAL
            </label>
          </div>
        </div>
      </div>
      <div className="text-xxs  grid grid-cols-2 divide-black divide-x">
        <div className="text-xxs border-r grid grid-cols-1 gap-y-2 items-start px-3 py-1">
          <p className=" text-xxs italic">
            Organization: ´{event?.partnerorganization1}
          </p>
          <p className="font-bold text-xxs ">* ZIP CODE: {event?.zipcode}</p>
          <p className=" text-xxs italic">
            Additional Zip codes covered: {event?.additionalzipcodes}
          </p>
        </div>
        <div className="text-xxs grid grid-cols-1 gap-y-1 items-start px-3 py-1">
          <p className=" text-xxs italic">Session staffed by:</p>
          <p className="font-bold text-xxs ">* STAFF: {event?.staffpresentnames}</p>
        </div>
      </div>
    </section>
  );
};

export default AirsEventSession;
