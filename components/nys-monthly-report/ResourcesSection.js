import React, {useState, useEffect} from 'react'
import ResourcesDistributedChart from "./ResourcesDistributedChart";


const ResourcesSection = ({selectedEvents, selectedEventsOutputs, getHrefImage}) => {
  const [stadistics, setStadistics] = useState([])
  
  const resourcesCounts = {
    "Safer sex kits": 0,
    "HIV literature": 0,
    "HepC literature": 0,
    "PrEP literature": 0,
    "Health disparities literature": 0,
    "Masks": 0,
    "COVID literature": 0,
    "Vaccine related literature": 0,
    "Hand sanitizers": 0,
    "Male condoms": 0,
    "Female condoms": 0,
    "Lubricant": 0,
    "Referral lists": 0,
    "Dental dams": 0,
    "Promotional materials": 0,
  };

  useEffect(() => {
    const resourcesCountsResults = selectedEventsOutputs?.map(event => { 
      resourcesCounts["Safer sex kits"] = resourcesCounts["Safer sex kits"] + event?.safersexkits
      resourcesCounts["HIV literature"] = resourcesCounts["HIV literature"] + event?.hivliterature
      resourcesCounts["HepC literature"] = resourcesCounts["HepC literature"] + event?.hepcliterature
      resourcesCounts["PrEP literature"] = resourcesCounts["HepC literature"] + event?.prepliterature
      resourcesCounts["Health disparities literature"] =resourcesCounts["Health disparities literature"] + event?.healthdisparitiesliterature
      resourcesCounts["Masks"] = resourcesCounts["Masks"] + event?.masks
      resourcesCounts["COVID literature"] = resourcesCounts["COVID literature"] + event?.covidliterature
      resourcesCounts["Vaccine related literature"] =resourcesCounts["Vaccine related literature"] + event?.vaccinerelatedliterature
      resourcesCounts["Hand sanitizers"] =resourcesCounts["Hand sanitizers"] + event?.handsanitizers
      resourcesCounts["Male condoms"] = resourcesCounts["Male condoms"] + event?.malecondoms
      resourcesCounts["Female condoms"] =resourcesCounts["Female condoms"] + event?.femalecondoms
      resourcesCounts["Lubricant"] = resourcesCounts["Lubricant"] + event?.lubricant
      resourcesCounts["Referral lists"] =resourcesCounts["Referral lists"] + event?.referrallists
      resourcesCounts["Dental dams"] = resourcesCounts["Dental dams"] + event?.dentaldam
      resourcesCounts["Promotional materials"] = resourcesCounts["Promotional materials"] + event?.promotionalmaterial
     })
    setStadistics(resourcesCounts)
  }, [selectedEventsOutputs]);
  return (
    <div className='grid gap-7'>
      <ResourcesDistributedChart getHrefImage={getHrefImage} chartData={stadistics}/> 
      <div className='flex flex-col gap-5 items-center'>
        <table className='text-lg w-2/5 '>
        <thead>
          <tr>
            <th className='px-3'>Promotional Item</th>
            <th className='px-3'>Month</th>
          </tr>
        </thead>
        <tbody>
          {stadistics && Object.entries(stadistics).map(([key, value, index]) => (
            <tr key={index} className={`${index % 2 === 0 ? "bg-white" : "bg-light-blue"}`}>
              <td>{key}</td>
              <td>{value}</td>
            </tr>
          ))}
        </tbody>
        </table>
        <button
            className="px-5 py-2 text-lg border hover:bg-black hover:text-white rounded shadow"
          >
            Copy to clipboard
          </button>
      </div>
    </div>
  )
}

export default ResourcesSection