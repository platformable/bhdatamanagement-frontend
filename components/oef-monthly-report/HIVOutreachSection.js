import React, { useState, useEffect } from "react";
import Event from "../nys-monthly-report/GenderIdentityChart";
import AgeChart from "../nys-monthly-report/AgeChart";
import RaceChart from "../nys-monthly-report/RaceChart";
import SexualOrientationChart from "../nys-monthly-report/SexualOrientationChart";
import VerticalBarChart from "./VerticalBarChart";

const HIVOutreachSection = ({
  selectedEvents,
  selectedEventsOutputs,
  getHrefImage,
  selectedDate,
}) => {

  console.log("selectedEventsOuput",selectedEvents.filter((event) => event._surveyname === "bh-cbt-register")) 


  function handleCopy() {
    const data = document.querySelector("#events-description").innerText;
    console.log("data", data);
    navigator.clipboard.writeText(data);
  }

  /* total hiv outreach events total surveyName = oef-fbo-outreach */
  const totalNumberOfParticipantsSurveys = selectedEventsOutputs.filter(events=>events.surveyname==='oef-participant').length

 
  const sumHivOutreachEvents =  selectedEvents.forEach((element) => {
    let totalHivOutreachEvents = 0;
    if (element.totalattendees === "oef-fbo-outreach") {
      totalHivOutreachEvents += 1;
    }
 return  totalHivOutreachEvents 
  });


  console.log("sumHivOutreachEvents",sumHivOutreachEvents)

  /* totalAttendees */

  let totalAttendees = 0;
  const sumTotalAttendees = selectedEvents.forEach((element) => {
    if (element.totalattendees === 0) {
      return null;
    } else {
      totalAttendees += element.totalattendees;
    }
  });

  let totalTalkedHivPrepSaferSex = 0;
  const sumtotalTalkedHivPrepSaferSex = selectedEvents.forEach((element) => {
    if (element.totaltalkedhivprepsafersex === 0) {
      return null;
    } else {
      totalTalkedHivPrepSaferSex += element.totaltalkedhivprepsafersex;
    }
  });

  let hivTesting = 0;
  const sumHivTesting = selectedEvents.forEach((element) => {
    if (!element.hivtesting) {
      return null;
    } else {
      hivTesting += 1;
    }
  });

  let hepCTesting = 0;
  const sumHepCTesting = selectedEvents.forEach((element) => {
    if (element.hepCTesting === 0) {
      return null;
    } else {
      hepCTesting += element.hepctesting;
    }
  });

  let hivTestedTotal = 0;
  const sumhivTestedTotal = selectedEvents.forEach((element) => {
    if (element.hivtestedtotal === 0) {
      return null;
    } else {
      hivTestedTotal += element.hivtestedtotal;
    }
  });

  let hivReactiveResults = 0;
  const sumhivReactiveResults = selectedEvents.forEach((element) => {
    if (element.hivreactiveresults === 0) {
      return null;
    } else {
      hivReactiveResults += element.hivreactiveresults;
    }
  });

  let prepReferrals = 0;
  const sumhprepReferrals = selectedEvents.forEach((element) => {
    if (element.prepreferrals === 0) {
      return null;
    } else {
      prepReferrals += element.prepreferrals;
    }
  });

  let hivLinkedToCare = 0;
  const sumhivLinkedToCare = selectedEvents.forEach((element) => {
    if (element.hivlinkedtocare === 0) {
      return null;
    } else {
      hivLinkedToCare += element.hivlinkedtocare;
    }
  });

  let totalHivAge = 0;
  const sumhivage = selectedEvents.forEach((element) => {
    totalHivAge +=
      element.altagehivunder13 +
      element.altagehiv13_18 +
      element.altagehiv19_24 +
      element.hiv25_29 +
      element.hiv30_34 +
      element.hiv35_39 +
      element.hiv40_44;
  });



  let totalHivAge2 = 0;
  const sumhivage2 = selectedEvents.forEach((element) => {
    totalHivAge2 +=
      element.hiv45_49 +
      element.hiv50_54 +
      element.hiv55_59 +
      element.hiv60_64 +
      element.hiv65_69 +
      element.hiv70;
  });

  const totalAges=totalHivAge+totalHivAge2

  const percentageHivAge = (
    (totalHivAge / totalAges)*100
  ).toFixed(1);

  const percentageHivAg2e = (
    (totalHivAge2 / totalAges)*100
  ).toFixed(1);

  /* GENDER */

  const [totalFemalesMales,setTotalFemalesMales]=useState({
    females:"",
    males:""
  })

  const getTotalFemales = () => {
    let totalFemales = selectedEventsOutputs.filter(
      (event) =>
        event.participantgender === "Female" &&
        event.surveyname === "oef-participant"
    ).length;

    const getOefParticipantData = selectedEventsOutputs.filter(
      (event) => event.surveyname === "oef-participant"
    );
    const totalOefParticipants = getOefParticipantData.length;
    const total = totalFemales / totalOefParticipants;
   
    return total.toFixed(2)*100
  };

  const getTotalMales = () => {
    let totalMales = selectedEventsOutputs.filter(
      (event) =>
        event.participantgender === "Male" &&
        event.surveyname === "oef-participant"
    ).length;

    const getOefParticipantData = selectedEventsOutputs.filter(
      (event) => event.surveyname === "oef-participant"
    );
    const totalOefParticipants = getOefParticipantData.length;

    const total = totalMales / totalOefParticipants;
    return total.toFixed(2)*100
  }; 

  const getTotalTransgenderFemales = () => {
    let totalTransgenderFemales = selectedEventsOutputs.filter(
      (event) =>
        event.participantgender === "Transgender female" &&
        event.surveyname === "oef-participant"
    ).length;

    const getOefParticipantData = selectedEventsOutputs.filter(
      (event) => event.surveyname === "oef-participant"
    );
    const totalOefParticipants = getOefParticipantData.length;
    const total = totalTransgenderFemales / totalOefParticipants;
    return total.toFixed(2)*100;;
  }; 


  const getTotalTransgenderMales = () => {
    let totalTransgenderMales = selectedEventsOutputs.filter(
      (event) =>
        event.participantgender === "Transgender male" &&
        event.surveyname === "oef-participant"
    ).length;

    const getOefParticipantData = selectedEventsOutputs.filter(
      (event) => event.surveyname === "oef-participant"
    );
    const totalOefParticipants = getOefParticipantData.length;
    const total = totalTransgenderMales / totalOefParticipants;
    return total.toFixed(2)*100;;
  }; 

  const getTotalTGenederNonConfirming = () => {
    let totalGenderNonConfirming = selectedEventsOutputs.filter(
      (event) =>
        event.participantgender === "Gender non-conforming" &&
        event.surveyname === "oef-participant"
    ).length;

    const getOefParticipantData = selectedEventsOutputs.filter(
      (event) => event.surveyname === "oef-participant"
    );
    const totalOefParticipants = getOefParticipantData.length;
    const total = totalGenderNonConfirming / totalOefParticipants;
    return total.toFixed(2)*100;
  }; 

  const getTotalGenderNonBinary = () => {
    let totalNonBinary = selectedEventsOutputs.filter(
      (event) =>
        event.participantgender === "Non binary" &&
        event.surveyname === "oef-participant"
    ).length;

    const getOefParticipantData = selectedEventsOutputs.filter(
      (event) => event.surveyname === "oef-participant"
    );
    const totalOefParticipants = getOefParticipantData.length;
    const total = totalNonBinary / totalOefParticipants;
    return total.toFixed(2)*100;
  }; 

  const getTotalGenderOther = () => {
    let totalOther = selectedEventsOutputs.filter(
      (event) =>
        event.participantgender === "Other" &&
        event.surveyname === "oef-participant"
    ).length;

    const getOefParticipantData = selectedEventsOutputs.filter(
      (event) => event.surveyname === "oef-participant"
    );
    const totalOefParticipants = getOefParticipantData.length;
    const total = totalOther / totalOefParticipants;
    return total.toFixed(2)*100;;
  }; 


  const getTotalGenderDeclinedToAnswer = () => {
    let totalDeclinedToAnswer = selectedEventsOutputs.filter(
      (event) =>
        event.participantgender === "Declined to answer" &&
        event.surveyname === "oef-participant"
    ).length;

    const getOefParticipantData = selectedEventsOutputs.filter(
      (event) => event.surveyname === "oef-participant"
    );
    const totalOefParticipants = getOefParticipantData.length;
    const total = totalDeclinedToAnswer / totalOefParticipants;
    return total.toFixed(2)*100;;
  }; 


  const getTotalStraight = () => {
    let totalStraight = selectedEventsOutputs.filter(
      (event) =>
        event.participantorientation === "Straight or heterosexual" &&
        event.surveyname === "oef-participant"
    ).length;

    const getOefParticipantData = selectedEventsOutputs.filter(
      (event) => event.surveyname === "oef-participant"
    );
    const totalOefParticipants = getOefParticipantData.length;
    const total = totalStraight / totalOefParticipants;
    return total.toFixed(2)*100;
  }; 


  const getTotalGay = () => {
    let totalGay = selectedEventsOutputs.filter(
      (event) =>
        event.participantorientation === "Gay or lesbian" &&
        event.surveyname === "oef-participant"
    ).length;

    const getOefParticipantData = selectedEventsOutputs.filter(
      (event) => event.surveyname === "oef-participant"
    );
    const totalOefParticipants = getOefParticipantData.length;
    const total = totalGay / totalOefParticipants;
    return total.toFixed(2)*100;
  }; 

  const getTotalBisexual = () => {
    let totalBisexual = selectedEventsOutputs.filter(
      (event) =>
        event.participantorientation === "Bisexual" &&
        event.surveyname === "oef-participant"
    ).length;

    const getOefParticipantData = selectedEventsOutputs.filter(
      (event) => event.surveyname === "oef-participant"
    );
    const totalOefParticipants = getOefParticipantData.length;
    const total = totalBisexual / totalOefParticipants;
    return total.toFixed(2)*100;
  }; 

  const getTotalQueer = () => {
    let totalQueer = selectedEventsOutputs.filter(
      (event) =>
        event.participantorientation === "Queer" &&
        event.surveyname === "oef-participant"
    ).length;

    const getOefParticipantData = selectedEventsOutputs.filter(
      (event) => event.surveyname === "oef-participant"
    );
    const totalOefParticipants = getOefParticipantData.length;
    const total = totalQueer / totalOefParticipants;
    return total.toFixed(2)*100;
  }; 

  const getTotalQuestioning = () => {
    let totalQuestioning = selectedEventsOutputs.filter(
      (event) =>
        event.participantorientation === "Questioning or not sure" &&
        event.surveyname === "oef-participant"
    ).length;

    const getOefParticipantData = selectedEventsOutputs.filter(
      (event) => event.surveyname === "oef-participant"
    );
    const totalOefParticipants = getOefParticipantData.length;
    const total = totalQuestioning / totalOefParticipants;
    return total.toFixed(2)*100;
  }; 

  const getTotalOther = () => {
    let totalOther = selectedEventsOutputs.filter(
      (event) =>
        event.participantorientation === "Other" &&
        event.surveyname === "oef-participant"
    ).length;

    const getOefParticipantData = selectedEventsOutputs.filter(
      (event) => event.surveyname === "oef-participant"
    );
    const totalOefParticipants = getOefParticipantData.length;
    const total = totalOther / totalOefParticipants;
    return total.toFixed(2)*100;
  }; 
 
  const getTotalOrientationDeclined = () => {
    let totalOrientationDeclined = selectedEventsOutputs.filter(
      (event) =>
        event.participantorientation === "Declined to answer" &&
        event.surveyname === "oef-participant"
    ).length;

    const getOefParticipantData = selectedEventsOutputs.filter(
      (event) => event.surveyname === "oef-participant"
    );
    const totalOefParticipants = getOefParticipantData.length;
    const total = totalOrientationDeclined / totalOefParticipants;
    return total.toFixed(2)*100;
  };

  /* RACE */



  const getTotalBlack = () => {
    let totalBlack = selectedEventsOutputs.filter(event=>event.surveyname === "oef-participant" && event.participantrace.includes('Black or African American')&& event.participantrace!==null).length
    return totalBlack
  };

  const totalBlack=getTotalBlack()

  const getTotalHispanic = () => {
    let totalHispanic = selectedEventsOutputs.filter(event=>event.surveyname === "oef-participant" && event.participantrace.includes('Hispanic, Latino/a or Spanish')&& event.participantrace!==null).length
    return totalHispanic
  };

  const totalHispanic=getTotalHispanic()

  console.log("totalHispanic",totalHispanic)

  const getTotalAsian = () => {
    let totalAsian = selectedEventsOutputs.filter(event=>event.surveyname === "oef-participant" && event.participantrace.includes('Asian')&& event.participantrace!==null).length
    return totalAsian
  };
  const totalAsian= getTotalAsian()

  console.log("totalAsian",totalAsian)

  const getTotalAmerican = () => {
    let totalAmerican = selectedEventsOutputs.filter(event=>event.surveyname === "oef-participant" && event.participantrace.includes('American Indian or Alaska Native')&& event.participantrace!==null).length
    return totalAmerican
  };

  const totalAmerican=getTotalAmerican()
  console.log("totalAmerican",totalAmerican)

  const getTotalMiddleE = () => {
    let totalMiddelE = selectedEventsOutputs.filter(event=>event.surveyname === "oef-participant" && event.participantrace.includes('Middle Eastern or North African')&& event.participantrace!==null).length
    return totalMiddelE
  };

  const totalMiddleE=getTotalMiddleE()
  console.log("totalMiddleE",totalMiddleE)

  const getTotalHawaiian = () => {
    let totalHawaiian = selectedEventsOutputs.filter(event=>event.surveyname === "oef-participant" && event.participantrace.includes('Native Hawaiian or Other Pacific Islander')&& event.participantrace!==null).length
    return totalHawaiian
  };



  const totalHawaiian=getTotalHawaiian()
  console.log("totalHawaiian",totalHawaiian)

  const getTotalWhite = () => {
    let totalWhite = selectedEventsOutputs.filter(event=>event.surveyname === "oef-participant" && event.participantrace.includes('White')&& event.participantrace!==null).length
    return totalWhite
  };



  const totalWhite=getTotalWhite()
  console.log("totalWhite",totalWhite)

  const getTotalSomeOtherRace = () => {
    let totalSomeOtherRace = selectedEventsOutputs.filter(event=>event.surveyname === "oef-participant" && event.participantrace.includes('Some other race or origin')&& event.participantrace!==null).length
    return totalSomeOtherRace
  };
const totalSomeOtherRace=getTotalSomeOtherRace()
console.log("totalsomeotherrace",totalSomeOtherRace)

  const getTotalRaceDeclinedToAnswer = () => {
    let totalDeclinedToAnswer = selectedEventsOutputs.filter(event=>event.surveyname === "oef-participant" && event.participantrace.includes('Declined to answer')&& event.participantrace!==null).length
    return totalDeclinedToAnswer
  };


  const totalRaceDeclined=getTotalRaceDeclinedToAnswer()
  console.log("declined to anwswer",totalRaceDeclined)

  const totalRace=+totalBlack+totalAmerican+totalAsian+totalHawaiian+totalHispanic+totalWhite+totalSomeOtherRace+totalMiddleE+totalRaceDeclined

  const boroughs =[
    {
      id:1,value:'Bronx'
    },
    {
      id:2,value:'Brooklyn'
    },
    {
      id:3,value:'Manhattan'
    },
    {
      id:4,value:'Queens'
    },
    {
      id:5,value:'Staten Island'
    }
  ]

  const calculateBorough=(borough)=>{
    let totalBoroughs=0
    const getTotal=selectedEventsOutputs.forEach(event=>{
      if(event.participantborough===borough){
        totalBoroughs+=1
      }
    })

    return totalBoroughs
  }

  const calculateBoroughPercentage=(borough)=>{
    const totalOefParticipantsSurveys=selectedEventsOutputs.filter(event=>event.surveyname==='oef-participant').length
    let totalBoroughs=0
    const getTotal=selectedEventsOutputs.forEach(event=>{
      if(event.participantborough===borough){
        totalBoroughs+=1
      }
    })

    return (totalBoroughs/totalOefParticipantsSurveys)*100
  }
  const getAgesSumPerValueName = (nameOfDataPoint) => {
    let total = 0;
    selectedEvents.forEach((event) => {
      if (event[nameOfDataPoint] !=='' && event[nameOfDataPoint] !==null) total+=event[nameOfDataPoint]})
    return total
  };


  const ageAxisDataForChart=[
    {id:1,name:'Under 13',value:getAgesSumPerValueName('altagehiv13_18'),dataPoint:'altagehiv13_18'},  
    {id:2,name:'13_18 ',value:getAgesSumPerValueName('altagehivunder13'),dataPoint:'altagehivunder13'},
    {id:3,name:'16_19',value:getAgesSumPerValueName('hiv16_19'),dataPoint:'hiv16_19'},
    {id:4,name:'20_24',value:getAgesSumPerValueName('hiv20_24'),dataPoint:'hiv20_24'},
    {id:5,name:'25_29',value:getAgesSumPerValueName('hiv25_29'),dataPoint:'hiv25_29'},
    {id:6,name:'30_34',value:getAgesSumPerValueName('hiv30_34'),dataPoint:'hiv30_34'},
    {id:7,name:'35_39',value:getAgesSumPerValueName('hiv35_39'),dataPoint:'hiv35_39'},	
    {id:8,name:'40_44',value:getAgesSumPerValueName('hiv40_44'),dataPoint:'hiv40_44'},
    {id:9,name:'45_49',value:getAgesSumPerValueName('hiv45_49'),dataPoint:'hiv45_49'},
    {id:10,name:'50_54',value:getAgesSumPerValueName('hiv50_54'),dataPoint:'hiv50_54'},
    {id:11,name:'55_59',value:getAgesSumPerValueName('hiv55_59'),dataPoint:'hiv55_59'},
    {id:12,name:'60_64',value:getAgesSumPerValueName('hiv60_64'),dataPoint:'hiv60_64'},
    {id:13,name:'65_69',value:getAgesSumPerValueName('hiv65_69'),dataPoint:'hiv65_69'},
    {id:14,name:'+70',value:getAgesSumPerValueName('hiv70'),dataPoint:'hiv70'}
  ]


  const dataValuesForGenderChart=[
   {id:1,value:getTotalFemales(),name:"Female"},
   {id:2,value:getTotalMales(),name:"Male"},
   {id:3,value:getTotalTransgenderFemales(),name:"Transgender female"},
   {id:4,value:getTotalTransgenderMales(),name:"Transgender male"},
   {id:5,value:getTotalTGenederNonConfirming(),name:"Gender non-confirming"},
   {id:6,value:getTotalGenderNonBinary(),name:"Non binary"},
   {id:7,value:getTotalGenderOther(),name:"Declined to answer"} 
  ]

  const dataValuesForSexualOrientation=[
    {id:1,value:getTotalStraight(),name:"Straight or heterosexual"},
    {id:2,value:getTotalGay(),name:"Gay or lesbian"},
    {id:3,value:getTotalBisexual(),name:"Bisexual"},
    {id:4,value:getTotalQueer(),name:"Queer"},
    {id:5,value:getTotalQuestioning,name:"Questioning or not sure"},
    {id:6,value:getTotalOther(),name:"Other"},
    {id:7,value:getTotalOrientationDeclined(),name:"Declined to answer"}
  ]

  const dataValuesForSRacialIdentity=[
    {id:1,value:getTotalBlack(),name:"Black or African American"},
    {id:2,value:getTotalHispanic(),name:"Hispanic, Latino/a or Spanish"},
    {id:3,value:getTotalAsian(),name:"Asian"},
    {id:3,value:getTotalAmerican(),name:"American"},
    {id:4,value:getTotalMiddleE(),name:"American Indian or Alaska Native"},
    {id:5,value:getTotalHawaiian,name:"Native Hawaiian or Other Pacific Islander"},
    {id:7,value:getTotalWhite(),name:"White"},
    {id:6,value:getTotalSomeOtherRace(),name:"Some other race or origin"},
    {id:6,value:getTotalRaceDeclinedToAnswer(),name:"Declinded to asnwer"},
    
  ]



  return (
    <section>
      <h1 className="text-black mb-7 bg-red-500 text-white py-2 px-3">HIV Outreach Events</h1>
      <div className="grid grid-cols-1 gap-10">
        <p>{`A total of ${selectedEvents.length} outreach events took place in [manually nsert month here], reaching a total of ${totalAttendees} people. There were ${totalNumberOfParticipantsSurveys} participant sign-in sheets completed. It was reported that ${totalTalkedHivPrepSaferSex} participants received verbal and educational information about HIV, PrEP, and safer sex messages. ${hivTesting} events offered HIV testing and this month there was ${hepCTesting} event with Hep-C testing. A total of ${hivTestedTotal} people were tested for HIV, with ${hivReactiveResults}  reactive results. ${prepReferrals}  people was referred to PrEP services and ${hivLinkedToCare} people were linked to HIV Care services.`}</p>

        <p>
          {" "}
          <strong>Age:</strong>
          {` The participants’ ages ranged from 16 to 70+ years, as shown in Figure 1. ${percentageHivAge}% of the participants were aged 45 or over, this is [manual calculation: X% lower/higher than in previous month year]. This month ${percentageHivAg2e}% of participants were under 44.`}{" "}
        </p>
      </div>
      <br />
        <VerticalBarChart selectedDate={selectedDate} chartTitle='Age of Participants - HIV Outreach events' axisXLabels={ageAxisDataForChart} chartDataValues={ageAxisDataForChart.map(data=>data.value)}/>

    
      <br />
      <p>
        <strong>Gender and Sexual Orientation:</strong>
        {` The gender of participants who filled in a survey were ${(getTotalFemales().toFixed(1))}% female, ${getTotalMales().toFixed(2)}% male, ${getTotalTransgenderFemales()}% transgender female, ${getTotalTransgenderMales().toFixed(1)}% transgender male, ${getTotalTGenederNonConfirming ().toFixed(1)}% gender non-conforming, ${getTotalGenderNonBinary().toFixed(1)}% non binary, ${getTotalGenderOther().toFixed(1)}% other gender identity, and ${getTotalGenderDeclinedToAnswer().toFixed(1)}% declined to answer.`} </p>
        <VerticalBarChart selectedDate={selectedDate} chartTitle='Gender of Participants - HIV Outreach events' 
        axisXLabels={dataValuesForGenderChart} chartDataValues={dataValuesForGenderChart.map(data=>data.value)}/>
        <br />
<p>{`
In relation to sexual orientation, ${getTotalStraight().toFixed(1)}% of the participants identified as straight or heterosexual, ${getTotalGay().toFixed(1)}% identified as gay or lesbian, ${getTotalBisexual().toFixed(1)}% as bisexual, ${getTotalQueer().toFixed(1)}% as queer, ${getTotalQuestioning().toFixed(1)}% as questioning or not sure, ${getTotalOther().toFixed(1)}% as other, and ${getTotalOrientationDeclined().toFixed(1)}% declined to answer. This data is shown in Figures 2 and 3. 
`}</p>
 <VerticalBarChart selectedDate={selectedDate} chartTitle='Sexual Orientation of Participants - HIV Outreach events' 
        axisXLabels={dataValuesForSexualOrientation} chartDataValues={dataValuesForSexualOrientation.map(data=>data.value)}/>
 <br />
      <p>
        <strong>Racial Identity:</strong>
        {` ${((totalBlack/totalRace)*100).toFixed(1)}% of participants identified as Black or African American, ${((totalHispanic/totalRace)*100).toFixed(1)}% as Hispanic, Latino/a or Spanish, ${((totalAsian/totalRace)*100).toFixed(1)}% as Asian, ${((totalAmerican/totalRace)*100).toFixed(1)}% as American Indian or Alaska Native, ${((totalMiddleE/totalRace)*100).toFixed(1)}% Middle Eastern or North African, ${((totalHawaiian/totalRace)*100).toFixed(1)}% as Native Hawaiian or Other Pacific Islander,${((totalWhite/totalRace)*100).toFixed(1)}% as White, ${((totalSomeOtherRace/totalRace)*100).toFixed(1)}% as some other race or origin, and ${((totalRaceDeclined/totalRace)*100).toFixed(1)}% declined to answer.
The full range of participant racial identity is shown in Figure 4. 
`}
      </p>
       

     

      <VerticalBarChart selectedDate={selectedDate} chartTitle='Race of Participants - HIV Outreach events' 
        axisXLabels={dataValuesForSRacialIdentity} chartDataValues={dataValuesForSRacialIdentity.map(data=>data.value)}/>

      <br />
      <p>
        <strong>Physical Addresses:</strong>
        {` The highest number of participants were [manually insert text here]. The total number is different from the total of participant surveys received due to some participants living in other areas such as New Jersey `}
      </p>
      <div className="flex flex-col gap-5 items-center">
        <table id="resources-table" className="text-lg w-2/5 ">
          <thead>
            <tr>
              <th className="px-3">Borough</th>
              <th className="px-3 text-center">% of participants</th>
              <th className="px-3 text-center">Nº of participants</th>
            </tr>
          </thead>
          <tbody>
            {boroughs &&
              boroughs.map((borough, index) => (
                <tr
                  key={index}
                  className={`${
                    index % 2 === 0 ? "bg-white" : "bg-light-blue"
                  }`}
                >
                  <td>{borough.value}</td>
                  <td className="text-center">{calculateBoroughPercentage(borough.value).toFixed(2)}</td>
                  <td className="text-center">{calculateBorough(borough.value)}</td>
                </tr>
              ))}
          </tbody>
        </table>
        <button
          // onClick={() => textToClipboard("resources-table")}
          className="px-5 py-2 text-lg border hover:bg-black pointer-events-none hover:text-white rounded shadow"
        >
          Select and right-click to copy the text 
        </button>
      </div>
      <button
        // onClick={() => textToClipboard("resources-table")}
        className="mt-7 px-5 py-2 text-lg border hover:bg-black pointer-events-none hover:text-white rounded shadow"
      >
        Select and right-click to copy the text
      </button>
    </section>
  );
};

export default HIVOutreachSection;
