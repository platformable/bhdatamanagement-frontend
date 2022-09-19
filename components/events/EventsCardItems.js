import React from 'react'
import Link from 'next/link'

export default function EventsCardItems({id,
  selectedEventToDelete,setSelectedEventToDelete,
  setShowDeleteEventModal,showDeleteEventModal,
  userRole,eventdate,eventName,urlEdit,urlParticipantSurvey,
  urlUpload,urlPostEventSurvey,urlEditPostEventSurvey,
  postEventReportId

}) {
  
  const handleDeleteEvent=(id,eventName)=>{
    console.log(id)
    setSelectedEventToDelete({id:id,eventname:eventName})
    setShowDeleteEventModal(!showDeleteEventModal)
  }
  
  
  return (
    <div className="events-card-item  rounded-lg border-black p-5">
        {/* <div className="event-card-item-top flex justify-between my-2">
          <div>
            <h3 className="font-black pl-2">Event name</h3>
          </div>
          <div>
            <h3 className="font-black pr-2">Event date</h3>
          </div>
        </div> */}
        <div className="event-card-item-program-date   h-20   rounded-lg py-1">
            <h3 className=" font-black">{eventName}</h3>
            <h3 className=" font-black">{eventdate && new Date(eventdate).toLocaleDateString('en-US',{year:'numeric',month:'numeric',day:'numeric'})}</h3>
        </div>
        
      
        <div className="events-card-item-btn-container grid md:grid-cols-2 grid-cols-2 gap-5 my-3 ">
            <Link href={urlEdit}>
          <div className="events-card-item-btn bg-white text-black border-black-md p-5 flex justify-center items-center rounded-lg cursor-pointer shadow-xl hover:bg-black hover:text-white">
              <p className="text-center">Edit</p>
          </div>
          </Link>
          <Link href={urlParticipantSurvey}> 
          <div className="events-card-item-btn bg-white text-black border-black-md p-5 flex justify-center items-center rounded-lg cursor-pointer shadow-xl hover:bg-black hover:text-white">
              <p className="text-center"> Participant survey</p>
          </div>
          </Link>
          <Link href={urlUpload}> 
          <div className="events-card-item-btn bg-white text-black border-black-md p-5 flex justify-center items-center rounded-lg cursor-pointer shadow-xl hover:bg-black hover:text-white">
              <p className="text-center">Upload docs, photos, etc</p>
          </div>
          </Link>
          <Link href={postEventReportId ? urlEditPostEventSurvey: urlPostEventSurvey}> 
          <div className="events-card-item-btn bg-white text-black border-black-md p-5 flex justify-center items-center rounded-lg  cursor-pointer shadow-xl hover:bg-black hover:text-white">
              <p className="text-center">{postEventReportId ? "Edit post event survey": "Complete post event survey"}</p>
          </div>
          </Link>
        </div>
        {userRole==='Supervisor' &&  <div className="flex justify-center">
        <button className="bg-black py-2 px-5 rounded-lg text-white" onClick={()=>handleDeleteEvent(id,eventName)}>Delete event</button>
        </div>}
       
      </div>
  )
}
