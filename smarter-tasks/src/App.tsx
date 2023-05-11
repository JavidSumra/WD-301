import React from "react";
import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import "./App.css";

import Header from "./Header";
import HomePage from "./HomePage";
import TaskApp from "./TaskApp";
import TaskDetailsPage from "./TaskDetailsPage";
import Signin from "./Signin";
import NotFound from "./NotFound";
import { ProtectedRoute } from "./ProtectedRoute";

function App() {
  const location = useLocation();

  return (
    <>
      {location.pathname !== "/signin" && location.pathname !== "/notfound" && (
        <Header />
      )}
      <div>{location.pathname}</div>

      <Routes>
        <Route path="/" element={<ProtectedRoute element={<HomePage />} />} />
        <Route
          path="/tasks"
          element={<ProtectedRoute element={<TaskApp />} />}
        />
        <Route
          path="/tasks/:id"
          element={<ProtectedRoute element={<TaskDetailsPage />} />}
        />
        <Route path="/signin" element={<Signin />} />
        <Route path="/notfound" element={<NotFound />} />
        <Route path="*" element={<Navigate to={"/notfound"} />} />
      </Routes>
    </>
  );
}

export default App;
