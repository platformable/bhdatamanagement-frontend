import React from "react";

const AirsMaterials = ({ event }) => {
    let {covidliterature , vaccinerelatedliterature  , hivliterature , hepcliterature ,
         prepliterature , healthdisparitiesliterature,dentaldam,promotionalmaterial,
         eventhighlights,eventchallenges
        
        } = event
    const literature = covidliterature + vaccinerelatedliterature  + hivliterature + hepcliterature + prepliterature + healthdisparitiesliterature
  return (
    <div className="mx-5 divide-y divide-black border-t-0 border-b border-b-black border-x border-x-black">
      <div className="grid grid-cols-3 gap-x-1 ">
        <p className="text-center col-start-1 col-end-4 italic my-1 text-xxs">MATERIALS PROVIDED:</p>

        <div className="px-3 py-2 grid grid-cols-2 items-center ">
          <p className="w-20 underline italic text-xs">Type</p>
          <p className="w-20 underline italic text-xs">Quantity</p>
          <label className="text-xxs my-1 italic ">
            {/* <input type="checkbox" className="pointer-events-none mr-5 " /> */}
            100 MaleCondoms
          </label>
          <p className="ml-10 text-xs">{event.malecondoms}</p>

          <label className="text-xxs my-1 italic ">
            {/* <input type="checkbox" className="pointer-events-none mr-5 " /> */}
            205 Safer Sex Kits
          </label>
          <p className="ml-10 text-xs">{event?.safersexkits}</p>
          <label className="text-xxs my-1 italic ">
            {/* <input type="checkbox" className="pointer-events-none mr-5 " /> */}
            460 Female Condoms
          </label>
          <p className="ml-10 text-xs">{event.femalecondoms}</p>
        </div>
        <div className="px-3 py-2 grid grid-cols-2 items-center ">
          <p className="w-20 underline italic text-xs">Type</p>
          <p className="w-20 underline italic text-xs">Quantity</p>
          <label className="text-xxs my-1 italic ">
            {/* <input type="checkbox" className="pointer-events-none mr-5 " /> */}
            220 Lubricant
          </label>
          <p className="ml-10 text-xs">{event.lubricant}</p>

          <label className="text-xxs my-1 italic ">
            {/* <input type="checkbox" className="pointer-events-none mr-5 " /> */}
            260 ReferralLists
          </label>
          <p className="ml-10 text-xs">{event.referrallists}</p>
          <label className="text-xxs my-1 italic ">
            {/* <input type="checkbox" className="pointer-events-none mr-5 " /> */}
            300 Literature
          </label>
          <p className="ml-10 text-xs">{literature}</p>
        </div>

        <div className="px-3 py-2 grid grid-cols-2 items-center ">
          <p className="w-20 underline italic text-xs">Type</p>
          <p className="w-20 underline italic text-xs">Quantity</p>
          <label className="text-xxs my-1 italic ">
            {/* <input type="checkbox" className="pointer-events-none mr-5 " /> */}
            470 Dental Dam 
          </label>
          <p className="ml-10 text-xs">{dentaldam}</p>

          <label className="text-xxs my-1 italic ">
            {/* <input type="checkbox" className="pointer-events-none mr-5 " /> */}
            PromotionalMaterials
          </label>
          <p className="ml-10 text-xs">{promotionalmaterial}</p>
 
        </div>
      </div>

    
      <p className="px-3 py-1 text-xs">Notes:</p>
    
    <div className="px-3 py-1"> 
      <p className="text-xxs">{eventhighlights}</p>
      <p className="text-xxs">{eventchallenges}</p>
      </div>
    </div>
  );
};

export default AirsMaterials;
