import { useState } from "react";
import { toast } from "react-toastify";
import "../Components/App.css"

export default function EmployeeUpload() {

  const [file, setFile] = useState(null);
  const [isDisabled, setIsDisabled] = useState(null);
  const [message, setMessage] = useState(null);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsDisabled(true)
    const formData = new FormData();
    formData.append('File', file);
    try {
      const response = await fetch('http://localhost:8080/emp/uploadFile', {
        method: 'POST',
        body: formData,

      });

      setIsDisabled(false)
      if (response.status === 200) {
        const responseJson = await response.json()
        setMessage(responseJson);
        console.log("response", responseJson)
        setFile(null)
        toast.success(responseJson.count + " Record Uploaded Successfully");
        setIsDisabled(false)

        setTimeout(() => {
          window.location.reload();
        },2500)
      }
      else{
        toast.warn("File Alreday uploaded");
      }
    } catch (error) {
      toast.warn("File Alreday uploaded");
    }
  };

  return (
    <div className="tab">
      <br />
      <br />
      <form onSubmit={handleSubmit}>
        <span>Please Choose a File</span><br /><pre></pre>
        <input type="file" onChange={handleFileChange}
          accept=".csv"
          required
        // multiple = "multiple"
        />
        <div className="upload-margin">

          <p>
            Please click the Upload Button</p>
          <button disabled={isDisabled} type="submit">Upload</button>
        </div>
      </form>
    </div>
  );
}
