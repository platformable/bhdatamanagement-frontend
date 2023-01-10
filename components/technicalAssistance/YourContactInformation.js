import React from 'react';

const YourContactInformation = () => {
    return (
        <div className="question-body">
      <h2 className="mb-7 font-black">Your Contact Information</h2>
      <label className="grid items-center">
        {" "}
        Name:
        <input
          type="text"
          className="w-134 p-2 border-black rounded text-lg mt-2"
          placeholder="Presenter/facilitator"
          onChange={(e) => {
            setFirstPresenter(e.target.value);
          }}
          defaultValue={firstPresenter}
        />
      </label>
      <label className="grid items-center mt-5">
        {" "}
        Email address:
        <input
          type="text"
          className="w-134 p-2 border-black rounded text-lg mt-2 "
          placeholder="Presenter/facilitator"
          onChange={(e) => {
            setSecondPresenter(e.target.value);
          }}
          defaultValue={secondPresenter}
        />
      </label>
      <label className="grid items-center mt-5">
        {" "}
        Phone number:
        <input
          type="text"
          className="w-134 p-2 border-black rounded text-lgmt-2 "
          placeholder="Presenter/facilitator"
          onChange={(e) => {
            setThirdPresenter(e.target.value);
          }}
          defaultValue={thirdPresenter}
        />
      </label>

    </div>
    );
}

export default YourContactInformation;
