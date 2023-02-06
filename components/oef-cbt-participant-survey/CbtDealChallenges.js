import React from 'react';

const CbtDealChallenges = ({surveyForm,setSurveyForm}) => {
    return (
        <div className='question-body'>
        <h2 className="mb-7 font-black">How do you plan to deal with these challenges?</h2>
        <label htmlFor="cbtDealChallenges">
          <textarea
            className="p-4 block w-full text-lg h-52 bg-white break-all border-black rounded-md overflow-hidden"
            role="textbox"
            name="cbtDealChallenges"
            placeholder=""
            onChange={(e) =>
              setSurveyForm((previous) => ({
                ...previous,
                [e.target.name]: e.target.value,
              }))
            }
            defaultValue={surveyForm ? surveyForm.cbtDealChallenges : ""}
          />
        </label>
      </div>
    );
}

export default CbtDealChallenges;
