import React from 'react'

const IsClusterEvent = () => {
    const handleForm = (e) => setSurveyForm((prev) =>({...prev, [e.target.name]: e.target.value}));
    const options=[
      {
        id:1,
        value:"Yes"
      },
      {
        id:2,
        value:"No"
      },
      {
        id:3,
        value:"Don’t know / Not sure"
      },
    ]
    return (
      <div className="question-body">
        <h2 className="font-black">
        
        </h2>
        <div>
          {options.map((option, index) => (
            <label key={index}>
            <input type="radio" name="" value={option.value} onChange={handleForm}/>
            <p>{option.value}</p>
          </label>
          ))}
        </div>
      </div>
    );
}

export default IsClusterEvent