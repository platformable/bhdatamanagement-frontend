import React, { useEffect, useState } from "react";
import { useRef } from "react";
import { CSVLink } from "react-csv";
const orderDataset = (data, headers) => {
  const reverseDate = (date) => {
    const splitted = new Date(date).toISOString().split("T");
    const reverse = splitted[0].split("-");
    const result = reverse[1] + "/" + reverse[2] + "/" + reverse[0];
    return result;
  };
  const results = headers.map((header) => {
    if (
      header === "eventDate" ||
      header === "surveyCreated" ||
      header === "activityDate"
    ) {
      return `${reverseDate(data.surveycreated)}`;
    }
    if (typeof data[header] === "object" && data[header]) {
      `${data[header].join(", ")}`;
    }
    if (typeof data[header] === "number") {
      data[header];
    }
    return `${data[header]}`.replace(/$(\r|\n)(?=.)/gm, " ").replace(/"/g, "");
  });
  return results;
};

const YipSessionCSV = ({ csvData, fileName, headers, sessionName, sessionNumber, download }) => {
  const buttonRef = useRef()
  //   console.log("csv data",csvData)
  //   console.log('headers', headers);
  const [orderedData, setOrdereData] = useState([]);

  useEffect(() => {
    const data = csvData.map((dataset) => orderDataset(dataset, headers));
    setOrdereData(data);
  }, [csvData]);
  console.log("data to download", orderedData);
  useEffect(() => {
    if (download.state) buttonRef.current.link.click()
    download.set(false)
  }, [download.state])
  return (
    //use ";" as separator for testing
    <CSVLink
      asyncOnClick={true}
      onClick={(event, done) => {
        done()
      }}
      headers={headers}
      data={orderedData}
      filename={fileName}
      separator=","
      enclosingCharacter={`"`}
      ref={buttonRef}
    >
      <button className="text-2xl text-white bg-black rounded shadow-xl p-5 w-full md:w-52 h-full uppercase flex flex-col items-start gap-3">
          {sessionNumber} CSV  <br/> <span className="text-lg">{sessionName}</span>
      </button>
    </CSVLink>
  );
};

export default YipSessionCSV;
