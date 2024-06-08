
const AboutFeatures = () => {
    return (
        <section className="bg-white dark:bg-gray-900">
            <div className="container px-6 py-10 mx-auto">
                <h1 className="text-2xl text-center font-semibold text-gray-800 capitalize lg:text-3xl dark:text-white">
                    Learn More About Us and Our Mission
                </h1>

                <div className="mt-2 text-center">
                    <span className="inline-block w-40 h-1 bg-blue-500 rounded-full"></span>
                    <span className="inline-block w-3 h-1 ml-1 bg-blue-500 rounded-full"></span>
                    <span className="inline-block w-1 h-1 ml-1 bg-blue-500 rounded-full"></span>
                </div>

                <div className="mt-8 xl:mt-12 lg:flex lg:items-center">
                    <div className="grid w-full grid-cols-1 gap-8 lg:w-1/2 xl:gap-16 md:grid-cols-2">
                        <div className="space-y-3">
                            <span className="inline-block p-3 text-blue-500 bg-blue-100 rounded-xl dark:text-white dark:bg-blue-500">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                                </svg>
                            </span>

                            <h1 className="text-xl font-semibold text-gray-700 capitalize dark:text-white">Our Mission</h1>

                            <p className="text-gray-500 dark:text-gray-300">
                                We strive to connect loving homes with pets in need. Our mission is to provide a safe and caring environment for abandoned and rescued pets until they find their forever homes.
                            </p>
                        </div>

                        <div className="space-y-3">
                            <span className="inline-block p-3 text-blue-500 bg-blue-100 rounded-xl dark:text-white dark:bg-blue-500">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
                                    <path d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" />
                                </svg>
                            </span>

                            <h1 className="text-xl font-semibold text-gray-700 capitalize dark:text-white">Why Adopt</h1>

                            <p className="text-gray-500 dark:text-gray-300">
                                Adopting a pet not only saves a life but also enriches yours. Our pets come from various backgrounds and are looking for a second chance at a happy life.
                            </p>
                        </div>

                        <div className="space-y-3">
                            <span className="inline-block p-3 text-blue-500 bg-blue-100 rounded-xl dark:text-white dark:bg-blue-500">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
                                </svg>
                            </span>

                            <h1 className="text-xl font-semibold text-gray-700 capitalize dark:text-white">How It Works</h1>

                            <p className="text-gray-500 dark:text-gray-300">
                                Our adoption process is simple and straightforward. Browse available pets, fill out an adoption form, and meet your new furry friend.
                            </p>
                        </div>

                        <div className="space-y-3">
                            <span className="inline-block p-3 text-blue-500 bg-blue-100 rounded-xl dark:text-white dark:bg-blue-500">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                                </svg>
                            </span>

                            <h1 className="text-xl font-semibold text-gray-700 capitalize dark:text-white">Our Impact</h1>

                            <p className="text-gray-500 dark:text-gray-300">
                                Since our inception, we have successfully rehomed hundreds of pets. Our goal is to continue making a positive impact on the lives of pets and their new families.
                            </p>
                        </div>
                    </div>

                    <div className="hidden lg:flex lg:w-1/2 lg:justify-center">
                        <img className="w-[28rem] h-[28rem] flex-shrink-0 object-cover xl:w-[34rem] xl:h-[34rem] rounded-full" src="https://i.ibb.co/NTcPg0g/luiza-sayfullina-9giow4j-Xrz-M-unsplash.jpg" alt="Pet Adoption"/>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutFeatures;
