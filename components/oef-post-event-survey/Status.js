import React from "react";

const Status = ({ submissionForm, setSubmissionForm }) => {
  const handleStatus = (e) => setSubmissionForm(prev => ({...prev, submissionStatus: e.target.value})) 
  return (
    <div className="question-body">
      <h2 className="font-black">Status:</h2>
      <div className="grid grid-cols-4 gap-20">
        <button className={`${submissionForm?.submissionStatus === 'Submitted'? 'submittedBg': null} border-black py-4 rounded shadow-lg`} onClick={handleStatus} value="Submitted">
          Submitted
        </button>
        <button className={`${submissionForm?.submissionStatus === 'Pending'? 'pendingBg': null} border-black py-4 rounded shadow-lg`} onClick={handleStatus} value="Pending">
          Pending
        </button>
        <button className={`${submissionForm?.submissionStatus === 'Complete'? 'completeBg': null} border-black py-4 rounded shadow-lg`} onClick={handleStatus} value="Complete">
          Complete
        </button>
        <button className={`${submissionForm?.submissionStatus === 'Declined'? 'declinedBg': null} border-black py-4 rounded shadow-lg`} onClick={handleStatus} value="Declined">
          Declined
        </button>
      </div>
    </div>
  );
};

export default Status;
