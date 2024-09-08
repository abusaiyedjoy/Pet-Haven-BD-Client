/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/no-unknown-property */
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './Banner.css'
import { Typewriter } from 'react-simple-typewriter';
import CommonButton from '../../../Components/Buttons/CommonButton';


const Banner = () => {


    return (
        <section>

            <div className="relative h-[750px] w-full bg-cover bg-center background-image">
                <div className="absolute top-[20%] left-6 text-center text-gray-200 z-30">
                    <h1 className="text-2xl font-bold my-4">Welcome to Pet Haven BD!</h1>
                    <div className="text-6xl text-[#2E256F] m-0 font-bold tracking-widest leading-tight">
                        <Typewriter
                            words={['ADOPT A PET!', 'DON\'T BUY']}
                            loop={10}
                            cursor
                            cursorStyle='🐇'
                            typeSpeed={70}
                            deleteSpeed={60}
                            delaySpeed={1000}
                            className="text-6xl text-[#2E256F] m-0 font-bold tracking-widest leading-tight"
                            textStyle={{
                                color: 'red',
                                fontSize: '5xl',
                                fontWeight: 'bold',
                                letterSpacing: 'wider'
                            }}
                        />
                    </div>
                    <p className="text-2xl max-w-4xl mx-auto font-bold my-4 px-6 rounded-xl bg-white bg-opacity-40 py-2 text-gradient">
                        <span style={{ color: '#0284c7', fontWeight: 'bold' }}>
                            Find or Post Your Favourite Pets For Adoption!
                        </span>
                    </p>
                    <div className="flex justify-center items-center gap-10">

                        <CommonButton title={"Adoption post"} width={"60"} hight={"16"}></CommonButton>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;
