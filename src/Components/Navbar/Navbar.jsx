import { useState, useEffect } from "react";
import { FaMoon, FaSun, FaEllipsisV } from "react-icons/fa";
import { HiMenuAlt1 } from "react-icons/hi";
import { HiMiniComputerDesktop } from "react-icons/hi2";
import { Link, NavLink } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import toast from "react-hot-toast";

const Navbar = () => {
    const { user, signOutUser } = useAuth()
    const [theme, setTheme] = useState(localStorage.getItem("theme") || "system");
    const element = document.documentElement;
    const darkQuery = window.matchMedia("(prefers-color-scheme: dark)");

    // User Profile

    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };



    // Theme Control

    const options = [
        { icon: <FaSun />, text: 'Light' },
        { icon: <FaMoon />, text: 'Dark' },
        { icon: <HiMiniComputerDesktop />, text: 'System' },
    ];

    const applyTheme = (theme) => {
        if (theme === "Dark" || (theme === "System" && darkQuery.matches)) {
            element.classList.add("dark");
        } else {
            element.classList.remove("dark");
        }
    };

    const handleThemeChange = (newTheme) => {
        setTheme(newTheme);
        localStorage.setItem("theme", newTheme);
        applyTheme(newTheme);
    };


    // Sign Out User

    const handleSignOut = () => {
        signOutUser()
            .then((result) => {
                console.log(result);
                toast.success('Sign Out Successfully!')

            })
            .catch((error) => {
                console.log(error);
            });
    }



    useEffect(() => {
        applyTheme(theme);
        const handleChange = (e) => {
            if (theme === "System") {
                applyTheme(e.matches ? "Dark" : "Light");
            }
        };
        darkQuery.addEventListener("change", handleChange);
        return () => darkQuery.removeEventListener("change", handleChange);
    }, [theme]);

    const navlinks = (
        <>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/parent">Parent</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>
            <li><NavLink to="/dashboard">Dashboard</NavLink></li>
        </>
    );

    return (
        <div className="h-16 shadow-2xl bg-gray-200 dark:bg-gray-800">
            <div className="flex justify-between items-center h-full px-4">
                <div className="navbar-start w-auto">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden flex justify-center items-center">
                            <HiMenuAlt1 size={30} />

                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow rounded-box dark:text-gray-100 dark:bg-gray-800 text-gray-800 bg-gray-300">

                            {navlinks}
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-2xl font-semibold dark:text-gray-100 text-gray-800">Undifined</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 text-lg font-medium dark:text-gray-100 text-gray-800">
                        {navlinks}
                    </ul>
                </div>
                <div className="flex justify-between items-center gap-5">
                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                            <div className="indicator">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-gray-800 dark:text-gray-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                                </svg>
                                <span className="badge badge-sm indicator-item bg-sky-500 text-black dark:text-white w-5 h-5 text-md"></span>
                            </div>
                        </div>
                        <div tabIndex={0} className="mt-3 z-50 card card-compact dropdown-content w-52 bg-base-100 rounded-lg shadow">
                            <div className="card-body bg-gray-200 dark:bg-gray-600 border-gray-300 shadow-xl border-2 rounded-xl">
                                <span className="font-bold text-sky-500 text-2xl">Foods</span>
                                <span className="dark:text-gray-200 text-gray-900 text-lg font-medium">Subtotal: $100</span>
                                <div className="card-actions">
                                    <Link to="viewCart" className="bg-sky-500 hover:bg-sky-600 hover:shadow-md px-6 py-2 flex items-center justify-center rounded-full w-full text-xl font-bold text-gray-200 ">
                                        View cart
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="navbar-end flex items-center gap-5">
                        <div className="dropdown dropdown-hover">
                            <div tabIndex={0} role="button">
                                <button className="p-2 dark:text-gray-100 text-gray-600 dark:bg-gray-600 dark:hover:bg-gray-500 bg-gray-200 rounded-xl duration-100">
                                    {theme === "Dark" ? <FaMoon size={22} /> : theme === "Light" ? <FaSun size={22} /> : <HiMiniComputerDesktop size={22} />}
                                </button>
                            </div>
                            <ul tabIndex={0} className="dropdown-content absolute right-0 menu p-2 mt-3 bg-gray-100 dark:bg-gray-600 shadow-md dark:text-gray-200 text-gray-800 text-xl font-semibold rounded-box">
                                {options.map((option) => (
                                    <li key={option.text} onClick={() => handleThemeChange(option.text)} className={` ${theme === option.text && 'text-blue-500'}`}>
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
                                        className="relative z-10 block p-2 text-gray-700 bg-white border border-transparent rounded-md dark:text-white focus:border-blue-500 focus:ring-opacity-40 dark:focus:ring-opacity-40 focus:ring-blue-300 dark:focus:ring-blue-400 focus:ring dark:bg-gray-800 focus:outline-none"
                                    >
                                        <FaEllipsisV className="w-5 h-5" />
                                    </button>

                                    {isOpen && (
                                        <div
                                            className="absolute right-0 z-20 w-48 py-2 mt-2 origin-top-right bg-white rounded-box shadow-xl dark:bg-gray-800"
                                        >
                                            <ul className="p-2 menu dropdown-content ">
                                                <img
                                                    className=" w-12 h-12 mx-auto  rounded-full mb-2 mt-2 border-2 border-main"
                                                    src={user?.photoURL ? user.photoURL : "https://i.ibb.co/DLcr2Vk/sam-moghadam-khamseh-yx-ZSAjy-To-P4-unsplash.jpg"}
                                                    alt=""
                                                />
                                                <p className="font-semibold text-center mr-2 mb-2 text-main ">
                                                    {user.displayName}
                                                </p>
                                                <p className="font-semibold text-center mr-2 mb-2  text-main ">
                                                    {user.email}
                                                </p>
                                                <li className="cursor-pointer inline-flex items-center rounded-full text-xl font-mono font-semibold text-sky-600 hover:text-white border-2 border-sky-600
                                    transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-90 hover:bg-sky-600 duration-300  focus:bg-transparent">
                                                    <button onClick={handleSignOut}>Sign Out</button>
                                                </li>
                                            </ul>
                                        </div>
                                    )}
                                </div>

                            </>
                            : <>
                                <Link to="/login">
                                    <button className="cursor-pointer inline-flex items-center rounded-full px-7 py-2 text-xl font-mono font-semibold text-sky-600 hover:text-white border-2 border-sky-600
                                    transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-90 hover:bg-sky-600 duration-300  focus:bg-transparent">
                                        Login
                                    </button>
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
