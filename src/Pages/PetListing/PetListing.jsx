import { useState } from "react";
import { FiChevronDown, FiSearch } from "react-icons/fi";
import { MdPets } from "react-icons/md";
import { IoCutOutline, IoLocation } from "react-icons/io5";
import { BiSolidInjection } from "react-icons/bi";
import { GiConfirmed } from "react-icons/gi";
import { FcCancel } from "react-icons/fc";
import CommonButton from "./../../Components/Buttons/CommonButton";
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { Link, useNavigate } from "react-router-dom";
import queryString from "query-string";
import { FaHome } from "react-icons/fa";

const PetListing = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const axiosPublic = useAxiosPublic();

    const navigate = useNavigate();
    const handleClick = (category) => {
        let currentCategory = { category: category }

        const url = queryString.stringifyUrl({
            url: '/',
            query: currentCategory
        })
        navigate(url);
        console.log(currentCategory);
    }

    const { data: pets = [], isLoading } = useQuery({
        queryKey: ['pets'],
        queryFn: async () => {
            const { data } = await axiosPublic.get('/pets');
            return data;
        }
    });


    if (isLoading) {
        return (<div className="flex justify-center items-center w-full h-screen">
            <div className="w-10 h-10 animate-[spin_1s_linear_infinite] rounded-full border-double border-4 border-r-0 border-l-0 border-b-sky-400 border-t-sky-700"></div>
        </div>)
    }

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };



    return (
        <section className={`min-h-screen bg-white/90 dark:bg-gray-800`}>
            {/* Banner Section */}
            <div
                className="hero w-full h-60 opacity-80 object-cover"
                style={{
                    backgroundImage: `url("https://i.ibb.co/w7BYPnd/reba-spike-heqbasl-UWcg-unsplash.jpg")`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-full text-white">
                        <Link to="/" className="flex justify-center items-center gap-2 mb-3 text-main sofia hover:text-third">
                            <FaHome /> Home
                        </Link>
                        <h1 className="mb-5 text-5xl roboto font-bold text-main">Pet Haven BD</h1>
                        <form className="w-full mx-auto my-5">
                            <div className="flex">
                                <button
                                    id="dropdown-button"
                                    onClick={() => {
                                        toggleDropdown();
                                    }}
                                    className="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900  dark:text-gray-300 bg-gray-100 border border-gray-300 rounded-s-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 dark:border-gray-600"
                                    type="button"
                                >
                                    All categories
                                    <FiChevronDown className="w-2.5 h-2.5 ms-2.5" />
                                </button>

                                <div className="relative w-full">
                                    <input
                                        type="search"
                                        id="search-dropdown"
                                        className="block p-2.5 w-full z-20 text-sm text-gray-900  dark:text-gray-300 bg-gray-50 rounded-e-lg border-s-gray-50 border-s-2 border border-gray-300 focus:ring-primary focus:border-primary dark:bg-gray-700 dark:border-s-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:border-primary"
                                        placeholder="Search Mockups, Logos, Design Templates..."
                                        required
                                    />
                                    <button
                                        type="submit"
                                        className="absolute top-0 end-0 p-2.5 text-sm font-medium h-full text-white bg-primary rounded-e-lg border border-primary hover:bg-primary focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-secondary dark:hover:bg-primary dark:focus:ring-primary"
                                    >
                                        <FiSearch className="w-4 h-4" />
                                    </button>
                                </div>
                            </div>
                            {dropdownOpen && (
                                <div
                                    id="dropdown"
                                    className="z-50 my-3 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
                                >
                                    <ul className="py-2 z-50 px-2 text-sm text-gray-700 dark:text-gray-200">
                                        <li>
                                            <button
                                                onClick={() => {
                                                    setDropdownOpen(!dropdownOpen);
                                                    handleClick('cats');
                                                }}
                                                type="button"
                                                className="inline-flex w-full px-4 py-2 hover:bg-gray-100 rounded-md dark:hover:bg-gray-600 dark:hover:text-white"
                                            >
                                                Cats
                                            </button>
                                        </li>
                                        <li>
                                            <button
                                                onClick={() => {
                                                    setDropdownOpen(!dropdownOpen);
                                                    handleClick('dogs');
                                                }}
                                                type="button"
                                                className="inline-flex w-full px-4 py-2 hover:bg-gray-100 rounded-md dark:hover:bg-gray-600 dark:hover:text-white"
                                            >
                                                Dogs
                                            </button>
                                        </li>
                                        <li>
                                            <button
                                                onClick={() => {
                                                    setDropdownOpen(!dropdownOpen);
                                                    handleClick('rabbits');
                                                }}
                                                type="button"
                                                className="inline-flex w-full px-4 py-2 hover:bg-gray-100 rounded-md dark:hover:bg-gray-600 dark:hover:text-white"
                                            >
                                                Rabbits
                                            </button>
                                        </li>
                                        <li>
                                            <button
                                                onClick={() => {
                                                    setDropdownOpen(!dropdownOpen);
                                                    handleClick('birds');
                                                }}
                                                type="button"
                                                className="inline-flex w-full px-4 py-2 hover:bg-gray-100 rounded-md dark:hover:bg-gray-600 dark:hover:text-white"
                                            >
                                                Birds
                                            </button>
                                        </li>
                                    </ul>
                                </div>
                            )}
                        </form>
                    </div>
                </div>
            </div>
            {/* Pets Section */}
            {pets && pets.length > 0 ? (
                <>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 py-8 mx-3">
                        {pets.map((pet) => (
                            <div key={pet._id} style={{ backgroundImage: `url("https://i.ibb.co.com/3htn71W/Adopt-bg.png")` }} className="bg-white/90 dark:bg-white/20 dark:text-zinc-200 rounded-2xl w-full h-full px-4 py-5 sm:px-6 lg:px-8 lg:py-8 mx-auto">
                                <div className="flex justify-center items-center space-x-6">
                                    <div className="relative -z-0 w-[250px] h-[200px] overflow-hidden rounded-md">
                                        <img
                                            className="w-full h-full object-cover rounded-lg hover:scale-125 cursor-pointer transition-transform duration-500 ease-in-out"
                                            src={pet?.images?.[1] || pet?.images?.[0] || "fallback-image-url.jpg"}
                                            alt="Pet Image"
                                        />
                                        <span className="border-r-2 border-dashed border-primary absolute h-full top-0 -right-5"></span>
                                    </div>

                                    <div className="">
                                        <h1 className="text-3xl text-gray-950 dark:text-gray-200 font-semibold roboto py-2">{pet.name}</h1>
                                        <h2 className="text-lg font-semibold roboto text-gray-900  dark:text-gray-300 border-b-2 border-secondary border-dotted flex justify-start items-center gap-2"><MdPets className="text-red-800" /> Gender: <span className="sofia font-normal text-base">{pet.gender}</span></h2>
                                        <h2 className="text-lg font-semibold roboto text-gray-900  dark:text-gray-300 border-b-2 border-secondary border-dotted flex justify-start items-center gap-2"><MdPets className="text-red-800" /> Age: <span className="sofia font-normal text-base">{pet.age}</span></h2>
                                        <h2 className="text-lg font-semibold roboto text-gray-900  dark:text-gray-300 border-b-2 border-secondary border-dotted flex justify-start items-center gap-2"><MdPets className="text-red-800" /> Breed: <span className="sofia font-normal text-base">{pet.breed}</span></h2>
                                    </div>
                                </div>
                                <div className="py-5  flex justify-around items-center">
                                    <h2 className="text-xl font-semibold roboto text-gray-900  dark:text-gray-300 flex flex-col justify-start items-center gap-2"><BiSolidInjection size={32} className="text-red-800" /> Vaccinated: <span className="flex justify-center items-center rounded-full sofia font-normal text-base">
                                        {pet.vaccinated === "true" ? (
                                            <GiConfirmed size={25} className="text-green-600" />
                                        ) : (
                                            <FcCancel size={25} className="text-red-600" />
                                        )}
                                    </span>
                                    </h2>
                                    <h2 className="text-xl font-semibold roboto text-gray-900  dark:text-gray-300 flex flex-col justify-start items-center gap-2"><IoCutOutline size={32} className="text-red-800" /> Neutered: <span className="flex justify-center items-center rounded-full sofia font-normal text-base">
                                        {pet.neutered === "true" ? (
                                            <GiConfirmed size={25} className="text-green-600" />
                                        ) : (
                                            <FcCancel size={25} className="text-red-600" />
                                        )}
                                    </span>
                                    </h2>
                                    <h2 className="text-xl font-semibold roboto text-gray-900  dark:text-gray-300 flex flex-col justify-start items-center gap-2"><IoLocation size={32} className="text-red-800" /> Location: <span className="sofia font-normal text-base">{pet.location.district}</span></h2>
                                </div>
                                <div className="flex  justify-center items-end my-4">
                                    <Link to={`/petListing/${pet._id}`}>
                                        <CommonButton title={"More Info..."} width={"40"} hight={"12"}></CommonButton>
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </>
            ) : (
                <div className="flex flex-col justify-center items-center w-full h-full my-auto">
                    <h1 className="text-3xl text-gray-950 dark:text-gray-200 font-semibold roboto">No Pet Found</h1>
                    <p className="text-xl text-gray-950 dark:text-gray-200 font-medium sofia">Please Try another Category</p>
                </div>
            )}
        </section>
    );
};

export default PetListing;