import React from "react";
import { CSVLink } from "react-csv";

const ExportReactCSV = ({ csvHeaders, csvData, fileName }) => (
  <CSVLink
    headers={csvHeaders}
    data={csvData}
    filename={fileName}
    separator=";"
  >
    <button>Export CSV</button>
  </CSVLink>
);

export default ExportReactCSV;