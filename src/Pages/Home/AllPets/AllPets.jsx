/* eslint-disable react/no-unknown-property */
import { Link } from "react-router-dom";
import Header from "../../Header/Header";
import { IoLocation } from "react-icons/io5";



// TODO: All the cards will be shown sorted by date in descending order




const AllPets = () => {
    return (
        <section className="pt-4 pb-16 bg-gray-100 dark:bg-gray-800">
            <Header
                Heading={"🐕Choose Favourite Pets for Adoption🐕"}
            ></Header>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
                <Link to="/petDetails" className="w-full relative max-w-sm hover:scale-105 transition-transform overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-900">
                    <div className="relative">
                        <img className="object-cover object-center p-2 w-full h-60 rounded-xl" src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80" alt="avatar" />

                        <div className="absolute items-center px-2 rounded-xl bottom-4 left-4 py-1 text-white bg-sky-600">
                            <h1 className="mx-3 text-lg font-semibold text-white">Focusing</h1>
                        </div>
                    </div>

                    <div className="px-6 py-4">
                        <h1 className="text-2xl font-semibold text-gray-800 dark:text-white">Patterson johnson</h1>
                        <div className="flex items-center mt-4 text-gray-700  dark:text-gray-200">
                            <IoLocation size={20} color={'blue'} />
                            <h1 className="px-2 text-lg font-normal">California</h1>
                        </div>
                        <div className="divider my-2"></div>
                        <div className="grid grid-cols-2">
                            <h1 className="text-xl my-2  font-medium">Age:</h1>
                            <h1 className="text-xl mb-2 font-medium">Color:</h1>
                            <h1 className="text-xl mb-2 font-medium">Gender:</h1>
                            <h1 className="text-xl mb-2 font-medium">Vaccinated:</h1>
                            <h1 className="text-xl mb-2 font-medium">Neutered/Spayed:</h1>
                        </div>
                    </div>
                </Link>
            </div>
        </section>
    );
};

export default AllPets;