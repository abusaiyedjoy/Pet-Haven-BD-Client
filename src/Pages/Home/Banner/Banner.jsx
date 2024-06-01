import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const Banner = () => {

    const banner = [
        {
            uri: "https://i.ibb.co/1XKVHMN/matt-nelson-a-I3-EBLvcyu4-unsplash.jpg"
        },
        {
            uri: "https://i.ibb.co/5FCrxGM/matthew-cabret-ub1s-Sv-J-Tbs-unsplash.jpg"
        },
        {
            uri: "https://i.ibb.co/G2MpKkJ/aswathy-n-sr-MHHWCTvc-U-unsplash.jpg"
        },
        {
            uri: "https://i.ibb.co/zXTMxTn/jari-hytonen-YCPk-W-r-6u-A-unsplash.jpg"
        },
        {
            uri: "https://i.ibb.co/DQy52Sg/sophie-dale-Frm-YKi-L4gqs-unsplash.jpg"
        },
        {
            uri: "https://i.ibb.co/HDYxyhj/aleesha-wood-dm-Apv-Bj0n-I-unsplash.jpg"
        },
    ]
    return (
        <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
            }}
            pagination={{
                clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
        >
            {
                banner?.map(image => <SwiperSlide key={image?.uri}><img src={image?.uri} className=' h-[800px] w-full object-cover' alt="" /></SwiperSlide>)
            }
        </Swiper>
    );
};

export default Banner;