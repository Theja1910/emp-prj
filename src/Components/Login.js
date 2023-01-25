import { useState } from "react"
import { useNavigate } from "react-router-dom";
import { fetchData } from "../Auth/Helper";
//import AuthUser from './AuthUser';

export default function Login() {
   // const {http,setToken} = AuthUser();
   const navigate = useNavigate();
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");

    const data={email,password}

    const submitForm = () =>{
    fetchData("url","token",data)
    if(email==="abc" && password==="12345"){
        navigate("/dashboard")
    }
    }

    return(
        <div className="row justify-content-center pt-5">
            <div className="col-sm-6">
                <div className="card p-4">
                    <h1 className="text-center mb-3">Login </h1>
                    <div className="form-group">
                        <label>Email address:</label>
                        {email}
                        <input type="email" className="form-control" placeholder="Enter email"
                            onChange={e=>setEmail(e.target.value)}
                        id="email" />
                    </div>
                    <div className="form-group mt-3">
                        <label>Password:</label>{password}
                        <input type="password" className="form-control" placeholder="Enter password"
                            onChange={e => setPassword(e.target.value)}
                        id="pwd" />
                    </div>
                    <button type="button" onClick={submitForm} className="btn btn-primary mt-4">Login</button>
                </div>
            </div>
        </div>
    )
}