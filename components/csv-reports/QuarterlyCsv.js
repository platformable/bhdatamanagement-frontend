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
  const results = headers?.map((header) => {
    if (
      header === "eventDate" || header === 'eventdate' || header === 'surveymodified' ||
      header === "surveyCreated" || header === 'surveycreated' || 
      header === "activityDate" 
    ) {
      return `${reverseDate(data[header])}`;
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

const QuarterlyCsv = ({ csvData, fileName, headers, buttonText, download }) => {

  const buttonRef = useRef()
  //   console.log("csv data",csvData)
    console.log('headers', headers);
  const [orderedData, setOrdereData] = useState([]);

  useEffect(() => {
    if (csvData.length > 0 ) {
      const data = csvData.map((dataset) => orderDataset(dataset, headers));
      setOrdereData(data);
    } else {
      setOrdereData([])

    }
  }, [csvData]);
  // console.log("data to download", orderedData);
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
      <button className="text-2xl text-white bg-black rounded shadow-xl p-5 w-full md:w-52 h-full uppercase">
        Download <br /> {buttonText || ""} <br /> dataset
      </button>
    </CSVLink>
  );
};

export default QuarterlyCsv;
