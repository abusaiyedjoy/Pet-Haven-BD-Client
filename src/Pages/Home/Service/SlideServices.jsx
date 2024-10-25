// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

// import required modules
import { Autoplay, Pagination } from 'swiper/modules';
import SlideCard from './SlideCard';
import Header from '../../Header/Header';

const servicesData = [
    {
        "id": 1,
        "img": "https://i.ibb.co/mz920js/michael-sum-LEpfef-Qf4r-U-unsplash.jpg",
        "title": "Pet Grooming",
        "description": "Our pet grooming services ensure your pet looks clean and well-groomed with expert care."
    },
    {
        "id": 2,
        "img": "https://i.ibb.co/ZzbzdwY/zane-lee-Vv-TVkc-p-eg-unsplash.jpg",
        "title": "Pet Adoption",
        "description": "Find your perfect companion by exploring our adoption services for various lovable pets."
    },
    {
        "id": 3,
        "img": "https://i.ibb.co/VJ2MjHk/sandy-millar-k-KAa-Ce-Gf5w-Y-unsplash.jpg",
        "title": "Pet Training",
        "description": "We provide specialized training to help your pet learn new skills and good behavior."
    },
    {
        "id": 4,
        "img": "https://i.ibb.co/GFvC568/nita-anggraeni-goenawan-2-Jiha-EVs8-Dc-unsplash.jpg",
        "title": "Veterinary Care",
        "description": "Our veterinary care ensure your pet stays healthy with regular checkups and treatment."
    },
    {
        "id": 5,
        "img": "https://i.ibb.co/gdGggK2/dominik-lange-BFsm5vldl2-I-unsplash.jpg",
        "title": "Pet Boarding",
        "description": "We offer safe and comfortable boarding services for your pet when you need to be away."
    },
    {
        "id": 6,
        "img": "https://i.ibb.co/yBkdPf8/pablo-martinez-Adagxt-VKRWE-unsplash.jpg",
        "title": "Pet Daycare",
        "description": "Leave your pet in our trusted care for the day with our fun and engaging daycare services."
    },
    {
        "id": 7,
        "img": "https://i.ibb.co/4gRtCV2/taylor-kopel-WX4i1-Jq-o0-Y-unsplash.jpg",
        "title": "Pet Walking",
        "description": "Keep your pet active and happy with our regular pet walking services."
    },
    {
        "id": 8,
        "img": "https://i.ibb.co/mDgvb8D/andrew-pons-lyl-Cw4zc-A7-I-unsplash.jpg",
        "title": "Pet Sitting",
        "description": "We provide in-home pet sitting services, ensuring your pet gets the care they need while you're away."
    },
    {
        "id": 9,
        "img": "https://i.ibb.co/mz920js/michael-sum-LEpfef-Qf4r-U-unsplash.jpg",
        "title": "Pet Nutrition",
        "description": "Our experts will help you choose the best nutrition plan for your pet to keep them healthy."
    },
    {
        "id": 11,
        "img": "https://i.ibb.co/VJ2MjHk/sandy-millar-k-KAa-Ce-Gf5w-Y-unsplash.jpg",
        "title": "Pet Exercise",
        "description": "Ensure your pet stays fit with our customized exercise routines designed for their needs."
    },
    {
        "id": 12,
        "img": "https://i.ibb.co/GFvC568/nita-anggraeni-goenawan-2-Jiha-EVs8-Dc-unsplash.jpg",
        "title": "Pet Advice",
        "description": "Get expert advice on how to care for your pet, from health tips to general well-being."
    }
];


const SlideServices = () => {
    return (
        <section className='pb-12 bg-white dark:bg-gray-800'>
            <Header
                SubHeading={"-- What We Offer --"}
                Heading={"Our Services"}
            ></Header>
            <Swiper
                slidesPerView={1}
                spaceBetween={20}
                loop={true}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                breakpoints={{
                    768: {
                        slidesPerView: 2,
                    },
                    1024: {
                        slidesPerView: 3,
                    },
                    1600: {
                        slidesPerView: 5,
                    },
                }}
                modules={[Autoplay, Pagination]}
                className="mySwiper flex justify-center items-center"
            >
                {servicesData.map((service) => (
                    <SwiperSlide key={service.id}>
                        <SlideCard service={service} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
};

export default SlideServices;
