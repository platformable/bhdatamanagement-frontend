import { useEffect, useState } from "react";
import ParticipantReferralsChart from "./ParticipantReferralsChart";

export default function Highlights({
  selectedDate,
  selectedEvents,
  selectedEventsOutputs,
}) {
  const [stadistics, setStadistics] = useState({});

  const participantReferral = {
    "Word of mouth": 0,
    "Social media": 0,
    "Community-Based Organization": 0,
    "Faith-Based Organization / Place of worship (Eg. church, mosque, etc.)": 0,
    "Signs/flyers": 0,
    "Referral from local health provider or services": 0,
    "Referral from another Black Health program": 0,
    "Government or city agency (E.g., DOH, DOE, Health + Hospitals)": 0,
    "Local Community Leader or Politician": 0,
    "NYCHA or public housing": 0,
    Other: 0,
  };
  function handleCopy(id) {
    const data = document.getElementById(id).innerText;
    // console.log("data", data);
    navigator.clipboard.writeText(data);
  }
  // console.log("hiv events outputs",selectedEvents.filter(event => event._surveyname === 'oef-fbo-outreach').map(e => console.log(e.eventname, e._eventname)))
  useEffect(() => {
    selectedEventsOutputs?.map((event) => {
      event?.participantreferral &&
        (participantReferral[event?.participantreferral] += 1);
    });
    setStadistics(participantReferral);
  }, [selectedDate]);

  return (
    <section>
      <h1 className="bg-red-500  py-2 px-3">Highlights</h1>
      <table id="highlights-table" className="my-10 text-lg">
        <thead>
          <tr>
            <th className="px-3">Event title</th>
            {/* <th className="px-3 text-center">{reversedDate.start} - {reversedDate.finish}</th> */}
            <th className="px-3">Name of your Faith-Based Organization</th>
            <th className="px-3">Date of event</th>
            <th className="px-3">Total number of people at event</th>
          </tr>
        </thead>
        <tbody>
          {selectedEvents &&
            selectedEvents
            ?.filter(
                (event) =>
                  event._surveyname === "oef-fbo-outreach" &&
                  event.submissionstatus === "Complete"
              )
              .sort((a,b) => new Date(a.eventdate) - new Date(b.eventdate))
              .map((event, index) => (
                <tr
                  key={index}
                  className={`${
                    index % 2 === 0 ? "bg-white" : "bg-light-blue"
                  }`}
                >
                  <td>{event._eventname}</td>
                  <td className="">{event._deliverypartner}</td>
                  <td className="">
                    {new Date(event.eventdate).toLocaleDateString("en-US", {
                      month: "2-digit",
                      day: "2-digit",
                      year: "numeric",
                    })}
                  </td>
                  <td className="text-right">{event?.totalattendees}</td>
                </tr>
              ))}
        </tbody>
      </table>
      <h3 className="font-black mb-7">
        A summary of narratives from the events
      </h3>
      <div className="grid gap-7 mb-10">
        {selectedEvents &&
          selectedEvents
          ?.filter(
            (event) =>
              event._surveyname === "oef-fbo-outreach" &&
              event.submissionstatus === "Complete"
          )
          .sort((a,b) => new Date(a.eventdate) - new Date(b.eventdate))
          .map((event, index) => (
            <div key={index} className="">
              <h3 className="font-bold mb-2">
                {event.eventname} -{" "}
                {new Date(event.eventdate).toLocaleDateString("en-US", {
                  month: "long",
                  day: "2-digit",
                  year: "numeric",
                })}{" "}
              </h3>
              <p className="font-bold">{event._deliverypartner}</p>

              <br />

              <p>{event.eventhighlights}</p>
            </div>
          ))}
      </div>

      <h3 className="font-black mb-7">How people heard about the events</h3>
      <div className="grid gap-7 mb-10">
        <p>
          Of the {selectedEventsOutputs?.length} participants who filled in
          surveys at the outreach events,{" "}
          {(
            (stadistics[
              "Faith-Based Organization / Place of worship (Eg. church, mosque, etc.)"
            ] *
              100) /
            selectedEventsOutputs?.length
          ).toFixed(1)}
          % reported that they had learned through their faith-based
          organization,{" "}
          {(
            (stadistics["Word of mouth"] * 100) /
            selectedEventsOutputs?.length
          ).toFixed(1)}
          % from word of mouth,{" "}
          {(
            (stadistics["Signs/flyers"] * 100) /
            selectedEventsOutputs?.length
          ).toFixed(1)}
          % from signs and flyers,{" "}
          {(
            (stadistics["Community-Based Organization"] * 100) /
            selectedEventsOutputs?.length
          ).toFixed(1)}
          % from a community-based organization,{" "}
          {(
            (stadistics["Social media"] * 100) /
            selectedEventsOutputs?.length
          ).toFixed(1)}
          % through social media,{" "}
          {(
            (stadistics["Referral from local health provider or services"] *
              100) /
            selectedEventsOutputs?.length
          ).toFixed(1)}
          % referral from local health provider or services,{" "}
          {(
            (stadistics["Referral from another Black Health program"] * 100) /
            selectedEventsOutputs?.length
          ).toFixed(1)}
          % referral from another Black Health program,{" "}
          {(
            (stadistics[
              "Government or city agency (E.g., DOH, DOE, Health + Hospitals)"
            ] *
              100) /
            selectedEventsOutputs?.length
          ).toFixed(1)}
          % government or city agency (E.g., DOH, DOE, Health + Hospitals),{" "}
          {(
            (stadistics["Local Community Leader or Politician"] * 100) /
            selectedEventsOutputs?.length
          ).toFixed(1)}
          % local community leader or politician,{" "}
          {(
            (stadistics["NYCHA or public housing"] * 100) /
            selectedEventsOutputs?.length
          ).toFixed(1)}
          % NYCHA or public housing, and{" "}
          {((stadistics["Other"] * 100) / selectedEventsOutputs?.length).toFixed(
            1
          )}
          % Other.
          <br />
          <br />
          Figures are shown in Figure 8.
        </p>
      </div>

      <button
        onClick={() => handleCopy("highlights-table")}
        className="mb-10 px-5 py-2 text-lg border hover:bg-black hover:text-white rounded shadow"
      >
        Select and right-click to copy the text
      </button>

      <ParticipantReferralsChart
        selectedDate={selectedDate}
        chartData={stadistics}
      />
    </section>
  );
}
