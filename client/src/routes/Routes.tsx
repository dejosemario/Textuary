import { FC } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import HomePage from "../components/pages/Homepage";
import Login from "../components/pages/Login";
import SignUp from "../components/pages/SignUp";

const AppRoutes: FC = () => {
  const isAuthenticated = () => {
    return !!localStorage.getItem("user");
  };

  const PrivateRoute: FC<{ element: JSX.Element }> = ({ element }) => {
    return isAuthenticated() ? element : <Navigate to="/login" />;
    // return isAuthenticated() ? element : element;
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<PrivateRoute element={<HomePage />} />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<SignUp />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
