/* eslint-disable react/no-unescaped-entities */
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import ScrollToTop from "../../Hooks/useScroolTop";
import LoadingSpinner from "../../Components/Shared/Loading";
import useAuth from "../../Hooks/useAuth";

const PetDetails = () => {
    const { user } = useAuth();
    const { id } = useParams();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate();
    const { state: petData } = useLocation()

    console.log(user);

    const handleGoBack = () => {
        navigate(-1);
    };

    useEffect(() => {
        const fetchPetDetails = async () => {
            try {
                const response = await axios.get(`/pets/${id}`);
                if (response.headers['content-type'].includes('application/json')) {
                    console.log('API Response:', response.data);
                } else {
                    console.error('Unexpected response type:', response.headers['content-type']);
                }
            } catch (error) {
                console.error("Error fetching pet details:", error);
                setError('Pet not found');
            } finally {
                setLoading(false);
            }
        };

        fetchPetDetails();
    }, [id]);


    ScrollToTop();

    if (loading) {
        return <LoadingSpinner />;
    }

    if (error) {
        return <div className="w-full mx-auto overflow-hidden bg-white dark:bg-gray-800">
            <h1 className="text-5xl font-bold text-center my-5 text-gray-700 dark:text-gray-100">Pet not found</h1>
            <div className="flex justify-center items-center my-4">
                <a className="text-2xl font-medium text-gray-700 dark:text-gray-100 hover:text-[#2E256F] hover:underline cursor-pointer" onClick={handleGoBack}>Go Back</a>
            </div>
        </div>;
    }

    return (
        <div className="w-full mx-auto overflow-hidden bg-white dark:bg-gray-800">
            <h1 className="text-5xl font-bold text-center my-5 text-gray-700 dark:text-gray-100">Adopt {petData?.pet_name}</h1>
            <div className="flex justify-between items-center my-4 w-[80%] mx-auto">
                <a className="text-2xl font-medium text-gray-700 dark:text-gray-100 hover:text-[#2E256F] hover:underline cursor-pointer" onClick={handleGoBack}>Go Back</a>
                <h1 className="text-xl font-medium text-gray-700 dark:text-gray-100">Posted On: {petData?.dateAdded}</h1>
            </div>
            <img className="object-cover object-center rounded-xl w-[70%] mx-auto h-[700px] " src={petData?.pet_image} alt="avatar" />

            <form className="w-[80%] mx-auto h-auto my-20">
                <div className="divider my-8"></div>
                <h1 className="text-5xl font-bold text-center mb-3 text-gray-700 dark:text-gray-100">Fact's About Me!</h1>

                <div className="px-6 py-4 bg-white dark:bg-gray-800 text-gray-800 grid grid-cols-1 sm:grid-cols-2 w-full mx-auto">
                    <h1 className="flex items-center mt-4 text-gray-800 text-2xl font-bold dark:text-gray-200 ">Age: {petData?.pet_age}</h1>
                    <p className="py-2 flex items-center mt-4 text-gray-800 text-2xl font-bold dark:text-gray-200">Color: {petData?.pet_color}</p>
                    <div className="flex items-center mt-4">
                        <h1 className="text-gray-800 text-2xl font-bold dark:text-gray-200">Gender: {petData?.pet_gender}</h1>
                    </div>
                    <div className="flex items-center mt-4">
                        <h1 className="text-gray-800 text-2xl font-bold dark:text-gray-200">Vaccinated: {petData?.vaccinated ? 'Yes' : 'No'}</h1>
                    </div>
                    <div className="flex items-center mt-4 text-gray-800">
                        <h1 className="text-gray-800 text-2xl font-bold dark:text-gray-200">Neutered/Spayed: {petData?.neutered_spayed ? 'Yes' : 'No'}</h1>
                    </div>
                    <div className="flex items-center mt-4 text-gray-800">
                        <h1 className=" text-gray-800 text-2xl font-bold dark:text-gray-200">Location: {petData?.pet_location}</h1>
                    </div>
                </div>
                <div className="flex justify-center items-center gap-10 mt-3 w-full">
                    <button onClick={() => document.getElementById('my_modal_3').showModal()} className="cursor-pointer inline-flex justify-center items-center rounded-full w-full text-center py-2 text-2xl font-mono font-semibold text-sky-600 hover:text-white border-2 border-sky-600
                                    transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-90 hover:bg-sky-600 duration-300  focus:bg-transparent">
                        Adopt
                    </button>
                    <dialog id="my_modal_3" className="modal">
                        <div className="modal-box bg-white dark:bg-gray-800">
                            <form method="dialog">
                                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                            </form>
                            <h1 className="text-3xl font-bold text-center mb-3 text-gray-700 dark:text-gray-100">{user?.displayName} Info!</h1>
                            <div className="px-6 py-4 bg-white dark:bg-gray-800 text-gray-800 grid grid-cols-1 gap-8 w-full mx-auto">
                                <div>
                                    <label className="block mt-4 text-gray-800 text-xl font-bold dark:text-gray-200">Full Name:</label>
                                    <input
                                        defaultValue={user?.displayName ? user?.displayName : 'Not Found'}
                                        type="text"
                                        className="block cursor-not-allowed mt-2 w-full placeholder-gray-400/70 dark:placeholder-gray-500 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300"
                                        readOnly
                                    />
                                </div>

                                <div>
                                    <label className="block text-gray-800 text-xl font-bold dark:text-gray-200">Email Address:</label>
                                    <input
                                        defaultValue={user?.email}
                                        type="text"
                                        className="block mt-2 w-full cursor-not-allowed placeholder-gray-400/70 dark:placeholder-gray-500 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300"
                                        readOnly
                                    />
                                </div>

                                <div>
                                    <label className="block text-gray-800 text-xl font-bold dark:text-gray-200">Phone Number:</label>
                                    <input type="text" required className="block mt-2 w-full placeholder-gray-400/70 dark:placeholder-gray-500 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300" />
                                </div>
                                <div>
                                    <label className="block text-gray-800 text-xl font-bold dark:text-gray-200">Address:</label>
                                    <input type="text" required className="block mt-2 w-full placeholder-gray-400/70 dark:placeholder-gray-500 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300" />
                                </div>
                            </div>
                            <button className="cursor-pointer mt-4 inline-flex justify-center items-center rounded-full w-full text-center py-2 text-xl font-mono font-semibold text-sky-600 hover:text-white border-2 border-sky-600
                                    transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-90 hover:bg-sky-600 duration-300  focus:bg-transparent">
                                Submit
                            </button>
                        </div>
                    </dialog>
                </div>
                <div className="divider my-8"></div>

            </form>
        </div>
    );
};

export default PetDetails;
