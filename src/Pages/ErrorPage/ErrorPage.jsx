/* eslint-disable react/no-unescaped-entities */
import { useNavigate } from "react-router-dom";
import Share from "../../Components/Buttons/Share";
import { TbArrowBackUpDouble } from "react-icons/tb";
import CommonButton from "../../Components/Buttons/CommonButton";

const ErrorPage = () => {
    const navigate = useNavigate();

    const handleGoBack = () => {
        navigate(-1);
    };

    const handleGoHome = () => {
        navigate("/");
    };

    return (
        <div style={{ backgroundImage: 'url("https://i.ibb.co.com/k3ytZNm/card.png")' }} className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-200">
            <img src="https://i.ibb.co/qn9KQ5H/Frame.png" alt="Error" className="w-1/2 max-w-md mb-8" />
            <h1 className="text-4xl text-center font-bold roboto mb-4">Oops! Something went wrong.</h1>
            <p className="text-lg mb-8 sofia text-center">
                We're sorry, but the page you're looking for doesn't exist. <br /> It might have been moved or deleted.
            </p>
            <div className="flex font-bold space-x-4">
                <p onClick={handleGoBack}>
                    <Share icon={<TbArrowBackUpDouble size={32} />} title={"Go Back"} />
                </p>
                <p onClick={handleGoHome}>
                    <CommonButton size={32} width={"44"} hight={"14"} title={"Go to Home"} />
                </p>
            </div>
        </div>
    );
};

export default ErrorPage;
