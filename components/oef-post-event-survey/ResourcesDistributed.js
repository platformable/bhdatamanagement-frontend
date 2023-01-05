import React from 'react';
//import { resourcesDistributed } from '../../utils/sharedData';

const PostEventReportSection8 = ({eventForm,setEventForm, isNumberKey}) => {



  const resourcesDistributed = [
    {
      id: 2,
      source: "/post_Event_report/COVID_literature_icon.svg",
      name: "HIV literature",
      dataFieldName: "hivLiterature",
    },
    {
      id: 3,
      source: "/post_Event_report/COVID_literature_icon.svg",
      name: "HepC literature",
      dataFieldName: "hepCLiterature",
    },
    {
      id: 4,
      source: "/post_Event_report/COVID_literature_icon.svg",
      name: "PrEP literature",
      dataFieldName: "prepLiterature",
    },
    {
      id: 1,
      source: "/post_Event_report/safer_sex_kit_icon.svg",
      name: "Safer sex kits",
      dataFieldName: "saferSexKits",
    },
    {
      id: 5,
      source: "/post_Event_report/COVID_literature_icon.svg",
      name: "Health disparities literature",
      dataFieldName: "healthDisparitiesLiterature",
    },

  { id:9,
      source: "/post_Event_report/bags_boxes_of_food_icon.svg",
      name:"Bags/boxes of food",
      dataFieldName:"bagsBoxesFood"
    },

    {
      id: 6,
      source: "/post_Event_report/mask_icon.svg",
      name: "Masks",
      dataFieldName: "masks",
    },
    {
      id: 9,
      source: "/post_Event_report/hand_sanitizers_icon.svg",
      name: "Hand sanitizers",
      dataFieldName: "handSanitizers",
    },

    {
      id: 7,
      source: "/post_Event_report/COVID_literature_icon.svg",
      name: "COVID literature",
      dataFieldName: "covidLiterature",
    },
    
    { id:14,
      source: "/post_Event_report/COVID_site_referral_icon.svg",
      name:"COVID vaccine site referral information/details",
      dataFieldName:"covidVaccineSiteReferralDetails"
    },
  ];







const handleForm = (e) => {
  let {value} = e.target
    let finalValue;
    value > 500 ? finalValue = 500:finalValue=value
    setEventForm((previous) => ({
      ...previous,
      [e.target.name]:Number(finalValue)
    }))
}
  return (
    <div className="question-body">
      <h2 className="font-black">
        Resources Distributed:
      </h2>
      <div className="mt-7 grid grid-cols-1 text-lg gap-7">
        {resourcesDistributed &&
          resourcesDistributed.map((resource, index) => (
            <div className='grid grid-cols-1 gap-2'>{resource.name}
            <label className="" key={index}>
              {/* <img src={resource.source} alt={`${resource.name} icon`} className="w-8 h-8 md:w-12 md:h-12"/> */}
              <input
                type="number"
                name={resource.dataFieldName}
                className=" w-20 p-4 border-black rounded"
                id={index}
                defaultValue={0 || eventForm[resource.dataFieldName]}
                onChange={handleForm}
                onKeyUp={(e) => {
                  let {value} = e.target
                  value > 500 && (e.target.value = 500) 
                }}
                onKeyDown={isNumberKey}

                
              />
              
            </label>
            </div>
          ))}
      </div>
    </div>
  )
}

export default PostEventReportSection8