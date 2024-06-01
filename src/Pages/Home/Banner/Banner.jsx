/* eslint-disable react/no-unknown-property */
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
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

    const banner = [
        {
            uri: "https://i.ibb.co/1XKVHMN/matt-nelson-a-I3-EBLvcyu4-unsplash.jpg"
        },
        {
            uri: "https://i.ibb.co/5FCrxGM/matthew-cabret-ub1s-Sv-J-Tbs-unsplash.jpg"
        },
        {
            uri: "https://i.ibb.co/G2MpKkJ/aswathy-n-sr-MHHWCTvc-U-unsplash.jpg"
        },
        {
            uri: "https://i.ibb.co/DQy52Sg/sophie-dale-Frm-YKi-L4gqs-unsplash.jpg"
        },
        {
            uri: "https://i.ibb.co/HDYxyhj/aleesha-wood-dm-Apv-Bj0n-I-unsplash.jpg"
        },
    ];

    return (
        <section className='relative'>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper "
            >
                {banner?.map(image => (
                    <SwiperSlide key={image?.uri}>
                        <img
                            src={image?.uri}
                            className='h-[700px] w-full object-cover opacity-70'
                            alt=""
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
            <div className="absolute top-1/2 z-30 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-black">
                <h1 className="text-2xl text-white font-bold my-4">Welcome to Pet Haven BD!</h1>
                <p className="text-6xl max-w-4xl text-center mx-auto font-bold my-4 px-6 rounded-xl bg-white bg-opacity-40 py-2 text-gradient">
                    
                    <span style={{ color: '#0284c7', fontWeight: 'bold' }}>
                        {/* Style will be inherited from the parent element */}
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
                        <div className="flex border-4 w-full border-sky-500 rounded-xl">
                            <div className="relative">
                                <button
                                    id="dropdown-button"
                                    onClick={toggleDropdown}
                                    className="flex-shrink-0 w-40 z-10 inline-flex items-center py-3 px-3 text-md font-medium text-center text-gray-900 bg-gray-100 rounded-s-lg hover:bg-gray-200 focus:ring-4 focus:outline-none dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-white dark:border-gray-600"
                                    type="button"
                                >
                                    {selectedCategory}
                                    <FaChevronDown className="w-3 h-3 ms-2.5" aria-hidden="true" />
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
                            <div className="relative w-full">
                                <input
                                    type="search"
                                    id="search-dropdown"
                                    className="block h-full p-3 w-60 outline-none z-20 text-sm text-gray-900 bg-gray-50 rounded-e-lg border-s-gray-50 border-s-2 border border-gray-300 focus:ring-sky-500 focus:border-sky-500 dark:bg-gray-700 dark:border-s-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-sky-500"
                                    placeholder="Search Your Pets"
                                    required
                                />
                                <button
                                    type="submit"
                                    className="absolute top-0 end-0 p-2.5 text-md font-medium h-full text-white bg-sky-500 rounded-e-lg border border-sky-500 hover:bg-sky-600 dark:bg-sky-600 dark:hover:bg-sky-700"
                                >
                                    <FaSearch className="w-6 h-4" aria-hidden="true" />
                                    <span className="sr-only">Search</span>
                                </button>
                            </div>
                        </div>
                    </form>
                    <button className="cursor-pointer inline-flex items-center rounded-xl px-7 py-3 text-2xl font-mono font-semibold text-sky-600 hover:text-white border-2 border-sky-600
                                    transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-95 hover:bg-sky-600 duration-300  focus:bg-transparent">
                        Adoption Post
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Banner;
