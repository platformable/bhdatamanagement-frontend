import React from 'react'

export default function SiteVisits({data}) {
  return (
    <div className="flex flex-col gap-5 items-center " >
      <h2 className="font-bold">Site Visits</h2>
        <table id="resources-table" className="text-lg  ">
          <thead>
            <tr>
              <th className="px-3">Name of Faith-Based Organization:</th>
              <th className="px-3 text-center">Borough</th>
              <th className="px-3 text-center">Date of Site Visit</th>
            </tr>
          </thead>
          <tbody>
            {data &&
              data.map((sv, index) => (
                <tr
                  key={index}
                  className={`${
                    index % 2 === 0 ? "bg-white" : "bg-light-blue"
                  }`}
                >
                  <td>{sv.fbo}</td>
                  <td className="text-center">{sv.boroughfbo}</td>
                  <td className="text-center">{new Date(sv.eventdate).toLocaleDateString("en-US", {month: "numeric", day: "numeric", year: "numeric"})}</td>
                </tr>
            ))} 
          </tbody>
        </table>
        <button
          // onClick={() => textToClipboard("resources-table")}
          className="px-5 py-2 text-lg border hover:bg-black pointer-events-none hover:text-white rounded shadow"
        >
          Select and right-click to copy the text 
        </button>



        <section>
 
            
        <div className="mt-10 grid gap-10" id="challenges-section">
          <div>
          <h3 className="font-bold">When asked what best practices or lessons have you learned since this program began? They answered:</h3>
          <br/>
          <ul className="px-7">
            {data?.map(event => event?.bestpractices && (
              <li className="list-disc text-lg">{event?.bestpractices}</li>
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



        <div className="mt-10 grid gap-10" id="challenges-section">
          <div>
          <h3 className="font-bold">When asked What key challenges have you faced as a ministry? How have you overcome them? They answered:</h3>
          <br/>
          <ul className="px-7">
            {data?.map(event => event?.eventchallenges && (
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
      </div>
  )
}
