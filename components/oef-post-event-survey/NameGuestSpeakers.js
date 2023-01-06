import React, { useState, useEffect } from "react";

const nameGuestSpeakers = ({ eventForm, setEventForm, event }) => {
  const uppercaseWords = (str) =>
    str.replace(/^(.)|\s+(.)/g, (c) =>
      c.toUpperCase().replaceAll("[<>'\"/;% ]+", " ")
    );

  const [firstPresenter, setFirstPresenter] = useState("");
  const [secondPresenter, setSecondPresenter] = useState("");
  const [thirdPresenter, setThirdPresenter] = useState("");
  const [fourthPresenter, setFourthPresenter] = useState("");
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
      nameGuestSpeakers: [
        firstPresenter,
        secondPresenter,
        thirdPresenter,
        fourthPresenter,
      ].toString(),
    });
  }, [firstPresenter, secondPresenter, thirdPresenter, fourthPresenter]);

  return (
    <div className="question-body">
      <h2 className="mb-7 font-black">Names of all presenters/facilitators:</h2>
      <label className="grid items-center">
        {" "}
        First presenter/facilitator:
        <input
          type="text"
          className="w-134 p-2 border-black rounded text-lg mt-2"
          placeholder="Presenter/facilitator"
          onChange={(e) => {
            setFirstPresenter(e.target.value);
          }}
          defaultValue={event ? event.createdByName : ""}
        />
      </label>
      <label className="grid items-center mt-5">
        {" "}
        Second presenter/facilitator:
        <input
          type="text"
          className="w-134 p-2 border-black rounded text-lg mt-2 "
          placeholder="Presenter/facilitator"
          onChange={(e) => {
            setSecondPresenter(e.target.value);
          }}
          defaultValue={event ? event.createdByName : ""}
        />
      </label>
      <label className="grid items-center mt-5">
        {" "}
        Third presenter/facilitator:
        <input
          type="text"
          className="w-134 p-2 border-black rounded text-lgmt-2 "
          placeholder="Presenter/facilitator"
          onChange={(e) => {
            setThirdPresenter(e.target.value);
          }}
          defaultValue={event ? event.createdByName : ""}
        />
      </label>

      <label className="grid items-center mt-5">
        {" "}
        Fourth presenter/facilitator:
        <input
          type="text"
          className="w-134 p-2 border-black rounded text-lg mt-2"
          placeholder="Presenter/facilitator"
          onChange={(e) => {
            setFourthPresenter(e.target.value);
          }}
          defaultValue={event ? event.createdByName : ""}
        />
      </label>
    </div>
  );
};

export default nameGuestSpeakers;
