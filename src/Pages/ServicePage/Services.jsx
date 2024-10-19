import Cover from "../../Layout/Cover/Cover";
import SlideServices from "./../Home/Service/SlideServices";
import { TbCat } from "react-icons/tb"
import { FaArrowRight } from "react-icons/fa";
import { BiSolidBone } from "react-icons/bi"
import Header from "../Header/Header";

const Services = () => {

    const servicesData1 = [
        {
            "id": 1,
            "title": "Pet Grooming",
            "description": "Our pet grooming services ensure your pet looks clean and well-groomed with expert care."
        },
        {
            "id": 2,
            "title": "Pet Adoption",
            "description": "Find your perfect companion by exploring our adoption services for various lovable pets."
        },
        {
            "id": 3,
            "title": "Pet Training",
            "description": "We provide specialized training to help your pet learn new skills and good behavior."
        },
        {
            "id": 4,
            "title": "Veterinary Care",
            "description": "Our veterinary care ensure your pet stays healthy with regular checkups and treatment."
        },
        {
            "id": 5,
            "title": "Pet Boarding",
            "description": "We offer safe and comfortable boarding services for your pet when you need to be away."
        },
    ];
    const servicesData2 = [
        {
            "id": 1,
            "title": "Pet Walking",
            "description": "Keep your pet active and happy with our regular pet walking services."
        },
        {
            "id": 2,
            "title": "Pet Sitting",
            "description": "We provide in-home pet sitting services, ensuring your pet gets the care they need while you're away."
        },
        {
            "id": 3,
            "title": "Pet Nutrition",
            "description": "Our experts will help you choose the best nutrition plan for your pet to keep them healthy."
        },
        {
            "id": 4,
            "title": "Pet Exercise",
            "description": "Ensure your pet stays fit with our customized exercise routines designed for their needs."
        },
        {
            "id": 5,
            "title": "Pet Advice",
            "description": "Get expert advice on how to care for your pet, from health tips to general well-being."
        }
    ];

    return (
        <div className="min-h-screen bg-gray-100 dark:bg-gray-800">
            <Cover
                image="https://i.ibb.co/LJkTJrb/malek-dridi-0-F7-GRXNOG7g-unsplash.jpg"
                title="/ Services"
            />
            <section>
                <Header Heading={"Our More Service Offer's"} SubHeading={"We Really Care About Your Pets"} />

                <div className="flex flex-col border-b-4 rounded-xl border-primary mx-6 md:flex-row justify-between items-center md:items-end">

                    {/* Left Column - Services */}
                    <div className="mt-12 space-y-12 mb-3 w-full md:w-1/3">
                        {servicesData1.map((service, index) => (
                            <div className="flex justify-start items-start max-w-md" key={service.id}>
                                <div className="text-primary mt-1">
                                    {index % 2 === 0 ? <TbCat size={35} /> : <BiSolidBone size={35} />}
                                </div>
                                <div className="flex flex-col px-3">
                                    <h2 className="text-2xl font-semibold sm:text-3xl dark:text-gray-200 text-gray-800 roboto">
                                        {service.title}
                                    </h2>
                                    <p className="flex-1 mb-2 text-base leading-relaxed dark:text-gray-300 text-gray-700 sofadi">
                                        {service.description}
                                    </p>
                                    <a className="flex justify-start items-center space-x-2 text-sm sofadi text-red-500 hover:text-third" href="#">
                                        <span>Learn More</span>
                                        <FaArrowRight />
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Image Section */}
                    <div className="mt-8 md:mt-0 w-full md:w-1/3 flex justify-center">
                        <img
                            className="w-full h-auto max-w-xs md:max-w-sm"
                            src="https://i.ibb.co.com/hCfkkSn/Service-removebg-preview.png"
                            alt="Service Illustration"
                        />
                    </div>

                    {/* Right Column - Services */}
                    <div className="mt-12 space-y-12 mb-3 w-full md:w-1/3">
                        {servicesData2.map((service, index) => (
                            <div className="flex flex-row-reverse justify-start items-start max-w-md" key={service.id}>
                                <div className="text-primary mt-1">
                                    {index % 2 === 0 ? <TbCat size={35} /> : <BiSolidBone size={35} />}
                                </div>
                                <div className="flex flex-col px-3 text-right">
                                    <h2 className="text-2xl font-semibold sm:text-3xl dark:text-gray-200 text-gray-800 roboto">
                                        {service.title}
                                    </h2>
                                    <p className="flex-1 mb-2 text-base leading-relaxed dark:text-gray-300 text-gray-700 sofadi">
                                        {service.description}
                                    </p>
                                    <a className="flex justify-end gap-1 items-center text-right text-sm sofadi text-red-500 hover:text-third" href="#">
                                        <span>Learn More</span>
                                        <FaArrowRight />
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <div className="mb-0">
                <SlideServices />
            </div>
        </div>
    );
};

export default Services;
