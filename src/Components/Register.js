
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { fetchData } from "../Auth/Helper";

const Register = () => {

    //const [id, idchange] = useState("");
    const [empid, empidchange] = useState("");
    const [fname, fnamechange] = useState("");
    const [lname, lnamechange] = useState("");
    const [password, passwordchange] = useState("");
    const [email, emailchange] = useState("");
    const [phone, phonechange] = useState("");
    const [address, addresschange] = useState("");
    const [state, statechange] = useState("");
    const [city, citychange] = useState("");
    const [zipcode, zipcodechange] = useState("");
    // const [gender, genderchange] = useState("female");

    const navigate = useNavigate();

    const IsValidate = () => {
        let isproceed = true;
        let errormessage = 'Please enter the value in ';
        // if (empid === null || empid === '') {
        //     isproceed = false;
        //     errormessage += ' Username';
        // }
        if (empid === null || empid === '') {
            isproceed = false;
            errormessage += ' Employee Id';
        }
        if (fname === null || fname === '') {
            isproceed = false;
            errormessage += ' Firstname';
        }
        if (lname === null || lname === '') {
            isproceed = false;
            errormessage += ' Lastname';
        }
        if (password === null || password === '') {
            isproceed = false;
            errormessage += ' Password';
        }
        if (state === null || state === '') {
            isproceed = false;
            errormessage += ' State';
        }
        if (email === null || email === '') {
            isproceed = false;
            errormessage += ' Email';
        }

        if (!isproceed) {
            toast.warning(errormessage)
        } else {
            if (/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(email)) {

            } else {
                isproceed = false;
                toast.warning('Please enter the valid email')
            }
        }
        return isproceed;
    }


    const handlesubmit = (e) => {
        e.preventDefault();
        // const address = { "empId": "323546", "firstName": "Divya", "lastName": "singh", "email": "rajnish.singh@perficient.com", "contactNo": 676674447, "address": { "city": "Bangalore", "state": "Karnataka", "zipcode": 5768688 }, "password": "Shabaz" }
        let data = {
            empId: empid,
            firstName: fname,
            lastName: lname,
            email,
            contactNo: phone,
            address:
            {
                city, zipcode, state
            },
            password
        };
        if (IsValidate()) {
            //console.log(data);
            fetchData("http://localhost:8080/emp/registration", "", data)
                .then((res) => {

                    if (res.empId) {
                        toast.success('Registered successfully.')
                        navigate('/login');
                    } else {
                        toast.warn("Register not successful")
                    }
                })
            //  .catch((err) => {
            //     toast.error('Failed :' + err.message);
            // });
        }
    }
    return (
        <div>
            <div className="offset-lg-3 col-lg-6">
                <form className="container" onSubmit={handlesubmit}>
                    <div className="card">
                        <div className="card-header">
                            <h1>Employee Registeration</h1>
                        </div>
                        <div className="card-body">
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <label>Employee ID <span className="errmsg">*</span></label>
                                        <input value={empid} onChange={e => empidchange(e.target.value)} className="form-control"></input>
                                    </div>
                                </div>
                                {/* <div className="col-lg-6">
                                    <div className="form-group">
                                        <label>FirstName <span className="errmsg">*</span></label>
                                        <input value={id} onChange={e => idchange(e.target.value)} className="form-control"></input>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <label>LastName <span className="errmsg">*</span></label>
                                        <input value={id} onChange={e => idchange(e.target.value)} className="form-control"></input>
                                    </div>
                                </div> */}
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <label>Email <span className="errmsg">*</span></label>
                                        <input value={email} onChange={e => emailchange(e.target.value)} className="form-control"></input>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <label>FirstName  <span className="errmsg">*</span></label>
                                        <input value={fname} onChange={e => fnamechange(e.target.value)} className="form-control"></input>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <label>LastName <span className="errmsg">*</span></label>
                                        <input value={lname} onChange={e => lnamechange(e.target.value)} className="form-control"></input>
                                    </div>
                                </div>

                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <label>Phone <span className="errmsg"></span></label>
                                        <input value={phone} onChange={e => phonechange(e.target.value)} className="form-control"></input>
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="form-group">
                                        <label>Address</label>
                                        <input value={address} onChange={e => addresschange(e.target.value)} className="form-control" />
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="form-group">
                                        <label>City</label>
                                        <input value={city} onChange={e => citychange(e.target.value)} className="form-control" />
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="form-group">
                                        <label>ZipCode</label>
                                        <input value={zipcode} onChange={e => zipcodechange(e.target.value)} type="number" className="form-control" />
                                    </div>
                                </div>

                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <label>Password <span className="errmsg">*</span></label>
                                        <input value={password} onChange={e => passwordchange(e.target.value)} type="password" className="form-control"></input>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <label>State <span className="errmsg">*</span></label>
                                        <select value={state} onChange={e => statechange(e.target.value)} className="form-control">
                                            <option value="">Select State</option>
                                            <option value="tamilnadu">TamilNadu</option>
                                            <option value="karnataka">Karnataka</option>
                                            <option value="kerala">Kerala</option>
                                        </select>
                                    </div>
                                </div>

                            </div >

                        </div >
                        <div className="card-footer">
                            <button type="submit" className="btn btn-primary">Register</button> |
                            <Link to={'/login'} className="btn btn-danger">Login</Link>
                        </div>
                    </div >
                </form >
            </div >


        </div >
    );
}

export default Register;
