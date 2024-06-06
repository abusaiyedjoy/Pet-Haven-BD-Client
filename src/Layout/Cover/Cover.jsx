/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const Cover = ({ image, title }) => {
    return (
        <>
            <div
                className="hero w-full h-96"
                style={{
                    backgroundImage: `url(${image})`,
                }}
            >
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md text-white">
                        <h1 className="mb-5 text-5xl font-bold text-main">Pet Haven BD</h1>
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
