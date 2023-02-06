import React from 'react'

const Notes = ({submissionForm, setSubmissionForm}) => {
  return (
    <div className="question-body">
    <h2 className="mb-7 font-black">Notes</h2>
    <label >
      <textarea
        className="p-4 block w-full text-lg h-52 bg-white break-all border-black rounded-md overflow-hidden"
        role="textbox"
        name="submissionNotes"
        placeholder="Write notes here. They will be sent to the FBO once you have clicked “Save and email FBO”"
        onChange={(e) =>
          setSubmissionForm((previous) => ({
            ...previous,
            [e.target.name]: e.target.value,
          }))
        }
        defaultValue={submissionForm?.submissionNotes}
      />
    </label>
  </div>
  )
}

export default Notes