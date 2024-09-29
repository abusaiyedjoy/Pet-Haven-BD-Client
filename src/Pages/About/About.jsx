import Cover from "../../Layout/Cover/Cover";
import Header from "../Header/Header";
import AboutFeatures from "./AboutFeatures";

const About = () => {

    return (
        <div className="min-h-screen bg-[#F5F2EB] dark:bg-gray-800">
            <Cover
                image={'https://i.ibb.co/bstNQ2D/bri-tucker-LGG5-P7-KCzi-U-unsplash.jpg'}
                header={"About Us"}
                title={" / About Us"}
            />
            <AboutFeatures></AboutFeatures>
            {/* Frequently Asked Questions */}
            <Header Heading={"FAQs (Frequently Asked Questions)"} SubHeading={"More About Us"}></Header>
            <div className="space-y-4 max-w-4xl mx-auto pb-16">
                <details
                    className="group border-s-4 border-third bg-gray-50 p-6 dark:bg-gray-900 [&_summary::-webkit-details-marker]:hidden"
                    open
                >
                    <summary className="flex cursor-pointer items-center justify-between gap-1.5">
                        <h2 className="text-lg font-medium text-gray-900 dark:text-white">
                        1. How can I adopt a pet?
                        </h2>

                        <span
                            className="shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3 dark:bg-gray-800 dark:text-white"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-5 shrink-0 transition duration-300 group-open:-rotate-45"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </span>
                    </summary>

                    <p className="mt-4 leading-relaxed text-gray-700 dark:text-gray-200">
                    To adopt a pet, simply browse our available pets on the "Pet Listing" page, select the one you'd like to adopt, and fill out the adoption application form. Our team will review your application and get in touch to guide you through the next steps.
                    </p>
                </details>

                <details
                    className="group border-s-4 border-third bg-gray-50 p-6 dark:bg-gray-900 [&_summary::-webkit-details-marker]:hidden"
                >
                    <summary className="flex cursor-pointer items-center justify-between gap-1.5">
                        <h2 className="text-lg font-medium text-gray-900 dark:text-white">
                        2. What is the adoption process like?
                        </h2>

                        <span
                            className="shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3 dark:bg-gray-800 dark:text-white"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-5 shrink-0 transition duration-300 group-open:-rotate-45"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </span>
                    </summary>

                    <p className="mt-4 leading-relaxed text-gray-700 dark:text-gray-200">
                    Our adoption process includes filling out an application, a screening process, and a meet-and-greet with the pet. Once approved, you'll complete the necessary paperwork and take your new companion home!
                    </p>
                </details>
                <details
                    className="group border-s-4 border-third bg-gray-50 p-6 dark:bg-gray-900 [&_summary::-webkit-details-marker]:hidden"
                >
                    <summary className="flex cursor-pointer items-center justify-between gap-1.5">
                        <h2 className="text-lg font-medium text-gray-900 dark:text-white">
                        3. What should I prepare before adopting a pet?
                        </h2>

                        <span
                            className="shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3 dark:bg-gray-800 dark:text-white"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-5 shrink-0 transition duration-300 group-open:-rotate-45"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </span>
                    </summary>

                    <p className="mt-4 leading-relaxed text-gray-700 dark:text-gray-200">
                    Before adopting, ensure you have the proper supplies, like food, water bowls, bedding, toys, and a safe, comfortable space for your new pet. Also, be prepared for the time and commitment it takes to care for an animal.
                    </p>
                </details>
                <details
                    className="group border-s-4 border-third bg-gray-50 p-6 dark:bg-gray-900 [&_summary::-webkit-details-marker]:hidden"
                >
                    <summary className="flex cursor-pointer items-center justify-between gap-1.5">
                        <h2 className="text-lg font-medium text-gray-900 dark:text-white">
                        4. Can I meet the pet before adopting?
                        </h2>

                        <span
                            className="shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3 dark:bg-gray-800 dark:text-white"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-5 shrink-0 transition duration-300 group-open:-rotate-45"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </span>
                    </summary>

                    <p className="mt-4 leading-relaxed text-gray-700 dark:text-gray-200">
                    Yes, we encourage prospective adopters to meet the pet in person or through a virtual meet-and-greet. You can schedule a meeting after submitting your application.
                    </p>
                </details>
                <details
                    className="group border-s-4 border-third bg-gray-50 p-6 dark:bg-gray-900 [&_summary::-webkit-details-marker]:hidden"
                >
                    <summary className="flex cursor-pointer items-center justify-between gap-1.5">
                        <h2 className="text-lg font-medium text-gray-900 dark:text-white">
                        5. What if the pet doesn’t adjust well to my home?
                        </h2>

                        <span
                            className="shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3 dark:bg-gray-800 dark:text-white"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-5 shrink-0 transition duration-300 group-open:-rotate-45"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </span>
                    </summary>

                    <p className="mt-4 leading-relaxed text-gray-700 dark:text-gray-200">
                    We understand that not all adoptions are a perfect fit. If the pet doesn't adjust well to your home, we will work with you to find a solution, which may include returning the pet to us.
                    </p>
                </details>
            </div>
        </div>
    );
};

export default About;
