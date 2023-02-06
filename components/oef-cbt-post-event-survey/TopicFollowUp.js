import React from "react";

const TopicFollowUp = ({ eventForm, setEventForm }) => {
  return (
    <div className="question-body">
      <h2 className="mb-7 font-black">
        Were there any topics or discussions that you would like to follow up on
        or prepare additional resources for in future?
      </h2>
      <label >
        <textarea
          className="p-4 block w-full text-lg h-52 bg-white break-all border-black rounded-md overflow-hidden"
          role="textbox"
          name="topicsFollowup"
          placeholder=""
          onChange={(e) =>
            setEventForm((previous) => ({
              ...previous,
              [e.target.name]: e.target.value,
            }))
          }
          defaultValue={eventForm?.topicsFollowup}
        />
      </label>
    </div>
  );
};

export default TopicFollowUp;
