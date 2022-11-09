import React, { useState, useEffect } from "react";
import useCopyToClipboard from "../../utils/useCopyToClipboard";
import ResourcesDistributedChart from "./ResourcesDistributedChart";
import {reverseDate} from '../../utils/helpers'
const ResourcesSection = ({
  selectedEventsOutputs,
  getHrefImage,
  selectedDate,
}) => {
  const [stadistics, setStadistics] = useState([]);
  const [value, copy] = useCopyToClipboard();
console.log("resources  section", selectedEventsOutputs)
  const reversedDate = {
    start: reverseDate(selectedDate.start),
    finish: reverseDate(selectedDate.finish),
  };

  const resourcesCounts = {
    "Masks": 0,
    "COVID literature": 0,
    "Vaccine literature": 0,
    "HIV literature": 0,
    "HepC literature": 0,
    "PrEP literature": 0,
    "Safer sex kits": 0,
    "Health disparities literature": 0,
  };

  useEffect(() => {
    const resourcesCountsResults = selectedEventsOutputs?.map((event) => {
      resourcesCounts["Safer sex kits"] += event?.safersexkits;
      resourcesCounts["HIV literature"] += event?.hivliterature;
      resourcesCounts["HepC literature"] += event?.hepcliterature;
      resourcesCounts["PrEP literature"] += event?.prepliterature;
      resourcesCounts["Health disparities literature"] +=
        event?.healthdisparitiesliterature;
      resourcesCounts["Masks"] += event?.masks;
      resourcesCounts["COVID literature"] += event?.covidliterature;
      resourcesCounts["Vaccine literature"] +=
        event?.vaccinerelatedliterature;
    });
    setStadistics(resourcesCounts);
  }, [selectedEventsOutputs]);

  const textToClipboard = async (htmlID) => {
    const element = document.getElementById(htmlID);
    console.log(element.innerHTML);
    const blob = new Blob([element.textContent], { type: "text/plain" });
    await copy(blob);
  };
  return (
    <section className="grid gap-7">
      <h1 className="font-black">Resources distributed</h1>
      <ResourcesDistributedChart
        getHrefImage={getHrefImage}
        chartData={stadistics}
        reversedDate={reversedDate}
        nEvents={selectedEventsOutputs.length}
      />
      <div className="flex flex-col gap-5 items-center">
        <table id="resources-table" className="text-lg w-2/5 ">
          <thead>
            <tr>
              <th className="px-3">Resources Distributed</th>
              <th className="px-3 text-center">{reversedDate.start} - {reversedDate.finish}</th>
            </tr>
          </thead>
          <tbody>
            {stadistics &&
              Object.entries(stadistics).map(([key, value, index]) => (
                <tr
                  key={index}
                  className={`${
                    index % 2 === 0 ? "bg-white" : "bg-light-blue"
                  }`}
                >
                  <td>{key}</td>
                  <td className="text-center">{value}</td>
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
      </div>
    </section>
  );
};

export default ResourcesSection;
