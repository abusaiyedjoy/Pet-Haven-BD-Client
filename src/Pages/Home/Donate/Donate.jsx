
const Donate = () => {
    return (
        <div className="relative flex justify-center items-center py-20 rounded-lg bg-white">
            <video autoPlay loop muted playsInline className="w-full h-auto rounded-lg shadow-lg">
                <source src="https://videos.ctfassets.net/gynu23gx3hnw/3TcnKUPCircPk3raaa1kh9/64c4cf3de068c13b610c4d7eeb3ab102/Web_looping_video_5_sec_compressed.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div className="absolute inset-0 flex flex-col justify-center items-center text-center bg-black bg-opacity-40 rounded-lg">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white mb-6">Got Love? Give Love.</h1>
                <button className="cursor-pointer inline-flex items-center rounded-full px-12 py-4 text-2xl font-mono font-semibold text-sky-600 hover:text-white border-2 border-sky-600
                                    transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-90 hover:bg-sky-600 duration-300  focus:bg-transparent">
                    Donate
                </button>
            </div>
        </div>
    );
};

export default Donate;