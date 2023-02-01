import { useEffect, useState } from 'react';
import { getFetchData } from '../Auth/Helper';
//import AuthUser from './AuthUser';

export default function Dashboard() {
    // const {http} = AuthUser();
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



{/* 
                <h4>Employee Id</h4>
                <p>{userdetail.empId}</p>
                <h4>FirstName</h4>
                <p>{userdetail.firstName}</p>
                <h4>LastName</h4>
                <p>{userdetail.lastName}</p>
                <h4>Email</h4>
                <p>{userdetail.email}</p>
                <h4>contactNo</h4>
                <p>{userdetail.contactNo}</p>
                 <h4>Employee Address</h4>
                <p>{userdetail.employeeAddress}</p> 
                <h5>Address</h5>
                <p>{userdetail.employeeAddress.address}</p>
                <h5>City</h5>
                <p>{userdetail.city}</p>
                <h5>State</h5>
                <p>{userdetail.state}</p>
                <h5>ZipCode</h5>
                <p>{userdetail.zipcode}</p>
                <h5>Password</h5>
                <p>{userdetail.password}</p>
                <h5>Admin</h5>
                <p>{userdetail.admin}</p> */}
            

    
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
                  {/* <th>Password</th> */}
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
                  {/* <td>{userdetail.password}</td> */}
                  <td>{userdetail.admin.toString()}</td>
                </tr>
                
              </table>
              
            )}
        </div>
            </div>
    )
}