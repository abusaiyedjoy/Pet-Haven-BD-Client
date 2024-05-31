/* eslint-disable react/no-unescaped-entities */
import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
    const navigate = useNavigate();

    const handleGoBack = () => {
        navigate(-1);
    };

    const handleGoHome = () => {
        navigate("/");
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-200">
            <img src="https://i.ibb.co/qn9KQ5H/Frame.png" alt="Error" className="w-1/2 max-w-md mb-8" />
            <h1 className="text-4xl text-center font-bold mb-4">Oops! Something went wrong.</h1>
            <p className="text-lg mb-8 text-center">
                We're sorry, but the page you're looking for doesn't exist. It might have been moved or deleted.
            </p>
            <div className="flex space-x-4">
                <button
                    onClick={handleGoBack}
                    className="px-6 py-2 text-lg font-semibold text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                >
                    Go Back
                </button>
                <button
                    onClick={handleGoHome}
                    className="px-6 py-2 text-lg font-semibold text-white bg-green-600 rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
                >
                    Go Home
                </button>
            </div>
        </div>
    );
};

export default ErrorPage;
