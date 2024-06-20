/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const Cover = ({header,heading, image, title }) => {
    return (
        <>
            <div
                className="hero w-full h-96 opacity-80 object-cover"
                style={{
                    backgroundImage: `url(${image})`, 
                    backgroundSize: "cover",
                    backgroundPosition: "center",                   
                }}
            >
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-full text-white">
                        <h1 className="mb-5 text-5xl font-bold text-main">{header ? header : "Pet Haven BD" }</h1>
                        <h1 className="mb-5 text-2xl font-medium text-main">{heading }</h1>
                        <button className="text-lg font-bold">
                            <Link to="/" className="text-main hover:text-[#b19455]">
                                Home 
                            </Link>
                             || {title}
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Cover;
