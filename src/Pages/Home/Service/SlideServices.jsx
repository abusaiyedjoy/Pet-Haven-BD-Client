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
import useAxiosPublic from '../../../Hooks/useAxiosPublic';
import { useQuery } from '@tanstack/react-query';

const SlideServices = () => {
    const axiosPublic = useAxiosPublic();

    const {data: servicesData, isLoading} = useQuery({
        queryKey: ['services'],
        queryFn: async () => {
            const {data} = await axiosPublic.get('/services');
            return data;
        },
    });

    if (isLoading) {
        return (<div className="flex justify-center items-center w-full h-screen">
            <div className="w-10 h-10 animate-[spin_1s_linear_infinite] rounded-full border-double border-4 border-r-0 border-l-0 border-b-sky-400 border-t-sky-700"></div>
        </div>)
    }

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
                {servicesData?.map((service) => (
                    <SwiperSlide key={service.id}>
                        <SlideCard service={service} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
};

export default SlideServices;
