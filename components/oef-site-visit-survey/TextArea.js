import React from 'react'

export default function TextArea({ surveyForm,dispatch,updateFunction,stateValue,title }) {

  const handleForm = (e) => {
    dispatch(updateFunction({[stateValue]:e.target.value}))
  };
  return (
    <div className='question-body'>
      <h2 className="mb-7 font-black">{title}</h2>
      <label htmlFor="eventChallenges">
        <textarea
          className="p-4 block w-full text-lg h-52 bg-white break-all border-black rounded-md overflow-hidden"
          role="textbox"
          name="eventChallenges"
          placeholder=""
          onChange={handleForm}
          defaultValue={surveyForm ? surveyForm.strategiesHealthDisparities : ""}
        />
      </label>
    </div>
  )
}
