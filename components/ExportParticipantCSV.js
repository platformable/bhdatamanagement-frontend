import React, { useEffect, useState } from "react";
import { CSVLink } from "react-csv";
const orderDataset = (data) => {
  const reverseDate = (date) => {
    const splitted = new Date(date).toISOString().split("T")
    const reverse = splitted[0].split('-');
    const result=reverse[1]+'/'+reverse[2]+'/'+reverse[0];
    return result;
  }
  return [
    data.programname,
    data.eventid,
    data.eventname,
    reverseDate(data.eventdate),
    data.participantzipcode,
    data.participantborough,
    data.ageid,
    data.participantagerange,
    data.raceid,
    data.participantrace,
    data.ethnicityid,
    data.participantethnicity,
    data.genderid,
    data.participantgender,
    data.orientationid,
    data.participantorientation,
    data.participantreferral,
    data.participanthivknowledge,
    data.participantprepknowledge,
    data.participantpepknowledge,
    data.participantuknowledge,
    data.participanttestresourceknowledge,
    data.participantprepresourceknowledge,
    data.participantsuggestions,
    data.educationid,
    data.participanteducation,
    data.employmentid,
    data.participantemployment,
    data.livingid,
    data.participantliving,
    data.housingid,
    data.participanthousing,
    data.participantfoodinsecurity1,
    data.insuranceid,
    data.participantinsurance,
    data.participanthealth,
    data.participantpcp,
    data.participantroutine,
    data.participantcomfortsex,
    data.participantcomfortmentalhealth,
    data.participantcomfortdiet,
    data.participantcomfortexercise,
    data.participantcomforthealth,
    data.participantcomfortmedications,
    data.participantcomfortscreens,
    data.participantcomfortsubstances,
    data.participantphq2a,
    data.participantphq2b,
    data.interesthiv,
    data.interestprep,
    data.interesthepc,
    data.interestimmigration,
    data.interestscreens,
    data.interestvaccines,
    data.interestmentalhealth,
    data.interestsubstance,
    data.interestchronic,
    data.interestother,
    data.participantvote,
  ]
};

const ExportPaticipantCSV = ({ csvData, fileName }) => {
  console.log("csv data",csvData)
  const [orderedData, setOrdereData] = useState([]);
  const headers = [
    "programID",
    "eventID",
    "eventName",
    "eventDate",
    "participantZipCode",
    "participantBorough",
    "ageID",
    "participantAgeRange",
    "raceID",
    "participantRace",
    "ethnicityID",
    "participantEthnicity",
    "genderID",
    "participantGender",
    "orientationID",
    "participantOrientation",
    "participantReferral",
    "participantHIVKnowledge",
    "participantPrEPKnowledge",
    "participantPEPKnowledge",
    "participantUKnowledge",
    "participantTestResourceKnowledge",
    "participantPRePResourceKnowledge",
    "participantSuggestions",
    "educationID",
    "participantEducation",
    "employmentID",
    "participantEmployment",
    "livingID",
    "participantLiving",
    "housingID",
    "participantHousing",
    "participantFoodInsecurity1",
    "insuranceID",
    "participantInsurance",
    "participantHealth",
    "participantPCP",
    "participantRoutine",
    "participantComfortSex",
    "participantComfortMentalHealth",
    "participantComfortDiet",
    "participantComfortExercise",
    "participantComfortHealth",
    "participantComfortMedications",
    "participantComfortScreens",
    "participantComfortSubstances",
    "participantPHQ2a",
    "participantPHQ2b",
    "interestHIV",
    "interestPrEP",
    "interestHepC",
    "interestImmigration",
    "interestScreens",
    "interestVaccines",
    "interestMentalHealth",
    "interestSubstance",
    "interestChronic",
    "interestOther",
    "participantVote"
  ]
  useEffect(() => {
    const data = csvData.map((dataset) => orderDataset(dataset));
    // console.log("selected", csvData);
    setOrdereData(data);
  }, [csvData]);

  return (
    //use ";" as separator for testing 
    <CSVLink headers={headers} data={orderedData} filename={fileName} separator=",">
      <button className="uppercase text-2xl text-white bg-black rounded shadow-xl p-5 w-full md:w-52 h-full">
      Download participant surveys dataset
      </button>
    </CSVLink>
  );
};

export default ExportPaticipantCSV;
