/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import usePet from "../../../Hooks/usePets";
import LoadingSpinner from "../../../Components/Shared/Loading";
import Share from "../../../Components/Buttons/Share";
import { RiSlideshowFill } from "react-icons/ri";
import { Swiper, SwiperSlide } from "swiper/react";
import {
     Autoplay, 
     Pagination } from "swiper/modules";
import PetsCard from "./PetsCard";
import './AllPets.css'
import { MdPets } from "react-icons/md";
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";

const AllPets = () => {
    const [page, setPage] = useState(1);
    const limit = 8;
    const [totalPages] = usePet(page, limit);
    const axiosPublic = useAxiosPublic();
    const [params, setParams]=useSearchParams();
    const category=params.get('category');


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

    const { data: PetData = [], isLoading } = useQuery({
        queryKey: ['pet', category],
        queryFn: async () => {
            const { data } = await axiosPublic.get(`/pets?category=${category}`);
            return data;
        }
    });


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
            breakpoints={{
                1024: { slidesPerView: 2 },
                1440: { slidesPerView: 3 },
            }}
            modules={[
                Autoplay,
                 Pagination]}
            className="w-full mx-auto flex justify-center items-center"
        >
            {PetData ? PetData?.map((pet) => (
                <SwiperSlide key={pet.id}>
                    <PetsCard pet={pet} />
                </SwiperSlide>
            )) : (
                <div className="flex justify-center items-center w-full h-full">
                    <div className="w-10 h-10 animate-[spin_1s_linear_infinite] rounded-full border-double border-4 border-r-0 border-l-0 border-b-sky-400 border-t-sky-700"></div>
                    <h1>Loading</h1>
                </div>
            )}
        </Swiper>
    );

    return (
        <section className="background-img pt-4 pb-16 bg-gray-100 dark:bg-gray-800">
            <div className="text-center w-full space-y-4 mx-auto py-12">
                <MdPets className="mx-auto text-4xl text-red-700 animate-petsWiggle" />
                <h1 className="mx-auto roboto text-center text-gray-300 ">-- Adopting is an act of love --</h1>
                <h2 className="text-3xl font-semibold text-center roboto capitalize lg:text-5xl text-gray-200 dark:text-gray-100">
                    Choose Favourite Pet for Adoption
                </h2>
            </div>

            {isLoading ? (
                <LoadingSpinner />
            ) : (
                <>
                    {renderSwiper()}

                    {/* Button to View All Blogs */}
                    <div className="my-12 flex justify-center items-center">
                        <Link to="/petListing">
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
