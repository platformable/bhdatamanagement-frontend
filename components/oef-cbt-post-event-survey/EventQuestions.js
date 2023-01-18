import React from 'react';

const EventQuestions = ({ eventForm, setEventForm }) => {
    return (
        <div className="question-body">
      <h2 className="mb-7 font-black">
      What other topics or discussions did participants raise?
      </h2>
      <label >
        <textarea
          className="p-4 block w-full text-lg h-52 bg-white break-all border-black rounded-md overflow-hidden"
          role="textbox"
          name="eventQuestions"
          placeholder=""
          onChange={(e) =>
            setEventForm((previous) => ({
              ...previous,
              [e.target.name]: e.target.value,
            }))
          }
          defaultValue={eventForm?.eventQuestions}
        />
      </label>
    </div>
    );
}

export default EventQuestions;
