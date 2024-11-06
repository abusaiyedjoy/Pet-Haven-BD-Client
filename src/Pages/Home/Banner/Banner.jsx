/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/no-unknown-property */
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './Banner.css'
import CommonButton from '../../../Components/Buttons/CommonButton';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';


const Banner = () => {


    return (
        <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
                delay: 3500,
                disableOnInteraction: false,
            }}
            pagination={{
                clickable: true,
            }}
            modules={[Autoplay, Pagination]}
            className="mySwiper"
        >
            <SwiperSlide>
                <div className="relative min-h-[80vh] w-full bg-cover bg-center background-image">
                    <div className="absolute top-[10%] sm:top-[20%] left-[5%] sm:left-[10%] text-gray-200 z-30">
                        <h2 className="text-2xl font-bold my-4 sofia">Give a new life!</h2>
                        <h1 className="text-6xl roboto text-secondary m-0 font-bold">
                            Come to <br /> Pet Haven BD
                        </h1>
                        <p className="text-2xl sofia max-w-4xl mx-auto font-bold my-4 rounded-xl text-gray-300 py-2 pr-3 text-justify">
                            We offer the best services for your pets, <br className='hidden md:block' /> contact us today and book a service
                        </p>
                        <div className="flex justify-start items-center gap-10">
                            <CommonButton title={"Adoption post"} width={"60"} hight={"16"}></CommonButton>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="relative min-h-[80vh] w-full bg-cover bg-center background-image2">
                    <div className="absolute top-[10%] sm:top-[20%] left-[5%] sm:left-[10%] text-gray-200 z-30">
                        <h2 className="text-2xl font-bold my-4 sofia">Find Your Perfect Companion!</h2>
                        <h1 className="text-6xl roboto text-secondary m-0 font-bold">
                            Welcome to <br /> Pet Haven BD
                        </h1>
                        <p className="text-2xl sofia max-w-4xl mx-auto font-bold my-4 rounded-xl text-gray-300 py-2 pr-3 text-justify">
                            Discover loving pets waiting for a home. <br className='hidden md:block' /> Explore our services and start your adoption journey today!
                        </p>
                        <div className="flex justify-start items-center gap-10">
                            <CommonButton title={"Adoption post"} width={"60"} hight={"16"}></CommonButton>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
        </Swiper>
    );
};

export default Banner;
