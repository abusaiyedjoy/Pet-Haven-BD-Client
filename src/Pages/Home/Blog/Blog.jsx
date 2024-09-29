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

const Blog = () => {
    const blogData = [
        {
            "id": 1,
            "img": "https://i.ibb.co/mz920js/michael-sum-LEpfef-Qf4r-U-unsplash.jpg",
            "title": "How to Prepare for a New Pet",
            "description": "Tips to make your home safe and comfy for a new pet, ensuring a smooth transition.",
            "avatarImg": "https://i.ibb.co/4gRtCV2/taylor-kopel-WX4i1-Jq-o0-Y-unsplash.jpg",
            "name": "By Lauren Waller",
            "date": "18",
            "month": "Sep"
        },
        {
            "id": 2,
            "img": "https://i.ibb.co/ZzbzdwY/zane-lee-Vv-TVkc-p-eg-unsplash.jpg",
            "title": "The Importance of Vet Visits",
            "description": "Learn why regular vet visits are key to keeping your pet happy and healthy.",
            "avatarImg": "https://i.ibb.co/yBkdPf8/pablo-martinez-Adagxt-VKRWE-unsplash.jpg",
            "name": "By Aaron Larsson",
            "date": "10",
            "month": "Sep"
        },
        {
            "id": 3,
            "img": "https://i.ibb.co/VJ2MjHk/sandy-millar-k-KAa-Ce-Gf5w-Y-unsplash.jpg",
            "title": "Top Tips for Adopting Senior Pets",
            "description": "Adopt a senior pet and discover why older pets make the best companions.",
            "avatarImg": "https://i.ibb.co/mDgvb8D/andrew-pons-lyl-Cw4zc-A7-I-unsplash.jpg",
            "name": "By Lauren Waller",
            "date": "25",
            "month": "Aug"
        },
        {
            "id": 4,
            "img": "https://i.ibb.co/GFvC568/nita-anggraeni-goenawan-2-Jiha-EVs8-Dc-unsplash.jpg",
            "title": "Best Grooming Tips for Your Pet",
            "description": "Ensure your pet’s coat is shiny and healthy with these simple grooming tips.",
            "avatarImg": "https://i.ibb.co/gdGggK2/dominik-lange-BFsm5vldl2-I-unsplash.jpg",
            "name": "By Aaron Larsson",
            "date": "02",
            "month": "Sep"
        }
    ];

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
