
/* eslint-disable react/no-unescaped-entities */
import Cover from "../../Layout/Cover/Cover";
import { BsFillAirplaneEnginesFill } from "react-icons/bs";
import { FaPhone } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoIosMailUnread } from "react-icons/io"

const Contact = () => {
    return (
        <section className="bg-[#d3d3d3] dark:bg-gray-900">
            <Cover
                image={'https://i.ibb.co/bstNQ2D/bri-tucker-LGG5-P7-KCzi-U-unsplash.jpg'}
                header={"Contact Us"}
                title={" / Contact Us"}
            />
            <div className="flex flex-wrap gap-16 my-16">
                <div className="bg-[#F5F2EB] relative dark:bg-gray-700 pb-6 pt-12 px-10 text-center max-w-lg mx-auto rounded-xl">
                    <div className="absolute -top-8 w-16 h-16 left-1/2 transform -translate-x-1/2 rounded-full bg-third hover:scale-125 duration-200 ease-in-out flex justify-center items-center cursor-pointer text-white"><IoIosMailUnread size={32} /></div>
                    <h1 className="text-2xl font-bold sofadi pb-4 text-gray-800 dark:text-gray-200 ">Write for US</h1>
                    <a href="mailto:abusaiyedjoy1@gmail.com" className="hover:text-secondary text-gray-800 dark:text-gray-200 dark:hover:text-secondary">abusaiyedjoy1@gmail.com</a>
                </div>
                <div className="bg-[#F5F2EB] relative dark:bg-gray-700 pb-6 pt-12 px-10 text-center max-w-lg mx-auto rounded-xl">
                    <div className="absolute -top-8 w-16 h-16 left-1/2 transform -translate-x-1/2 rounded-full bg-third hover:scale-125 duration-200 ease-in-out flex justify-center items-center cursor-pointer text-white"><FaLocationDot size={32} /></div>
                    <h1 className="text-2xl font-bold sofadi pb-4  text-gray-800 dark:text-gray-200">Visit our Office</h1>
                    <p className=" text-gray-800 dark:text-gray-200">Foy's Lake / Chittagong <br /> Bangladesh</p>
                </div>
                <div className="bg-[#F5F2EB] relative dark:bg-gray-700 pb-6 pt-12 px-10 text-center max-w-lg mx-auto rounded-xl">
                    <div className="absolute -top-8 w-16 h-16 left-1/2 transform -translate-x-1/2 rounded-full bg-third hover:scale-125 duration-200 ease-in-out flex justify-center items-center cursor-pointer text-white"><FaPhone size={32}/></div>
                    <h1 className="text-2xl font-bold sofadi pb-4  text-gray-800 dark:text-gray-200">Contact with US</h1>
                    <p className=" text-gray-800 dark:text-gray-200">+8801823567254</p>
                </div>
            </div>
            <div className="max-w-2xl w-auto mx-8 mt-8">
                <h1 className="text-2xl text-primary font-bold sofia">Contact Us</h1>
                <h2 className="text-gray-800 dark:text-gray-300 text-4xl font-bold roboto ">Send us a message<span className="text-secondary text-5xl">.</span></h2>
                <p className="text-gray-800 dark:text-gray-300 text-lg font-medium sofia">The domestic dog is a doiated dendant of the wolf. The dog derived from an ancient, extinct wolf, and the modern grey.</p>
            </div>
            <div
                className={`xl:mt-12 flex xl:flex-row flex-col-reverse max-w-4xl mx-auto gap-10 overflow-hidden`}
            >
                <form
                    className='my-12 mx-8 flex flex-col gap-8 '
                >
                    <label className='flex flex-col'>
                        <span className='dark:text-gray-200 text-gray-800 font-medium mb-4 sofadi'>👨‍✈️ Your Name</span>
                        <input
                            type='text'
                            name='name'
                            placeholder="What's your good name?"
                            className='dark:bg-gray-700 bg-[#F5F2EB] py-4 px-6 placeholder:text-gray-400 tegr8 dark:text-white rounded-lg outline-none border-none font-medium'
                        />
                    </label>
                    <label className='flex flex-col'>
                        <span className='dark:text-gray-200 text-gray-800 font-medium mb-4 sofadi'>📩 Your email</span>
                        <input
                            type='email'
                            name='email'
                            placeholder="What's your web address?"
                            className='dark:bg-gray-700 bg-[#F5F2EB] py-4 px-6 placeholder:text-gray-400 tegr8 dark:text-white rounded-lg outline-none border-none font-medium'
                        />
                    </label>
                    <label className='flex flex-col'>
                        <span className='dark:text-gray-200 text-gray-800 font-medium mb-4 sofadi'>📝 Your Message</span>
                        <textarea
                            rows={7}
                            name='message'
                            placeholder='What you want to say?'
                            className='dark:bg-gray-700 bg-[#F5F2EB] py-4 px-6 placeholder:text-gray-400 text-gray-800 dark:text-white rounded-lg outline-none border-none font-medium'
                        />
                    </label>
                    <button type='submit' className="dark:bg-gray-700 w-52 bg-[#F5F2EB] py-2 px-2 rounded-xl outline-none font-bold h-16 mb-4 mt-2 dark:hover:bg-gray-800 duration-300 text-gray-600 dark:text-gray-200 flex items-center justify-center group">
                        <BsFillAirplaneEnginesFill className="icon rotate-45 group-hover:duration-700 absolute w-12 -translate-x-full translate-y-full scale-0 group-hover:scale-100 group-hover:translate-x-8 group-hover:-translate-y-8 duration-150" />

                        <span className="duration-500 text-xl">Send Message</span></button>

                </form>
            </div>
        </section>
    );
}

export default Contact;