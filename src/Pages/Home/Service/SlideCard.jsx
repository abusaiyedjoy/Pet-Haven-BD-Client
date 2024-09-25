/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */

const SlideCard = ({service}) => {
    return (
        <div className="product-card w-[300px] mx-auto rounded-md shadow-xl overflow-hidden z-[100] relative cursor-pointer snap-start shrink-0 py-6 mb-8 px-6 bg-white dark:bg-gray-800 flex flex-col items-center justify-center gap-3 transition-all duration-300 group">
            <div className="absolute -left-[40%] top-0 group-hover:rotate-12 transition-all duration-300 group-hover:scale-150">
                <div className="flex gap-1">
                    <svg
                        stroke-linejoin="round"
                        stroke-linecap="round"
                        stroke-width="1"
                        fill="none"
                        viewBox="0 0 24 24"
                        className="fill-red-300 rotate-[24deg]"
                        height="200"
                        width="200"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <polygon
                            points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
                        ></polygon>
                    </svg>
                </div>
            </div>
            <div className="absolute rounded-full bg-red-800 z-20 left-1/2 top-[44%] h-[110%] w-[110%] -translate-x-1/2 group-hover:top-[58%] transition-all duration-300"></div>
            <div className="para uppercase text-center leading-none z-40">
                <p className="font-bold text-xl tracking-wider text-gray-500 dark:text-gray-200 roboto">{service.title}</p>
            </div>
            <div className="w-[160px] h-[160px] aspect-square hover:scale-110 transition-transform duration-300 ease-in-out hover:shadow-2xl shadow-slate-800 bg-transparent z-40 rounded-full">
              <img className="w-full h-full overflow-hidden rounded-full" src={service.img} alt="" />
            </div>
            <div className="btm-_container z-40 flex flex-row justify-between items-end gap-10">
                <p className="text-gray-200 sofia">{service.description.slice(0,95)}</p>
            </div>

        </div>
    );
};

export default SlideCard;
