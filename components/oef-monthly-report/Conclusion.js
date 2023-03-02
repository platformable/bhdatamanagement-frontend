export default function Conclusion({selectedDate, selectedEvents, selectedEventsOutputs}) {
    return (
        <section>
            <h1 className="bg-red-500 py-2 px-3">Conclusion</h1>
            <button
          // onClick={() => textToClipboard("resources-table")}
          className="mt-7 px-5 py-2 text-lg border hover:bg-black pointer-events-none hover:text-white rounded shadow"
        >
          Select and right-click to copy the text 
        </button>
        </section>
    );
}


