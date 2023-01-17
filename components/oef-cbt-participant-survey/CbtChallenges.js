import React from 'react';

const CbtChallenges = ({surveyForm,setSurveyForm}) => {
    return (
        <div className='question-body'>
      <h2 className="mb-7 font-black">What challenges might you face when using the information from today's session to improve how HIV is discussed in your faith-based or community organization?</h2>
      <label htmlFor="cbtChallenges">
        <textarea
          className="p-4 block w-full text-lg h-52 bg-white break-all border-black rounded-md overflow-hidden"
          role="textbox"
          name="cbtChallenges"
          placeholder=""
          onChange={(e) =>
            setSurveyForm((previous) => ({
              ...previous,
              [e.target.name]: e.target.value,
            }))
          }
          defaultValue={surveyForm ? surveyForm.cbtChallenges : ""}
        />
      </label>
    </div>
    );
}

export default CbtChallenges;
