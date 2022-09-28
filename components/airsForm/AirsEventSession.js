import React from "react";

const AirsEventSession = ({ event }) => {
  console.log(event);
  return (
    <section className="w-full text-lg divide-y divide-black border-black">
      <div className=" grid grid-cols-2 divide-black divide-x">
        <p className="px-3 py-1 ">* DATE: {event.eventdate}</p>
        <p className="px-3 py-1 ">* PROGRAM: BCBS CDI - Mobilization</p>
      </div>
      <div className="px-3 py-1">* SERVICE CATEGORY: 00019 Community Level Intervention</div>
      <div className="px-3 py-1 text-center"><h3>EVENT / SESSION</h3></div>
      <div className=" grid grid-cols-12 divide-black divide-x">
        <p className="px-3 py-1 col-start-1 col-end-4 border-r">* MODEL: </p>
        <p className="px-3 py-1 col-start-4 col-end-12">Locally Developed Intervention</p>
      </div>
      <div className=" grid grid-cols-12 divide-black divide-x">
      <p className="px-3 py-1 col-start-1 col-end-4 border-r">* ENCOUNTER: </p>
      <p className="px-3 py-1 col-start-4 col-end-8 border-r">sdsa</p>
      <p className="px-3 py-1 col-start-8 col-end-9 border-r text-center">OR</p>
      <p className="px-3 py-1 col-start-9 col-end-13">sdsa</p>

      </div>
      <div className=" grid grid-cols-12 divide-black divide-x">
      <p className="px-3 py-1 col-start-1 col-end-4 border-r">* SERVICE: </p>
      <p className="px-3 py-1 col-start-4 col-end-8 border-r">sdsa</p>
      <p className="px-3 py-1 col-start-8 col-end-9 border-r text-center">OR</p>
      <p className="px-3 py-1 col-start-9 col-end-13">sdsa</p>

      </div>
      <div className=" grid grid-cols-1 gap-y-3 items-start px-3 py-3">
        <p>* START TIME: {event.eventstarttime} </p>
        <p>* START TIME: {event.eventfinishtime} </p>
      </div>
      <div className="grid grid-cols-2 divide-black divide-x">
            <div className="border-r px-3 py-3 grid gap-y-3">
                <p className="">* LOCATION: *CDC SETTING TYPE:</p>

            </div>
            <div className="px-3 py-3 grid gap-y-3">
            <p >* SESSION PRESENTED BY: </p>
            <label>
              <input type="checkbox" defaultChecked={event.sessionpresenter === "Staff"? "checked" : ""} className="pinter-events-none mr-5"/>    
              STAFF
            </label>
            
            <label>
              <input type="checkbox" defaultChecked={event.sessionpresenter === "Guest professional"? "checked" : ""} className="pinter-events-none mr-5"/>    
              GUEST PROFESSIONAL
            </label>
            </div>
      </div>
      <div className=" grid grid-cols-2 divide-black divide-x">
        <div className="border-r grid grid-cols-1 gap-y-3 items-start px-3 py-3">
        <p className="italic">Organization:</p>
        <p className="">* ZIP CODE: {event.zipcode}</p>
        <p className="italic">Additional Zip codes covered: {event.additionalzipcodes}</p>
        </div>
        <div className="grid grid-cols-1 gap-y-3 items-start px-3 py-3">
        <p className="italic">Session staffed by:</p>
        <p className="">* STAFF: {event.staffpresentnames}</p>

        </div>
      </div>
    </section>
  );
};

export default AirsEventSession;
