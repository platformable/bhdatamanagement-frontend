import React, { useEffect, useState } from "react";
import Section1 from "../../../../components/oef-event-registration/Section1";
import Section2 from "../../../../components/oef-event-registration/Section2";
import Section3 from "../../../../components/oef-event-registration/Section3";
import Section3_2 from "../../../../components/events/Section3-2";
import Section4 from "../../../../components/oef-event-registration/Section4";
import Section5 from "../../../../components/oef-event-registration/Section5";
import Section6 from "../../../../components/oef-event-registration/Section6";
import Section7 from "../../../../components/oef-event-registration/Section7";
import Section8 from "../../../../components/oef-event-registration/Section8";
import Section9 from "../../../../components/oef-event-registration/Section9";

import Loader from "../../../../components/Loader";

import Layout from "../../../../components/Layout";
import PageTopHeading from "../../../../components/PageTopHeading";
import { useRouter } from "next/router";
import {
  nysActivity,
  NYSZipCodesAndBoroughs,
} from "../../../../utils/sharedData";

import { useUser, withPageAuthRequired } from "@auth0/nextjs-auth0";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import axios from "axios";
import ResponseStatusModal from "../../../../components/ResponseStatusModal";
import InPersonOrOnlineEvent from "../../../../components/oef-event-registration/InPersonOrOnlineEvent";

const EditOefEventExternal = ({
  event,
  programs,
  locationTypes,
  areasOfFocus,
  eventTypes,
  fbos,
}) => {
  console.log("event", event);
  const router = useRouter();
  const { user, error, isLoading } = useUser();
  // let userId = user?.sub;
  const [showResponseStatus, setShowResponseStatus] = useState(false);
  const [responseStatus, setResponseStatus] = useState({});
  const [loading, setLoading] = useState(false);
  const [eventForm, setEventForm] = useState({
    id: event.id,
    eventDateCreated: new Date(),
    programID: "1",
    programName: "OEF",
    eventName: event?.eventname,
    eventDate: event?.eventdate,
    eventStartTime: event?.eventstarttime,
    eventFinishTime: event?.eventfinishtime,
    healthAreaOfFocusID: event?.healthareaoffocusid,
    healthAreaOfFocusName: event?.healthareaoffocusname,
    createdByName: event?.createdbyname,
    createdByLastname: event?.createdbylastname,
    eventZipCode: event?.eventzipcode,
    borough: event?.borough,
    oefEventEmail: event?.oefeventemail,
    deliveryPartner: event?.deliverypartner,

    locationAddress: event?.locationaddress,
    onlineInPersonEventType: event?.onlineinpersoneventtype,
    inPersonEventTypeName: event?.inpersoneventtypename,
    inPersonEventTypeNameOther: event?.inpersoneventtypenameother,
    inPersonEventTypeID: event?.inpersoneventtypeid,
    onlineEventTypeName: event?.onlineeventtypename,
    onlineEventTypeID: event?.onlineeventtypeid,
  });

  console.log("oef state form", eventForm);
  const isEditable =
    new Date().toLocaleDateString() ===
    new Date(event?.eventdatecreated).toLocaleDateString();

  const notifyMessage = () => {
    toast.success("Event updated", {
      position: toast.POSITION.TOP_CENTER,
    });
  };

  const submitEventForm = async () => {
    setLoading(true);

    await axios
      .put(`${process.env.NEXT_PUBLIC_SERVER_URL}/events/oef/update`, eventForm)
      .then((response) => {
        if (response.data.statusText === "OK") {
          setLoading(false);
          //notifyMessage();
          router.push(
            `/oef/events/${eventForm.id}/edit-post-event-survey-external`
          );
          console.log("updated");
        }
      })
      .catch(function (error) {
        setLoading(false);
        console.error("error: ", error);
      });
  };

  const getCity = (zipcode, array) => {
    const searchZipcode = array.filter((code) => code.zipcode === zipcode);
    console.log("searchZipcode", searchZipcode);
    if (searchZipcode.length > 0) {
      setEventForm({ ...eventForm, borough: searchZipcode[0].borought });
    } else {
      setEventForm({ ...eventForm, borough: "" });
    }
  };

  useEffect(() => {
    // setEventForm({ ...eventForm, userID: userId });
    //makeIcsFile(eventForm);
    getCity(eventForm.eventZipCode, NYSZipCodesAndBoroughs);
  }, [
    user,
    eventForm.eventDate,
    eventForm.eventDate,
    eventForm.eventStartTime,
    eventForm.eventName,
    eventForm.eventDescription,
    eventForm.eventFinishTime,
    eventForm.eventZipCode,
    eventForm.onlineEventTypeName,
    eventForm.inPersonEventTypeName,
    eventForm.eventZipCode,
  ]);

  return (
    <>
      {!isEditable ? (
        <div className="container mx-auto flex gap-10 flex-col justify-items-center h-screen">
          <div className="h-88  py-10 px-10  mt-3 flex flex-col gap-5 items-center rounded-lg border-black">
            <h1 className="text-center font-black">
              HIV Outreach Event Organizer Survey
            </h1>
            <div className="flex flex-col gap-5 md:flex-row items-center mt-5">
              <h2 className="pt-2">In partnership with</h2>
              <img
                src="/main/BH_logo.svg"
                alt="black health data app management logo"
                width={400}
                className=""
              />{" "}
            </div>

            <section className="flex flex-col mt-10 py-7 w-full gap-5 bg-sky-blue rounded-lg items-center">
              {/* <img src="/saved-form.svg" alt="checked icon" /> */}

              <h2 className="font-black text-center">
                Sorry, this form is not longer available{" "}
              </h2>
              <p className="text-center">
                Please contact with Black Health people. <br />
                You are able to make changes to your submission until the end of
                the day event was created.{" "}
              </p>
            </section>
          </div>
          {/* <button onClick={() => router.back()} className='uppercase rounded shadow bg-black text-white text-2xl px-5 py-2 self-center'>Submit another participant sign-in sheet</button> */}
        </div>
      ) : (
        <>
          <div className={`container mx-auto border rounded-lg mb-10`}>
            <div className="register-envent-form-container  grid gap-10 bg-white  rounded-lg px-7 my-10 ">
              <Section1
                eventForm={eventForm}
                setEventForm={setEventForm}
                event={event}
                maskField={true}
              />

              <Section2
                eventForm={eventForm}
                setEventForm={setEventForm}
                event={event}
                maskField={true}
              />
              <Section3
                eventForm={eventForm}
                setEventForm={setEventForm}
                fbos={fbos}
                event={event}
              />
              <Section4
                eventForm={eventForm}
                setEventForm={setEventForm}
                event={event}
              />
              <Section5
                eventForm={eventForm}
                setEventForm={setEventForm}
                event={event}
              />
              <Section6
                eventForm={eventForm}
                setEventForm={setEventForm}
                event={event}
              />
              <Section7
                eventForm={eventForm}
                setEventForm={setEventForm}
                event={event}
              />
              <Section8
                eventForm={eventForm}
                setEventForm={setEventForm}
                event={event}
              />
              <InPersonOrOnlineEvent
                eventForm={eventForm}
                setEventForm={setEventForm}
              />
              <Section9
                eventForm={eventForm}
                setEventForm={setEventForm}
                event={event}
              />
            </div>
          </div>
          <div className="flex justify-center">{loading && <Loader />}</div>
          <div className="flex justify-center my-10">
            {loading ? null : (
              <button
                className="py-2 px-5 flex items-center rounded bg-black text-white font-semibold"
                onClick={submitEventForm}
              >
                Next
              </button>
            )}
          </div>
        </>
      )}

      {showResponseStatus && (
        <ResponseStatusModal
          setShowResponseStatus={setShowResponseStatus}
          responseStatus={responseStatus}
        />
      )}
    </>
  );
};

export default EditOefEventExternal;

export const getServerSideProps = async (ctx) => {
  let { id } = ctx.params;

  const [event, programs, locationTypes, areasOfFocus, eventTypes, fbos] =
    await Promise.all([
      fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/events/${id}`).then((r) =>
        r.json().then((res) => res[0])
      ),
      fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/programs`).then((r) =>
        r.json()
      ),
      fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/event_location_type`).then(
        (r) => r.json()
      ),
      fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/health_area_of_focus`).then(
        (r) => r.json()
      ),
      fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/event_type`).then((r) =>
        r.json()
      ),
      fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/fbos`).then((r) => r.json()),
    ]);
  return {
    props: {
      event: event,
      programs: programs,
      locationTypes: locationTypes,
      areasOfFocus: areasOfFocus,
      eventTypes: eventTypes,
      fbos: fbos,
    },
  };
};
