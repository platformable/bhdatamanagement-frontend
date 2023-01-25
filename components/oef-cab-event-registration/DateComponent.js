import React from "react";


const DateComponent = ({eventForm,setEventForm}) => {
 

  const handleForm = (e) => {
    setEventForm(previous => ({...previous, eventDate: e.target.value}))
  }

  console.log("eventForm",eventForm)
  return (
    <label className="flex flex-col">
      <h2 className=" font-black">
       Event date
      </h2><br />
      <input type="date" 
      name="eventDate" 
      className='border rounded p-2 text-lg w-48' 
      onChange={handleForm}
      defaultValue={'' || eventForm?.eventDate.split('T')[0] }
      />
    </label>
  );
}

export default DateComponent;



