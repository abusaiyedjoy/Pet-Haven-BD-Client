import Header from "../../Header/Header";
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa'; // React Icons Import

const Team = () => {
    const iconsArr = [
        { icon: <FaFacebook size={24} />, link: "https://facebook.com" },
        { icon: <FaTwitter size={24} />, link: "https://twitter.com" },
        { icon: <FaInstagram size={24} />, link: "https://instagram.com" },
    ];

    return (
        <section className="py-8 px-6">
            {/* Header Component */}
            <div className="mb-5">
                <Header SubHeading={"-- Qualified Professionals --"} Heading={"Our Team Members"} />
            </div>

            {/* Profile Card */}
            <div
                className="flex max-w-[320px] h-[400px] flex-col items-center justify-center space-y-3 rounded-xl bg-gray-100 pb-5 shadow-lg dark:bg-[#18181B]"
            >
                <div className="relative cursor-pointer w-full h-[250px] rounded-t-xl overflow-hidden group">
                    {/* Background Image */}
                    <img
                        className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                        src="https://i.ibb.co.com/GnhL2PV/Profile.jpg"
                        alt="Background"
                    />
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-70 transition-opacity duration-500 ease-in-out"></div>
                </div>

                {/* Member Info */}
                <div className="text-center pt-2">
                    <h1 className="text-2xl font-bold roboto text-gray-700 dark:text-white/90">Abu Saiyed Joy</h1>
                    <p className="text-md font-medium text-secondary sofia">Web Developer</p>
                </div>

                {/* Social Icons */}
                <div className="flex justify-between gap-4 py-2">
                    {iconsArr.map((item, idx) => (
                        <a
                            key={idx}
                            href={item.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="rounded-full p-3 bg-gray-50 dark:bg-slate-800 hover:text-red-700 shadow-lg hover:scale-125 transition-transform duration-200"
                        >
                            {item.icon}
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Team;
