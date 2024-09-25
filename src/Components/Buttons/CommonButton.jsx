// eslint-disable-next-line react/prop-types
const CommonButton = ({title, width, hight}) => {
    return (
        <section>
            <button className={`relative group cursor-pointer text-sky-50  overflow-hidden h-${hight} w-${width} rounded-xl shadow-xl bg-[#950F0D] p-2 flex justify-center items-center font-bold text-2xl`}>
                <div className="absolute top-3 right-20 group-hover:top-12 group-hover:-right-12 z-10 w-40 h-40 rounded-full group-hover:scale-150 group-hover:opacity-50 duration-500 bg-[#af1417]"></div>
                <div className="absolute top-3 right-20 group-hover:top-12 group-hover:-right-12 z-10 w-32 h-32 rounded-full group-hover:scale-150 group-hover:opacity-50 duration-500 bg-[#b41316]"></div>
                <div className="absolute top-3 right-20 group-hover:top-12 group-hover:-right-12 z-10 w-24 h-24 rounded-full group-hover:scale-150 group-hover:opacity-50 duration-500 bg-[#c10e0e]"></div>
                <div className="absolute top-3 right-20 group-hover:top-12 group-hover:-right-12 z-10 w-14 h-14 rounded-full group-hover:scale-150 group-hover:opacity-50 duration-500 bg-[#d31f12]"></div>
                <p className="z-10 roboto">{title}</p>
            </button>


        </section>
    );
};

export default CommonButton;