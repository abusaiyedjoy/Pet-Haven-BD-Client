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
import { useEffect, useState } from 'react';

const SlideServices = () => {

    const [servicesData, setServices] = useState([]);

    useEffect(() => {
        fetch(`${import.meta.env.VITE_API_URL}/services`)
            .then((res) => res.json())
            .then((data) => setServices(data));
    }, []);
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
