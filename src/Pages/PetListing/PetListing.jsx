import { useContext, useState } from "react";
import Cover from "../../Layout/Cover/Cover";
import AllPets from "../Home/AllPets/AllPets";
import { FaChevronDown, FaSearch } from "react-icons/fa";
import ThemeContext from "../../Hooks/ThemeContext";


const PetListing = () => {
    const { theme } = useContext(ThemeContext);

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
        <div className={`min-h-screen ${theme === 'Dark' ? 'bg-gray-800 text-gray-200' : 'bg-gray-200 text-gray-800'}`}>
            <Cover
                image={'https://i.ibb.co/WzqTDHt/lily-banse-YHSwy6uqvk-unsplash.jpg'}
                title={"Pet Listing"}
            />
            <div className="my-8">
                <form className="max-w-lg mx-auto">
                    <div className="flex items-center border-4 border-sky-500 rounded-xl">
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
            </div>
            <AllPets></AllPets>
        </div>
    );
};

export default PetListing;