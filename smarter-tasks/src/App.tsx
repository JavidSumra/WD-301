import React from "react";
import { Route, Navigate, Routes } from "react-router-dom";
import "./App.css";

import NotFound from "./NotFound";
import Signup from "./pages/signup";
import Signin from "./pages/signin";
import Dashboard from "./pages/dashboard";
import { ProtectedRoute } from "./ProtectedRoute";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Signup />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/signin" element={<Signin />} />
      <Route
        path="/dashboard"
        element={<ProtectedRoute element={<Dashboard />} />}
      />
      <Route path="/notfound" element={<NotFound />} />
      <Route path="*" element={<Navigate to="/notfound" />} />
    </Routes>
  );
};

export default App;
