import { useEffect, useState } from 'react';
import { getFetchData } from '../Auth/Helper';

export default function Dashboard() {
    const email = localStorage.getItem("email");
    const [userdetail,setUserDetail] = useState({});

    useEffect(() => {
        fetchUserDetail();
    },[email]);

    const fetchUserDetail = () => {
        getFetchData(`http://localhost:8080/emp/loadByEmail/${email}`).then(res=>{
            return( 
                console.log(res,"userdetails"),
                setUserDetail(res)
        )})
    }
    return (
    
            <div className="dashboard">
        <div>
            <h1 className='mb-4 mt-4'>Dashboard page</h1>
            {Object.keys(userdetail).length === 0 ?"Loading" : (
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
                <tr>
                  <td>{userdetail.empId}</td>
                  <td>{userdetail.firstName}</td>
                  <td>{userdetail.lastName}</td>
                  <td>{userdetail.email}</td>
                  <td>{userdetail.contactNo}</td>
                  <td>{userdetail.employeeAddress.address}</td>
                  <td>{userdetail.employeeAddress.city}</td>
                  <td>{userdetail.employeeAddress.state}</td>
                  <td>{userdetail.employeeAddress.zipcode}</td>
                  <td>{userdetail.admin.toString()}</td>
                  {console.log(userdetail.admin,"details")}
                </tr>
                
              </table>
              
            )}
        </div>
            </div>
    )
}