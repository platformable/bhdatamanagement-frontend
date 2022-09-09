import React from 'react';
import Link from 'next/link';

const TopEventsInfo = ({event}) => {
    return (
        <section>
        <div
          id="event"
          className="container mx-auto rounded  md:h-36 border-dark-violet"
        >
          <div className="grid grid-cols-3 bg-black font-bold text-white h-12 px-7 items-center rounded-tl-lg rounded-tr-lg">
            <h2 className="">Event name</h2>
            <h2 className="flex justify-end ">Event date</h2>
          </div>
          <div className="grid grid-cols-3 py-6 px-7">
            <h1 className="text-black">{event?.eventname}</h1>
            <h1 className="flex justify-end">
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
