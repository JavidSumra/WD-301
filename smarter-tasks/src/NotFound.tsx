import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="h-screen flex justify-center items-center bg-[#1A2238]">
      <div>
        <div className="text-center text-2xl text-orange-400">
          Page Not Found
        </div>
        <div className="text-9xl font-medium text-white text-center">404</div>
        <Link to={"/"}>
          <button
            id="backToHomeButton"
            className="mt-5 shadow-current shadow-md text-4xl p-4 border border-rose-500 text-rose-500 rounded text-center duration-300 hover:shadow-none"
          >
            Back to Home
          </button>
        </Link>
      </div>
    </div>
  );
};
export default NotFound;
