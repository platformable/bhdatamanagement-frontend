import React from 'react'
import Link from 'next/link'

export default function EventsCardItems({programName,eventdate,eventName,urlEdit,urlParticipantSurvey,urlUpload,urlPostEventSurvey}) {
  return (
    <div className="events-card-item shadow-lg rounded-lg border-black p-5">
        <div className="event-card-item-top flex justify-between my-2">
          <div>
            <h3 className="font-black pl-2">Program</h3>
          </div>
          <div>
            <h3 className="font-black pr-2">Event date</h3>
          </div>
        </div>
        <div className="event-card-item-program-date flex justify-between border-black rounded-lg py-1">
          <div>
            <h3 className="font-black pl-2">{programName}</h3>
          </div>
          <div>
            <h3 className="font-black pr-2">{eventdate && new Date(eventdate).toLocaleDateString('en-US',{year:'numeric',month:'numeric',day:'numeric'})}</h3>
          </div>
        </div>
        <h3 className="my-2 px-2 font-black">Event name</h3>
        <div className="h-20">
        <p className=" rounded-lg py-1 px-2 border-black">{eventName}</p>
        </div>
        <div className="events-card-item-btn-container grid md:grid-cols-2 grid-cols-2 gap-5 my-3 ">
            <Link href={urlEdit}>
        <div className="events-card-item-btn bg-white text-black border-black p-5 flex justify-center items-center rounded-lg cursor-pointer shadow-lg hover:bg-black hover:text-white">
              <p className="text-center">Edit</p>
          </div>
          </Link>
          <Link href={urlParticipantSurvey}> 
          <div className="events-card-item-btn bg-white text-black border-black p-5 flex justify-center items-center rounded-lg cursor-pointer shadow-lg hover:bg-black hover:text-white">
              <p className="text-center"> Participant survey</p>
          </div>
          </Link>
          <Link href={urlUpload}> 
          <div className="events-card-item-btn bg-white text-black border-black p-5 flex justify-center items-center rounded-lg cursor-pointer shadow-lg hover:bg-black hover:text-white">
              <p className="text-center">Upload docs, photos, etc</p>
          </div>
          </Link>
          <Link href={urlPostEventSurvey}> 
          <div className="events-card-item-btn bg-white text-black border-black p-5 flex justify-center items-center rounded-lg cursor-pointer shadow-lg hover:bg-black hover:text-white">
              <p className="text-center">Complete post event survey</p>
          </div>
          </Link>
        </div>
      </div>
  )
}
