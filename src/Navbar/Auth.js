import { Routes, Route, Link } from 'react-router-dom';
import Home from '../Components/Home';
import { useNavigate } from "react-router-dom";
import Dashboard from '../Components/Dashboard';
import Register from '../Components/Register';
import Login from '../Components/Login';
import "../Components/App.css"
import EmployeeUpload from '../Components/EmployeeUpload';


function Auth() {
    const navigate = useNavigate();
    const { token } = { token: 'test', logout: "logout" };
    const logoutUser = () => {
        if (token !== "") {

            navigate('/login');
        }
    }
    return (
        <>
            <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link className="nav-link" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/register">Register</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/login">Login</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/dashboard">Dashboard</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/upload">EmployeeUpload</Link>
                    </li>
                    <li className="nav-item">
                        <span role="button" className="nav-link logoutuser" onClick={logoutUser}>Logout</span>
                        {/* <Link className="nav-link" to="/logout" >Logout</Link> */}
                    </li>


                </ul>

            </nav>
            <div className="container">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/upload" element={<EmployeeUpload />} />

                </Routes>
            </div>
        </>
    );
}

export default Auth;