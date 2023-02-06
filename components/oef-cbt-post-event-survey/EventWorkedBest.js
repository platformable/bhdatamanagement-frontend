import React from 'react';

const EventWorkedBest = ({eventForm,setEventForm}) => {
    return (
        <div className='question-body'>
        <h2 className="mb-7 font-black">What do you think worked best with how the workshop was organized today?</h2>
        <label htmlFor="cbtChallenges">
          <textarea
            className="p-4 block w-full text-lg h-52 bg-white break-all border-black rounded-md overflow-hidden"
            role="textbox"
            name="eventWorkedBest"
            placeholder=""
            onChange={(e) =>
              setEventForm((previous) => ({
                ...previous,
                [e.target.name]: e.target.value,
              }))
            }
            defaultValue={eventForm ? eventForm.eventWorkedBest : ""}
          />
        </label>
      </div>
    );
}

export default EventWorkedBest;
