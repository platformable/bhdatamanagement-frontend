import React from 'react'
import DemographicSurveySection from '../post-event-report/DemographicSurveySection';

const HIVSection = () => {
    const handleForm = (e) => setSurveyForm((prev) =>({...prev, [e.target.name]: e.target.value}));
   
    return (
      <div className="question-body">
        <h2 className="font-black">
        Please upload the HIV testing form here:
        </h2>
        <div className='grid'>
          <div className='question-body'>
            <h2 className='font-black'>Please upload the HIV testing form here:</h2>
          <label>
            <input type="file" />
          </label>
          </div>

          <div className='question-body'>
            <h2 className='font-black'>HIV Testing Agency</h2>
          <label>
            <input type="text" />
          </label>
          </div>

          <div className='question-body'>
            <h2 className='font-black'>Total tested for HIV (must match number on the testing sheet)</h2>
          <label>
            <input type="number" />
          </label>
          </div>

          <div className='question-body'>
            <h2 className='font-black'>Total # of Reactive Results</h2>
          <label>
            <input type="number" />
          </label>
          </div>

          <div className='question-body'>
            <h2 className='font-black'>Total # of PrEP Referrals</h2>
          <label>
            <input type="number" />
          </label>
          </div>

          <div className='question-body'>
            <h2 className='font-black'>Total # Linked to Care</h2>
          <label>
            <input type="number" />
          </label>
          </div>

          <div className='question-body'>
            <h2 className='font-black'>Which services were they referred to?</h2>
          <label>
            <input type="text" />
          </label>
          </div>

          <DemographicSurveySection typeOfTest={'hiv'} />
        </div>
      </div>
    );
}

export default HIVSection