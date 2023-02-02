import React, { useState } from "react";
import TwoColumnCheckbox from "../../../components/oef-cbt-quarterly-evaluation-survey/TwoColumnsCheckbox";
import RadioBoolean from "../../../components/oef-cbt-quarterly-evaluation-survey/RadioBoolean";
import RadioGroup from "../../../components/oef-cbt-quarterly-evaluation-survey/RadioGroup";
import Rating from "../../../components/oef-cbt-quarterly-evaluation-survey/Rating";
import TextArea from "../../../components/oef-cbt-quarterly-evaluation-survey/TextArea";
import NumberLimits from "../../../components/oef-cbt-quarterly-evaluation-survey/NumberLimits";

const test = () => {
  const [surveyForm, setSurveyForm] = useState({
    participantCbtActions: [],
    participantTargetGroups: [],
    participantHivKnowledge: [],
  });

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
  return (
    <div>
      <TwoColumnCheckbox
        stateValue="participantTargetGroups"
        options={participantTargetGroups}
        surveyForm={surveyForm}
        setSurveyForm={setSurveyForm}
        title="Which group(s) do you think are most important to reach out to?  "
      />
      <h2 className="font-black">Created a youth ministry around HIV</h2>
      {surveyForm.participantCbtActions.includes("Created a youth ministry around HIV") && (
        <>
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
      <h2 className="font-black">Applied for a grant/s - outcome not known or was not successful (Identified and applied to grants)</h2>
      {surveyForm.participantCbtActions.includes("Applied for a grant/s - outcome not known or was not successful (Identified and applied to grants)") && (
        <>
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
      <h2 className="font-black">Successfully applied for a grant (Received grant)</h2>
      {surveyForm.participantCbtActions.includes("Successfully applied for a grant (Received grant)") && (
        <>
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
      <TwoColumnCheckbox
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
        message="Select all that apply."
      />
      <Rating
        stateValue="participantPrepResourceKnowledge"
        options={yesOrNoLevels}
        surveyForm={surveyForm}
        setSurveyForm={setSurveyForm}
        title="Are you aware of resources within your community where PrEP can be obtained?"
      />
      <h2 className="font-black">
        Please reply with "True" or "False" or "Unsure" to each of the following
        statements
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
        title="You will always know when you have an ST"
      />
      <RadioGroup
        stateValue="participantPepUsageKnowledge"
        options={trueOrFalseLevels}
        surveyForm={surveyForm}
        setSurveyForm={setSurveyForm}
        title="Post-exposure prophylaxis (PEP) can be taken any time within 28 days after unprotected sex"
      />
      <RadioGroup
        stateValue="participantPrEPUse"
        options={trueOrFalseLevels}
        surveyForm={surveyForm}
        setSurveyForm={setSurveyForm}
        title="PrEP is taken prior to exposure to HIV"
      />
    </div>
  );
};

export default test;
