import React from 'react'
import ResourcesDistributedChart from "./ResourcesDistributedChart";


const ResourcesSection = ({selectedEvents, selectedEventsOutputs, getHrefImage}) => {
  return (
    <ResourcesDistributedChart getHrefImage={getHrefImage} chartData={selectedEventsOutputs}/> 

  )
}

export default ResourcesSection