import React from 'react';
import Link from 'next/link';
import { crearFecha2 } from '../utils/helpers';

const TopEventsInfo = ({event,airs,selectedEventId,handlePrint, editPath}) => {
    return (
        <section className="md:px-0 px-5">
        <div
          id="event"
          className="container mx-auto rounded-xl   border-black "
        >
          <div className="grid md:grid-cols-4 grid-cols-1  bg-black font-bold text-white h-12 px-7 items-center rounded-tl-lg rounded-tr-lg">
            <h2 className="md:hidden block text-2xl">Event</h2>
            <h2 className="md:block hidden text-2xl ">Event name</h2>
            <h2 className="md:flex hidden md:col-start-3 text-2xl md:justify-end justify-start">Event date</h2>
           
          </div>
          <div className="grid md:grid-cols-4 grid-cols-1 gap-5 md:gap-0 py-6 px-7 items-center">
            <h2 className="text-black text-2xl md:col-start-1 md:col-end-3">{event?.eventname || event?.event_name}</h2>
            <h2 className="flex md:justify-end text-2xl md:col-start-3 justify-start">
            {event.eventdate || event.event_date ? new Date(event?.eventdate || event?.event_date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "numeric",
                  day: "numeric",
            }):null}
            </h2>
            <div className="flex items-center justify-center md:col-start-4 md:justify-end text-center">
              <Link href={editPath}>
                <button className="bg-black text-white rounded px-2 mr-2 flex items-end inline-block">
                  <a className="px-3 py-2 font-bold" id="myBtn">
                    <p className="font-black">Edit event</p>
                  </a>
                </button>
              </Link>
            {airs && 
              
                <button className="bg-black text-white rounded px-2 mr-2 flex items-end inline-block" onClick={handlePrint}>
                  <a className="px-3 py-2 font-bold" id="myBtn">
                    <p className="font-black">AIRS Form</p>
                  </a>
                </button>
           
              }     
            </div>
          </div>
        </div>
      </section>
    );
}

export default TopEventsInfo;
