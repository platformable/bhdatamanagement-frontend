import React, { useEffect, useState} from "react";
import { CSVLink } from "react-csv";
const orderDataset = (data) => {
  const reverseDate = (date) => {
    const splitted = new Date(date).toISOString().split("T")
    const reverse = splitted[0].split('-');
    const result=reverse[1]+'/'+reverse[2]+'/'+reverse[0];
    return result;
  }
  return [
    data.id,
    data.surveyname,
    data.programid,
    data.programname,
    data.eventdate,
    data.deliverypartner,
    data.participantzipcode,
    data.ageid,
    data.participantagerange,
    data.raceid,
    data.participantrace,
    data.participantraceother,
    data.ethnicityid,
    data.participantethnicity,
    data.participantethnicityother,
    data.genderid,
    data.participantgender,
    data.orientationid,
    data.participantorientation,
    data.participantorientationother,
    data.participantreferral,
    data.participantreferralother,
    data.participantsuggestions,
  ]
};

const CSVHIVOutreachParticipantSignInSheet = ({ csvData, fileName}) => {
//   console.log("csv data",csvData)
  const [orderedData, setOrdereData] = useState([]);
  const headers = [
    "id",
    "surveyname",
    "programId",
    "programName",
    "eventDate",
    "deliveryPartner",
    "participantZipCode",
    "ageId",
    "participantAgeRange",
    "raceId",
    "participantRace",
    "participantRaceOther",
    "ethnicityId",
    "participantEthnicity",
    "participantEthnicityOther",
    "genderId",
    "participantGender",
    "orientationId",
    "participantOrientation",
    "participantOrientationOther",
    "participantReferral",
    "participantReferralOther",
    "participantSuggestions",
  ]
  useEffect(() => {
    const data = csvData.map((dataset) => orderDataset(dataset));
    setOrdereData(data);
  }, [csvData]);

  return (
    //use ";" as separator for testing 
    <CSVLink headers={headers} data={orderedData} filename={fileName} separator=",">
      <button  className="text-2xl text-white bg-black rounded shadow-xl p-5 w-full md:w-52 h-full uppercase">
      Download <br/> dataset
      </button>
    </CSVLink>
  );
};

export default CSVHIVOutreachParticipantSignInSheet;
