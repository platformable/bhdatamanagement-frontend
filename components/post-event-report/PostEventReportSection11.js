import React from 'react';

const PostEventReportSection11 = ({eventForm, setEventForm}) => {
  const handleForm = (e) => {
    let {value} = e.target
      let finalValue;
      value > 100 ? finalValue = 100:finalValue=value
      setEventForm((previous) => ({
        ...previous,
        [e.target.name]:Number(finalValue)
      }))
  }
    return (
      <div className="p-5 rounded">
      <h2 className="mb-3 font-black">
         How many ADULT volunteers helped you?
      </h2>
      <div className='flex gap-5'>
        {/* <img src='/post_event_report/ADULT_volunteers_icon.svg' alt='adult volunteers icon' /> */}
      <input
        type="number"
        onWheelCapture={(e) => e.target.blur()}
        onKeyUp={(e) => {
          let {value} = e.target
          value > 100 && (e.target.value = 100) 
        }}
        maxLength={3}
        defaultValue={0}
        className="p-2 border-black rounded w-20"
        placeholder="Type a number"
        name="adultVolunteers"
        onChange={handleForm}
      />
    </div>
    </div>
    );
}

export default PostEventReportSection11;
