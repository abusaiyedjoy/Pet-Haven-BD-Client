import Header from "../../Header/Header";
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Team = () => {
    const teamMembers = [
        {
            name: "Abu Saiyed Joy",
            role: "Web Developer",
            image: "https://i.ibb.co/GnhL2PV/Profile.jpg",
            socialLinks: [
                { icon: <FaFacebook size={24} />, link: "https://facebook.com" },
                { icon: <FaTwitter size={24} />, link: "https://twitter.com" },
                { icon: <FaInstagram size={24} />, link: "https://instagram.com" },
            ]
        },
        {
            name: "Arafat Hossain",
            role: "UI/UX Designer",
            image: "https://i.ibb.co/ZYW3VTp/brown-brim.png",
            socialLinks: [
                { icon: <FaFacebook size={24} />, link: "https://facebook.com" },
                { icon: <FaTwitter size={24} />, link: "https://twitter.com" },
                { icon: <FaInstagram size={24} />, link: "https://instagram.com" },
            ]
        },
        {
            name: "Sadia Akter",
            role: "Frontend Developer",
            image: "https://i.ibb.co/6YZZQ1Z/blue-beanie.png",
            socialLinks: [
                { icon: <FaFacebook size={24} />, link: "https://facebook.com" },
                { icon: <FaTwitter size={24} />, link: "https://twitter.com" },
                { icon: <FaInstagram size={24} />, link: "https://instagram.com" },
            ]
        },
        {
            name: "Sabbir Ahmed",
            role: "Backend Developer",
            image: "https://i.ibb.co.com/fHMDdq7/Whats-App-Image-2024-08-25-at-15-28-48-dae0f1e5-removebg-preview.png",
            socialLinks: [
                { icon: <FaFacebook size={24} />, link: "https://facebook.com" },
                { icon: <FaTwitter size={24} />, link: "https://twitter.com" },
                { icon: <FaInstagram size={24} />, link: "https://instagram.com" },
            ]
        },
    ];

    return (
        <section className="py-8 px-6 bg-white dark:bg-gray-800">
            {/* Header Component */}
            <div className="mb-5">
                <Header SubHeading={"-- Qualified Professionals --"} Heading={"Our Team Members"} />
            </div>

            {/* Team Members */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {teamMembers.map((member, idx) => (
                    <div
                        key={idx}
                        className="flex max-w-[320px] h-[400px] flex-col items-center justify-center space-y-3 rounded-xl bg-gray-100 pb-5 shadow-lg dark:bg-[#18181B]"
                    >
                        <div className="relative cursor-pointer w-full h-[250px] rounded-t-xl overflow-hidden group">
                            {/* Background Image */}
                            <img
                                className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                                src={member.image}
                                alt={`${member.name}'s Profile`}
                            />
                            {/* Gradient Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-70 transition-opacity duration-500 ease-in-out"></div>
                        </div>

                        {/* Member Info */}
                        <div className="text-center pt-2">
                            <h1 className="text-2xl font-bold roboto text-gray-700 dark:text-white/90">{member.name}</h1>
                            <p className="text-md font-medium text-secondary sofia">{member.role}</p>
                        </div>

                        {/* Social Icons */}
                        <div className="flex justify-between gap-4 py-2">
                            {member.socialLinks.map((social, idx) => (
                                <a
                                    key={idx}
                                    href={social.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="rounded-full p-3 bg-gray-50 dark:bg-slate-800 hover:text-red-700 shadow-lg hover:scale-125 transition-transform duration-200"
                                >
                                    {social.icon}
                                </a>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Team;
