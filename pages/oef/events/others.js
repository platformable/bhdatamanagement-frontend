import React from "react";
import Link from "next/link";
import Image from "next/image";
import Layout from "../../components/Layout";
import PageTopHeading from "../../components/PageTopHeading";

const EventsIndexOther = () => {
  return (
    <Layout showStatusHeader={true}>
      <PageTopHeading pageTitle={"Events"} dashboardBtn={true} backBtn={false} />

      <div className="container mx-auto md:px-0 px-5 my-10">
        <div className="events-index-btn-container grid md:grid-cols-5 grid-cols-1">
          <div className="text-center mr-5 rounded bg-purple-800 p-5 text-center shadow-xl   mb-2 rounded-xl">
            <Link href="/events/register">
              <button id="myBtn">
                <div className="flex justify-center">
                  <img
                    src="/events/register_an_event_icon.svg"
                    alt=""
                    width={85}
                  />
                </div>
                <p className="my-5 font-bold text-white uppercase">
                  Register <br /> an Event
                </p>
              </button>
            </Link>
          </div>
          <div className="text-center mr-5 rounded bg-white p-5 text-center shadow-xl   mb-2 rounded-xl">
            <Link href="">
              <button id="myBtn">
                <div className="">
                  <div className="flex justify-center ">
                    <img
                      src="/events/edit_an_event_icon.svg"
                      alt=""
                      width={85}
                    />
                  </div>
                  <p className="my-5 font-bold text-purple-900 uppercase">
                    Manage an<br />existing  Event
                  </p>
                </div>{" "}
              </button>
            </Link>
          </div>
          <div className="text-center mr-5 rounded bg-white p-5 text-center shadow-xl   mb-2 rounded-xl">
            <Link href="">
              <button id="myBtn">
                <div className="">
                  <div className="flex justify-center">
                    <img
                      src="/events/collect_participant_info_icon.svg"
                      alt=""
                      width={85}
                    />
                  </div>
                  <p className="my-5 font-bold text-purple-900 uppercase">
                    Collect participant information for an event
                  </p>
                </div>{" "}
              </button>
            </Link>
          </div>
          <div className="text-center mr-5 rounded bg-white p-5 text-center shadow-xl   mb-2 rounded-xl">
            <Link href="">
              <button id="myBtn">
                <div className="">
                  <div className="flex justify-center">
                    <img src="/events/upload_docs_icon.svg" alt="" width={85} />
                  </div>
                  <p className="my-5 font-bold text-purple-900 uppercase">
                    upload docs, photos and others files to an event
                  </p>
                </div>{" "}
              </button>
            </Link>
          </div>
          <div className="text-center mr-5 rounded bg-white p-5 text-center shadow-xl   mb-2 rounded-xl">
            <Link href="">
              <button id="myBtn">
                <div className="">
                  <div className="flex justify-center">
                    <img
                      src="/events/complete_post_event_feedback_icon.svg"
                      alt=""
                      width={85}
                    />
                  </div>
                  <p className="my-5 font-bold text-purple-900 uppercase">
                    Complete post-event organizer feedback
                  </p>
                </div>{" "}
              </button>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default EventsIndexOther;
