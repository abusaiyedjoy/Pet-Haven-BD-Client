import { useContext, useState } from 'react';
import { FaMoon, FaSun, FaEllipsisV, FaSignOutAlt, FaUser } from 'react-icons/fa';
import { HiMenuAlt1 } from 'react-icons/hi';
import { HiMiniComputerDesktop } from 'react-icons/hi2';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import toast from 'react-hot-toast';
import ThemeContext from '../../Hooks/ThemeContext';
import CommonButton from '../Buttons/CommonButton';

const Navbar = () => {
    const { user, signOutUser } = useAuth();
    const { theme, handleThemeChange } = useContext(ThemeContext);


    // User Profile
    const [isOpen, setIsOpen] = useState(false);
    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    // Theme Options
    const options = [
        { icon: <FaSun />, text: 'Light' },
        { icon: <FaMoon />, text: 'Dark' },
        { icon: <HiMiniComputerDesktop />, text: 'System' },
    ];

    // Sign Out User
    const handleSignOut = () => {
        signOutUser()
            .then((result) => {
                console.log(result);
                toast.success('Sign Out Successfully!');
            })
            .catch((error) => {
                console.log(error);
            });
    };

    const navlinks = (
        <>
            <li>
                <NavLink
                    to="/"
                    className={({ isActive }) =>
                        isActive
                            ? "!text-primary bg-[url('https://i.ibb.co.com/XDQ49N5/Black-Cat-Flat-Illustrative-Pets-Logo-2-removebg-preview.png')] bg-no-repeat bg-center !bg-transparent bg-[length:40px_35px]"
                            : "hover:bg-[url('https://i.ibb.co.com/XDQ49N5/Black-Cat-Flat-Illustrative-Pets-Logo-2-removebg-preview.png')] hover:text-primary dark:hover:text-primary hover:bg-center hover:bg-no-repeat !bg-transparent hover:transition-all hover:duration-300 hover:ease-in-out text-gray-800 dark:text-gray-200 hover:bg-[length:40px_35px]"
                    }
                >
                    Home
                </NavLink>
            </li>
            <li><NavLink to="/petListing" className={({ isActive }) =>
                isActive
                    ? "!text-primary bg-[url('https://i.ibb.co.com/XDQ49N5/Black-Cat-Flat-Illustrative-Pets-Logo-2-removebg-preview.png')] bg-no-repeat bg-center !bg-transparent bg-[length:40px_35px]"
                    : "hover:bg-[url('https://i.ibb.co.com/XDQ49N5/Black-Cat-Flat-Illustrative-Pets-Logo-2-removebg-preview.png')] hover:text-primary dark:hover:text-primary hover:bg-center hover:bg-no-repeat !bg-transparent hover:transition-all hover:duration-300 hover:ease-in-out text-gray-800 dark:text-gray-200 hover:bg-[length:40px_35px]"
            }>Pet Listing</NavLink></li>
            <li><NavLink to="/services" className={({ isActive }) =>
                isActive
                    ? "!text-primary bg-[url('https://i.ibb.co.com/XDQ49N5/Black-Cat-Flat-Illustrative-Pets-Logo-2-removebg-preview.png')] bg-no-repeat bg-center !bg-transparent bg-[length:40px_35px]"
                    : "hover:bg-[url('https://i.ibb.co.com/XDQ49N5/Black-Cat-Flat-Illustrative-Pets-Logo-2-removebg-preview.png')] hover:text-primary dark:hover:text-primary hover:bg-center hover:bg-no-repeat !bg-transparent hover:transition-all hover:duration-300 hover:ease-in-out text-gray-800 dark:text-gray-200 hover:bg-[length:40px_35px]"
            }>Services</NavLink></li>
            <li><NavLink to="/about" className={({ isActive }) =>
                isActive
                    ? "!text-primary bg-[url('https://i.ibb.co.com/XDQ49N5/Black-Cat-Flat-Illustrative-Pets-Logo-2-removebg-preview.png')] bg-no-repeat bg-center !bg-transparent bg-[length:40px_35px]"
                    : "hover:bg-[url('https://i.ibb.co.com/XDQ49N5/Black-Cat-Flat-Illustrative-Pets-Logo-2-removebg-preview.png')] hover:text-primary dark:hover:text-primary hover:bg-center hover:bg-no-repeat !bg-transparent hover:transition-all hover:duration-300 hover:ease-in-out text-gray-800 dark:text-gray-200 hover:bg-[length:40px_35px]"
            }>About Us</NavLink></li>
            <li><NavLink to="/contact" className={({ isActive }) =>
                isActive
                    ? "!text-primary bg-[url('https://i.ibb.co.com/XDQ49N5/Black-Cat-Flat-Illustrative-Pets-Logo-2-removebg-preview.png')] bg-no-repeat bg-center !bg-transparent bg-[length:40px_35px]"
                    : "hover:bg-[url('https://i.ibb.co.com/XDQ49N5/Black-Cat-Flat-Illustrative-Pets-Logo-2-removebg-preview.png')] hover:text-primary dark:hover:text-primary hover:bg-center hover:bg-no-repeat !bg-transparent hover:transition-all hover:duration-300 hover:ease-in-out text-gray-800 dark:text-gray-200 hover:bg-[length:40px_35px]"
            }>Contact Us</NavLink></li>
            {/* <li><NavLink to="/campains" className={({ isActive }) =>
                isActive
                    ? "!text-primary bg-[url('https://i.ibb.co.com/XDQ49N5/Black-Cat-Flat-Illustrative-Pets-Logo-2-removebg-preview.png')] bg-no-repeat bg-center !bg-transparent bg-[length:40px_35px]"
                    : "hover:bg-[url('https://i.ibb.co.com/XDQ49N5/Black-Cat-Flat-Illustrative-Pets-Logo-2-removebg-preview.png')] hover:text-primary dark:hover:text-primary hover:bg-center hover:bg-no-repeat !bg-transparent hover:transition-all hover:duration-300 hover:ease-in-out text-gray-800 dark:text-gray-200 hover:bg-[length:40px_35px]"
            }>Donation Campains</NavLink></li> */}

        </>
    );

    return (
        <div className="h-16 shadow-2xl bg-gray-100 dark:bg-gray-900 static top-0">
            <div className="flex justify-between items-center h-full px-4">
                <div className="navbar-start w-auto flex justify-center items-center gap-2">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden text-gray-800 dark:text-gray-200 p-0 flex justify-center items-center">
                            <HiMenuAlt1 className='text-primary' size={30} />
                        </div>
                        <ul tabIndex={0} className="font-medium flex flex-col p-4 mt-4 border border-gray-200 rounded-lg bg-gray-100 rtl:space-x-reverse dark:bg-gray-800 dark:border-gray-700 menu menu-lg dropdown-content z-50 shadow dark:text-gray-100 text-gray-800">
                            {navlinks}
                            <Link className='sm:hidden' to="/login">
                                <CommonButton title={"Login"} width={"40"} hight={"12"}></CommonButton>
                            </Link>
                        </ul>
                    </div>
                    <div className="flex justify-start items-center gap-2">
                        <img className="w-8 h-8 xl:w-10 xl:h-10" src="https://i.ibb.co.com/CtfJQ7K/Black-Cat-Flat-Illustrative-Pets-Logo-removebg-preview.png" alt="" />
                        <p className="text-2xl xl:text-4xl roboto font-bold xl:font-bold text-primary">Pet Haven BD</p>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 text-md xl:text-lg font-medium dark:text-gray-100 bg-transparent text-gray-800">
                        {navlinks}
                    </ul>
                </div>
                <div className="flex justify-between items-center gap-3 md:gap-5">
                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                            <div className="indicator">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-gray-800 dark:text-gray-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                                </svg>
                                <span className="badge badge-sm indicator-item bg-primary text-white dark:text-white w-5 h-5 text-md">8</span>
                            </div>
                        </div>
                        <div tabIndex={0} className="mt-3 z-50 card card-compact dropdown-content w-52 bg-base-100 rounded-lg shadow">
                            <div className="card-body bg-gray-200 dark:bg-gray-600 border-gray-300 shadow-xl border-2 rounded-xl">
                                <span className="font-bold text-secondary text-2xl">Foods</span>
                                <span className="dark:text-gray-200 text-gray-900 text-lg font-medium">Subtotal: $100</span>
                                <div className="card-actions">
                                    <Link to="viewCart">
                                        <CommonButton title={"View Card"} width={"40"} hight={"12"}></CommonButton>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="navbar-end z-10 flex items-center gap-5">
                        <div className="dropdown dropdown-hover">
                            <div tabIndex={0} role="button">
                                <button className="p-2 dark:text-gray-100 text-gray-600 dark:bg-gray-600 dark:hover:bg-gray-500 bg-gray-200 rounded-xl duration-100">
                                    {theme === "Dark" ? <FaMoon size={22} /> : theme === "Light" ? <FaSun size={22} /> : <HiMiniComputerDesktop size={22} />}
                                </button>
                            </div>
                            <ul tabIndex={0} className="dropdown-content absolute right-0 menu p-2 mt-3 bg-gray-100 dark:bg-gray-600 shadow-md dark:text-gray-200 text-gray-800 text-xl font-semibold rounded-box">
                                {options.map((option) => (
                                    <li key={option.text} onClick={() => handleThemeChange(option.text)} className={` ${theme === option.text && 'text-red-500'}`}>
                                        <div className="flex justify-start items-center">
                                            <h1>{option.icon}</h1>
                                            <a>{option.text}</a>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        {user ?
                            <>
                                <div className="relative inline-block">
                                    <button
                                        onClick={toggleDropdown}
                                        className="relative z-10 block p-2 text-gray-700 bg-white border border-transparent rounded-md dark:text-white focus:border-red-500 focus:ring-opacity-40 dark:focus:ring-opacity-40 focus:ring-red-300 dark:focus:ring-red-400 focus:ring dark:bg-gray-800 focus:outline-none"
                                    >
                                        <FaEllipsisV className="w-5 h-5" />
                                    </button>

                                    {isOpen && (
                                        <div
                                            className="absolute right-0 z-20 w-48 py-2 mt-2 origin-top-right bg-white rounded-box shadow-xl dark:bg-gray-800"
                                        >
                                            <ul className="p-2 menu dropdown-content ">
                                                <Link to="/dashboard">
                                                    <img
                                                        className=" w-12 h-12 mx-auto  rounded-full mb-2 mt-2 border-2 border-main"
                                                        src={user?.photoURL ? user.photoURL : "https://i.ibb.co/DLcr2Vk/sam-moghadam-khamseh-yx-ZSAjy-To-P4-unsplash.jpg"}
                                                        alt="Img"
                                                    /></Link>
                                                <p className="font-semibold sofadi text-gray-700 dark:text-gray-300 text-center mr-2 mb-2 text-main ">
                                                    {user?.displayName ? user.displayName : "Name not found"}
                                                </p>
                                                <p className="font-medium text-gray-700 dark:text-gray-300 sofia text-center mr-2 mb-2  text-main ">
                                                    {user.email}
                                                </p>
                                                <hr className="my-2 border-gray-400 " />
                                                <li>
                                                    <NavLink to="/dashboard/userHome" className="flex items-center p-2 space-x-3 rounded-md">
                                                        <FaUser className="text-gray-700 dark:text-gray-300 sofadi text-md " />
                                                        <span className="text-gray-700 dark:text-gray-300 sofadi text-lg font-medium">Dashboard</span>
                                                    </NavLink>
                                                </li>
                                                <li>
                                                    <button
                                                        onClick={handleSignOut}
                                                        className="flex items-center p-2 space-x-3 rounded-md"
                                                    >
                                                        {/* Sign Out Icon */}
                                                        <FaSignOutAlt className="text-gray-700 dark:text-gray-300 sofadi text-md" />

                                                        {/* Sign Out Text */}
                                                        <span className="text-gray-700 dark:text-gray-300 sofadi text-lg font-medium">
                                                            Sign Out
                                                        </span>
                                                    </button>
                                                </li>
                                            </ul>
                                        </div>
                                    )}
                                </div>

                            </>
                            : <>
                                <Link className='hidden sm:block' to="/login">
                                    <CommonButton title={"Login"} width={"40"} hight={"12"}></CommonButton>
                                </Link>
                            </>
                        }
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Navbar;
