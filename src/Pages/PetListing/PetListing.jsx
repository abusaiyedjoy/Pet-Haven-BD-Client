import Cover from "../../Layout/Cover/Cover";
import { useState } from "react";
import { FiChevronDown, FiSearch } from "react-icons/fi";
import { MdPets } from "react-icons/md";
import { IoCutOutline, IoLocation } from "react-icons/io5";
import { BiSolidInjection } from "react-icons/bi";
import { GiConfirmed } from "react-icons/gi";
import { FcCancel } from "react-icons/fc";
import CommonButton from "./../../Components/Buttons/CommonButton";

const PetListing = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };
    return (
        <section className={`min-h-screen`}>
            <Cover
                image={'https://i.ibb.co/w7BYPnd/reba-spike-heqbasl-UWcg-unsplash.jpg'}
                title={"Pet Listing"}
            />
            <form className="max-w-lg mx-auto my-5">
                <div className="flex">
                    <button
                        id="dropdown-button"
                        onClick={() => {
                            toggleDropdown();
                        }}
                        className="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900  dark:text-gray-300 bg-gray-100 border border-gray-300 rounded-s-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 dark:text-white dark:border-gray-600"
                        type="button"
                    >
                        All categories
                        <FiChevronDown className="w-2.5 h-2.5 ms-2.5" />
                    </button>

                    <div className="relative w-full">
                        <input
                            type="search"
                            id="search-dropdown"
                            className="block p-2.5 w-full z-20 text-sm text-gray-900  dark:text-gray-300 bg-gray-50 rounded-e-lg border-s-gray-50 border-s-2 border border-gray-300 focus:ring-primary focus:border-primary dark:bg-gray-700 dark:border-s-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-primary"
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
                        className="z-10 my-3 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
                    >
                        <ul className="py-2 px-2 text-sm text-gray-700 dark:text-gray-200">
                            <li>
                                <button
                                    onClick={() => { setDropdownOpen(!dropdownOpen) }}
                                    type="button"
                                    className="inline-flex w-full px-4 py-2 hover:bg-gray-100 rounded-md dark:hover:bg-gray-600 dark:hover:text-white"
                                >
                                    Cats
                                </button>
                            </li>
                            <li>
                                <button
                                    onClick={() => { setDropdownOpen(!dropdownOpen) }}
                                    type="button"
                                    className="inline-flex w-full px-4 py-2 hover:bg-gray-100 rounded-md dark:hover:bg-gray-600 dark:hover:text-white"
                                >
                                    Dogs
                                </button>
                            </li>
                            <li>
                                <button
                                    onClick={() => { setDropdownOpen(!dropdownOpen) }}
                                    type="button"
                                    className="inline-flex w-full px-4 py-2 hover:bg-gray-100 rounded-md dark:hover:bg-gray-600 dark:hover:text-white"
                                >
                                    Rabbits
                                </button>
                            </li>
                            <li>
                                <button
                                    onClick={() => { setDropdownOpen(!dropdownOpen) }}
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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-8 mx-3">
                <div style={{ backgroundImage: `url("https://i.ibb.co.com/3htn71W/Adopt-bg.png")` }} className="bg-white/90 dark:bg-white/20 dark:text-zinc-200 rounded-2xl w-full h-full px-4 py-5 sm:px-6 lg:px-8 lg:py-8 mx-auto">
                    <div className="flex justify-center items-center space-x-12">
                        <div className="relative w-[200px] h-[200px] overflow-hidden rounded-md">
                            <img
                                className="w-full h-full object-cover rounded-lg hover:scale-125 cursor-pointer transition-transform duration-500 ease-in-out"
                                src={"images[0]"}
                                alt="Pet Image"
                            />
                            <span className="border-r-2 border-dashed border-primary absolute h-full top-0 -right-5"></span>
                        </div>

                        <div className="">
                            <h1 className="text-3xl text-gray-950 dark:text-gray-200 font-semibold roboto py-2">{"name"}</h1>
                            <h2 className="text-lg font-semibold roboto text-gray-900  dark:text-gray-300 border-b-2 border-secondary border-dotted flex justify-start items-center gap-2"><MdPets className="text-red-800" /> Gender: <span className="sofia font-normal text-base">{"gender"}</span></h2>
                            <h2 className="text-lg font-semibold roboto text-gray-900  dark:text-gray-300 border-b-2 border-secondary border-dotted flex justify-start items-center gap-2"><MdPets className="text-red-800" /> Age: <span className="sofia font-normal text-base">{"age"}</span></h2>
                            <h2 className="text-lg font-semibold roboto text-gray-900  dark:text-gray-300 border-b-2 border-secondary border-dotted flex justify-start items-center gap-2"><MdPets className="text-red-800" /> Breed: <span className="sofia font-normal text-base">{"breed"}</span></h2>
                        </div>
                    </div>
                    <div className="py-5  flex justify-around items-center">
                        <h2 className="text-xl font-semibold roboto text-gray-900  dark:text-gray-300 flex flex-col justify-start items-center gap-2"><BiSolidInjection size={32} className="text-red-800" /> Vaccinated: <span className=" flex justify-center items-center rounded-full sofia font-normal text-base">{"vaccinated"}<GiConfirmed size={25} className="text-green-600" /></span></h2>
                        <h2 className="text-xl font-semibold roboto text-gray-900  dark:text-gray-300 flex flex-col justify-start items-center gap-2"><IoCutOutline size={32} className="text-red-800" /> Neutered: <span className=" flex justify-center items-center rounded-full sofia font-normal text-base">{"neutered"}<FcCancel size={25} /></span></h2>
                        <h2 className="text-xl font-semibold roboto text-gray-900  dark:text-gray-300 flex flex-col justify-start items-center gap-2"><IoLocation size={32} className="text-red-800" /> Location: <span className="sofia font-normal text-base">{location.district}</span></h2>
                    </div>
                    <div className="flex  justify-center items-end my-4">
                        <CommonButton title={"More Info..."} width={"40"} hight={"12"}></CommonButton>
                    </div>
                </div>
                <div style={{ backgroundImage: `url("https://i.ibb.co.com/3htn71W/Adopt-bg.png")` }} className="bg-white/90 dark:bg-white/20 rounded-2xl w-full h-full px-4 py-5 sm:px-6 lg:px-8 lg:py-8 mx-auto">
                    <div className="flex justify-center items-center space-x-12">
                        <div className="relative w-[200px] h-[200px] overflow-hidden rounded-md">
                            <img
                                className="w-full h-full object-cover rounded-lg hover:scale-125 cursor-pointer transition-transform duration-500 ease-in-out"
                                src={"images[0]"}
                                alt="Pet Image"
                            />
                            <span className="border-r-2 border-dashed border-primary absolute h-full top-0 -right-5"></span>
                        </div>

                        <div className="">
                            <h1 className="text-3xl text-gray-950 dark:text-gray-200 font-semibold roboto py-2">{"name"}</h1>
                            <h2 className="text-lg font-semibold roboto text-gray-900  dark:text-gray-300 border-b-2 border-secondary border-dotted flex justify-start items-center gap-2"><MdPets className="text-red-800" /> Gender: <span className="sofia font-normal text-base">{"gender"}</span></h2>
                            <h2 className="text-lg font-semibold roboto text-gray-900  dark:text-gray-300 border-b-2 border-secondary border-dotted flex justify-start items-center gap-2"><MdPets className="text-red-800" /> Age: <span className="sofia font-normal text-base">{"age"}</span></h2>
                            <h2 className="text-lg font-semibold roboto text-gray-900  dark:text-gray-300 border-b-2 border-secondary border-dotted flex justify-start items-center gap-2"><MdPets className="text-red-800" /> Breed: <span className="sofia font-normal text-base">{"breed"}</span></h2>
                        </div>
                    </div>
                    <div className="py-5  flex justify-around items-center">
                        <h2 className="text-xl font-semibold roboto text-gray-900  dark:text-gray-300 flex flex-col justify-start items-center gap-2"><BiSolidInjection size={32} className="text-red-800" /> Vaccinated: <span className=" flex justify-center items-center rounded-full sofia font-normal text-base">{"vaccinated"}<GiConfirmed size={25} className="text-green-600" /></span></h2>
                        <h2 className="text-xl font-semibold roboto text-gray-900  dark:text-gray-300 flex flex-col justify-start items-center gap-2"><IoCutOutline size={32} className="text-red-800" /> Neutered: <span className=" flex justify-center items-center rounded-full sofia font-normal text-base">{"neutered"}<FcCancel size={25} /></span></h2>
                        <h2 className="text-xl font-semibold roboto text-gray-900  dark:text-gray-300 flex flex-col justify-start items-center gap-2"><IoLocation size={32} className="text-red-800" /> Location: <span className="sofia font-normal text-base">{location.district}</span></h2>
                    </div>
                    <div className="flex justify-center items-end my-4">
                        <CommonButton title={"More Info..."} width={"40"} hight={"12"}></CommonButton>
                    </div>
                </div>
                <div style={{ backgroundImage: `url("https://i.ibb.co.com/3htn71W/Adopt-bg.png")` }} className="bg-white/90 dark:bg-white/20 rounded-2xl w-full h-full px-4 py-5 sm:px-6 lg:px-8 lg:py-8 mx-auto">
                    <div className="flex justify-center items-center space-x-12">
                        <div className="relative w-[200px] h-[200px] overflow-hidden rounded-md">
                            <img
                                className="w-full h-full object-cover rounded-lg hover:scale-125 cursor-pointer transition-transform duration-500 ease-in-out"
                                src={"images[0]"}
                                alt="Pet Image"
                            />
                            <span className="border-r-2 border-dashed border-primary absolute h-full top-0 -right-5"></span>
                        </div>

                        <div className="">
                            <h1 className="text-3xl text-gray-950 dark:text-gray-200 font-semibold roboto py-2">{"name"}</h1>
                            <h2 className="text-lg font-semibold roboto text-gray-900  dark:text-gray-300 border-b-2 border-secondary border-dotted flex justify-start items-center gap-2"><MdPets className="text-red-800" /> Gender: <span className="sofia font-normal text-base">{"gender"}</span></h2>
                            <h2 className="text-lg font-semibold roboto text-gray-900  dark:text-gray-300 border-b-2 border-secondary border-dotted flex justify-start items-center gap-2"><MdPets className="text-red-800" /> Age: <span className="sofia font-normal text-base">{"age"}</span></h2>
                            <h2 className="text-lg font-semibold roboto text-gray-900  dark:text-gray-300 border-b-2 border-secondary border-dotted flex justify-start items-center gap-2"><MdPets className="text-red-800" /> Breed: <span className="sofia font-normal text-base">{"breed"}</span></h2>
                        </div>
                    </div>
                    <div className="py-5  flex justify-around items-center">
                        <h2 className="text-xl font-semibold roboto text-gray-900  dark:text-gray-300 flex flex-col justify-start items-center gap-2"><BiSolidInjection size={32} className="text-red-800" /> Vaccinated: <span className=" flex justify-center items-center rounded-full sofia font-normal text-base">{"vaccinated"}<GiConfirmed size={25} className="text-green-600" /></span></h2>
                        <h2 className="text-xl font-semibold roboto text-gray-900  dark:text-gray-300 flex flex-col justify-start items-center gap-2"><IoCutOutline size={32} className="text-red-800" /> Neutered: <span className=" flex justify-center items-center rounded-full sofia font-normal text-base">{"neutered"}<FcCancel size={25} /></span></h2>
                        <h2 className="text-xl font-semibold roboto text-gray-900  dark:text-gray-300 flex flex-col justify-start items-center gap-2"><IoLocation size={32} className="text-red-800" /> Location: <span className="sofia font-normal text-base">{location.district}</span></h2>
                    </div>
                    <div className="flex justify-center items-end my-4">
                        <CommonButton title={"More Info..."} width={"40"} hight={"12"}></CommonButton>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PetListing;