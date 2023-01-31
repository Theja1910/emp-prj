import { useState } from "react";
//import { fetchData } from "../Auth/Helper";
// import Papa from "papaparse";
import "../Components/App.css"

export default function EmployeeUpload() {
  // const [parsedData, setParsedData] = useState([]);

  //State to store table Column name
  // const [tableRows, setTableRows] = useState([]);

  //State to store the values
  // const [values, setValues] = useState([]);

  // const changeHandler = (event) => {
  //   // Passing file data (event.target.files[0]) to parse using Papa.parse
  //   Papa.parse(event.target.files[0], {
  //     header: true,
  //     skipEmptyLines: true,
  //     complete: function (results) {
  //       const rowsArray = [];
  //       const valuesArray = [];

  //       // Iterating data to get column name and their values
  //       results.data.map((d) => {
  //         rowsArray.push(Object.keys(d));
  //         valuesArray.push(Object.values(d));
  //       });

  //       // Parsed Data Response in array format
  //       setParsedData(results.data);

  //       // Filtered Column Names
  //       setTableRows(rowsArray[0]);

  //       // Filtered Values
  //       setValues(valuesArray);
  //     },
  //   });
  // };

  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append('File', file);
    try {
      const response = await fetch('http://localhost:8080/emp/uploadFile', {
        method: 'POST',
        body: formData
      });
      // const data = await response;
      // console.log(data);
      if (response.status === 200) {
        console.log("file uploaded successfully")
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      {/* File Uploader */}
      {/* <input
        type="file"
        name="file"
        onChange={changeHandler}
        accept=".csv"
        style={{ display: "block", margin: "10px auto" }}
      /> */}
      <br />
      <br />
      <form onSubmit={handleSubmit}>
        <input type="file" onChange={handleFileChange} />
        <button type="submit">Upload</button>
      </form>
      {/* Table */}
      {/* <table>
        <thead>
          <tr>
            {tableRows.map((rows, index) => {
              return <th key={index}>{rows}</th>;
            })}
          </tr>
        </thead>
        <tbody>
          {values.map((value, index) => {
            return (
              <tr key={index}>
                {value.map((val, i) => {
                  return <td key={i}>{val}</td>;
                })}
              </tr>
            );
          })}
        </tbody>
      </table> */}
    </div>
  );
}
