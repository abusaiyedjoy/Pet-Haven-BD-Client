import Cover from "../../Layout/Cover/Cover";
import { BsFillAirplaneEnginesFill } from "react-icons/bs";

const Contact = () => {
    return (
        <section className="bg-[#FFFFFF] dark:bg-gray-900">
            <Cover
                image={'https://i.ibb.co/bstNQ2D/bri-tucker-LGG5-P7-KCzi-U-unsplash.jpg'}
                header={"Contact Us"}
                title={" / Contact Us"}
            />
            <div className="max-w-2xl w-auto mx-8 mt-8">
                <h1 className="text-2xl text-primary font-bold sofia">Contact Us</h1>
                <h2 className="text-gray-800 dark:text-gray-300 text-4xl font-bold roboto ">Send us a message<span className="text-secondary text-5xl">.</span></h2>
                <p className="text-gray-800 dark:text-gray-300 text-lg font-medium sofia">The domestic dog is a doiated dendant of the wolf. The dog derived from an ancient, extinct wolf, and the modern grey.</p>
            </div>
            <div
                className={`xl:mt-12 flex xl:flex-row flex-col-reverse max-w-4xl mx-auto gap-10 overflow-hidden`}
            >
                    <form
                        className='mt-12 mx-8 flex flex-col gap-8 '
                    >
                        <label className='flex flex-col'>
                            <span className='dark:text-gray-200 text-gray-500 font-medium mb-4 sofadi'>👨‍✈️ Your Name</span>
                            <input
                                type='text'
                                name='name'
                                placeholder="What's your good name?"
                                className='dark:bg-gray-700 bg-[#F5F2EB] py-4 px-6 placeholder:text-gray-400 text-white rounded-lg outline-none border-none font-medium'
                            />
                        </label>
                        <label className='flex flex-col'>
                            <span className='dark:text-gray-200 text-gray-500 font-medium mb-4 sofadi'>📩 Your email</span>
                            <input
                                type='email'
                                name='email'
                                placeholder="What's your web address?"
                                className='dark:bg-gray-700 bg-[#F5F2EB] py-4 px-6 placeholder:text-gray-400 text-white rounded-lg outline-none border-none font-medium'
                            />
                        </label>
                        <label className='flex flex-col'>
                            <span className='dark:text-gray-200 text-gray-500 font-medium mb-4 sofadi'>📝 Your Message</span>
                            <textarea
                                rows={7}
                                name='message'
                                placeholder='What you want to say?'
                                className='dark:bg-gray-700 bg-[#F5F2EB] py-4 px-6 placeholder:text-gray-400 text-white rounded-lg outline-none border-none font-medium'
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