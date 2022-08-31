import React from "react";
import { CSVLink } from "react-csv";

const ExportCSV = ({ csvHeaders, csvData, fileName }) => (
  <CSVLink
    headers={csvHeaders}
    data={csvData}
    filename={fileName}
    separator=";"
  >
    <button className="text-2xl font-bold text-white bg-black rounded shadow-xl p-5 w-40 ml-5">Export CSV</button>
  </CSVLink>
);

export default ExportCSV;