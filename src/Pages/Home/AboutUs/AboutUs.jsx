/* eslint-disable react/no-unknown-property */
import Header from "../../Header/Header";

const AboutUs = () => {
    return (
        <section className="bg-white dark:bg-gray-800">
            <Header Heading={"About Pet Haven BD"}></Header>

            <div className="container flex flex-col px-6 pb-10 mx-auto space-y-6 lg:h-[32rem] lg:py-16 lg:flex-row lg:items-center">
                <div className="w-full lg:w-1/2">
                    <div className="lg:max-w-lg">
                        <h1 className="text-3xl font-semibold tracking-wide text-gray-800 dark:text-white lg:text-4xl">
                            Good Pets. Good people.
                        </h1>

                        <div className="mt-8 space-y-5">
                            <p className="flex items-center -mx-2 text-gray-700 dark:text-gray-200">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-2 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>

                                <span className="mx-2">Our New Pet Checklist to help your new pet feel right at home with you.</span>
                            </p>

                            <p className="flex items-center -mx-2 text-gray-700 dark:text-gray-200">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-2 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>

                                <span className="mx-2">Our Pet Health Checklist for vet-approved guidance on how to keep your pet in tip-top shape.</span>
                            </p>

                            <p className="flex items-center -mx-2 text-gray-700 dark:text-gray-200">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-2 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>

                                <span className="mx-2">Hand-picked articles and our A-Z Adopter Guide for additional adopter tips and know-how.</span>
                            </p>
                        </div>
                    </div>


                </div>
                <div className="flex justify-center items-center rounded-lg shadow-lg">
                    <video controls loop width="600" className="rounded-lg shadow-lg">
                        <source src="https://assets.contentstack.io/v3/assets/blt6f84e20c72a89efa/blt13048c5b7da5b545/6334bba627dad4487cbdb5e9/video-adoption-guide-desktop-900.mp4" type="video/mp4" />
                    </video>
                </div>
            </div>
            <header className="bg-white dark:bg-gray-800">
                <div className="container flex flex-col mx-auto gap-20 px-6 py-10 space-y-6 lg:h-[32rem] lg:py-16 lg:flex-row-reverse lg:items-center">
                    <div className="w-full lg:w-1/2">
                        <div className="lg:max-w-lg">
                            <h1 className="text-3xl font-semibold tracking-wide text-gray-800 dark:text-white lg:text-4xl">Creating loving families through pet adoption.</h1>
                            <p className="mt-4 text-gray-600 dark:text-gray-300">Founded in 2019, ThePetNest is the India’s largest network of 5-star pet care service providers.</p>
                            <div className="grid gap-6 mt-8 sm:grid-cols-2">
                                <div className="flex items-center text-gray-800 -px-3 dark:text-gray-200">
                                    <svg className="w-5 h-5 mx-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                                    </svg>

                                    <span className="mx-3 text-md">Background or identity checks</span>
                                </div>

                                <div className="flex items-center text-gray-800 -px-3 dark:text-gray-200">
                                    <svg className="w-5 h-5 mx-3 text-md" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                                    </svg>

                                    <span className="mx-3 text-md">Trust and safety experts</span>
                                </div>

                                <div className="flex items-center text-gray-800 -px-3 dark:text-gray-200">
                                    <svg className="w-5 h-5 mx-3 text-md" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                                    </svg>

                                    <span className="mx-3 text-md">Pet Haven BD Guarantee</span>
                                </div>

                                <div className="flex items-center text-gray-800 -px-3 dark:text-gray-200">
                                    <svg className="w-5 h-5 mx-3 text-md" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                                    </svg>

                                    <span className="mx-3 text-md">Verified reviews</span>
                                </div>

                                <div className="flex items-center text-gray-800 -px-3 dark:text-gray-200">
                                    <svg className="w-5 h-5 mx-3 text-md" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                                    </svg>

                                    <span className="mx-3 text-md">24/7 support</span>
                                </div>

                                <div className="flex items-center text-gray-800 -px-3 dark:text-gray-200">
                                    <svg className="w-5 h-5 mx-3 text-md" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                                    </svg>

                                    <span className="mx-3 text-md">Ongoing service education</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center justify-center w-full h-96 lg:w-1/2">
                        <img className="object-cover w-full h-full max-w-2xl rounded-md" src="https://i.ibb.co/8xhtt6P/adoption-header.jpg" alt="Pets photo" />
                    </div>
                </div>
            </header>
        </section>
    );
};

export default AboutUs