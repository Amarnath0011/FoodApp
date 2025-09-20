import { Link } from "react-router-dom";
import { useRouteError } from "react-router-dom";
const ErrorPage = () => {
    const Err = useRouteError();
    console.log(Err)
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-amber-50 text-center px-6">
      <h1 className="text-6xl font-bold text-amber-700 mb-4">{Err.status}</h1>
      <h2 className="text-2xl font-semibold text-gray-800 mb-2">
        Oops! Page Not Found
      </h2>
      <p className="text-gray-600 mb-6">
        The page you’re looking for doesn’t exist or has been moved.
      </p>
      
      <Link
        to="/"
        className="px-6 py-3 bg-amber-500 text-white rounded-2xl hover:bg-amber-600 transition shadow-md"
      >
        ⬅ Back to Home
      </Link>
    </div>
  );
};

export default ErrorPage;
