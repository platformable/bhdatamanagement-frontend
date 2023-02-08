import React from 'react';


const EventChallenges = ({eventForm,setEventForm}) => {
    return (
        <div className='question-body'>
      <h2 className="mb-7 font-black">Were there any other challenges in running the workshop?</h2>
      <label htmlFor="cbtChallenges">
        <textarea
          className="p-4 block w-full text-lg h-52 bg-white break-all border-black rounded-md overflow-hidden"
          role="textbox"
          name="eventChallenges"
          placeholder=""
          onChange={(e) =>
            setEventForm((previous) => ({
              ...previous,
              [e.target.name]: e.target.value,
            }))
          }
          defaultValue={eventForm ? eventForm.eventChallenges : ""}
        />
      </label>
    </div>

    );
}

export default EventChallenges;
