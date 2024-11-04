/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
import CommonButton from '../../../Components/Buttons/CommonButton';
import './Blog.css'

const Blog = ({blog}) => {
    const {title, description, avatarImg, name, date, month}= blog;
    return (
        <div className=" w-full h-full px-4 py-5 sm:px-6 lg:px-8 lg:py-8 mx-auto">
            <a
                className="group flex flex-col h-full bg-gray-200 dark:bg-gray-700 rounded-xl transition duration-300 card-bg"
                href="#"
            >
                <div className="relative h-[400px]">
                    <img
                        className="w-full h-full object-cover rounded-t-xl"
                        src="https://i.ibb.co.com/r08Yvv8/juan-manuel-sanchez-egk9u-Kao-Nng-unsplash.jpg"
                        alt="Blog Image"
                    />
                    <div className="absolute bottom-4 right-4 p-3 rounded-md bg-secondary text-white text-2xl text-center roboto">{month} <br /> {date}</div>
                </div>
                <div className="my-4 px-4 flex items-end gap-x-3">
                    <img
                        className="size-11 rounded-full"
                        src={avatarImg}
                        alt="Avatar"
                    />
                    <div>
                        <h5 className="text-lg sofia text-gray-900 dark:text-gray-300">{name}</h5>
                    </div>
                </div>
                <div className=" px-4">
                    <h3 className="text-2xl roboto font-semibold text-gray-900 dark:text-white">
                        {title.slice(0,35)}
                    </h3>
                    <p className="mt-5 text-gray-700 sofia dark:text-gray-400">
                        {description.slice(0,120)}
                    </p>
                </div>
                <div className="flex justify-center items-end my-4">
                    <CommonButton title={"Read More"} width={"40"} hight={"12"}></CommonButton>
                </div>
            </a>
        </div>
    );
};

export default Blog;
