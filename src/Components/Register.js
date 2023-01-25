import { useState } from "react"
import {  useNavigate } from 'react-router-dom';
import { fetchData } from "../Auth/Helper";
//import AuthUser from './AuthUser';

export default function Register() {
    const navigate = useNavigate();
    // const {http,setToken} = AuthUser();
    const [empid, setEmpId] = useState();
    const [fname, setFName] = useState();
    const [lname, setLname] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
    const [city, setCity] = useState("");
    //const [stateid,setStateid] = useState("");
    const [password, setPassword] = useState("");

    const data = { empid,fname, lname,email,phone, address,password }

    const submitForm = () => {
        console.log(data, "formdata")
        fetchData("url", "token", data)
        setEmpId("")
        setFName("")
        setLname("")
        setEmail("")
        setPhone("")
        setAddress("")
        setCity("")
        navigate("/login")

    }
    // const handlestate = (e)=>
    // {
    //     const stateid = e.target.value;
    //     setStateid(stateid);
    // }

    return (
        <div className="row justify-content-left pt-5">
            <div className="col-sm-6">
                <div className="card p-4">
                    <h1 className="text-center mb-3">Employee Registration </h1>
                    <div className="form-group">
                        <label>Employee ID:</label>
                        <input type="empid" 
                        className="form-control" 
                        value={empid} 
                        placeholder="Enter your Employee Id"
                        onChange={e => setEmpId(e.target.value)}
                        id="empid" 
                        required />
                    </div>
                    <div className="form-group">
                        <label>First Name:</label>
                        <input type="test" 
                        className="form-control" 
                        value={fname} 
                        placeholder="Enter your first name"
                        onChange={e => setFName(e.target.value)}
                        id="fname" 
                        required />
                    </div>
                    <div className="form-group">
                        <label>Last Name:</label>
                        <input type="test" 
                        className="form-control" 
                        value={lname} 
                        placeholder="Enter Your Last name"
                        onChange={e => setLname(e.target.value)}
                        id="lname" 
                        required />
                    </div>
                    <div className="form-group">
                        <label>Email address:</label>
                        <input type="email" 
                        className="form-control" 
                        value={email}
                        placeholder="Enter email"
                        onChange={e => setEmail(e.target.value)} 
                        id="email" required />
                    </div>

                    <div className="form-group">
                        <label>Contact Number:</label>
                        <input type="phonenumber" 
                        className="form-control" 
                        value={phone} 
                        placeholder="Enter Your Contact"
                        onChange={e => setPhone(e.target.value)}
                        id="phonenum" 
                        required />
                    </div>

                    <div className="form-group">
                        <label>Address</label>
                        <input type="test" 
                        className="form-control" 
                        value={address} 
                        placeholder="Enter Your Address"
                        onChange={e => setAddress(e.target.value)}
                        id="address" 
                        required />
                    </div>

                    <div className="form-group">
                        <label>City</label>
                        <input type="city" 
                        className="form-control" 
                        value={city} 
                        placeholder="Enter Your City"
                        onChange={e => setCity(e.target.value)}
                        id="city" 
                        required />
                    </div>

                    {/* <div className="form-group mt-3">
                        <label>State</label>
                        <select name="states" 
                        className="form-control"
                        onChange={e => handlestate(e) }
                        >
                            <option value="">Select State</option>
                            {
                                state.map((getstate,index)=>
                                (
                                    <option value={getstate.state_id} key={index}>{getstate.state_name}</option>
                                ))
                            }
                        </select> */}

                    

                    <div className="form-group mt-3">
                        <label>Password:</label>
                        <input type="password" 
                        className="form-control" 
                        value={password} 
                        placeholder="Enter password"
                        onChange={e => setPassword(e.target.value)}
                        id="pwd" required />
                    </div>

                    
                    <button type="button" 
                    onClick={submitForm} 
                    className="btn btn-primary mt-4">Register</button>
                </div>
            </div>
        </div>
    )
}