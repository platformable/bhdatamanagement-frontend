export default function Challenges({selectedDate, selectedEvents, selectedEventsOutputs}) {
    return (
        <section>
            <h1 className="bg-red-500 text-white py-2 px-3">Challenges</h1>
            
        <div className="my-10 grid gap-10">
          <div>
          <h3 className="font-bold">Challenges listed by the FBOs included:</h3>
          <ul className="mt-7 px-7">
            {selectedEvents?.map(event => event.eventchallenges && (
              <li className="list-disc list-inside">{event.eventchallenges}</li>
            ))}
          </ul>
          <button
          // onClick={() => textToClipboard("resources-table")}
          className="mt-7 px-5 py-2 text-lg border hover:bg-black pointer-events-none hover:text-white rounded shadow"
        >
          Select and right-click to copy the text 
        </button>
          </div>
        </div>
        </section>
    );
}


