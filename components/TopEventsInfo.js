import React from 'react';
import Link from 'next/link';

const TopEventsInfo = ({event}) => {
    return (
        <section className="md:px-0 px-5">
        <div
          id="event"
          className="container mx-auto rounded   border-black "
        >
          <div className="grid md:grid-cols-3 grid-cols-1 bg-black font-bold text-white  px-7 items-center rounded-sm rounded-tr-sm">
          <h2 className="md:hidden block">Event</h2>
            <h2 className="md:block hidden">Event name</h2>
            <h2 className="md:block hidden flex md:justify-end justify-start">Event date</h2>
          </div>
          <div className="grid md:grid-cols-3 grid-cols-1 py-6 px-7">
            <h1 className="text-black">{event?.eventname}</h1>
            <h1 className="flex md:justify-end justify-start">
              {new Date(event?.eventdate).toLocaleDateString("en-US", {
                year: "numeric",
                month: "numeric",
                day: "numeric",
              })}
            </h1>
            <div className="flex items-center justify-center text-center">
              <Link href={`/events/${event?.id}/edit`}>
                <button className="bg-black text-white rounded px-2 mr-2 flex items-end inline-block">
                  <a className="px-3 py-2   font-bold" id="myBtn">
                    <p className="ml-2 font-black">Edit event</p>
                  </a>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    );
}

export default TopEventsInfo;
