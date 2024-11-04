/* eslint-disable react/no-unescaped-entities */
import { MdPets } from "react-icons/md";
import BlogCard from "./BlogCard";
import './Blog.css';
import { Link } from "react-router-dom";
import Share from "../../../Components/Buttons/Share";
import { RiSlideshowFill } from "react-icons/ri";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";

const Blog = () => {

    const axiosPublic = useAxiosPublic();

    const {data: blogData, isLoading} = useQuery({
        queryKey: ['blogs'],
        queryFn: async () => {
            const {data} = await axiosPublic.get('/blogs');
            return data;
        },
    })

    if (isLoading) {
        return (<div className="flex justify-center items-center w-full h-screen">
            <div className="w-10 h-10 animate-[spin_1s_linear_infinite] rounded-full border-double border-4 border-r-0 border-l-0 border-b-sky-400 border-t-sky-700"></div>
        </div>)
    }

    return (
        <section className="background py-12">
            {/* Blog Section Title */}
            <div className="text-center w-full space-y-4 mx-auto py-12">
                <MdPets className="mx-auto text-4xl text-red-700 animate-petsWiggle" />
                <h1 className="mx-auto roboto text-center text-gray-300 ">-- keep updated --</h1>
                <h2 className="text-3xl font-semibold text-center roboto capitalize lg:text-5xl text-gray-200 dark:text-gray-100">
                    Our Latest Blog's
                </h2>
            </div>

            {/* Swiper for Blog Cards */}
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
                    640: {
                        slidesPerView: 1,
                    },
                    768: {
                        slidesPerView: 2,
                    },
                    1024: {
                        slidesPerView: 3,
                    },
                    1440: {
                        slidesPerView: 4,
                    },
                }}
                modules={[Autoplay, Pagination]}
                className="w-full mx-auto"
            >
                {blogData.map((blog) => (
                    <SwiperSlide key={blog.id}>
                        <BlogCard blog={blog}></BlogCard>
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* Button to View All Blogs */}
            <div className="my-12 flex justify-center items-center">
                <Link to="/allBlogs">
                    <Share title={"All Blog's"} icon={<RiSlideshowFill size={32} />}></Share>
                </Link>
            </div>
        </section>
    );
};

export default Blog;
