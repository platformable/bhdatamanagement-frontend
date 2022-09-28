import React from "react";

const AirsMaterials = ({ event }) => {
    let {covidliterature , vaccinerelatedliterature  , hivliterature , hepcliterature ,
         prepliterature , healthdisparitiesliterature,dentaldam,promotionalmaterial,
         eventhighlights,eventchallenges
        
        } = event
    const literature = covidliterature + vaccinerelatedliterature  + hivliterature + hepcliterature + prepliterature + healthdisparitiesliterature
  return (
    <div>
        <p className="text-center italic my-1">Materials Provided:</p>
      <div className="grid grid-cols-3 gap-x-1 border-t-black border-b-black">
        <div className="p-5 grid grid-cols-2 items-center ">
          <p className="w-20 underline italic">Type</p>
          <p className="w-20 underline italic">Quantity</p>
          <label className=" my-1 italic ">
            <input type="checkbox" className="pointer-events-none mr-5 " />
            100 MaleCondoms
          </label>
          <p className="ml-10">{event.malecondoms}</p>

          <label className=" my-1 italic ">
            <input type="checkbox" className="pointer-events-none mr-5 " />
            205 Safer Sex Kits
          </label>
          <p className="ml-10">{event?.safersexkits}</p>
          <label className="my-1 italic ">
            <input type="checkbox" className="pointer-events-none mr-5 " />
            460 Female Condoms
          </label>
          <p className="ml-10">{event.femalecondoms}</p>
        </div>
        <div className="p-5 grid grid-cols-2 items-center ">
          <p className="w-20 underline italic">Type</p>
          <p className="w-20 underline italic">Quantity</p>
          <label className=" my-1 italic ">
            <input type="checkbox" className="pointer-events-none mr-5 " />
            220 Lubricant
          </label>
          <p className="ml-10">{event.lubricant}</p>

          <label className=" my-1 italic ">
            <input type="checkbox" className="pointer-events-none mr-5 " />
            260 ReferralLists
          </label>
          <p className="ml-10">{event.referrallists}</p>
          <label className="my-1 italic ">
            <input type="checkbox" className="pointer-events-none mr-5 " />
            300 Literature
          </label>
          <p className="ml-10">{literature}</p>
        </div>

        <div className="p-5 grid grid-cols-2 items-center ">
          <p className="w-20 underline italic">Type</p>
          <p className="w-20 underline italic">Quantity</p>
          <label className=" my-1 italic ">
            <input type="checkbox" className="pointer-events-none mr-5 " />
            470 Dental Dam 
          </label>
          <p className="ml-10">{dentaldam}</p>

          <label className=" my-1 italic ">
            <input type="checkbox" className="pointer-events-none mr-5 " />
            PromotionalMaterials
          </label>
          <p className="ml-10">{promotionalmaterial}</p>
 
        </div>
      </div>

    
      <h2 className="font-black  p-5">Notes</h2>
    
    <div className="p-5">  <p>{eventhighlights}</p>
      <p>{eventchallenges}</p>
      </div>
    </div>
  );
};

export default AirsMaterials;
