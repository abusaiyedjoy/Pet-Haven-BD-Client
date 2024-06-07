/* eslint-disable react/no-unescaped-entities */
// import toast from "react-hot-toast";
// import { Link, useLocation } from "react-router-dom";
// import useAuth from "../../Hooks/useAuth";
// import useAxiosSecure from './../../Hooks/useAxiosSecure';
import { useNavigate } from "react-router-dom";
import ScrollToTop from "../../Hooks/useScroolTop";

const PetDetails = () => {
    const navigate = useNavigate();

    const handleGoBack = () => {
        navigate(-1);
    };
    ScrollToTop();
    // const { state: petData } = useLocation()
    // const axios = useAxiosSecure()
    // const { user } = useAuth();
    // const handleAddToCart = async (data) => {

    //     const petData = {
    //         petName: data.petName,
    //         petImage: data.petImage,
    //         category: data.category,
    //         availableQuantity: data.availableQuantity,
    //         petPrice: data.petPrice,
    //         petOrigin: data.petOrigin,
    //         petDescription: data.petDescription,
    //         addedBy: user.displayName,
    //         userEmail: user.email
    //     }
    //     console.log(petData);
    //     try {
    //         const res = await axios.post("/addToCart", petData);
    //         toast.success(res.message || "Product Added To Cart Successfully")
    //     } catch (error) {
    //         toast.error(error.message || "Error Adding pet To Cart")
    //     }

    // }
    const petData = null;

    return (
        <div className="w-full mx-auto overflow-hidden bg-white dark:bg-gray-800">
            <h1 className="text-5xl font-bold text-center my-5 text-gray-700 dark:text-gray-100">Adopt.....</h1>
            <div className="flex justify-between items-center my-4 w-[80%] mx-auto">
                <a className="text-2xl font-medium text-gray-700 dark:text-gray-100 hover:text-sky-500 hover:underline cursor-pointer" onClick={handleGoBack}>Go Back</a>
                <h1 className="text-xl font-medium text-gray-700 dark:text-gray-100">Posted On:</h1>
            </div>
            <img className="object-cover object-center rounded-xl w-[70%] mx-auto h-[700px] " src="https://i.ibb.co/WzqTDHt/lily-banse-YHSwy6uqvk-unsplash.jpg" alt="avatar" />

            <form className="w-[80%] mx-auto h-auto my-20">
                <div className="divider my-8"></div>
                <h1 className="text-5xl font-bold text-center mb-3 text-gray-700 dark:text-gray-100">Fact's About Me!</h1>

                <div className="px-6 py-4 bg-white text-gray-800 grid grid-cols-1 sm:grid-cols-2 w-full mx-auto">
                    <h1 className="flex items-center mt-4 text-gray-800 text-2xl font-bold dark:text-gray-200 ">Age: {petData?.petName}</h1>

                    <p className="py-2 flex items-center mt-4 text-gray-800 text-2xl font-bold dark:text-gray-200">Color:{petData?.description}</p>

                    <div className="flex items-center mt-4 text-gray-800 text-2xl font-bold dark:text-gray-200">

                        <h1 className="text-gray-800">Gender: {petData?.category
                        }</h1>
                    </div>
                    <div className="flex items-center mt-4 text-gray-800 text-2xl font-bold dark:text-gray-200">

                        <h1 className="text-gray-800">Vaccinated: {petData?.petOrigin
                        }</h1>
                    </div>

                    <div className="flex items-center mt-4 text-gray-800">


                        <h1 className="text-gray-800 text-2xl font-bold dark:text-gray-200">Nautered/Spayed: {petData?.addedBy}</h1>
                    </div>

                    <div className="flex items-center mt-4 text-gray-800">

                        <h1 className=" text-gray-800 text-2xl font-bold dark:text-gray-200">Location: {petData?.availableQuantity}</h1>
                    </div>
                </div>
                <div className="flex justify-center items-center gap-10 mt-3 w-full">
                    <button className="cursor-pointer inline-flex justify-center items-center rounded-full w-full text-center py-2 text-2xl font-mono font-semibold text-sky-600 hover:text-white border-2 border-sky-600
                                    transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-90 hover:bg-sky-600 duration-300  focus:bg-transparent">
                        Adopt
                    </button>
                </div>
                <div className="divider my-8"></div>
                <h1 className="text-5xl font-bold text-center mb-3 text-gray-700 dark:text-gray-100">My Info...!</h1>

                <div className="px-6 py-4 bg-white text-gray-800 grid grid-cols-1 sm:grid-cols-2 gap-10 w-full mx-auto">
                    <div>
                        <label className="block mt-4 text-gray-800 text-2xl font-bold dark:text-gray-200">Full Name:</label>

                        <input type="text" className="block cursor-not-allowed mt-2 w-full placeholder-gray-400/70 dark:placeholder-gray-500 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300" />
                    </div>
                    <div>
                        <label className="block mt-4 text-gray-800 text-2xl font-bold dark:text-gray-200">Email Adress:</label>

                        <input type="text" className="block  mt-2 w-full cursor-not-allowed placeholder-gray-400/70 dark:placeholder-gray-500 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300" />
                    </div>
                    <div>
                        <label className="block mt-4 text-gray-800 text-2xl font-bold dark:text-gray-200">Phone Number:</label>

                        <input type="text" required className="block  mt-2 w-full placeholder-gray-400/70 dark:placeholder-gray-500 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300" />
                    </div>
                    <div>
                        <label className="block mt-4 text-gray-800 text-2xl font-bold dark:text-gray-200">Adress:</label>

                        <input type="text" required className="block  mt-2 w-full placeholder-gray-400/70 dark:placeholder-gray-500 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300" />
                    </div>
                </div>
            </form>
        </div>
    );
};

export default PetDetails;