import React from 'react';

const ParticipantTools = ({surveyForm,setSurveyForm}) => {
    return (
        <div className='question-body'>
        <h2 className="mb-7 font-black">What supports or tools that were mentioned in today's session will you seek to use when discussing HIV in your faith-based or community organization?</h2>
        <label htmlFor="participantTools">
          <textarea
            className="p-4 block w-full text-lg h-52 bg-white break-all border-black rounded-md overflow-hidden"
            role="textbox"
            name="participantTools"
            placeholder=""
            onChange={(e) =>
              setSurveyForm((previous) => ({
                ...previous,
                [e.target.name]: e.target.value,
              }))
            }
            defaultValue={surveyForm ? surveyForm.participantTools : ""}
          />
        </label>
      </div>
    );
}

export default ParticipantTools;
