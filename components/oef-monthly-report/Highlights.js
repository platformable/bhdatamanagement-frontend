import { useEffect } from "react";
import ParticipantReferralsChart from "./ParticipantReferralsChart";

export default function Highlights({
  selectedDate,
  selectedEvents,
  selectedEventsOutputs,
}) {

  const participantReferral = {
    "Word of mouth": 0,
    "Faith-Based Organization / Place of worship (Eg. church, mosque, etc.)": 0,
    "Community-Based Organization": 0,
    "Social media": 0,
    "Signs/flyers": 0,
    "Referral from local health provider or services": 0,
    "Referral from another Black Health program": 0,
    "Government or city agency (E.g., DOH, DOE, Health + Hospitals)": 0,
    "Local Community Leader or Politician": 0,
    "NYCHA or public housing ": 0,
    "Other": 0,
  }

// console.log("refere",selectedEventsOutputs)
  useEffect(() => {
    selectedEventsOutputs.map(event => participantReferral[event.participantreferral] += 1)
  }, [selectedEventsOutputs])
  
  return (
    <section>
      <h1 className="bg-red-500 text-white py-2 px-3">Highlights</h1>
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
            selectedEvents.map((event, index) => (
              <tr
                key={index}
                className={`${index % 2 === 0 ? "bg-white" : "bg-light-blue"}`}
              >
                <td>{event.eventname}</td>
                <td className="">{event.deliverypartner}</td>
                <td className="">{event.eventdate.split("T")[0]}</td>
                <td className="text-right">{event.totalattendees}</td>
              </tr>
            ))}
        </tbody>
      </table>
      <h3 className="font-black mb-7">
        A summary of narratives from the events
      </h3>
      <div className="grid gap-7 mb-10">
        {selectedEvents &&
          selectedEvents.map((event, index) => (
            <div key={index} className="">
              <h3 className="font-bold mb-2">
                {event.eventname} - {" "}
                {new Date(event.eventdate).toLocaleDateString("en-US", {
                  month: "long",
                  day: "2-digit",
                  year: "numeric",
                })}{" "}
                <br /> {event.deliverypartner}
              </h3>
              <p>{event.eventhighlights}</p>
            </div>
          ))}
      </div>

      <h3 className="font-black mb-7">How people heard about the events</h3>
      <div className="grid gap-7 mb-10">
        Of the {selectedEventsOutputs.length} participants who filled in surveys at the outreach
         events, {(participantReferral['Faith-Based Organization / Place of worship (Eg. church, mosque, etc.)'] * 100) / selectedEventsOutputs.length}% reported that they had learned through their faith-based
        organization, {(participantReferral['Word of mouth'] * 100) / selectedEventsOutputs.length}% from word of mouth, {(participantReferral['Signs/flyers'] * 100) / selectedEventsOutputs.length}% from signs and flyers, {(participantReferral['Community-Based Organization'] * 100) / selectedEventsOutputs.length}%
        from a community-based organization, {(participantReferral['Social media'] * 100) / selectedEventsOutputs.length}% through social media, {(participantReferral['Referral from local health provider or services'] * 100) / selectedEventsOutputs.length}%
        referral from local health provider or services, {(participantReferral['Referral from another Black Health program'] * 100) / selectedEventsOutputs.length}% referral from
        another Black Health program, {(participantReferral['Government or city agency (E.g., DOH, DOE, Health + Hospitals)'] * 100) / selectedEventsOutputs.length}% government or city agency (E.g., DOH,
        DOE, Health + Hospitals), {(participantReferral['Local Community Leader or Politician'] * 100) / selectedEventsOutputs.length}% local community leader or politician, {(participantReferral['NYCHA or public housing'] * 100) / selectedEventsOutputs.length}%
        NYCHA or public housing, and {(participantReferral['Other'] * 100) / selectedEventsOutputs.length}% Other. Figures are shown in Figure 8.
      </div>

      <button
        // onClick={() => textToClipboard("resources-table")}
        className="mb-10 px-5 py-2 text-lg border hover:bg-black pointer-events-none hover:text-white rounded shadow"
      >
        Select and right-click to copy the text
      </button>

      <ParticipantReferralsChart chartData={participantReferral}/>
    </section>
  );
}
