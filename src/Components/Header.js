import { Link, useNavigate, useLocation } from "react-router-dom";

const Header = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const userToken = localStorage.getItem("user");

    const isLoggedIn = () => (userToken ? true : false);

    const logout = () => {
        localStorage.removeItem("user");
        navigate("/login");
    };

    return (
        <header className="navbar navbar-expand-sm navbar-dark bg-dark">
            <ul className="navbar-nav">
                {!isLoggedIn() && (
                    <>
                        <li className="nav-item">
                            <Link
                                to="/"
                                className={location.pathname === "/dashboard" ? "active" : ""}
                            >
                                Home
                            </Link>
                        </li>
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
                        <li className="nav-item">
                            <Link className="nav-link" to="/upload">EmployeeUpload</Link>
                        </li>
                        <button onClick={logout}>logout</button>
                    </>
                )}
            </ul>
        </header>
    );
};
export default Header;