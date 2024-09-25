/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import { Link } from "react-router-dom";
import usePet from "../../../Hooks/usePets";
import LoadingSpinner from "../../../Components/Shared/Loading";
import Share from "../../../Components/Buttons/Share";
import { RiSlideshowFill } from "react-icons/ri";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import PetsCard from "./PetsCard";
import './AllPets.css'
import { MdPets } from "react-icons/md";

const AllPets = () => {
    const [page, setPage] = useState(1);
    const limit = 8;
    const [totalPages, loading] = usePet(page, limit);

    const handleNextPage = () => {
        if (page < totalPages) {
            setPage((prevPage) => prevPage + 1);
            window.scrollTo(0, 0);
        }
    };

    const handlePreviousPage = () => {
        if (page > 1) {
            setPage((prevPage) => Math.max(prevPage - 1, 1));
            window.scrollTo(0, 0);
        }
    };

    const PetData = [
        {
            id: 1,
            name: "Buddy",
            gender: "Male",
            age: "2 years",
            vaccinated: "true",
            breed: "Golden Retriever",
            description:
                "Buddy is a friendly and active Golden Retriever who loves to play. He's great with children and other pets, making him an ideal family companion.",
            size: "Large",
            color: "Golden",
            weight: "30 kg",
            healthStatus: "Healthy",
            neutered: "true",
            adoptionFee: "$150",
            location: {
                city: "Dhaka",
                district: "Dhaka",
                country: "Bangladesh"
            },
            images: [
                "https://i.ibb.co/mz920js/michael-sum-LEpfef-Qf4r-U-unsplash.jpg",
                "https://i.ibb.co/VJ2MjHk/sandy-millar-k-KAa-Ce-Gf5w-Y-unsplash.jpg"
            ],
            contactInfo: {
                phone: "+880-1712345678",
                email: "adopt@petshelterbd.com"
            },
            category: "dog",
            postedDate: "2024-09-23"
        },
        {
            id: 2,
            name: "Whiskers",
            gender: "Female",
            age: "3 years",
            vaccinated: "true",
            breed: "Siamese Cat",
            description:
                "Whiskers is a calm and affectionate cat. She loves to curl up in the sun and is great for a quiet home.",
            size: "Medium",
            color: "Gray",
            weight: "4 kg",
            healthStatus: "Healthy",
            neutered: "true",
            adoptionFee: "Free",
            location: {
                city: "Chittagong",
                district: "Chittagong",
                country: "Bangladesh"
            },
            images: [
                "https://i.ibb.co/ZzbzdwY/zane-lee-Vv-TVkc-p-eg-unsplash.jpg",
                "https://i.ibb.co/GFvC568/nita-anggraeni-goenawan-2-Jiha-EVs8-Dc-unsplash.jpg"
            ],
            contactInfo: {
                phone: "+880-1812345678",
                email: "adopt@petshelterbd.com"
            },
            category: "cat",
            postedDate: "2024-09-23"
        },
        {
            id: 3,
            name: "Charlie",
            gender: "Male",
            age: "1 year",
            vaccinated: "true",
            breed: "Parrot",
            description:
                "Charlie is a colorful and talkative parrot who loves to mimic sounds. Perfect for someone looking for a lively companion.",
            size: "Small",
            color: "Green and Red",
            weight: "0.5 kg",
            healthStatus: "Healthy",
            neutered: "false",
            adoptionFee: "$50",
            location: {
                city: "Sylhet",
                district: "Sylhet",
                country: "Bangladesh"
            },
            images: [
                "https://i.ibb.co/gdGggK2/dominik-lange-BFsm5vldl2-I-unsplash.jpg",
                "https://i.ibb.co/yBkdPf8/pablo-martinez-Adagxt-VKRWE-unsplash.jpg"
            ],
            contactInfo: {
                phone: "+880-1912345678",
                email: "adopt@petshelterbd.com"
            },
            category: "bird",
            postedDate: "2024-09-23"
        },
        {
            id: 4,
            name: "Snowball",
            gender: "Female",
            age: "6 months",
            vaccinated: "true",
            breed: "Rabbit",
            description:
                "Snowball is a fluffy and energetic rabbit who enjoys hopping around. She’s great for families with kids.",
            size: "Small",
            color: "White",
            weight: "1.2 kg",
            healthStatus: "Healthy",
            neutered: "false",
            adoptionFee: "$30",
            location: {
                city: "Rajshahi",
                district: "Rajshahi",
                country: "Bangladesh"
            },
            images: [
                "https://i.ibb.co/4gRtCV2/taylor-kopel-WX4i1-Jq-o0-Y-unsplash.jpg",
                "https://i.ibb.co/mDgvb8D/andrew-pons-lyl-Cw4zc-A7-I-unsplash.jpg"
            ],
            contactInfo: {
                phone: "+880-1712346789",
                email: "adopt@petshelterbd.com"
            },
            category: "rabbit",
            postedDate: "2024-09-23"
        },
        {
            id: 5,
            name: "Thunder",
            gender: "Male",
            age: "4 years",
            vaccinated: "true",
            breed: "Arabian Horse",
            description:
                "Thunder is a majestic and strong Arabian horse. He is well-trained and ready for riding.",
            size: "Large",
            color: "Brown",
            weight: "400 kg",
            healthStatus: "Healthy",
            neutered: "false",
            adoptionFee: "$2000",
            location: {
                city: "Khulna",
                district: "Khulna",
                country: "Bangladesh"
            },
            images: [
                "https://i.ibb.co/mz920js/michael-sum-LEpfef-Qf4r-U-unsplash.jpg",
                "https://i.ibb.co/GFvC568/nita-anggraeni-goenawan-2-Jiha-EVs8-Dc-unsplash.jpg"
            ],
            contactInfo: {
                phone: "+880-1512345678",
                email: "adopt@petshelterbd.com"
            },
            category: "horse",
            postedDate: "2024-09-23"
        }
    ];



    const renderSwiper = () => (
        <Swiper
            slidesPerView={1}
            spaceBetween={12}
            loop={true}
            autoplay={{
                delay: 3000,
                disableOnInteraction: false,
            }}
            pagination={{
                clickable: true,
            }}
            // breakpoints={{
            //     768: { slidesPerView: 2 },
            // }}
            modules={[Autoplay, Pagination]}
            className="w-full mx-auto"
        >
            {PetData.map((pet) => (
                <SwiperSlide key={pet.id} className="max-w-lg mx-auto">
                    <PetsCard pet={pet} />
                </SwiperSlide>
            ))}
        </Swiper>
    );

    return (
        <section className="background-img pt-4 pb-16 bg-gray-100 dark:bg-gray-800">
            <div className="text-center w-full space-y-4 mx-auto py-12">
                <MdPets className="mx-auto text-4xl text-red-600" />
                <h1 className="mx-auto roboto text-center text-gray-300 ">-- Adopting is an act of love --</h1>
                <h2 className="text-3xl font-semibold text-center roboto capitalize lg:text-5xl text-gray-200 dark:text-gray-100">
                    Choose Favourite Pet for Adoption
                </h2>
            </div>

            {loading ? (
                <LoadingSpinner />
            ) : (
                <>
                    {renderSwiper()}

                    {/* Button to View All Blogs */}
                    <div className="my-12 flex justify-center items-center">
                        <Link to="/allBlogs">
                            <Share title={"All Adoption Post's"} icon={<RiSlideshowFill size={32} />} />
                        </Link>
                    </div>

                    {/* Pagination Controls */}
                    <div className="flex justify-center mt-8">
                        <button
                            onClick={handlePreviousPage}
                            disabled={page === 1}
                            aria-label="Previous Page"
                            className={`px-4 py-2 mx-2 bg-secondary hover:bg-primary text-white font-bold rounded ${page === 1 ? "opacity-50 cursor-not-allowed" : ""}`}
                        >
                            Previous
                        </button>
                        <button
                            onClick={handleNextPage}
                            disabled={page === totalPages}
                            aria-label="Next Page"
                            className={`px-4 py-2 mx-2 bg-secondary hover:bg-primary text-white font-bold rounded ${page === totalPages ? "opacity-50 cursor-not-allowed" : ""}`}
                        >
                            Next
                        </button>
                    </div>
                </>
            )}
        </section>
    );
};

export default AllPets;
