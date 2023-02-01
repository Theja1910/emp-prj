import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./Dashboard";
import Register from "./Register";
import Home from "./Home";
import Header from "./Header";
import Login from "./Login";
import ProtectedRoutes from "./ProtectedRoutes";
import EmployeeUpload from "./EmployeeUpload";

const AppRouter = () => {
    return (
        <Router>
            <Header />
            <Routes>
                <Route exact path='/home' element={<Home />} />
                <Route path="/dashboard" element={<ProtectedRoutes />}>
                    <Route path="/dashboard" element={<Dashboard />} />
                </Route>
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/upload" element={<EmployeeUpload />} />
            </Routes>
        </Router>
    );
};

export default AppRouter;
