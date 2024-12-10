/* eslint-disable react/no-unescaped-entities */
import { useNavigate, useParams } from "react-router-dom";
import ScrollToTop from "../../Hooks/useScroolTop";
import useAuth from "../../Hooks/useAuth";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import toast from "react-hot-toast";

const PetDetails = () => {
    const { user } = useAuth();
    const { id } = useParams();
    const navigate = useNavigate();
    const axiosPublic = useAxiosSecure();


    const handleGoBack = () => {
        navigate(-1);
    };
    ScrollToTop();

    const handleAdopt = (e) => {
        e.preventDefault();
        toast.success('Adopted Successfully!');
    }



    const { data: petData, isLoading } = useQuery({
        queryKey: ['pet', id],
        queryFn: async () => {
            const { data } = await axiosPublic.get(`/pets/${id}`);
            return data;
        },
    });




    if (isLoading) {
        return (<div className="flex justify-center items-center w-full h-screen">
            <div className="w-10 h-10 animate-[spin_1s_linear_infinite] rounded-full border-double border-4 border-r-0 border-l-0 border-b-sky-400 border-t-sky-700"></div>
        </div>)
    }

    return (
        <div className="w-full mx-auto overflow-hidden bg-white dark:bg-gray-800">
            <h1 className="text-2xl lg:text-5xl font-bold text-center my-5 roboto text-gray-700 dark:text-gray-100">
                Adopt {petData?.name}
            </h1>
            <div className="flex justify-between sofia items-center my-4 w-[80%] mx-auto">
                <a
                    className="text-xl font-medium text-gray-700 dark:text-gray-100  hover:underline hover:text-secondary dark:hover:text-secondary cursor-pointer"
                    onClick={handleGoBack}
                >
                    Back
                </a>
                <h1 className="text-md lg:text-lg font-medium text-gray-700 dark:text-gray-100">
                    Posted On: {petData?.postedDate}
                </h1>
            </div>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                {petData?.images.map((image, index) => (
                    <SwiperSlide key={index}>
                        <img src={image} alt="image" className="object-cover object-center rounded-xl w-[70%] mx-auto h-[700px]" />
                    </SwiperSlide>
                ))}
            </Swiper>
            <form className="w-[80%] mx-auto h-auto my-20">
                <div className="divider my-8"></div>
                <h1 className="text-5xl font-bold text-center mb-3 text-gray-700 dark:text-gray-100 roboto">Facts About Me!</h1>

                <div className="px-6 py-4 bg-white sofia dark:bg-gray-800 text-gray-800 grid grid-cols-1 sm:grid-cols-2 w-full mx-auto">
                    <h1 className="flex items-center mt-4 text-gray-800 text-2xl font-bold dark:text-gray-200">
                        Age: {petData?.age}
                    </h1>
                    <p className="py-2 flex items-center mt-4 text-gray-800 text-2xl font-bold dark:text-gray-200">
                        Color: {petData?.color}
                    </p>
                    <div className="flex items-center mt-4">
                        <h1 className="text-gray-800 text-2xl font-bold dark:text-gray-200">
                            Gender: {petData?.gender}
                        </h1>
                    </div>
                    <div className="flex items-center mt-4">
                        <h1 className="text-gray-800 text-2xl font-bold dark:text-gray-200">
                            Vaccinated: {petData?.vaccinated === 'true' ? 'Yes' : 'No'}
                        </h1>
                    </div>
                    <div className="flex items-center mt-4 text-gray-800">
                        <h1 className="text-gray-800 text-2xl font-bold dark:text-gray-200">
                            Neutered/Spayed: {petData?.neutered === 'true' ? 'Yes' : 'No'}
                        </h1>
                    </div>
                    <div className="flex items-center mt-4 text-gray-800">
                        <h1 className="text-gray-800 text-2xl font-bold dark:text-gray-200">
                            Location: {petData?.location.city}, {petData?.location.district}, {petData?.location.country}
                        </h1>
                    </div>
                </div>

                <div className="flex justify-center items-center gap-10 mt-3 w-full">
                    <button
                        onClick={() => document.getElementById('my_modal_3').showModal()}
                        className="cursor-pointer inline-flex justify-center items-center rounded-full w-full text-center py-2 text-2xl font-mono font-semibold text-red-600 hover:text-white border-2 border-red-600
                transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-90 hover:bg-red-600 duration-300 focus:bg-transparent"
                    >
                        Adopt
                    </button>

                    <dialog id="my_modal_3" className="modal">
                        <div className="modal-box bg-white dark:bg-gray-800">
                            <form method="dialog">
                                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                            </form>
                            <h1 className="text-3xl text-third sofadi font-bold text-center mb-3">
                                Hi I'm {petData?.name}!
                            </h1>
                            <div className="px-6 py-4 bg-white dark:bg-gray-800 text-gray-800 grid grid-cols-1 gap-8 w-full mx-auto">
                                <div>
                                    <label className="block mt-4 text-gray-800 text-xl font-bold dark:text-gray-200">
                                        Full Name:
                                    </label>
                                    <input
                                        defaultValue={user?.displayName || 'Not Found'}
                                        type="text"
                                        className="block cursor-not-allowed mt-2 w-full placeholder-gray-400/70 dark:placeholder-gray-500 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-gray-700 focus:border-red-400 focus:outline-none focus:ring focus:ring-red-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-red-300"
                                        readOnly
                                    />
                                </div>

                                <div>
                                    <label className="block text-gray-800 text-xl font-bold dark:text-gray-200">
                                        Email Address:
                                    </label>
                                    <input
                                        defaultValue={user?.email}
                                        type="text"
                                        className="block mt-2 w-full cursor-not-allowed placeholder-gray-400/70 dark:placeholder-gray-500 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-gray-700 focus:border-red-400 focus:outline-none focus:ring focus:ring-red-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-red-300"
                                        readOnly
                                    />
                                </div>

                                <div>
                                    <label className="block text-gray-800 text-xl font-bold dark:text-gray-200">Phone Number:</label>
                                    <input
                                        type="text"
                                        required
                                        className="block mt-2 w-full placeholder-gray-400/70 dark:placeholder-gray-500 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-gray-700 focus:border-red-400 focus:outline-none focus:ring focus:ring-red-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-red-300"
                                    />
                                </div>
                                <div>
                                    <label className="block text-gray-800 text-xl font-bold dark:text-gray-200">Address:</label>
                                    <input
                                        type="text"
                                        required
                                        className="block mt-2 w-full placeholder-gray-400/70 dark:placeholder-gray-500 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-gray-700 focus:border-red-400 focus:outline-none focus:ring focus:ring-red-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-red-300"
                                    />
                                </div>
                            </div>
                            <button onSubmit={handleAdopt}
                                className="cursor-pointer mt-4 inline-flex justify-center items-center rounded-full w-full text-center py-2 text-xl font-mono font-semibold text-red-600 hover:text-white border-2 border-red-600
                        transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-90 hover:bg-red-600 duration-300 focus:bg-transparent"
                            >
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
