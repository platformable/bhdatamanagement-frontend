export default function Challenges({selectedDate, selectedEvents, selectedEventsOutputs}) {
  function handleCopy(id) {
    const data = document.getElementById(id).innerText;
    console.log("data", data);
    navigator.clipboard.writeText(data);
  }
    return (
        <section>
            <h1 className="bg-red-500 py-2 px-3">Challenges</h1>
            
        <div className="mt-10 grid gap-10" id="challenges-section">
          <div>
          <h3 className="font-bold">Challenges listed by the FBOs included:</h3>
          <br/>
          <ul className="px-7">
            {selectedEvents?.map(event => event?.eventchallenges && (
              <li className="list-disc text-lg">{event?.eventchallenges}</li>
            ))}
          </ul>
          <button
          onClick={() => handleCopy("challenges-section")}
          className="mt-7 px-5 py-2 text-lg border hover:bg-black hover:text-white rounded shadow"
        >
          Select and right-click to copy the text 
        </button>
          </div>
        </div>
        </section>
    );
}


