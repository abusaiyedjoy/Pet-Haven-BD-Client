/* eslint-disable react/prop-types */
import { MdPets } from "react-icons/md";
import { IoCutOutline, IoLocation } from "react-icons/io5";
import { BiSolidInjection } from "react-icons/bi";
import { GiConfirmed } from "react-icons/gi";
import { FcCancel } from "react-icons/fc";
import CommonButton from "../../../Components/Buttons/CommonButton";

const PetsCard = ({ pet }) => {
    const { name, gender, age, vaccinated, breed, neutered, location, images } = pet;
    return (
        <div style={{ backgroundImage: `url("https://i.ibb.co.com/3htn71W/Adopt-bg.png")` }} className="bg-white/90 w-full h-full px-4 py-5 sm:px-6 lg:px-8 lg:py-8 mx-auto">
            <div className="flex justify-center items-center space-x-12">
                <div className="relative w-[200px] h-[200px] overflow-hidden rounded-md">
                    <img
                        className="w-full h-full object-cover rounded-lg hover:scale-125 cursor-pointer transition-transform duration-500 ease-in-out"
                        src={images?.[1] || images?.[0] || "fallback-image-url.jpg"}
                        alt="Pet Image"
                    />
                    <span className="border-r-2 border-dashed border-primary absolute h-full top-0 -right-5"></span>
                </div>

                <div className="">
                    <h1 className="text-3xl text-gray-950 font-semibold roboto py-2">{name}</h1>
                    <h2 className="text-lg font-semibold roboto text-gray-900 border-b-2 border-secondary border-dotted flex justify-start items-center gap-2"><MdPets className="text-red-800" /> Gender: <span className="sofia font-normal text-base">{gender}</span></h2>
                    <h2 className="text-lg font-semibold roboto text-gray-900 border-b-2 border-secondary border-dotted flex justify-start items-center gap-2"><MdPets className="text-red-800" /> Age: <span className="sofia font-normal text-base">{age}</span></h2>
                    <h2 className="text-lg font-semibold roboto text-gray-900 border-b-2 border-secondary border-dotted flex justify-start items-center gap-2"><MdPets className="text-red-800" /> Breed: <span className="sofia font-normal text-base">{breed}</span></h2>
                </div>
            </div>
            <div className="py-5  flex justify-around items-center">
                <h2 className="text-xl font-semibold roboto text-gray-900 flex flex-col justify-start items-center gap-2"><BiSolidInjection size={32} className="text-red-800" /> Vaccinated: <span className="flex justify-center items-center rounded-full sofia font-normal text-base">
                    {vaccinated === "true" ? (
                        <GiConfirmed size={25} className="text-green-600" />
                    ) : (
                        <FcCancel size={25} className="text-red-600" />
                    )}
                </span>
                </h2>
                <h2 className="text-xl font-semibold roboto text-gray-900 flex flex-col justify-start items-center gap-2"><IoCutOutline size={32} className="text-red-800" /> Neutered: <span className="flex justify-center items-center rounded-full sofia font-normal text-base">
                    {neutered === "true" ? (
                        <GiConfirmed size={25} className="text-green-600" />
                    ) : (
                        <FcCancel size={25} className="text-red-600" />
                    )}
                </span>
                </h2>
                <h2 className="text-xl font-semibold roboto text-gray-900 flex flex-col justify-start items-center gap-2"><IoLocation size={32} className="text-red-800" /> Location: <span className="sofia font-normal text-base">{location?.district}</span></h2>
            </div>
            <div className="flex justify-center items-end my-4">
                <CommonButton title={"More Info..."} width={"40"} hight={"12"}></CommonButton>
            </div>
        </div>
    );
}

export default PetsCard;