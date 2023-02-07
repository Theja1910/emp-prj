import { useEffect, useState } from 'react';
import { getFetchData } from '../Auth/Helper';

export default function AllEmployeeDetails() {
  const email = localStorage.getItem("email");
  const [allUserDetails, setAllUserDetails] = useState([]);

  useEffect(() => {
    fetchUserDetail();
  }, [email]);

  const fetchUserDetail = () => {
    getFetchData(`http://localhost:8080/emp/getAllEmployee`).then(res => {
      return (
        console.log(res, "userdetails"),
        setAllUserDetails(res)
      )
    })
  }
  return (

    <div className="dashboard">
      <div>
        <h1 className='mb-4 mt-4'>All User Details</h1>
        <table>
          <tr>
            <th>EmployeeID</th>
            <th>FirstName</th>
            <th>LastName</th>
            <th>Email</th>
            <th>ContactNo</th>
            <th>Address</th>
            <th>City</th>
            <th>State</th>
            <th>ZipCode</th>
            <th>Admin</th>
          </tr>
          {allUserDetails.length === 0 ? "Loading" : (
            allUserDetails?.map(allUserDetails => (
              <tr>
                <td>{allUserDetails?.empId}</td>
                <td>{allUserDetails?.firstName}</td>
                <td>{allUserDetails?.lastName}</td>
                <td>{allUserDetails?.email}</td>
                <td>{allUserDetails?.contactNo}</td>
                <td>{allUserDetails?.employeeAddress?.address}</td>
                <td>{allUserDetails?.employeeAddress?.city}</td>
                <td>{allUserDetails?.employeeAddress?.state}</td>
                <td>{allUserDetails?.employeeAddress?.zipcode}</td>
                <td>{allUserDetails?.admin.toString()}</td>
                {console.log(allUserDetails?.admin, "details")}
              </tr>
            ))

          )}

        </table>
      </div>
    </div>
  )
}