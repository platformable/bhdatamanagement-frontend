import React from 'react'
import GenderIdentityChart from "./GenderIdentityChart";
import AgeChart from "./AgeChart";
import RaceChart from "./RaceChart";
import SexualOrientationChart from "./SexualOrientationChart";
const CommunitySection = ({selectedEvents, selectedEventsOutputs, getHrefImage}) => {
  return (
    <>
        <GenderIdentityChart getHrefImage={getHrefImage} chartData={selectedEventsOutputs}/>
        <AgeChart getHrefImage={getHrefImage} chartData={selectedEventsOutputs}/>
        <RaceChart getHrefImage={getHrefImage} chartData={selectedEventsOutputs}/>
        <SexualOrientationChart getHrefImage={getHrefImage} chartData={selectedEventsOutputs}/>
    </>
  )
}

export default CommunitySection