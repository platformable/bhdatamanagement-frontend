import React from 'react';

const ParticipantSuggestions = ({surveyForm,setSurveyForm}) => {
    return (
        <div className='question-body'>
        <h2 className="mb-7 font-black">Any other feedback or comments you would like to share?</h2>
        <label htmlFor="participantSuggestions">
          <textarea
            className="p-4 block w-full text-lg h-52 bg-white break-all border-black rounded-md overflow-hidden"
            role="textbox"
            name="participantSuggestions"
            placeholder=""
            onChange={(e) =>
              setSurveyForm((previous) => ({
                ...previous,
                [e.target.name]: e.target.value,
              }))
            }
            defaultValue={surveyForm ? surveyForm.participantSuggestions : ""}
          />
        </label>
      </div>
    );
}

export default ParticipantSuggestions;
