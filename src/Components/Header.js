import { Link, useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import './App.css';
import { getFetchData } from "../Auth/Helper";

const Header = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const email = localStorage.getItem("email");
    const [userdetail, setUserDetail] = useState({});

    useEffect(() => {
        fetchUserDetail();
    }, [email]);

    const fetchUserDetail = () => {
        getFetchData(`http://localhost:8080/emp/loadByEmail/${email}`).then(res => {
            return (
                console.log(res, "userdetails"),
                setUserDetail(res)
            )
        })
    }

    const userToken = localStorage.getItem("email");

    const isLoggedIn = () => (userToken ? true : false);

    const logout = () => {
        localStorage.removeItem("email");
        navigate("/login");
    };

    return (
        <div className="topnav">
            <header className="navbar navbar-expand-sm navbar-dark bg-dark">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link to="/home">Home</Link>
                    </li>
                    {!isLoggedIn() && (
                        <>
                            <li className="nav-item">
                                <Link to="/login">Login</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/register">Register</Link>
                            </li>
                        </>
                    )}

                    {isLoggedIn() && (

                        <>
                            <li className="nav-item">
                                <Link to="/dashboard">Dashboard</Link>
                            </li>
                            {userdetail.admin && (
                                <>

                                <li className="nav-item">
                                    <Link className="nav-link" to="/upload">EmployeeUpload</Link>
                                </li>
                                <li className="nav-item">
                                <Link className="nav-link" to="/all-users-details">All Employee Details</Link>
                            </li>
                                </>
                            )}
                            <div className="userdetail">
                                <span> {userdetail.firstName}</span>
                                <span className="lastname">{userdetail.lastName}</span>
                            </div>

                            <button className="logout__button" onClick={logout}>Logout
                            </button>
                        </>

                    )}
                </ul>
            </header>
        </div>
    );
};
export default Header;