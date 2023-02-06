import React from 'react';

const OrganizerFeedback = ({ eventForm, setEventForm }) => {
    return (
        <div className='question-body'>
        <h2 className="mb-7 font-black">Do you have any other feedback or reflections to add?</h2>
        <label >
          <textarea
            className="p-4 block w-full text-lg h-52 bg-white break-all border-black rounded-md overflow-hidden"
            role="textbox"
            name="organizerFeedback"
            placeholder=""
            onChange={(e) =>
              setEventForm((previous) => ({
                ...previous,
                [e.target.name]: e.target.value,
              }))
            }
            defaultValue={eventForm?.organizerFeedback }
          />
        </label>
      </div>
    );
}

export default OrganizerFeedback;
