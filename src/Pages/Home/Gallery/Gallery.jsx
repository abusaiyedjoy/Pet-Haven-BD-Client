// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';

// import required modules
import { Autoplay, Pagination } from 'swiper/modules';
import Header from '../../Header/Header';

const galleryImages = [
    "https://i.ibb.co/mz920js/michael-sum-LEpfef-Qf4r-U-unsplash.jpg",
    "https://i.ibb.co/ZzbzdwY/zane-lee-Vv-TVkc-p-eg-unsplash.jpg",
    "https://i.ibb.co/VJ2MjHk/sandy-millar-k-KAa-Ce-Gf5w-Y-unsplash.jpg",
    "https://i.ibb.co/GFvC568/nita-anggraeni-goenawan-2-Jiha-EVs8-Dc-unsplash.jpg",
    "https://i.ibb.co/gdGggK2/dominik-lange-BFsm5vldl2-I-unsplash.jpg",
    "https://i.ibb.co/yBkdPf8/pablo-martinez-Adagxt-VKRWE-unsplash.jpg",
    "https://i.ibb.co/4gRtCV2/taylor-kopel-WX4i1-Jq-o0-Y-unsplash.jpg",
    "https://i.ibb.co/mDgvb8D/andrew-pons-lyl-Cw4zc-A7-I-unsplash.jpg"
];

const Gallery = () => {
    return (
        <section className='mb-12'>
            <Header
                SubHeading={"-- Our Pet's Image --"}
                Heading={"Our Gallery Section"}
            ></Header>
            <Swiper
                slidesPerView={4}
                spaceBetween={20}
                loop={true}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                modules={[Autoplay, Pagination]}
                className="gallerySwiper"
            >
                {galleryImages.map((img, index) => (
                    <SwiperSlide key={index}>
                        <img
                            src={img}
                            alt={`Gallery Image ${index + 1}`}
                            className='w-[450px] h-[250px] rounded-xl pb-8 object-cover'
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
};

export default Gallery;
