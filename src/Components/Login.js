import { useState } from "react"
import { useNavigate } from "react-router-dom";
import { fetchData } from "../Auth/Helper";
import { toast } from "react-toastify";
import "../Components/App.css"


export default function Login() {
    
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState({ error: false, msg: "" });

    const data = { email, password }
    const emailvalidation = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    const submitForm = () => {
        if (email === "") {
            setErrors({ error: true, msg: "Please Fill Your Email" })
        }
        else if (!emailvalidation.test(email)) {
            setErrors({ error: true, msg: "Please Fill Valid Email" })
        }
        else if (password === "") {
            setErrors({ error: true, msg: "Please Fill Your Password" })
        }
        else {
            fetchData("http://localhost:8080/emp/loginPageVerify", "", data).then((res) => {
                console.log(res, "data");
                if (res.status === 200) {
                    toast.success("Login successful");
                    localStorage.setItem("email", email);
                    navigate("/dashboard");
                }
                else {
                    toast.warn("Login Failed please enter correct email & password")
                }
                
            })
        }


    }

    return (
        <div className="row justify-content-center pt-5">
            <div className="col-sm-6">
                <div className="card p-4">
                    <h1 className="text-center mb-3">Login </h1>
                    <div className="form-group">
                        <label>Email address:</label>
                        
                        <input type="email" className="form-control" placeholder="Enter email"
                            onChange={e => setEmail(e.target.value)}
                            id="email" />
                    </div>
                    <div className="form-group mt-3">
                        <label>Password:</label>
                        <input type="password" className="form-control" placeholder="Enter password"
                            onChange={e => setPassword(e.target.value)}
                            id="pwd" />
                    </div>

                    <div className="form-group mt-3">
                        <div className="errors">
                            {errors.error === true && (<div className="errors">{errors.msg}</div>)}
                        </div>
                    </div>
                    <button type="button" onClick={submitForm} className="btn btn-primary mt-4">Login</button>
                </div>
            </div>
        </div>
    )
}