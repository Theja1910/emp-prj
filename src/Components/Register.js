
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { fetchData } from "../Auth/Helper";

const Register = () => {

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
    const [isChecked, setIsChecked] = useState(false)


    const navigate = useNavigate();

    function hasSpecialChar(str) {
        const pattern = /[^a-zA-Z]^\s+/;
        return pattern.test(str);
    }

    function checkOnlyNum(str) {
        const pattern = /[^0-9]/;
        return pattern.test(str);
    }

    const IsValidate = () => {
        let isproceed = true;
        let errormessage = 'Please Enter ';

        if (checkOnlyNum(empid)) {
            isproceed = false;
            errormessage += ' Number in Employee Id';
        }
        if (fname === "") {
            console.log("text");
            isproceed = false;
            errormessage += ' Firstname';
        } else if (hasSpecialChar(fname)) {
            isproceed = false;
            errormessage += ' character in First Name\n';
        }
        if (lname === null) {
            isproceed = false;
            errormessage += ' Lastname';
        } else if (hasSpecialChar(fname)) {
            isproceed = false;
            errormessage += ' character in last Name';
        }
        if (checkOnlyNum(phone)) {
            isproceed = false;
            errormessage += ' Number in Phone';
        }
        if (password === null || password === '') {
            isproceed = false;
            errormessage += ' Password';
        }
        if (state === null || state === '') {
            isproceed = false;
            errormessage += ' Select the State';
        }
        if (email === null || email === '') {
            isproceed = false;
            errormessage += ' Email';
        }
        if (checkOnlyNum(zipcode)) {
            isproceed = false;
            errormessage += ' Enter number in Zipcode';
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
        let data = {
            empId: empid,
            firstName: fname,
            lastName: lname,
            email,
            contactNo: phone,
            employeeAddress:
            {
                address, city, zipcode, state
            },
            password,
            admin: isChecked
        };
        if (IsValidate()) {
            fetchData("http://localhost:8080/emp/registration", "", data)
                .then(async (res) => {

                    if (!res.ok) {
                        const message = await res.json()
                        toast.warn(message.errorMessage[0])
                    } else {
                        toast.success('Registered successfully.')
                        navigate('/login');
                    }
                })
        }
    }

    function handleCheckbox() {
        setIsChecked(!isChecked)
    }
    return (
        <div className="register">
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
                                        <label>Employee ID
                                            <span className="errmsg">*</span>
                                        </label>
                                        <input value={empid}
                                            onChange={e => empidchange(e.target.value)}
                                            className="form-control" id="empid" />
                                    </div>
                                </div>

                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <label>Email
                                            <span className="errmsg">*</span></label>
                                        <input value={email}
                                            onChange={e => emailchange(e.target.value)}
                                            className="form-control"
                                            id="email" />
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <label>FirstName
                                            <span className="errmsg">*</span></label>
                                        <input value={fname}
                                            onChange={e => fnamechange(e.target.value)}
                                            className="form-control"
                                            id="fname" />
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <label>LastName
                                            <span className="errmsg">*</span></label>
                                        <input value={lname}
                                            onChange={e => lnamechange(e.target.value)}
                                            className="form-control"
                                            id="lname" />
                                    </div>
                                </div>

                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <label>Phone
                                            <span className="errmsg"></span></label>
                                        <input value={phone}
                                            onChange={e => phonechange(e.target.value)}
                                            className="form-control"
                                            id="phone" />
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="form-group">
                                        <label> Address</label>
                                        <input value={address}
                                            onChange={e => addresschange(e.target.value)}
                                            className="form-control"
                                            id="address" />
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="form-group">
                                        <label>City</label>
                                        <input value={city}
                                            onChange={e => citychange(e.target.value)}
                                            className="form-control"
                                            id="city" />
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="form-group">
                                        <label>ZipCode</label>
                                        <input value={zipcode}
                                            onChange={e => zipcodechange(e.target.value)}
                                            type="text"
                                            className="form-control"
                                            id="zipcode" />
                                    </div>
                                </div>

                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <label>Password
                                            <span className="errmsg">*</span></label>
                                        <input value={password}
                                            onChange={e => passwordchange(e.target.value)}
                                            type="password"
                                            className="form-control"
                                            id="password" />
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <label>State
                                            <span className="errmsg">*</span></label>
                                        <select value={state}
                                            onChange={e => statechange(e.target.value)}
                                            className="form-control"
                                            id="state">
                                            <option value="">Select State</option>
                                            <option value="tamilnadu">TamilNadu</option>
                                            <option value="karnataka">Karnataka</option>
                                            <option value="kerala">Kerala</option>
                                            <option value="andhra">Andhra Pradesh</option>
                                            <option value="assam">Assam</option>
                                            <option value="maharastra">Maharastra</option>
                                        </select>
                                    </div>
                                </div>

                            </div >
                            <div className="checkboxes">
                                <input id="admin" type="checkbox" checked={isChecked} onChange={handleCheckbox} />
                                <label>Admin</label>
                            </div>

                        </div >
                        <div className="card-footer">
                            <button type="submit"
                                className="btn btn-primary">Register</button> |
                            <Link to={'/login'} className="btn btn-danger">Login</Link>
                        </div>
                    </div >
                </form >
            </div >
        </div >
    );
}

export default Register;
