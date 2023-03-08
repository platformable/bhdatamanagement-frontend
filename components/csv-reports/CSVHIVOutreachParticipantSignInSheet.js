import React, { useEffect, useState} from "react";
import { CSVLink } from "react-csv";
const orderDataset = (data, headers) => {
  const reverseDate = (date) => {
    const splitted = new Date(date).toISOString().split("T")
    const reverse = splitted[0].split('-');
    const result=reverse[1]+'/'+reverse[2]+'/'+reverse[0];
    return result;
  }
  const results = headers.map(header => {
    if(header === 'eventDate' || header === 'surveyCreated') {
      return `${reverseDate(data[header.toLowerCase()])}`
    }    
    if (typeof data[header] === 'object' ) {
      `${data[header].join(', ')}`
    }
    return `${data[header.toLowerCase()]}`?.replace(/¶/g,'')
  })
  return results;
};

const CSVHIVOutreachParticipantSignInSheet = ({ csvData, fileName, headers}) => {
  console.log("csv data",csvData)
  console.log('headers', headers);
  const [orderedData, setOrdereData] = useState([]);
  
  useEffect(() => {
    const data = csvData.map((dataset) => orderDataset(dataset, headers));
    setOrdereData(data);
  }, [csvData]);

  return (
    //use ";" as separator for testing 
    <CSVLink headers={headers} data={orderedData} filename={fileName} separator="," enclosingCharacter={`"`}>
      <button  className="text-2xl text-white bg-black rounded shadow-xl p-5 w-full md:w-52 h-full uppercase">
      Download <br/> dataset
      </button>
    </CSVLink>
  );
};

export default CSVHIVOutreachParticipantSignInSheet;
