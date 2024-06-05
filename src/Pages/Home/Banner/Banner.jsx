/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/no-unknown-property */
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { FaChevronDown, FaSearch } from 'react-icons/fa';
import { useState } from 'react';
import './Banner.css'
import { Typewriter } from 'react-simple-typewriter';


const Banner = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState('All categories');

    const handleCategorySelect = (category) => {
        setSelectedCategory(category);
        setDropdownOpen(false);
    };

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    return (
        <section>

            <div className="relative h-[750px] w-full bg-cover bg-center" style={{ backgroundImage: "url('https://i.ibb.co/3sCHDxn/Black-Modern-Adopt-A-Pet-Banner-Landscape.png')" }}>
                <div className="absolute top-[20%] left-6 text-center text-gray-200 z-30">
                    <h1 className="text-2xl font-bold my-4">Welcome to Pet Haven BD!</h1>
                    <h1 className="text-6xl text-sky-500 m-0 font-bold tracking-widest leading-tight">
                        ADOPT A PET 
                    </h1>
                        <h1 className='text-5xl text-red-500 font-bold tracking-wider'>DON'T BUY</h1>
                    <p className="text-2xl max-w-4xl mx-auto font-bold my-4 px-6 rounded-xl bg-white bg-opacity-40 py-2 text-gradient">
                        <span style={{ color: '#0284c7', fontWeight: 'bold' }}>
                            <Typewriter
                                words={['Find or Post Your Favourite Pets For Adoption!']}
                                loop={10}
                                cursor
                                cursorStyle='🐇'
                                typeSpeed={70}
                                deleteSpeed={50}
                                delaySpeed={1000}
                            />
                        </span>
                    </p>
                    <div className="flex justify-center items-center gap-10">
                        <form className="max-w-2xl mx-auto">
                            <div className="flex items-center border-4 w-full border-sky-500 rounded-xl">
                                <div className="relative">
                                    <button
                                        id="dropdown-button"
                                        onClick={toggleDropdown}
                                        className="flex-shrink-0 w-40 z-10 inline-flex items-center py-3 px-3 text-md font-medium text-center text-gray-900 bg-gray-100 rounded-l-md hover:bg-gray-200 focus:ring-4 focus:outline-none dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-white dark:border-gray-600"
                                        type="button"
                                    >
                                        {selectedCategory}
                                        <FaChevronDown className="w-3 h-3 ml-2.5" aria-hidden="true" />
                                    </button>
                                    {dropdownOpen && (
                                        <div
                                            id="dropdown"
                                            className="absolute z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
                                        >
                                            <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdown-button">
                                                <li>
                                                    <button
                                                        type="button"
                                                        className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                                        onClick={() => handleCategorySelect('Cats')}
                                                    >
                                                        Cats
                                                    </button>
                                                </li>
                                                <li>
                                                    <button
                                                        type="button"
                                                        className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                                        onClick={() => handleCategorySelect('Dogs')}
                                                    >
                                                        Dogs
                                                    </button>
                                                </li>
                                                <li>
                                                    <button
                                                        type="button"
                                                        className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                                        onClick={() => handleCategorySelect('Rabbits')}
                                                    >
                                                        Rabbits
                                                    </button>
                                                </li>
                                                <li>
                                                    <button
                                                        type="button"
                                                        className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                                        onClick={() => handleCategorySelect('Birds')}
                                                    >
                                                        Birds
                                                    </button>
                                                </li>
                                                <li>
                                                    <button
                                                        type="button"
                                                        className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                                        onClick={() => handleCategorySelect('Others')}
                                                    >
                                                        Others
                                                    </button>
                                                </li>
                                            </ul>
                                        </div>
                                    )}
                                </div>
                                <div className="w-full bg-gray-300 h-full dark:bg-gray-700 text-white border rounded-r-md lg:max-w-sm dark:border-gray-700 focus-within:border-blue-400 focus-within:ring focus-within:ring-blue-300 dark:focus-within:border-blue-400 focus-within:ring-opacity-40">
                                    <div className="flex">
                                        <input type="text" placeholder="Search your pets here" className="flex-1 h-full px-4 py-3 text-gray-700 placeholder-gray-400 bg-transparent border-none appearance-none dark:text-gray-200 focus:outline-none focus:placeholder-transparent focus:ring-0" />
                                        <button type="button" className="h-full px-4 py-4 text-white transition-colors duration-300 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:outline-none focus:bg-blue-400">
                                            <FaSearch />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </form>
                        <button className="cursor-pointer inline-flex items-center rounded-xl px-7 py-3 text-2xl font-mono font-semibold text-sky-600 hover:text-white border-2 border-sky-600 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-95 hover:bg-sky-600 duration-300 focus:bg-transparent">
                            Adoption Post
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;
