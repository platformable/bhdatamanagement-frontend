import React, {useState} from 'react'
import TypeOfEventChart from "./TypeOfEventChart";
import EventLocationChart from "./EventLocationChart";

const PrioritiesSection = ({selectedEvents, selectedEventsOutputs, getHrefImage}) => {
    

  return (
    <div className="grid grid-cols-1">
        <TypeOfEventChart getHrefImage={getHrefImage} chartData={selectedEvents} />
        <EventLocationChart getHrefImage={getHrefImage} chartData={selectedEvents}/>
        
    </div>
  )
}

export default PrioritiesSection