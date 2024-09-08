import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../../Header/Header";
import { IoLocation } from "react-icons/io5";
import usePet from "../../../Hooks/usePets";
import LoadingSpinner from "../../../Components/Shared/Loading";

const AllPets = () => {
    const [page, setPage] = useState(1);
    const limit = 8;
    const [pets, totalPages, loading] = usePet(page, limit);

    const handleNextPage = () => {
        setPage((prevPage) => prevPage + 1);
        window.scrollTo(0, 0);
    };

    const handlePreviousPage = () => {
        setPage((prevPage) => Math.max(prevPage - 1, 1));
        window.scrollTo(0, 0);
    };

    return (
        <section className="pt-4 pb-16 bg-gray-100 dark:bg-gray-800">
            <Header Heading={"🐕Choose Favourite Pet for Adoption🐕"}></Header>

            {loading ? (
                <LoadingSpinner />
            ) : (
                <>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-5 justify-center items-center justify-items-center" >
                        {pets.map((pet) => (
                            <Link state={pet} to={`/petDetails/${pet._id}`} key={pet._id} className=" relative max-w-md hover:scale-105 transition-transform overflow-hidden w-[95vw] bg-white rounded-lg shadow-lg dark:bg-gray-900">
                                <div className="relative">
                                    <img className="object-cover object-center p-2 w-full h-60 rounded-xl" src={pet.pet_image} alt={pet.pet_name} />
                                    <div className="absolute items-center px-2 rounded-xl bottom-4 left-4 py-1 text-white bg-sky-600">
                                        <h1 className="mx-3 text-lg font-semibold text-white">{pet.pet_name}</h1>
                                    </div>
                                </div>
                                <div className="px-6 py-4">
                                    <h1 className="text-2xl font-semibold text-gray-800 dark:text-white">{pet.pet_name}</h1>
                                    <div className="flex items-center mt-4 text-gray-700 dark:text-gray-200">
                                        <IoLocation size={20} color={'blue'} />
                                        <h1 className="px-2 text-lg font-normal">{pet.pet_location}</h1>
                                    </div>
                                    <div className="divider my-2"></div>
                                    <div className="grid grid-cols-2">
                                        <h1 className="text-xl my-2 font-medium">Age: {pet.pet_age}</h1>
                                        <h1 className="text-xl my-2 font-medium">Color: {pet.pet_color}</h1>
                                        <h1 className="text-xl my-2 font-medium">Gender: {pet.pet_gender}</h1>
                                        <h1 className="text-xl my-2 font-medium">Vaccinated: {pet.vaccinated ? 'Yes' : 'No'}</h1>
                                    </div>
                                    <h1 className="text-xl my-2 font-medium">Neutered/Spayed: {pet.neutered_spayed ? 'Yes' : 'No'}</h1>
                                </div>
                            </Link>
                        ))}
                    </div>
                    <div className="flex justify-center mt-8">
                        <button
                            onClick={handlePreviousPage}
                            disabled={page === 1}
                            className="px-4 py-2 mx-2 bg-[#2E256F] hover:bg-sky-600 text-white font-bold rounded"
                        >
                            Previous
                        </button>
                        <button
                            onClick={handleNextPage}
                            disabled={page === totalPages}
                            className="px-4 py-2 mx-2 bg-[#2E256F] hover:bg-sky-600 text-white font-bold rounded"
                        >
                            Next
                        </button>
                    </div>
                </>
            )}
        </section>
    );
};

export default AllPets;