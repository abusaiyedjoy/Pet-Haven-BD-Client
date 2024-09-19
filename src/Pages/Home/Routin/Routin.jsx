import { MdPets } from "react-icons/md";

const Routin = () => {
    return (
        <section className="bg-gray-100 dark:bg-gray-900">
            <div className="h-[32rem] bg-gray-100 dark:bg-gray-800">
                <div className="container px-6 py-10 mx-auto">
                    <MdPets className="mx-auto text-3xl text-gray-600 dark:text-gray-300" />
                    <h1 className="text-2xl lg:text-4xl font-semibold text-center text-gray-800 capitalize dark:text-white">Start With a Healthy Routine</h1>

                    <div className="flex justify-center mx-auto mt-6">
                        <span className="inline-block w-40 h-1 bg-secondary rounded-full"></span>
                        <span className="inline-block w-3 h-1 mx-1 bg-secondary rounded-full"></span>
                        <span className="inline-block w-1 h-1 bg-secondary rounded-full"></span>
                    </div>

                    <p className="max-w-2xl text-lg  mx-auto my-6 text-center text-gray-500 dark:text-gray-300">
                        Protect your new furry family member with the broadest available parasite protection yet. And with these Zoetis Petcare Rewards offers, you can earn Rewards to spend on future vet visits.                    </p>
                </div>
            </div>

            <div className="container px-6 py-10 mx-auto -mt-72 sm:-mt-80 md:-mt-96 w-full">
                <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-16">
                    <div className="flex flex-col items-center border rounded-xl dark:border-gray-700">
                        <img className="object-cover w-full rounded-xl" src="https://i.ibb.co/y50fTC0/pet-mating-banner-section-customer-banner.jpg" alt="" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Routin;