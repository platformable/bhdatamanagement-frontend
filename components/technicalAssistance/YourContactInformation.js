import React from 'react';

const YourContactInformation = ({form, setForm}) => {
    const handleForm = (e) => setForm(prev => ({...prev, [e.target.name]: e.target.value}))
    return (
        <div className="question-body">
      <h2 className="mb-7 font-black">Your Contact Information</h2>
      <label className="grid items-center">
        {" "}
        Name:
        <input
          type="text"
          className="w-134 p-2 border-black rounded text-lg mt-2"
          placeholder=''
          name="taContactName"
          onChange={handleForm}
        />
      </label>
      <label className="grid items-center mt-5">
        {" "}
        Email address:
        <input
          type="email"
          className="w-134 p-2 border-black rounded text-lg mt-2 "
          placeholder=''
          name="taEmail"
          onChange={handleForm}
        />
      </label>
      <label className="grid items-center mt-5">
        {" "}
        Phone number:
        <input
          type="text"
          className="w-134 p-2 border-black rounded text-lgmt-2 "
          placeholder=''
          name="taPhone"
          onChange={handleForm}
        />
      </label>

    </div>
    );
}

export default YourContactInformation;