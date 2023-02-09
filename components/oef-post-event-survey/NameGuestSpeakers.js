import React, { useState, useEffect } from "react";

const nameGuestSpeakers = ({ eventForm, setEventForm, event }) => {
  const uppercaseWords = (str) =>
    str.replace(/^(.)|\s+(.)/g, (c) =>
      c.toUpperCase().replaceAll("[<>'\"/;% ]+", " ")
    );

    const guests=eventForm?.nameGuestSpeakers

  const [firstPresenter, setFirstPresenter] = useState(guests.split(',')[0] ||"");
  const [secondPresenter, setSecondPresenter] = useState(guests.split(',')[1] || "");
  const [thirdPresenter, setThirdPresenter] = useState(guests.split(',')[2] || "");
  const [fourthPresenter, setFourthPresenter] = useState(guests.split(',')[3] || "");
  /* 
    const handleFormName = (e) => {
        setEventForm(previous => ({...previous, createdByName: uppercaseWords(e.target.value)}))
      }
      const handleFormLastName = (e) => {
        setEventForm(previous => ({...previous, createdByLastname: uppercaseWords(e.target.value)}))
      } */
  useEffect(() => {

    setEventForm({
      ...eventForm,
      nameGuestSpeakers: `${firstPresenter && firstPresenter}${secondPresenter && ', ' + secondPresenter}${thirdPresenter && ', ' + thirdPresenter}${fourthPresenter && ', ' + fourthPresenter}`
    });
  }, [firstPresenter, secondPresenter, thirdPresenter, fourthPresenter]);

  return (
    <div className="question-body">
      <h2 className="mb-7 font-black">Names of all presenters / facilitators:</h2>
      <label className="grid items-center">
        {" "}
        First presenter/facilitator:
        <input
          type="text"
          className="md:w-1/3 w-5/6 p-2 border-black rounded text-lg mt-2"
          placeholder="Presenter/facilitator"
          onChange={(e) => {
            setFirstPresenter(e.target.value);
          }}
          defaultValue={firstPresenter}
        />
      </label>
      <label className="grid items-center mt-5">
        {" "}
        Second presenter/facilitator:
        <input
          type="text"
          className="md:w-1/3 w-5/6 w-full p-2 border-black rounded text-lg mt-2 "
          placeholder="Presenter/facilitator"
          onChange={(e) => {
            setSecondPresenter(e.target.value);
          }}
          defaultValue={secondPresenter}
        />
      </label>
      <label className="grid items-center mt-5">
        {" "}
        Third presenter/facilitator:
        <input
          type="text"
          className="md:w-1/3 w-5/6 w-full p-2 border-black rounded text-lgmt-2 "
          placeholder="Presenter/facilitator"
          onChange={(e) => {
            setThirdPresenter(e.target.value);
          }}
          defaultValue={thirdPresenter}
        />
      </label>

      <label className="grid items-center mt-5">
        {" "}
        Fourth presenter/facilitator:
        <input
          type="text"
          className="md:w-1/3 w-5/6 p-2 border-black rounded text-lg mt-2"
          placeholder="Presenter/facilitator"
          onChange={(e) => {
            setFourthPresenter(e.target.value);
          }}
          defaultValue={fourthPresenter}
        />
      </label>
    </div>
  );
};

export default nameGuestSpeakers;
