import { FC } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "../components/pages/Homepage";
import Login from "../components/pages/Login";
import SignUp from "../components/pages/SignUp";

const AppRoutes: FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<SignUp />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
