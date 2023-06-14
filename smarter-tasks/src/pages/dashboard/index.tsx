import React from "react";
import { useNavigate } from "react-router-dom";
const Dashboard: React.FC = () => {
  const userNavigation = useNavigate();
  let userData = localStorage.getItem("userData");
  let parsedData;
  parsedData = userData ? JSON.parse(userData) : undefined;
  console.log(userData);
  console.log(parsedData);

  const handleSignout = () => {
    localStorage.removeItem("userData");
    localStorage.removeItem("authToken");
    userNavigation("/signin");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-3xl font-bold flex text-center text-gray-800 mb-8">
        Dashboard
        <div
          id="logout-link"
          className="bg-gray-800 text-white text-xl p-2 rounded-md mx-4 cursor-pointer"
          onClick={handleSignout}
        >
          Logout
        </div>
      </h1>
      <div className="flex flex-col text-2xl justify-between items-center text-gray-800">
        <p>Name : {parsedData.user.name}</p>
        <p>Email : {parsedData.user.email}</p>
      </div>
    </div>
  );
};
export default Dashboard;
