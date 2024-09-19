/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/no-unknown-property */
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './Banner.css'
import CommonButton from '../../../Components/Buttons/CommonButton';


const Banner = () => {


    return (
        <section>

            <div className="relative h-screen w-full bg-cover bg-center background-image">
                <div className="absolute top-[20%] left-[10%] text-gray-200 z-30">
                    <h2 className="text-2xl font-bold my-4 sofia">Give a new life!</h2>
                    <h1 className="text-6xl roboto text-secondary m-0 font-bold">
                      Come to <br /> Pet Haven BD  
                    </h1>
                    <p className="text-2xl sofia max-w-4xl mx-auto font-bold my-4 rounded-xl text-gray-300 py-2">
                            We offer the best services for your pets, <br /> contact us today and book a service
                    </p>
                    <div className="flex justify-start items-center gap-10">

                        <CommonButton title={"Adoption post"} width={"60"} hight={"16"}></CommonButton>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;
