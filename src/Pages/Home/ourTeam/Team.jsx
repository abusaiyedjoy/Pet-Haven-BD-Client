import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import Header from "../../Header/Header";
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Team = () => {
    const iconMap = {
        FaFacebook: <FaFacebook size={24} />,
        FaTwitter: <FaTwitter size={24} />,
        FaInstagram: <FaInstagram size={24} />,
    };

    const axiosPublic = useAxiosPublic();

    const { data: teamMembers, isLoading } = useQuery({
        queryKey: ['teams'],
        queryFn: async () => {
            const { data } = await axiosPublic.get('/teams');
            return data;
        },
    });

    if (isLoading) {
        return (
            <div className="flex justify-center items-center w-full h-screen">
                <div className="w-10 h-10 animate-spin rounded-full border-double border-4 border-r-0 border-l-0 border-b-sky-400 border-t-sky-700"></div>
            </div>
        );
    }

    return (
        <section className="py-8 px-6 bg-white dark:bg-gray-800">
            {/* Header Component */}
            <div className="mb-5">
                <Header SubHeading={"-- Qualified Professionals --"} Heading={"Our Team Members"} />
            </div>

            {/* Team Members */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {teamMembers?.map((member, idx) => {
                    const { name, role, image, socialLinks } = member;

                    return (
                        <div
                            key={idx}
                            className="flex max-w-[320px] h-[400px] flex-col items-center justify-center space-y-3 rounded-xl bg-gray-100 pb-5 shadow-lg dark:bg-[#18181B]"
                        >
                            {/* Member Image */}
                            <div className="relative cursor-pointer w-full h-[250px] rounded-t-xl overflow-hidden group">
                                <img
                                    className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                                    src={image || "https://via.placeholder.com/320x250"} // Fallback image
                                    alt={`${name || "Team Member"}'s Profile`}
                                />
                                {/* Gradient Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-70 transition-opacity duration-500 ease-in-out"></div>
                            </div>

                            {/* Member Info */}
                            <div className="text-center pt-2">
                                <h1 className="text-2xl font-bold roboto text-gray-700 dark:text-white/90">{name || "Unknown"}</h1>
                                <p className="text-md font-medium text-secondary sofia">{role || "Role Not Specified"}</p>
                            </div>

                            {/* Social Icons */}
                            <div className="flex justify-between gap-4 py-2">
                                {socialLinks?.map((social, idx) => (
                                    <a
                                        key={idx}
                                        href={social.link || "#"}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="rounded-full p-3 bg-gray-50 dark:bg-slate-800 hover:text-red-700 shadow-lg hover:scale-125 transition-transform duration-200"
                                    >
                                        {iconMap[social.icon] || "?"}
                                    </a>
                                ))}
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default Team;
