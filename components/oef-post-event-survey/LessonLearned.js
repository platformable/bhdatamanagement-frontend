import React from "react";

const LessonLearned = ({eventForm,setEventForm,event}) => {
  return (
    <div className='question-body'>
      <h2 className="mb-7 font-black">Lessons Learned: Describe any new approaches or strategic lessons you will implement for the next event, and that can be shared with other event organizers.</h2>
      <label htmlFor="lessonsLearned">
        <textarea
          className="p-4 block md:w-full w-5/6 text-lg h-52 bg-white break-all border-black rounded-md overflow-hidden"
          role="textbox"
          name="lessonsLearned"
          placeholder=""
          onChange={(e) =>
            setEventForm((previous) => ({
              ...previous,
              [e.target.name]: e.target.value,
            }))
          }
          defaultValue={eventForm ? eventForm.lessonsLearned : ""}
        />
      </label>
    </div>
  );
};

export default LessonLearned;
