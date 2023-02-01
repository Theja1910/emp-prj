import { useState } from "react";
import "../Components/App.css"

export default function EmployeeUpload() {

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
        <input type="file" onChange={handleFileChange} 
        accept=".csv" />
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
