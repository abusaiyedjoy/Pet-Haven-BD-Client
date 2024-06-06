/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/no-unknown-property */
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './Banner.css'
import { Typewriter } from 'react-simple-typewriter';


const Banner = () => {
    

    return (
        <section>

            <div className="relative h-[750px] w-full bg-cover bg-center" style={{ backgroundImage: "url('https://i.ibb.co/3sCHDxn/Black-Modern-Adopt-A-Pet-Banner-Landscape.png')" }}>
                <div className="absolute top-[20%] left-6 text-center text-gray-200 z-30">
                    <h1 className="text-2xl font-bold my-4">Welcome to Pet Haven BD!</h1>
                    <h1 className="text-6xl text-sky-500 m-0 font-bold tracking-widest leading-tight">
                        ADOPT A PET 
                    </h1>
                        <h1 className='text-5xl text-red-500 font-bold tracking-wider'>DON'T BUY</h1>
                    <p className="text-2xl max-w-4xl mx-auto font-bold my-4 px-6 rounded-xl bg-white bg-opacity-40 py-2 text-gradient">
                        <span style={{ color: '#0284c7', fontWeight: 'bold' }}>
                            <Typewriter
                                words={['Find or Post Your Favourite Pets For Adoption!']}
                                loop={10}
                                cursor
                                cursorStyle='🐇'
                                typeSpeed={70}
                                deleteSpeed={50}
                                delaySpeed={1000}
                            />
                        </span>
                    </p>
                    <div className="flex justify-center items-center gap-10">
                        
                        <button className="cursor-pointer inline-flex items-center rounded-xl px-7 py-3 text-2xl font-mono font-semibold text-sky-600 hover:text-white border-2 border-sky-600 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-95 hover:bg-sky-600 duration-300 focus:bg-transparent">
                            Adoption Post
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;
