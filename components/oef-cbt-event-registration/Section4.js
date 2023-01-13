import React from 'react'



const Section4 = ({eventForm,setEventForm}) => {

  return (
    <div className="">
      <h2 className="font-black mb-7">Event description</h2>
      <label>
      <textarea 
      type="number" 
      placeholder="Event description"
      className="p-4 block w-full text-lg h-52 bg-white break-all border-black rounded-md overflow-hidden "
      onChange={(e) => setEventForm(prev => ({...prev, [e.target.name]: e.target.value}))}
      name="eventDescription"
      defaultValue={eventForm?.eventDescription}
      />
      </label>
      
    </div>
  )
}

export default Section4