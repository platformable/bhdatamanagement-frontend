import React, { useState, useEffect } from "react";
import GenderIdentityChart from "./GenderIdentityChart";
import AgeChart from "./AgeChart";
import RaceChart from "./RaceChart";
import SexualOrientationChart from "./SexualOrientationChart";
const CommunitySection = ({
  selectedEvents,
  selectedEventsOutputs,
  getHrefImage,
  selectedDate,
}) => {
  const [allTests, setAllTests] = useState({});
  const testCount = {
    total: 0,
    hivTesting: 0,
    hivTesting: 0,
    stiTesting: 0,
    hepcTesting: 0,
    covidTesting: 0,
    hivTestedTotal: 0,
    hivFemale: 0,
    hivMale: 0,
    hivTransgenderFemale: 0,
    hivTransgenderMale: 0,
    hivGenderNonConforming: 0,
    hivNonBinary: 0,
    hivGenderNotSureQuestioning: 0,
    hivOtherGenderIdentity: 0,
    hivGenderDeclinedToAnswer: 0,
    hivBlackOrAfricanAmerican: 0,
    hivHispanic: 0,
    hivAsian: 0,
    hivAmericanIndianOrAlaskaNative: 0,
    hivNativeHawaiianOrOtherPacificIslander: 0,
    hivWhite: 0,
    hivMoreThanOneRace: 0,
    hivSomeOtherRace: 0,
    hivMiddleEasternOrNorthAfrican: 0,
    hivRaceDeclinedToAnswer: 0,
    altAgeHivUnder13: 0,
    altAgeHiv13_18: 0,
    altAgeHiv19_24: 0,
    hiv25_29: 0,
    hiv30_34: 0,
    hiv35_39: 0,
    hiv40_44: 0,
    hiv45_49: 0,
    hiv50_54: 0,
    hiv55_59: 0,
    hiv60_64: 0,
    hiv65_69: 0,
    hiv70: 0,
    hivGayOrLesbian: 0,
    hivStraightOrHeterosexual: 0,
    hivBisexual: 0,
    hivQueer: 0,
    hivQuestioningOrNotSure: 0,
    hivSexualOrientationUnknown: 0,
    hivSexualOrientationDeclinedToAnswer: 0,
  };

  const getActiveTesting = (selectedEventsOutputs) => {
    const hivTesting = selectedEventsOutputs.filter(
      (testing) => testing.hivtesting
    );
    const sitTesting = selectedEventsOutputs.filter(
      (testing) => testing.stitesting
    );
    const hepcTesting = selectedEventsOutputs.filter(
      (testing) => testing.hepctesting
    );
    const covidTesting = selectedEventsOutputs.filter(
      (testing) => testing.covidtesting
    );

    const total =
      hivTesting.length +
      sitTesting.length +
      hepcTesting.length +
      covidTesting.length;

    // setAllTests((previous) => ({
    //   ...previous,
    //   total: total,
    //   hivTesting: hivTesting.length,
    //   sitTesting: sitTesting.length,
    //   hepcTesting: hepcTesting.length,
    //   covidTesting: covidTesting.length,
    // }));
  };

  const getTestingTotals = (selectedEventsOutputs) => {
    const hivTestedTotal = selectedEventsOutputs.forEach((event) =>
      setAllTests((previous) => ({
        ...previous,
        hivTestedTotal: allTests.hivTestedTotal + event.hivtestedtotal,
      }))
    );
    const hivFemale = selectedEventsOutputs.forEach((event) =>
      setAllTests((previous) => ({
        ...previous,
        hivFemale: allTests.hivFemale + event.hivfemale,
      }))
    );
    const hivMale = selectedEventsOutputs.forEach((event) =>
      setAllTests((previous) => ({
        ...previous,
        hivMale: allTests.hivMale + event.hivmale,
      }))
    );

    const hivTransgenderFemale = selectedEventsOutputs.forEach((event) =>
      setAllTests((previous) => ({
        ...previous,
        hivTransgenderFemale:
          allTests.hivTransgenderFemale + event.hivtransgenderfemale,
      }))
    );

    const hivTransgenderMale = selectedEventsOutputs.forEach((event) =>
      setAllTests((previous) => ({
        ...previous,
        hivTransgenderMale:
          allTests.hivTransgenderMale + event.hivtransgendermale,
      }))
    );

    const hivGenderNonConforming = selectedEventsOutputs.forEach((event) =>
      setAllTests((previous) => ({
        ...previous,
        hivGenderNonConforming:
          allTests.hivGenderNonConforming + event.hivgendernonconforming,
      }))
    );

    const hivNonBinary = selectedEventsOutputs.forEach((event) =>
      setAllTests((previous) => ({
        ...previous,
        hivNonBinary: allTests.hivNonBinary + event.hivnonbinary,
      }))
    );

    const hivGenderNotSureQuestioning = selectedEventsOutputs.forEach((event) =>
      setAllTests((previous) => ({
        ...previous,
        hivGenderNotSureQuestioning:
          allTests.hivGenderNotSureQuestioning +
          event.hivgendernotsurequestioning,
      }))
    );

    const hivOtherGenderIdentity = selectedEventsOutputs.forEach((event) =>
      setAllTests((previous) => ({
        ...previous,
        hivOtherGenderIdentity:
          allTests.hivOtherGenderIdentity + event.hivothergenderidentity,
      }))
    );

    const hivGenderDeclinedToAnswer = selectedEventsOutputs.forEach((event) =>
      setAllTests((previous) => ({
        ...previous,
        hivGenderDeclinedToAnswer:
          allTests.hivGenderDeclinedToAnswer + event.hivgenderdeclinedtoanswer,
      }))
    );
  };

  const getRaceTested = (selectedEventsOutputs) => {
    const hivBlackOrAfricanAmerican = selectedEventsOutputs.forEach((event) =>
      setAllTests((previous) => ({
        ...previous,
        hivBlackOrAfricanAmerican:
          allTests.hivBlackOrAfricanAmerican + event.hivblackorafricanamerican,
      }))
    );
    const hivHispanic = selectedEventsOutputs.forEach((event) =>
      setAllTests((previous) => ({
        ...previous,
        hivHispanic: allTests.hivHispanic + event.hivhispanic,
      }))
    );
    const hivAsian = selectedEventsOutputs.forEach((event) =>
      setAllTests((previous) => ({
        ...previous,
        hivAsian: allTests.hivAsian + event.hivasian,
      }))
    );
    const hivAmericanIndianOrAlaskaNative = selectedEventsOutputs.forEach(
      (event) =>
        setAllTests((previous) => ({
          ...previous,
          hivAmericanIndianOrAlaskaNative:
            allTests.hivAmericanIndianOrAlaskaNative +
            event.hivamericanindianoralaskanative,
        }))
    );
    const hivNativeHawaiianOrOtherPacificIslander =
      selectedEventsOutputs.forEach((event) =>
        setAllTests((previous) => ({
          ...previous,
          hivNativeHawaiianOrOtherPacificIslander:
            allTests.hivNativeHawaiianOrOtherPacificIslander +
            event.hivnativehawaiianorotherpacificislander,
        }))
      );
    const hivWhite = selectedEventsOutputs.forEach((event) =>
      setAllTests((previous) => ({
        ...previous,
        hivWhite: allTests.hivWhite + event.hivwhite,
      }))
    );
    const hivMoreThanOneRace = selectedEventsOutputs.forEach((event) =>
      setAllTests((previous) => ({
        ...previous,
        hivMoreThanOneRace:
          allTests.hivMoreThanOneRace + event.hivmorethanonerace,
      }))
    );
    const hivSomeOtherRace = selectedEventsOutputs.forEach((event) =>
      setAllTests((previous) => ({
        ...previous,
        hivSomeOtherRace: allTests.hivSomeOtherRace + event.hivsomeotherrace,
      }))
    );
    const hivMiddleEasternOrNorthAfrican = selectedEventsOutputs.forEach(
      (event) =>
        setAllTests((previous) => ({
          ...previous,
          hivMiddleEasternOrNorthAfrican:
            allTests.hivMiddleEasternOrNorthAfrican +
            event.hivmiddleeasternornorthafrican,
        }))
    );
    const hivRaceDeclinedToAnswer = selectedEventsOutputs.forEach((event) =>
      setAllTests((previous) => ({
        ...previous,
        hivRaceDeclinedToAnswer:
          allTests.hivRaceDeclinedToAnswer + event.hivracedeclinedtoanswer,
      }))
    );
  };

  const getAgeTested = () => {
    const altAgeHivUnder13 = selectedEventsOutputs.forEach((event) =>
      setAllTests((previous) => ({
        ...previous,
        altAgeHivUnder13: allTests.altAgeHivUnder13 + event.altagehivunder13,
      }))
    );
    const altAgeHiv13_18 = selectedEventsOutputs.forEach((event) =>
      setAllTests((previous) => ({
        ...previous,
        altAgeHiv13_18: allTests.altAgeHiv13_18 + event.altagehiv13_18,
      }))
    );
    const altAgeHiv19_2 = selectedEventsOutputs.forEach((event) =>
      setAllTests((previous) => ({
        ...previous,
        altAgeHiv19_2: allTests.altAgeHiv19_2 + event.altagehiv19_2,
      }))
    );
    const hiv25_29 = selectedEventsOutputs.forEach((event) =>
      setAllTests((previous) => ({
        ...previous,
        hiv25_29: allTests.hiv25_29 + event.hiv25_29,
      }))
    );
    const hiv30_34 = selectedEventsOutputs.forEach((event) =>
      setAllTests((previous) => ({
        ...previous,
        hiv30_34: allTests.hiv30_34 + event.hiv30_34,
      }))
    );
    const hiv35_39 = selectedEventsOutputs.forEach((event) =>
      setAllTests((previous) => ({
        ...previous,
        hiv35_39: allTests.hiv35_39 + event.hiv35_39,
      }))
    );
    const hiv40_44 = selectedEventsOutputs.forEach((event) =>
      setAllTests((previous) => ({
        ...previous,
        hiv40_44: allTests.hiv40_44 + event.hiv40_44,
      }))
    );
    const hiv45_49 = selectedEventsOutputs.forEach((event) =>
      setAllTests((previous) => ({
        ...previous,
        hiv45_49: allTests.hiv45_49 + event.hiv45_49,
      }))
    );
    const hiv50_54 = selectedEventsOutputs.forEach((event) =>
      setAllTests((previous) => ({
        ...previous,
        hiv50_54: allTests.hiv50_54 + event.hiv50_54,
      }))
    );
    const Hiv55_59 = selectedEventsOutputs.forEach((event) =>
      setAllTests((previous) => ({
        ...previous,
        hiv55_59: allTests.hiv55_59 + event.hiv55_59,
      }))
    );
    const hiv60_64 = selectedEventsOutputs.forEach((event) =>
      setAllTests((previous) => ({
        ...previous,
        hiv60_64: allTests.hiv60_64 + event.hiv60_64,
      }))
    );
    const hiv65_69 = selectedEventsOutputs.forEach((event) =>
      setAllTests((previous) => ({
        ...previous,
        hiv65_69: allTests.hiv65_69 + event.hiv65_69,
      }))
    );
    const hiv70 = selectedEventsOutputs.forEach((event) =>
      setAllTests((previous) => ({
        ...previous,
        hiv70: allTests.hiv70 + event.hiv70,
      }))
    );
  };

  const getGenderTested = () => {
    const hivGayOrLesbian = selectedEventsOutputs.forEach((event) =>
      setAllTests((previous) => ({
        ...previous,
        hivGayOrLesbian: allTests.hivGayOrLesbian + event.hivgayorlesbian,
      }))
    );
    const hivStraightOrHeterosexual = selectedEventsOutputs.forEach((event) =>
      setAllTests((previous) => ({
        ...previous,
        hivStraightOrHeterosexual:
          allTests.hivStraightOrHeterosexual + event.hivstraightorheterosexual,
      }))
    );
    const hivBisexual = selectedEventsOutputs.forEach((event) =>
      setAllTests((previous) => ({
        ...previous,
        hivBisexual: allTests.hivBisexual + event.hivbisexual,
      }))
    );
    const hivQueer = selectedEventsOutputs.forEach((event) =>
      setAllTests((previous) => ({
        ...previous,
        hivQueer: allTests.hivQueer + event.hivqueer,
      }))
    );
    const hivQuestioningOrNotSure = selectedEventsOutputs.forEach((event) =>
      setAllTests((previous) => ({
        ...previous,
        hivQuestioningOrNotSure:
          allTests.hivQuestioningOrNotSure + event.hivquestioningornotsure,
      }))
    );
    const hivSexualOrientationUnknown = selectedEventsOutputs.forEach((event) =>
      setAllTests((previous) => ({
        ...previous,
        hivSexualOrientationUnknown:
          allTests.hivSexualOrientationUnknown +
          event.hivsexualorientationunknown,
      }))
    );
    const hivSexualOrientationDeclinedToAnswer = selectedEventsOutputs.forEach(
      (event) =>
        setAllTests((previous) => ({
          ...previous,
          hivSexualOrientationDeclinedToAnswer:
            allTests.hivSexualOrientationDeclinedToAnswer +
            event.hivsexualorientationdeclinedtoanswer,
        }))
    );
  };

  useEffect(() => {
    const allTestsDoneResults = selectedEventsOutputs.map((event) => {
      testCount.hivTesting += Number(event.hivtesting);
      testCount.stiTesting += Number(event.stitesting);
      testCount.hepcTesting += Number(event.hepctesting);
      testCount.covidTesting += Number(event.covidtesting);
      testCount.hivTestedTotal += event.hivtestedtotal;
      testCount.hivFemale += event.hivfemale;
      testCount.hivMale += event.hivmale;
      testCount.hivTransgenderFemale += event.hivtransgenderfemale;
      testCount.hivTransgenderMale += event.hivtransgendermale;
      testCount.hivGenderNonConforming += event.hivgendernonconforming;
      testCount.hivNonBinary += event.hivnonbinary;
      testCount.hivGenderNotSureQuestioning +=
        event.hivgendernotsurequestioning;
      testCount.hivOtherGenderIdentity += event.hivothergenderidentity;
      testCount.hivGenderDeclinedToAnswer += event.hivgenderdeclinedtoanswer;
      testCount.hivBlackOrAfricanAmerican += event.hivblackorafricanamerican;
      testCount.hivHispanic += event.hivhispanic;
      testCount.hivAsian += event.hivasian;
      testCount.hivAmericanIndianOrAlaskaNative +=
        event.hivamericanindianoralaskanative;
      testCount.hivNativeHawaiianOrOtherPacificIslander +=
        event.hivnativehawaiianorotherpacificislander;
      testCount.hivWhite += event.hivwhite;
      testCount.hivMoreThanOneRace += event.hivmorethanonerace;
      testCount.hivSomeOtherRace += event.hivsomeotherrace;
      testCount.hivMiddleEasternOrNorthAfrican +=
        event.hivmiddleeasternornorthafrican;
      testCount.hivRaceDeclinedToAnswer += event.hivracedeclinedtoanswer;
      testCount.altAgeHivUnder13 += event.altagehivunder13;
      testCount.altAgeHiv13_18 += event.altagehiv13_18;
      testCount.altAgeHiv19_24 += event.altagehiv19_24;
      testCount.hiv25_29 += event.hiv25_29;
      testCount.hiv30_34 += event.hiv30_34;
      testCount.hiv35_39 += event.hiv35_39;
      testCount.hiv40_44 += event.hiv40_44;
      testCount.hiv45_49 += event.hiv45_49;
      testCount.hiv50_54 += event.hiv50_54;
      testCount.hiv55_59 += event.hiv55_59;
      testCount.hiv60_64 += event.hiv60_64;
      testCount.hiv65_69 += event.hiv65_69;
      testCount.hiv70 += event.hiv70;
      testCount.hivGayOrLesbian += event.hivgayorlesbian;
      testCount.hivStraightOrHeterosexual += event.hivstraightorheterosexual;
      testCount.hivBisexual += event.hivbisexual;
      testCount.hivQueer += event.hivqueer;
      testCount.hivQuestioningOrNotSure += event.hivquestioningornotsure;
      testCount.hivSexualOrientationUnknown +=
        event.hivsexualorientationunknown;
      testCount.hivSexualOrientationDeclinedToAnswer +=
        event.hivsexualorientationdeclinedtoanswer;
    });
    setAllTests(testCount);
    // getActiveTesting(selectedEventsOutputs);
    // getTestingTotals(selectedEventsOutputs);
    // getGenderTested(selectedEventsOutputs);
    // getRaceTested(selectedEventsOutputs);
    // getAgeTested(selectedEventsOutputs);
  }, [selectedEventsOutputs]);

  function handleCopy() {
    const data = document.querySelector("#communityText").textContent;
    navigator.clipboard.writeText(data);
  }




  return (
    <section>
      <h1 className="font-black mb-7">Community</h1>
      <div id="communityText">
        <p>{`There were ${
          !allTests.hivTesting ? 0 : allTests.hivTesting
        } HIV testing events, ${
          !allTests.stiTesting ? 0 : allTests.stiTesting
        } STI testing events, ${
          !allTests.hepcTesting ? 0 : allTests.hepcTesting
        } Hepatitis C testing events, and  ${
          !allTests.covidTesting ? 0 : allTests.covidTesting
        } COVID testing events.
`}</p>{" "}
        <br />
        <p>{`At the HIV testing events,  ${allTests.hivTestedTotal}  people were tested, including ${allTests.hivFemale}  women, ${allTests.hivMale} men, ${allTests.hivTransgenderFemale} transgender women, ${allTests.hivTransgenderMale} transgender men,  ${allTests.hivGenderNonConforming} gender non-conforming, ${allTests.hivNonBinary} non-binary, ${allTests.hivGenderNotSureQuestioning} not sure/questioning,  ${allTests.hivOtherGenderIdentity} other gender identity, and ${allTests.hivGenderDeclinedToAnswer} declined to answer.
`}</p>
        <br />
        <p>{`Of the people tested, ${
          allTests.hivBlackOrAfricanAmerican
        } people identified as Black or African American, ${
          allTests.hivHispanic
        } Hispanic, ${allTests.hivAsian} Asian, ${
          allTests.hivAmericanIndianOrAlaskaNative
        } American Indian or Alaska Native, ${
          allTests.hivNativeHawaiianOrOtherPacificIslander
        } Native Hawaiian or Other Pacific Islander, ${
          allTests.hivWhite
        } white, ${allTests.hivMoreThanOneRace} more than one race, ${
          allTests.hivSomeOtherRace + allTests.hivMiddleEasternOrNorthAfrican
        } some other race, and ${
          allTests.hivRaceDeclinedToAnswer
        } unknown/unreported. 
`}</p>
        <br />
        <p>
          {allTests.altAgeHivUnder13} people under 13 were tested,{" "}
          {allTests.altAgeHiv13_18} between 13 and 18, {" "}
          {allTests.altAgeHiv19_24} between 19-24 , {" "}
          {allTests.hiv25_29 + allTests.hiv30_34} between 25 to 34,{" "} 
          {allTests.hiv35_39 + allTests.hiv40_44} between 35 and 44, and {" "}
          {allTests.hiv45_49 +
            allTests.hiv50_54 +
            allTests.hiv55_59 +
            allTests.hiv60_64 +
            allTests.hiv65_69 +
            allTests.hiv70}{" "}
          were over 45.
        </p>
        <br />
        <p>{`Of those tested, ${allTests.hivGayOrLesbian} identified as gay or lesbian, ${allTests.hivStraightOrHeterosexual} as straight or heterosexual,  ${allTests.hivBisexual} as bisexual, ${allTests.hivQueer} as queer,  ${allTests.hivQuestioningOrNotSure} as questioning or not sure, ${allTests.hivSexualOrientationUnknown} as unknown, and ${allTests.hivSexualOrientationDeclinedToAnswer} declined to answer.
`}</p>
      </div>{" "}
      <button
        onClick={handleCopy}
        className="px-5 my-7 text-lg border hover:bg-black hover:text-white rounded shadow"
      >
        Copy text to clipboard
      </button>
      <br /> <br />
      <GenderIdentityChart
        getHrefImage={getHrefImage}
        chartData={selectedEventsOutputs}
        selectedDate={selectedDate}
      />{" "}
      <br />
      <AgeChart
        getHrefImage={getHrefImage}
        chartData={selectedEventsOutputs}
        selectedDate={selectedDate}
      />{" "}
      <br />
      <RaceChart
        getHrefImage={getHrefImage}
        chartData={selectedEventsOutputs}
        selectedDate={selectedDate}
      />{" "}
      <br />
      <SexualOrientationChart
        getHrefImage={getHrefImage}
        chartData={selectedEventsOutputs}
        selectedDate={selectedDate}
      />
    </section>
  );
};

export default CommunitySection;