import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { NYSZipCodesAndBoroughs } from "../../../../utils/sharedData";

import FboRadioList from "../../../../components/oef-cbt-quarterly-evaluation-survey/FboRadioList";
import RadioGroup from "../../../../components/oef-cbt-quarterly-evaluation-survey/RadioGroup";
import TwoColumnsCheckbox from "../../../../components/oef-cbt-quarterly-evaluation-survey/TwoColumnsCheckbox";
import OneColumnCheckbox from "../../../../components/oef-cbt-quarterly-evaluation-survey/OneColumnCheckbox";
import Status from "../../../../components/oef-cbt-quarterly-evaluation-survey/Status";
import Rating from "../../../../components/oef-cbt-quarterly-evaluation-survey/Rating";
import TextArea from "../../../../components/oef-cbt-quarterly-evaluation-survey/TextArea";
import RadioBoolean from "../../../../components/oef-cbt-quarterly-evaluation-survey/RadioBoolean";
import NumberLimits from "../../../../components/oef-cbt-quarterly-evaluation-survey/NumberLimits";

const Survey = ({ event, fbos }) => {
  const [showDemographicsForm, setShowDemographicsForm] = useState(false);
  const [error, setError] = useState("");

  const notifyMessage = () => {
    toast.success("Survey saved!", {
      position: toast.POSITION.TOP_CENTER,
    });
  };

  const [surveyForm, setSurveyForm] = useState({
    participantPrepKnowledge: "",
    participantPrepUse: "",
    participantPrepResourceKnowledge: "",
    participantHivKnowledge: [],
    fboPosition: "",
    participantCbtActions: [],
    participantCreateSurvey: "",
    programId: 1,
    programName: "OEF",
    deliveryPartner: "",
    participantSurveyTool: [],
    participantSurveyGoal: "",
    participantConsentKnowledge: "",
    participantStiInfectionKnowledge: "",
    participantPepUsageKnowledge: "",
    participantDataCollecting: [],
    participantDataComfort: "",
    participantDataUse: [],
    participantDataUseOther: "",
    participantFboEngagement: "",
    participantFboImprove: "",
    participantFboFeedbackResponse: "",
    participantInfoUnderstandable: "",
    participantInfoAccessible: "",
    participantCabCreation: "",
    participantCabRecruitment: "",
    participantCabImpact: "",
    participantCabMembers: "",
    participantFboStrategy: "",
    participantTargetGroups: [],
    participantTargetGroupsOther: "",
    participantYouthMinistryCreation: "",
    participantYouthMinistryRecruitment: "",
    participantFboYouth: "",
    participantGrantsIdentify: "",
    participantGrantsApplied: "",
    participantGrantsProcess: "",
    participantGrantsMore: "",
    participantGrantsSuccess: "",
    participantGrantsWhySuccess: "",
    participantGrantsLearned: "",
    surveyName: "cbt-quarterly-evaluation",
  });
  console.log("form", surveyForm);

  const router = useRouter();

  const handleDemographicsSurvey = (e) => {
    e.target.value === "true"
      ? setShowDemographicsForm((prev) => true)
      : setShowDemographicsForm((prev) => false);
  };

  const submitParticipantSurvey = async () => {
    setError("");

    // const isEmpty = Object.entries(surveyForm).some(([key, value]) =>

    //   key === "participantReferralOther" ||
    //   key === "participantSuggestions" ||
    //   key === "participantSexualIdentityOther" ||
    //   key === "participantRaceOther" ||
    //   key === "participantEthnicityOther" ||
    //   key === "participantRaceOther" ||
    //   key === "participantOrientationOther"
    //     ? false
    //     : value === 0 || value.length === 0
    // );
    // if (isEmpty) {
    //   setError("Please complete all fields");
    //   return;
    // }
    axios
      .post(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/participant_event_outputs/oef-cbt-quarterly-evaluation-survey/create`,
        surveyForm
      )
      .then((response) => {
        if (response.data.statusText === "OK") {
          notifyMessage();
          setTimeout(() => {
            router.push(`/oef/cbt/quarterly-evaluation/success`);
          }, 1000);
        }
      })
      .catch(function (error) {
        // setResponseStatus({
        //   success: false,
        //   statusMessage: "Request Failed",
        // });
        // setShowResponseStatus(!showResponseStatus);
        setError("Something went wrong, try again");
        console.error("error: ", error);
      })
    //   } else {
    //     setResponseStatus({
    //       success: false,
    //       statusMessage: "Please complete all the fields",
    //     });
    //     setShowResponseStatus(!showResponseStatus);
    //  }
  };


  const fboRolesOptions = [
    { d: 1, value: "Coordinator" },
    { id: 2, value: "Leader (Pastor, Imam, Deacon)" },
    { id: 3, value: "Community Member" },
    { id: 4, value: "Data Entry Assistant" },
    { id: 5, value: "Ministry Member" },
  ];

  const participantCbtActionsOptions = [
    { id: 1, value: "Created surveys" },
    { id: 2, value: "Collected and used data" },
    { id: 3, value: "Use story telling to engage the community" },
    {
      id: 4,
      value:
        "Shared information about HIV, PrEP and sexual health (including posters, pamphlets, other communcations materials)",
    },
    {
      id: 5,
      value:
        "Created a Community Advisory Board to partner with other local community organizations",
    },
    {
      id: 6,
      value: "Previously done HIV outreach work (Outreach events and testing)",
    },
    { id: 7, value: "Created a youth ministry around HIV" },
    {
      id: 8,
      value:
        "Applied for a grant/s - outcome not known or was not successful (Identified and applied to grants)",
    },
    { id: 9, value: "Successfully applied for a grant (Received grant)" },
    { id: 10, value: "No actions undertaken yet" },
  ];

  const participantCreateSurveyOptions = [
    {
      id: 1,
      value: "Very Difficult",
      text: "Very Difficult",
      bgColor: "stronglyDisagreeBg",
      bgColorHover: "hover:stronglyDisagreeBg",
    },
    {
      id: 2,
      value: "Difficult",
      text: "Difficult",
      bgColor: "disagreeBg",
      bgColorHover: "hover:disagreeBg",
    },
    {
      id: 3,
      value: "Average",
      text: "Average",
      bgColor: "neitherAgreeOrDisagreeBg",
      bgColorHover: "hover:neitherAgreeOrDisagreeBg",
    },
    {
      id: 4,
      value: "Easy",
      text: "Easy",
      bgColor: "agreeBg",
      bgColorHover: "hover:agreeBg",
    },
    {
      id: 5,
      value: "Very Easy",
      text: "Very Easy",
      bgColor: "stronglyAgreeBg",
      bgColorHover: "hover:stronglyAgreeBg",
    },
  ];

  const participantCabCreationOptions = [
    {
      id: 1,
      value: "Very Difficult",
      text: "Very Difficult",
      bgColor: "stronglyDisagreeBg",
      bgColorHover: "hover:stronglyDisagreeBg",
    },
    {
      id: 2,
      value: "Difficult",
      text: "Difficult",
      bgColor: "disagreeBg",
      bgColorHover: "hover:disagreeBg",
    },
    {
      id: 3,
      value: "Average",
      text: "Average",
      bgColor: "neitherAgreeOrDisagreeBg",
      bgColorHover: "hover:neitherAgreeOrDisagreeBg",
    },
    {
      id: 4,
      value: "Easy",
      text: "Easy",
      bgColor: "agreeBg",
      bgColorHover: "hover:agreeBg",
    },
    {
      id: 5,
      value: "Very Easy",
      text: "Very Easy",
      bgColor: "stronglyAgreeBg",
      bgColorHover: "hover:stronglyAgreeBg",
    },
  ];

  const participantDataComfortOptions = [
    {
      id: 1,
      value: "Very Unconfortable",
      text: "Very Unconfortable",
      bgColor: "stronglyDisagreeBg",
      bgColorHover: "hover:stronglyDisagreeBg",
    },
    {
      id: 2,
      value: "Unconfortable",
      text: "Unconfortable",
      bgColor: "disagreeBg",
      bgColorHover: "hover:disagreeBg",
    },
    {
      id: 3,
      value: "Neutral",
      text: "Neutral",
      bgColor: "neitherAgreeOrDisagreeBg",
      bgColorHover: "hover:neitherAgreeOrDisagreeBg",
    },
    {
      id: 4,
      value: "Comfortable",
      text: "Comfortable",
      bgColor: "agreeBg",
      bgColorHover: "hover:agreeBg",
    },
    {
      id: 5,
      value: "Very Comfortable",
      text: "Very Comfortable",
      bgColor: "stronglyAgreeBg",
      bgColorHover: "hover:stronglyAgreeBg",
    },
  ];

  const participantDataCollectingOptions = [
    { id: 1, value: "Quantitative (statistical, number data)" },
    {
      id: 2,
      value:
        "Qualitative  (descriptive relating to words and language; story data)",
    },
  ];

  const participantSurveyToolOptions = [
    { id: 1, value: "Survey Monkey" },
    { id: 2, value: "Google Forms" },
    { id: 3, value: "Excel" },
    { id: 4, value: "Google Sheets" },
    { id: 5, value: "Other" },
  ];

  const participantDataUseOptions = [
    { id: 1, value: "Better strategize FBO events" },
    { id: 2, value: "Applied for public health funding" },
    { id: 3, value: "Quantitative (statistical, number data)" },
    { id: 4, value: "Reporting to your community" },
    { id: 5, value: "Reporting to Black Health" },
    { idd: 6, value: "Other" },
  ];

  const participantFboEngagementOptions = [
    {
      id: 1,
      value: "Strongly Disagree",
      text: "Strongly Disagree",
      bgColor: "stronglyDisagreeBg",
      bgColorHover: "hover:stronglyDisagreeBg",
    },
    {
      id: 2,
      value: "Disagree",
      text: "Disagree",
      bgColor: "disagreeBg",
      bgColorHover: "hover:disagreeBg",
    },
    {
      id: 3,
      value: "Neutral",
      text: "Neutral",
      bgColor: "neitherAgreeOrDisagreeBg",
      bgColorHover: "hover:neitherAgreeOrDisagreeBg",
    },
    {
      id: 4,
      value: "Agree",
      text: "Agree",
      bgColor: "agreeBg",
      bgColorHover: "hover:agreeBg",
    },
    {
      id: 5,
      value: "Strongly Agree",
      text: "Strongly Agree",
      bgColor: "stronglyAgreeBg",
      bgColorHover: "hover:stronglyAgreeBg",
    },
  ];

  const participantInfoUnderstandableOptions = [
    {
      id: 1,
      value: "Strongly Disagree",
      text: "Strongly Disagree",
      bgColor: "stronglyDisagreeBg",
      bgColorHover: "hover:stronglyDisagreeBg",
    },
    {
      id: 2,
      value: "Disagree",
      text: "Disagree",
      bgColor: "disagreeBg",
      bgColorHover: "hover:disagreeBg",
    },
    {
      id: 3,
      value: "Neutral",
      text: "Neutral",
      bgColor: "neitherAgreeOrDisagreeBg",
      bgColorHover: "hover:neitherAgreeOrDisagreeBg",
    },
    {
      id: 4,
      value: "Agree",
      text: "Agree",
      bgColor: "agreeBg",
      bgColorHover: "hover:agreeBg",
    },
    {
      id: 5,
      value: "Strongly Agree",
      text: "Strongly Agree",
      bgColor: "stronglyAgreeBg",
      bgColorHover: "hover:stronglyAgreeBg",
    },
  ];

  const participantInfoAccessibleOptions = [
    {
      id: 1,
      value: "Strongly Disagree",
      text: "Strongly Disagree",
      bgColor: "stronglyDisagreeBg",
      bgColorHover: "hover:stronglyDisagreeBg",
    },
    {
      id: 2,
      value: "Disagree",
      text: "Disagree",
      bgColor: "disagreeBg",
      bgColorHover: "hover:disagreeBg",
    },
    {
      id: 3,
      value: "Neutral",
      text: "Neutral",
      bgColor: "neitherAgreeOrDisagreeBg",
      bgColorHover: "hover:neitherAgreeOrDisagreeBg",
    },
    {
      id: 4,
      value: "Agree",
      text: "Agree",
      bgColor: "agreeBg",
      bgColorHover: "hover:agreeBg",
    },
    {
      id: 5,
      value: "Strongly Agree",
      text: "Strongly Agree",
      bgColor: "stronglyAgreeBg",
      bgColorHover: "hover:stronglyAgreeBg",
    },
  ];

  const participantTargetGroups = [
    { id: 1, value: "Adolescents" },
    { id: 2, value: "General population" },
    { id: 3, value: "Heterosexual Men" },
    { id: 4, value: "Heterosexual Women" },
    { id: 5, value: "Trans/Non-binary people" },
    { id: 6, value: "Lesbian/Gay/Bisexual people" },
    {
      id: 7,
      value:
        "MSM: Men who have sex with men, regardless of their sexual identity",
    },
    { id: 8, value: "Other" },
  ];
  const difficultLevelOptions = [
    {
      id: 1,
      value: "Very Difficult",
      text: "Very Difficult",
      bgColor: "stronglyDisagreeBg",
      bgColorHover: "hover:stronglyDisagreeBg",
    },
    {
      id: 2,
      value: "Difficult",
      text: "Difficult",
      bgColor: "disagreeBg",
      bgColorHover: "hover:disagreeBg",
    },

    {
      id: 3,
      value: "Average",
      text: "Average",
      bgColor: "neitherAgreeOrDisagreeBg",
      bgColorHover: "hover:neitherAgreeOrDisagreeBg",
    },
    {
      id: 4,
      value: "Easy",
      text: "Easy",
      bgColor: "agreeBg",
      bgColorHover: "hover:agreeBg",
    },

    {
      id: 5,
      value: "Very Easy",
      text: "Very Easy",
      bgColor: "stronglyAgreeBg",
      bgColorHover: "hover:stronglyAgreeBg",
    },
  ];
  const participantHivKnowledge = [
    { id: 1, value: "Massaging, hugging, kissing" },
    { id: 2, value: "Oral sex" },
    { id: 3, value: "Sex with an HIV-positive sex partner" },
    { id: 4, value: "Sex without a condom" },
    {
      id: 5,
      value: "Sex without a condom with a partner whose HIV status is unknown",
    },
    { id: 6, value: "Sharing needles" },
  ];
  const yesOrNoLevels = [
    {
      id: 1,
      value: "No",
      text: "No",
      bgColor: "stronglyDisagreeBg",
      bgColorHover: "hover:stronglyDisagreeBg",
    },

    {
      id: 2,
      value: "Unsure",
      text: "Unsure",
      bgColor: "neitherAgreeOrDisagreeBg",
      bgColorHover: "hover:neitherAgreeOrDisagreeBg",
    },
    {
      id: 3,
      value: "Yes",
      text: "Yes",
      bgColor: "stronglyAgreeBg",
      bgColorHover: "hover:stronglyAgreeBg",
    },
  ];
  const trueOrFalseLevels = [
    {
      id: 1,
      value: "False",
      text: "False",
      bgColor: "stronglyDisagreeBg",
      bgColorHover: "hover:stronglyDisagreeBg",
    },
    {
      id: 2,
      value: "Unsure",
      text: "Unsure",
      bgColor: "neitherAgreeOrDisagreeBg",
      bgColorHover: "hover:neitherAgreeOrDisagreeBg",
    },

    {
      id: 3,
      value: "True",
      text: "True",
      bgColor: "stronglyAgreeBg",
      bgColorHover: "hover:stronglyAgreeBg",
    },
  ];

  const isInparticipantCbtActions = surveyForm.participantCbtActions;

  return (
    <>
      <div>
        <div className="h-88 py-10 container mx-auto mt-3 flex flex-col items-center rounded-lg border-black">
          <h1 className="text-center font-black">
             CBT Quarterly Evaluation Survey
          </h1>
          <div className="flex items-center gap-5 mt-5">
            <h2 className="pt-2">In partnership with</h2>
            <img
              src="/main/BH_logo.svg"
              alt="black health data app management logo"
              width={400}
              className=""
            />{" "}
          </div>
        </div>
        <ToastContainer autoClose={1500} />

        <main className="container mx-auto  md:px-0 px-5">
          <div className="form-body border-black my-10">
            <FboRadioList
              surveyForm={surveyForm}
              setSurveyForm={setSurveyForm}
              fbos={fbos}
              title="Which FBO are you from?"
              stateValue="deliveryPartner"
            />
            <RadioGroup
              surveyForm={surveyForm}
              setSurveyForm={setSurveyForm}
              options={fboRolesOptions}
              title="What is your role in your  FBO?"
              stateValue="fboPosition"
            />

            <TwoColumnsCheckbox
              surveyForm={surveyForm}
              setSurveyForm={setSurveyForm}
              options={participantCbtActionsOptions}
              stateValue={"participantCbtActions"}
              title="Which of the following actions have you undertaken?"
            />

            {isInparticipantCbtActions.includes("Created surveys") ? (
              <section className="created-survey">
                <h2 className="font-black px-7">Created surveys:</h2>
                <Status
                  surveyForm={surveyForm}
                  setSurveyForm={setSurveyForm}
                  title="What did you think about the process of creating a survey?"
                  options={participantCreateSurveyOptions}
                  stateValue="participantCreateSurvey"
                />
                <OneColumnCheckbox
                  surveyForm={surveyForm}
                  setSurveyForm={setSurveyForm}
                  title="What program did you use to create your surveys?"
                  stateValue="participantSurveyTool"
                  options={participantSurveyToolOptions}
                />

                <TextArea
                  surveyForm={surveyForm}
                  setSurveyForm={setSurveyForm}
                  title="What were your main goals for the survey/s?"
                  stateValue="participantSurveyGoal"
                />
              </section>
            ) : null}

            {isInparticipantCbtActions.includes("Collected and used data") ? (
              <section>
                <h2 className="font-black px-7">Collected and used data:</h2>
                <OneColumnCheckbox
                  surveyForm={surveyForm}
                  setSurveyForm={setSurveyForm}
                  title="What type of data was collected? Can choose more than one"
                  stateValue="participantDataCollecting"
                  options={participantDataCollectingOptions}
                />

                <Rating
                  surveyForm={surveyForm}
                  setSurveyForm={setSurveyForm}
                  title="How comfortable do you feel collecting and using data?"
                  options={participantDataComfortOptions}
                  stateValue="participantDataComfort"
                />

                <OneColumnCheckbox
                  surveyForm={surveyForm}
                  setSurveyForm={setSurveyForm}
                  title="How have you used the data collected?"
                  stateValue="participantDataUse"
                  options={participantDataUseOptions}
                />
              </section>
            ) : null}

            {isInparticipantCbtActions.includes(
              "Use story telling to engage the community"
            ) ? (
              <section>
                <h2 className="font-black px-7">
                Use story telling to engage the community:
                </h2>

                <Rating
                  surveyForm={surveyForm}
                  setSurveyForm={setSurveyForm}
                  title="Do you think your FBO engages with your community as much as it could?"
                  options={participantFboEngagementOptions}
                  stateValue="participantFboEngagement"
                />

                <TextArea
                  surveyForm={surveyForm}
                  setSurveyForm={setSurveyForm}
                  title="In your opinion, what could your FBO do to improve engagement in the community?"
                  stateValue="participantFboImprove"
                />

                <TextArea
                  surveyForm={surveyForm}
                  setSurveyForm={setSurveyForm}
                  title="How does your FBO respond to and incorporate community feedback?"
                  stateValue="participantFboFeedbackResponse"
                />
              </section>
            ) : null}

            {isInparticipantCbtActions.includes(
              "Shared information about HIV, PrEP and sexual health (including posters, pamphlets, other communcations materials)"
            ) ? (
              <section>
                <h2 className="font-black px-7">
                  Shared information about HIV, PrEP and sexual health
                  (including posters, pamphlets, other communcations materials):
                </h2>

                <Rating
                  surveyForm={surveyForm}
                  setSurveyForm={setSurveyForm}
                  title="Is the information shared clear and easy to understand?"
                  options={participantInfoUnderstandableOptions}
                  stateValue="participantInfoUnderstandable"
                />

                <Rating
                  surveyForm={surveyForm}
                  setSurveyForm={setSurveyForm}
                  title="Is HIV, PrEP and sexual health information easily accessible to community members?"
                  options={participantInfoAccessibleOptions}
                  stateValue="participantInfoAccessible"
                />
              </section>
            ) : null}

            {isInparticipantCbtActions.includes(
              "Created a Community Advisory Board to partner with other local community organizations"
            ) ? (
              <section>
                <h2 className="font-black px-7">
                  Created a Community Advisory Board to partner with other local
                  community organizations:
                </h2>

                <Rating
                  surveyForm={surveyForm}
                  setSurveyForm={setSurveyForm}
                  title="What did you think about the process of creating a Community Advisory Board?"
                  options={participantCabCreationOptions}
                  stateValue="participantCabCreation"
                />

                <TextArea
                  surveyForm={surveyForm}
                  setSurveyForm={setSurveyForm}
                  title="Please describe the recruitment/selection process?"
                  stateValue="participantCabRecruitment"
                />

                <TextArea
                  surveyForm={surveyForm}
                  setSurveyForm={setSurveyForm}
                  title="How does your CAB help improve FBO impact?"
                  stateValue="participantCabImpact"
                />

                <TextArea
                  surveyForm={surveyForm}
                  setSurveyForm={setSurveyForm}
                  title="Please provide CAB member names and roles."
                  stateValue="participantCabMembers"
                />
              </section>
            ) : null}
            <div>
              {isInparticipantCbtActions.includes("Previously done HIV outreach work (Outreach events and testing)") && (
                <>
                <h2 className="font-black mt-10 px-7">Previously done HIV outreach work (Outreach events and testing):</h2>
                <TextArea
                  surveyForm={surveyForm}
                  setSurveyForm={setSurveyForm}
                  title="What is your FBO’s strategy for HIV outreach? "
                  stateValue="participantFboStrategy"
                />

              <TwoColumnsCheckbox
                stateValue="participantTargetGroups"
                options={participantTargetGroups}
                surveyForm={surveyForm}
                setSurveyForm={setSurveyForm}
                title="Which group(s) do you think are most important to reach out to?  "
              />
                </>
              )}
              
              {isInparticipantCbtActions.includes(
                "Created a youth ministry around HIV"
              ) && (
                <>
                <h2 className="mt-10 font-black px-7">
                Created a youth ministry around HIV
              </h2>
                  <Rating
                    stateValue="participantYouthMinistryCreation"
                    options={difficultLevelOptions}
                    surveyForm={surveyForm}
                    setSurveyForm={setSurveyForm}
                    title="What did you think about the process of creating a youth ministry?"
                  />
                  <TextArea
                    stateValue="participantYouthMinistryRecruitment"
                    surveyForm={surveyForm}
                    setSurveyForm={setSurveyForm}
                    title="Can you describe the recruitment process?"
                  />
                  <TextArea
                    stateValue="participantFboYouth"
                    surveyForm={surveyForm}
                    setSurveyForm={setSurveyForm}
                    title="In what ways do you think your FBO could be more involved with the youth in the community? "
                  />
                </>
              )}
              
              {isInparticipantCbtActions.includes(
                "Applied for a grant/s - outcome not known or was not successful (Identified and applied to grants)"
              ) && (
                <>
                <h2 className="mt-10 font-black px-7">
                Applied for a grant/s - outcome not known or was not successful
                (Identified and applied to grants)
              </h2>
                  <TextArea
                    stateValue="participantGrantsIdentify"
                    surveyForm={surveyForm}
                    setSurveyForm={setSurveyForm}
                    title="How did you identify grants to apply for?"
                  />
                  <NumberLimits
                    stateValue="participantGrantsApplied"
                    surveyForm={surveyForm}
                    setSurveyForm={setSurveyForm}
                    title="How many grants did you apply to?"
                  />
                  <Rating
                    stateValue="participantGrantsProcess"
                    options={difficultLevelOptions}
                    surveyForm={surveyForm}
                    setSurveyForm={setSurveyForm}
                    title="How was the process of identifying and applying for grants?"
                  />
                  <TextArea
                    stateValue="participantGrantsMore"
                    surveyForm={surveyForm}
                    setSurveyForm={setSurveyForm}
                    title="Will you apply for more grants?"
                  />
                </>
              )}
              
              {isInparticipantCbtActions.includes(
                "Successfully applied for a grant (Received grant)"
              ) && (
                <>
                <h2 className="mt-10 font-black px-7">
                Successfully applied for a grant (Received grant)
              </h2>
                  <TextArea
                    stateValue="participantGrantsSuccess"
                    surveyForm={surveyForm}
                    setSurveyForm={setSurveyForm}
                    title="Which grant did you receive?"
                  />
                  <TextArea
                    stateValue="participantGrantsWhySuccess"
                    surveyForm={surveyForm}
                    setSurveyForm={setSurveyForm}
                    title="Why do you think you were successful in this grant?"
                  />
                  <TextArea
                    stateValue="participantGrantsLearned"
                    surveyForm={surveyForm}
                    setSurveyForm={setSurveyForm}
                    title="What did you learn through this successful grant application?"
                  />
                  <TextArea
                    stateValue="participantGrantsSuccessMore"
                    surveyForm={surveyForm}
                    setSurveyForm={setSurveyForm}
                    title="Will you apply for more grants?"
                  />
                </>
              )}
              <TwoColumnsCheckbox
                stateValue="participantHivKnowledge"
                options={participantHivKnowledge}
                surveyForm={surveyForm}
                setSurveyForm={setSurveyForm}
                title="Which of the following can put you at risk for sexually transmitted HIV?"
                message="Select all that apply."
              />

              <RadioBoolean
                stateValue="participantPrepKnowledge"
                options={[
                  { id: 1, value: false, text: "No" },
                  { id: 2, value: true, text: "Yes" },
                ]}
                surveyForm={surveyForm}
                setSurveyForm={setSurveyForm}
                title="Have you heard of PrEP?"
              />
              <RadioBoolean
                stateValue="participantPrepResourceKnowledge"
                options={[
                  { id: 1, value:  "No", text: "No" },
                  { id: 2, value: "Yes", text: "Yes" },
                  { id: 3, value: "Unsure", text: "Unsure" },
                ]}
                surveyForm={surveyForm}
                setSurveyForm={setSurveyForm}
                title="Are you aware of resources within your community where PrEP can be obtained?"
              />
            {/*   <Rating
                stateValue="participantPrepResourceKnowledge"
                options={yesOrNoLevels}
                surveyForm={surveyForm}
                setSurveyForm={setSurveyForm}
                title="Are you aware of resources within your community where PrEP can be obtained?"
              /> */}
              <h2 className="mt-10 font-black px-7">
                Please reply with "True" or "False" or "Unsure" to each of the
                following statements
              </h2>
              <RadioGroup
                stateValue="participantConsentKnowledge"
                options={trueOrFalseLevels}
                surveyForm={surveyForm}
                setSurveyForm={setSurveyForm}
                title="Consent can be taken away at any point, even after it has been given"
              />
              <RadioGroup
                stateValue="participantStiInfectionKnowledge"
                options={trueOrFalseLevels}
                surveyForm={surveyForm}
                setSurveyForm={setSurveyForm}
                title="You will always know when you have an STI"
              />
              <RadioGroup
                stateValue="participantPepUsageKnowledge"
                options={trueOrFalseLevels}
                surveyForm={surveyForm}
                setSurveyForm={setSurveyForm}
                title="Post-exposure prophylaxis (PEP) can be taken any time within 28 days after unprotected sex"
              />
              <RadioGroup
                stateValue="participantPrepUse"
                options={trueOrFalseLevels}
                surveyForm={surveyForm}
                setSurveyForm={setSurveyForm}
                title="PrEP is taken prior to exposure to HIV"
              />
            </div>
          </div>

          <div className="flex justify-center">
            <h3>
              Thank you! Your answers help us plan our services, demonstrate our
              focus on our community, and help us meet our funding commitments.
            </h3>
          </div>

          <div className="flex flex-col items-center gap-3 justify-center my-10">
            <button
              className="py-2 px-5 flex items-center rounded bg-black text-white font-semibold"
              /* onClick={(e)=>{router.push("https://nblch.org/")}} */
              onClick={submitParticipantSurvey}
            >
              Save
            </button>
            {error && (
              <center className="text-red-500 text-lg font-bold">
                {error}
              </center>
            )}
          </div>
        </main>
      </div>
    </>
  );
};

export default Survey;

export const getServerSideProps = async (ctx) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/fbos`);
  const fbos = await res.json();
  return {
    props: {
      fbos: fbos,
    },
  };
};
