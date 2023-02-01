import { useState } from "react";
import { toast } from "react-toastify";
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
        toast.success("file uploaded successfully")
      }
    } catch (error) {
      toast.error(error);
    }
  };

  return (
    <div className="tab">
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
      <span>Please Choose a File</span><br/><pre></pre>
        <input type="file" onChange={handleFileChange} 
        accept=".csv" />
        <div className="upload-margin">

        <p>
        Please click the Upload Button</p>
        <button type="submit">Upload</button>
        </div>
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
