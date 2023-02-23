export default function Highlights({selectedDate, selectedEvents, selectedEventsOutputs}) {
    return (
        <section>
            <h1>Highlights</h1>
            <button
          // onClick={() => textToClipboard("resources-table")}
          className="mt-7 px-5 py-2 text-lg border hover:bg-black pointer-events-none hover:text-white rounded shadow"
        >
          Select and right-click to copy the text 
        </button>
        </section>
    );
}


