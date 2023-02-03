import React from 'react'

export default function TextArea({ surveyForm,setSurveyForm,stateValue,title }) {

  const handleForm = (e) => {
    setSurveyForm({...surveyForm,[stateValue]:e.target.value})
  };
  return (
    <div className='question-body'>
      <h2 className="mb-7 font-black">{title}</h2>
      <label htmlFor="">
        <textarea
          className="p-4 block w-full text-lg h-52 bg-white break-all border-black rounded-md overflow-hidden"
          role="textbox"
          name=""
          placeholder=""
          onChange={handleForm}
          defaultValue={surveyForm ? surveyForm[stateValue] : ""}
        />
      </label>
    </div>
  )
}
