import React from "react";

const AirsMaterials = ({ event }) => {
    let {covidliterature , vaccinerelatedliterature  , hivliterature , hepcliterature ,
         prepliterature , healthdisparitiesliterature,dentaldam,promotionalmaterial,
         eventhighlights,eventchallenges
        } = event
    
    
    const literature = covidliterature + vaccinerelatedliterature  + hivliterature + hepcliterature + prepliterature + healthdisparitiesliterature
    console.log("literature",literature)
  return (
    <div className="mx-5 divide-y divide-black border-t-0 border-b border-b-black border-x border-x-black">
      <div className="grid grid-cols-3 gap-x-1 ">
        <p className="text-bold text-center col-start-1 col-end-4 italic my-1 text-xxs">MATERIALS PROVIDED:</p>

        <div className="px-3 py-2 grid grid-cols-2 items-center ">
          <p className="w-20 underline italic text-xs">Type</p>
          <p className="w-20 underline italic text-xs">Quantity</p>
          <label className="text-xxs my-1 italic ">
            <input type="checkbox" className="checkbox-normal-size pointer-events-none mr-2 " defaultChecked={event?.malecondoms !== 0 ? "checked" : ""}/>
            100 MaleCondoms
          </label>
          <p className=" text-xs">{event.malecondoms}</p>

          <label className="text-xxs my-1 italic ">
            <input type="checkbox" className="checkbox-normal-size pointer-events-none mr-2 " defaultChecked={event?.safersexkits !== 0 ? "checked" : ""} />
            205 Safer Sex Kits
          </label>
          <p className=" text-xs">{event?.safersexkits}</p>
          <label className="text-xxs my-1 italic ">
            <input type="checkbox" className="checkbox-normal-size pointer-events-none mr-2 " defaultChecked={event?.femalecondoms !== 0 ? "checked" : ""}/>
            460 Female Condoms
          </label>
          <p className=" text-xs">{event.femalecondoms}</p>
        </div>
        <div className="px-3 py-2 grid grid-cols-2 items-center ">
          <p className="w-20 underline italic text-xs">Type</p>
          <p className="w-20 underline italic text-xs">Quantity</p>
          <label className="text-xxs my-1 italic ">
            <input type="checkbox" className="checkbox-normal-size pointer-events-none mr-2 " defaultChecked={event?.lubricant !== 0 ? "checked" : ""} />
            220 Lubricant
          </label>
          <p className=" text-xs">{event.lubricant}</p>

          <label className="text-xxs my-1 italic ">
            <input type="checkbox" className="checkbox-normal-size pointer-events-none mr-2 " defaultChecked={event?.referrallists !== 0 ? "checked" : ""}/>
            260 ReferralLists
          </label>
          <p className=" text-xs">{event.referrallists}</p>
          <label className="text-xxs my-1 italic ">
            <input type="checkbox" className="checkbox-normal-size pointer-events-none mr-2 " defaultChecked={literature !== 0 ? "checked" : ""}/>
            300 Literature
          </label>
          <p className=" text-xs">{literature}</p>
        </div>

        <div className="px-3 py-2 grid grid-cols-2 grid-rows-4 items-center ">
          <p className="w-20 underline italic text-xs">Type</p>
          <p className="w-20 underline italic text-xs">Quantity</p>
          <label className="text-xxs my-1 italic ">
            <input type="checkbox" className="checkbox-normal-size pointer-events-none mr-2 " checked={event?.dentaldam !== 0 ? "checked" : ""}/>
            470 Dental Dam 
          </label>
          <p className=" text-xs">{dentaldam}</p>

          <label className="text-xxs my-1 italic ">
            <input type="checkbox" className="checkbox-normal-size pointer-events-none mr-2 " checked={event?.promotionalmaterial !== 0 ? "checked" : ""}/>
            PromotionalMaterials
          </label>
          <p className=" text-xs">{promotionalmaterial}</p>
 
        </div>
      </div>

    
    
    <div className="px-3 py-1"> 
    <p className="mb-1 text-xs underline">Notes</p>

      <p className="text-xxs ">{eventhighlights} </p>
      <p className="text-xxs whitespace-pre-wrap">{eventchallenges} </p>
      </div>
    </div>
  );
};

export default AirsMaterials;
