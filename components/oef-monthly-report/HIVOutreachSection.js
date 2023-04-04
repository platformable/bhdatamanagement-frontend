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



  function handleCopy() {
    const data = document.querySelector("#events-description").innerText;

    navigator.clipboard.writeText(data);
  }

  /* total hiv outreach events total surveyName = oef-fbo-outreach */
  const totalNumberOfParticipantsSurveys = selectedEventsOutputs?.filter(events=>events.surveyname==='oef-participant').length

 
  const sumHivOutreachEvents =  selectedEvents?.forEach((element) => {
    let totalHivOutreachEvents = 0;
    if (element.totalattendees === "oef-fbo-outreach" && element.submissionstatus==='Complete') {
      totalHivOutreachEvents += 1;
    }
 return  totalHivOutreachEvents 
  });




  /* totalAttendees */

  let totalAttendees = 0;
  const sumTotalAttendees = selectedEvents?.forEach((element) => {
    if (element.totalattendees === 0) {
      return null;
    } else {
      totalAttendees += element.totalattendees;
    }
  });

  let totalTalkedHivPrepSaferSex = 0;
  const sumtotalTalkedHivPrepSaferSex = selectedEvents?.forEach((element) => {
    if (element.totaltalkedhivprepsafersex === 0) {
      return null;
    } else {
      totalTalkedHivPrepSaferSex += element.totaltalkedhivprepsafersex;
    }
  });

  let hivTesting = 0;
  const sumHivTesting = selectedEvents?.forEach((element) => {
    if (!element.hivtesting) {
      return null;
    } else {
      hivTesting += 1;
    }
  });

  let hepCTesting = 0;
  const sumHepCTesting = selectedEvents?.forEach((element) => {
    if (element.hepCTesting === 0) {
      return null;
    } else {
      hepCTesting += element.hepctesting;
    }
  });

  let hivTestedTotal = 0;
  const sumhivTestedTotal = selectedEvents?.forEach((element) => {
    if (element.hivtestedtotal === 0) {
      return null;
    } else {
      hivTestedTotal += element.hivtestedtotal;
    }
  });

  let hivReactiveResults = 0;
  const sumhivReactiveResults = selectedEvents?.forEach((element) => {
    if (element.hivreactiveresults === 0) {
      return null;
    } else {
      hivReactiveResults += element.hivreactiveresults;
    }
  });

  let prepReferrals = 0;
  const sumhprepReferrals = selectedEvents?.forEach((element) => {
    if (element.prepreferrals === 0) {
      return null;
    } else {
      prepReferrals += element.prepreferrals;
    }
  });

  let hivLinkedToCare = 0;
  const sumhivLinkedToCare = selectedEvents?.forEach((element) => {
    if (element.hivlinkedtocare === 0) {
      return null;
    } else {
      hivLinkedToCare += element.hivlinkedtocare;
    }
  });

  let totalHivAge = 0;
  const sumhivage = selectedEvents?.forEach((element) => {
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
  const sumhivage2 = selectedEvents?.forEach((element) => {
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


/* AGE RANGE */


const getAgeRangeSumPerValue = (value) => {
  let total = 0;
  selectedEventsOutputs?.forEach((event) => {
    if (event.programname === 'OEF' && event.participantagerange ===value) {
      return total+=1
    } else {
      return null
    }
  } )
  
  return total
};
const getAgeRange1=()=>{

   
let total=0
total=getAgeRangeSumPerValue('Under 13')+ 
    getAgeRangeSumPerValue('13-18')+
  getAgeRangeSumPerValue('19-24')+
  getAgeRangeSumPerValue('25-29')+
  getAgeRangeSumPerValue('30-34')+
  getAgeRangeSumPerValue('35-39')+
  getAgeRangeSumPerValue('40-44')
  return total

}

const getAgeRange2=()=>{
   
  let total=0
  total=getAgeRangeSumPerValue('45-49')+
    getAgeRangeSumPerValue('50-54')+
    getAgeRangeSumPerValue('55-59')+
    getAgeRangeSumPerValue('60-64')+
    getAgeRangeSumPerValue('65-69')+
    getAgeRangeSumPerValue('70+')
  
    return total
  
  }


const totalAgeRange=getAgeRange1()+getAgeRange2()

const percentageAgeRange1 = (
  (getAgeRange1() / totalAgeRange)*100
).toFixed(2);

const percentageAgeRange2 = (
  (getAgeRange2() / totalAgeRange)*100
).toFixed(2);

  /* GENDER */


  const getTotalFemales = () => {
    
    let totalFemales = selectedEventsOutputs?.filter(
      (event) =>
        event.participantgender === "Female" 
        &&
        event.surveyname !== null
        &&
        event.surveyname === "oef-participant"
    ).length;
   
    return totalFemales
  };



  const getTotalMales = () => {
    let totalMales = selectedEventsOutputs?.filter(
      (event) =>
        event.participantgender === "Male"
        &&
        event.surveyname !== null
        &&
        event.surveyname === "oef-participant"
    ).length;
    return totalMales
  }; 

  const getTotalTransgenderFemales = () => {
    let totalTransgenderFemales = selectedEventsOutputs?.filter(
      (event) =>
        event.participantgender === "Transgender female"
        &&
        event.surveyname !== null
        &&
        event.surveyname === "oef-participant"
    ).length;

    return totalTransgenderFemales
  }; 


  const getTotalTransgenderMales = () => {
    let totalTransgenderMales = selectedEventsOutputs?.filter(
      (event) =>
        event.participantgender === "Transgender male"
        &&
        event.surveyname !== null
        &&
        event.surveyname === "oef-participant"
    ).length;
    return totalTransgenderMales
  }; 

  const getTotalTGenederNonConfirming = () => {
    let totalGenderNonConfirming = selectedEventsOutputs?.filter(
      (event) =>
        event.participantgender === "Gender non-conforming"
        &&
        event.surveyname !== null
        &&
        event.surveyname === "oef-participant"
    ).length;
    return totalGenderNonConfirming
  }; 

  const getTotalGenderNonBinary = () => {
    let totalNonBinary = selectedEventsOutputs?.filter(
      (event) =>
        event.participantgender === "Non binary"
        &&
        event.surveyname !== null
        &&
        event.surveyname === "oef-participant"
    ).length;

    return totalNonBinary
  }; 

  const getTotalGenderOther = () => {
    let totalOther = selectedEventsOutputs?.filter(
      (event) =>
        event.participantgender === "Other" 
        &&
        event.surveyname !== null
        &&
        event.surveyname === "oef-participant"
    ).length;

    return totalOther
  }; 


  const getTotalGenderDeclinedToAnswer = () => {
    let totalDeclinedToAnswer = selectedEventsOutputs?.filter(
      (event) =>
        event.participantgender === "Declined to answer" &&
        event.surveyname === "oef-participant"
    ).length;
    return totalDeclinedToAnswer
  }; 

  const totalGender=getTotalFemales()+getTotalMales()+getTotalTransgenderFemales()+getTotalTransgenderMales()+getTotalTGenederNonConfirming()+getTotalGenderNonBinary()+getTotalGenderDeclinedToAnswer()+getTotalGenderOther();

  //console.log(getTotalFemales(),getTotalMales(),getTotalTransgenderFemales(),getTotalTransgenderMales(),getTotalTGenederNonConfirming(),getTotalGenderNonBinary(),getTotalGenderDeclinedToAnswer(),getTotalGenderOther());


  const totalFemales=(getTotalFemales()/totalGender)*100
  const totalMales=(getTotalMales()/totalGender)*100
  const totalTransgenderFemales=(getTotalTransgenderFemales()/totalGender)*100
  const totalTransgenderMales=(getTotalTransgenderMales()/totalGender)*100
  const totalGenderNonConfirming=(getTotalTGenederNonConfirming()/totalGender)*100
  const totalGenderNonBinary=(getTotalGenderNonBinary()/totalGender)*100
  const totalGenderDeclined=(getTotalGenderDeclinedToAnswer()/totalGender)*100
  const totalGenderOther=(getTotalGenderOther()/totalGender)*100

  // sexual orientation

  const getTotalStraight = () => {
    let totalStraight = selectedEventsOutputs?.filter(
      (event) =>
        event.participantorientation === "Straight or heterosexual" &&
        event.surveyname === "oef-participant"
    ).length;
    return totalStraight;
  }; 

 


  const getTotalGay = () => {
    let totalGay = selectedEventsOutputs?.filter(
      (event) =>
        event.participantorientation === "Gay or lesbian" &&
        event.surveyname === "oef-participant"
    ).length;
    return totalGay
  }; 

 

  const getTotalBisexual = () => {
    let totalBisexual = selectedEventsOutputs?.filter(
      (event) =>
        event.participantorientation === "Bisexual" &&
        event.surveyname === "oef-participant"
    ).length;

    return totalBisexual
  }; 


  const getTotalQueer = () => {
    let totalQueer = selectedEventsOutputs?.filter(
      (event) =>
        event.participantorientation === "Queer" &&
        event.surveyname === "oef-participant"
    ).length;
    return totalQueer
  }; 

  

  const getTotalQuestioning = () => {
    let totalQuestioning = selectedEventsOutputs?.filter(
      (event) =>
        event.participantorientation === "Questioning or not sure" &&
        event.surveyname === "oef-participant"
    ).length;

    return totalQuestioning
  }; 


  const getTotalOther = () => {
    let totalOther = selectedEventsOutputs?.filter(
      (event) =>
        event.participantorientation === "Other" &&
        event.surveyname === "oef-participant"
    ).length;

    return totalOther
  }; 

 
  const getTotalOrientationDeclined = () => {
    let totalOrientationDeclined = selectedEventsOutputs?.filter(
      (event) =>
        event.participantorientation === "Declined to answer" &&
        event.surveyname === "oef-participant"
    ).length;

    return totalOrientationDeclined
  };


  const totalOrientation=getTotalStraight()+getTotalGay()+getTotalBisexual()+getTotalQueer()+getTotalQuestioning()+getTotalOther()+getTotalOrientationDeclined();

  
  const totalStraight=((getTotalStraight()/totalOrientation)*100).toFixed(1)
  const totalGay=((getTotalGay()/totalOrientation)*100).toFixed(1)
  const totalBisexual=((getTotalBisexual()/totalOrientation)*100).toFixed(1)
  const totalQueer=((getTotalQueer()/totalOrientation)*100).toFixed(1)
  const totalQuestioning=((getTotalQuestioning()/totalOrientation)*100).toFixed(1)
  const totalOrientationOther=((getTotalOther()/totalOrientation)*100).toFixed(1)
  const totalOrientationDeclined=((getTotalOrientationDeclined()/totalOrientation)*100).toFixed(1)
  



  /* RACE */



  const getTotalBlack = () => {
    let totalBlack = selectedEventsOutputs?.filter(event=>event.surveyname === "oef-participant" && event.participantrace.includes('Black or African American')&& event.participantrace!==null).length
    return totalBlack
  };

  const totalBlack=getTotalBlack()

  const getTotalHispanic = () => {
    let totalHispanic = selectedEventsOutputs?.filter(event=>event.surveyname === "oef-participant" && event.participantrace.includes('Hispanic, Latino/a or Spanish')&& event.participantrace!==null).length
    return totalHispanic
  };

  const totalHispanic=getTotalHispanic()

 

  const getTotalAsian = () => {
    let totalAsian = selectedEventsOutputs?.filter(event=>event.surveyname === "oef-participant" && event.participantrace.includes('Asian')&& event.participantrace!==null).length
    return totalAsian
  };
  const totalAsian= getTotalAsian()


  const getTotalAmerican = () => {
    let totalAmerican = selectedEventsOutputs?.filter(event=>event.surveyname === "oef-participant" && event.participantrace.includes('American Indian or Alaska Native')&& event.participantrace!==null).length
    return totalAmerican
  };

  const totalAmerican=getTotalAmerican()


  const getTotalMiddleE = () => {
    let totalMiddelE = selectedEventsOutputs?.filter(event=>event.surveyname === "oef-participant" && event.participantrace.includes('Middle Eastern or North African')&& event.participantrace!==null).length
    return totalMiddelE
  };

  const totalMiddleE=getTotalMiddleE()


  const getTotalHawaiian = () => {
    let totalHawaiian = selectedEventsOutputs?.filter(event=>event.surveyname === "oef-participant" && event.participantrace.includes('Native Hawaiian or Other Pacific Islander')&& event.participantrace!==null).length
    return totalHawaiian
  };



  const totalHawaiian=getTotalHawaiian()


  const getTotalWhite = () => {
    let totalWhite = selectedEventsOutputs?.filter(event=>event.surveyname === "oef-participant" && event.participantrace.includes('White')&& event.participantrace!==null).length
    return totalWhite
  };



  const totalWhite=getTotalWhite()


  const getTotalSomeOtherRace = () => {
    let totalSomeOtherRace = selectedEventsOutputs?.filter(event=>event.surveyname === "oef-participant" && event.participantrace.includes('Some other race or origin')&& event.participantrace!==null).length
    return totalSomeOtherRace
  };
const totalSomeOtherRace=getTotalSomeOtherRace()


  const getTotalRaceDeclinedToAnswer = () => {
    let totalDeclinedToAnswer = selectedEventsOutputs?.filter(event=>event.surveyname === "oef-participant" && event.participantrace.includes('Decline to answer')&& event.participantrace!==null).length
    return totalDeclinedToAnswer
  };


  const totalRaceDeclined=getTotalRaceDeclinedToAnswer()


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
    const getTotal=selectedEventsOutputs?.forEach(event=>{
      if(event.participantborough===borough){
        totalBoroughs+=1
      }
    })

    return totalBoroughs
  }

  const calculateBoroughPercentage=(borough)=>{
    const totalOefParticipantsSurveys=selectedEventsOutputs?.filter(event=>event.surveyname==='oef-participant').length
    let totalBoroughs=0
    const getTotal=selectedEventsOutputs?.forEach(event=>{
      if(event.participantborough===borough){
        totalBoroughs+=1
      }
    })

    return (totalBoroughs/totalOefParticipantsSurveys)*100
  }

  //const totalNumberOfParticipantsSurveys= selectedEventsOutputs?.filter(events=>events.surveyname==='oef-participant').length



  const getAgesSumPerValueName = (nameOfDataPoint) => {
    let total = 0;
    selectedEvents?.forEach((event) => {
      if (event[nameOfDataPoint] !=='' && event[nameOfDataPoint] !==null) total+=event[nameOfDataPoint]})
    return total
  };




  const ageAxisDataForChart=[
    {id:1,name:'13_18',value:getAgesSumPerValueName('altagehiv13_18'),dataPoint:'altagehiv13_18'},  
    //{id:2,name:'13_18 ',value:getAgesSumPerValueName('altagehivunder13'),dataPoint:'altagehivunder13'},
    {id:3,name:'19_24',value:getAgesSumPerValueName('altagehiv19_24'),dataPoint:'altagehiv19_24'},
    //{id:4,name:'20_24',value:getAgesSumPerValueName('hiv20_24'),dataPoint:'hiv20_24'},
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
    {id:5,value:getTotalQuestioning(),name:"Questioning or not sure"},
    {id:6,value:getTotalOther(),name:"Other"},
    {id:7,value:getTotalOrientationDeclined(),name:"Declined to answer"}
  ]

  const dataValuesForSRacialIdentity=[
    {id:1,value:getTotalBlack(),name:"Black or African American"},
    {id:2,value:getTotalHispanic(),name:"Hispanic, Latino/a or Spanish"},
    {id:3,value:getTotalAsian(),name:"Asian"},
    {id:3,value:getTotalAmerican(),name:"American Indian or Alaska Native"},
    {id:4,value:getTotalMiddleE(),name:"Middle Eastern or North African"},
    {id:5,value:getTotalHawaiian(),name:"Native Hawaiian or Other Pacific Islander"},
    {id:7,value:getTotalWhite(),name:"White"},
    {id:6,value:getTotalSomeOtherRace(),name:"Some other race or origin"},
    {id:6,value:getTotalRaceDeclinedToAnswer(),name:"Declined to answer"},
    
  ]
  //const totalNumberOfParticipantsSurveys= selectedEventsOutputs?.filter(events=>events.surveyname==='oef-participant').length


  const getAgeRangeSumPerValueName = (value,nameOfDataPoint) => {
    let total = 0;
    selectedEventsOutputs?.filter(events=>events.surveyname==='oef-participant').forEach((event) => {
      if (event[nameOfDataPoint] ===value) {
        return total+=1
      } else {
        return null
      }
    } )

    return total
  };
  const ageRangeAxisDataForChart=[
    {id:1,name:'Under 13',value:getAgeRangeSumPerValueName('Under 13','participantagerange'),dataPoint:'participantagerange'},
    {id:2,name:'13_18 ',value:getAgeRangeSumPerValueName('13-18','participantagerange'),dataPoint:'participantagerange'},
    {id:3,name:'19_24',value:getAgeRangeSumPerValueName('19-24','participantagerange'),dataPoint:'participantagerange'},
    {id:4,name:'25_29',value:getAgeRangeSumPerValueName('25-29','participantagerange'),dataPoint:'participantagerange'},
    {id:5,name:'30_34',value:getAgeRangeSumPerValueName('30-34','participantagerange'),dataPoint:'participantagerange'},
    {id:6,name:'35_39',value:getAgeRangeSumPerValueName('35-39','participantagerange'),dataPoint:'participantagerange'},	
    {id:7,name:'40_44',value:getAgeRangeSumPerValueName('40-44','participantagerange'),dataPoint:'participantagerange'},
    {id:8,name:'45_49',value:getAgeRangeSumPerValueName('45-49','participantagerange'),dataPoint:'participantagerange'},
    {id:9,name:'50_54',value:getAgeRangeSumPerValueName('50-54','participantagerange'),dataPoint:'participantagerange'},
    {id:10,name:'55_59',value:getAgeRangeSumPerValueName('55-59','participantagerange'),dataPoint:'participantagerange'},
    {id:11,name:'60_64',value:getAgeRangeSumPerValueName('60-64','participantagerange'),dataPoint:'participantagerange'},
    {id:12,name:'65_69',value:getAgeRangeSumPerValueName('65-69','participantagerange'),dataPoint:'participantagerange'},
    {id:13,name:'+70',value:getAgeRangeSumPerValueName('70+','participantagerange'),dataPoint:'participantagerange'}
  ]




  //let totalOfValues = values.reduce((a, b) => a + b, 0);

  const totalAgePeopleTestedHiv=()=>{
    let total=0
    const sum=ageAxisDataForChart.map(data=>{
    total +=data.value
    })

    return total
  }
  const numbersOfOefEvents =selectedEvents?.filter(event=>event.eventname!==null && event._surveyname==='oef-fbo-outreach' && event.submissionstatus==='Complete').length
  
  

  
  return (
    <section>
      <h1 className="text-black mb-7 bg-red-500 text-white py-2 px-3">HIV Outreach Events</h1>
      <div className="grid grid-cols-1 gap-10">
        <p>{`A total of ${numbersOfOefEvents} outreach events took place in [manually insert month here], reaching a total of ${totalAttendees} people. There were ${totalNumberOfParticipantsSurveys} participant sign-in sheets completed. It was reported that ${totalTalkedHivPrepSaferSex} participants received verbal and educational information about HIV, PrEP, and safer sex messages. ${hivTesting} events offered HIV testing and this month there was ${hepCTesting} event with Hep-C testing. A total of ${hivTestedTotal} people were tested for HIV, with ${hivReactiveResults}  reactive results. ${prepReferrals}  people was referred to PrEP services and ${hivLinkedToCare} people were linked to HIV Care services.`}</p>

        <p>
          {" "}
          <strong>Age:</strong>
          {` The participants’ ages ranged from 16 to 70+ years, as shown in Figure 1. ${percentageAgeRange2}% of the participants were aged 45 or over, this is [manual calculation: X% lower/higher than in previous month year]. This month ${percentageAgeRange1}% of participants were under 44.`}{" "}
        </p>
      </div>
      <br />
        <VerticalBarChart 
        totalNumberOfParticipantsSurveys={totalNumberOfParticipantsSurveys}
        selectedDate={selectedDate} chartTitle='Age of Participants - HIV Outreach events' axisXLabels={ageRangeAxisDataForChart} chartDataValues={ageRangeAxisDataForChart.map(data=>data.value)}/>

    
      <br />
      <p>
        <strong>Gender and Sexual Orientation:</strong>
        {` The gender of participants who filled in a survey were ${totalFemales.toFixed(2)}% female, ${totalMales.toFixed(2)}% male, ${totalTransgenderFemales.toFixed(2)}% transgender female, ${totalTransgenderMales.toFixed(2)}% transgender male, ${totalGenderNonConfirming.toFixed(2)}% gender non-conforming, ${totalGenderNonBinary.toFixed(2)}% non binary, ${totalGenderOther.toFixed(2)}% other gender identity, and ${totalGenderDeclined.toFixed(2)}% declined to answer.`} </p>

        <br />
        <VerticalBarChart 
        totalNumberOfParticipantsSurveys={totalNumberOfParticipantsSurveys}
        selectedDate={selectedDate} chartTitle='Gender of Participants - HIV Outreach events' 
        axisXLabels={dataValuesForGenderChart} chartDataValues={dataValuesForGenderChart.map(data=>data.value)}/>
        <br />
<p>{`
In relation to sexual orientation, ${totalStraight}% of the participants identified as straight or heterosexual, ${totalGay}% identified as gay or lesbian, ${totalBisexual}% as bisexual, ${totalQueer}% as queer, ${totalQuestioning}% as questioning or not sure, ${totalOrientationOther}% as other, and ${totalOrientationDeclined}% declined to answer. This data is shown in Figures 2 and 3. 
`}</p>
 <br />
 <br />
 <VerticalBarChart 
 totalNumberOfParticipantsSurveys={totalNumberOfParticipantsSurveys}
 selectedDate={selectedDate} chartTitle='Sexual Orientation of Participants - HIV Outreach events' 
        axisXLabels={dataValuesForSexualOrientation} chartDataValues={dataValuesForSexualOrientation.map(data=>data.value)}/>
 <br />
 <br />
      <p>
        <strong>Racial Identity:</strong>
        {` ${((totalBlack/totalRace)*100).toFixed(1)}% of participants identified as Black or African American, ${((totalHispanic/totalRace)*100).toFixed(1)}% as Hispanic, Latino/a or Spanish, ${((totalAsian/totalRace)*100).toFixed(1)}% as Asian, ${((totalAmerican/totalRace)*100).toFixed(1)}% as American Indian or Alaska Native, ${((totalMiddleE/totalRace)*100).toFixed(1)}% Middle Eastern or North African, ${((totalHawaiian/totalRace)*100).toFixed(1)}% as Native Hawaiian or Other Pacific Islander,${((totalWhite/totalRace)*100).toFixed(1)}% as White, ${((totalSomeOtherRace/totalRace)*100).toFixed(1)}% as some other race or origin, and ${((totalRaceDeclined/totalRace)*100).toFixed(1)}% declined to answer.
The full range of participant racial identity is shown in Figure 4. 
`}
      </p>
       

      <br />

      <VerticalBarChart 
      
      totalNumberOfParticipantsSurveys={totalNumberOfParticipantsSurveys}
      selectedDate={selectedDate} chartTitle='Race of Participants - HIV Outreach events' 
        axisXLabels={dataValuesForSRacialIdentity} chartDataValues={dataValuesForSRacialIdentity.map(data=>data.value)}/>

      <br />
      <p>
        <strong>Physical Addresses:</strong>
        {` The highest number of participants were [manually insert text here]. The total number is different from the total of participant surveys received due to some participants living in other areas such as New Jersey `}
      </p>
      <div className="flex flex-col gap-5 items-center my-7" >
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


      <div>
        <p>
        <strong>Age of people tested for HIV:</strong> {`A total of ${totalAgePeopleTestedHiv()} people were reported to have been tested for HIV in [insert month manually] by FBOs. Figure 5 below shows the age breakdown of those who were tested, according to the testing sheets. `}

        </p>
        <br />

        <VerticalBarChart 
        totalNumberOfParticipantsSurveys={totalNumberOfParticipantsSurveys}
        selectedDate={selectedDate} chartTitle='Ages of people tested for HIV - HIV Outreach events' axisXLabels={ageAxisDataForChart} chartDataValues={ageAxisDataForChart.map(data=>data.value)}/>
      </div>
   
    </section>
  );
};

export default HIVOutreachSection;
