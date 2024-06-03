import Header from "../../Header/Header";

const Category = () => {
    const Pets = [
        {
            _id: "1314",
            category: "Cats",
            pet_image: "https://i.ibb.co/0GBjJyk/icons8-cat-96.png",

            pathName: "cat"
        },
        {
            _id: "1315",
            category: "Dogs",
            pet_image: "https://i.ibb.co/FDW2ht8/icons8-dog-96.png",
            pathName: "dog"
        },
        {
            _id: "1316",
            category: "Rabbits",
            pet_image: "https://i.ibb.co/gP49YSX/icons8-rabbit-96.png",
            pathName: "rabbit"
        },
        {
            _id: "1317",
            category: "Birds",
            pet_image: "https://i.ibb.co/09p4Nvm/icons8-bird-96.png",
            pathName: "bird"
        },
        {
            _id: "1318",
            category: "Others",
            pet_image: "https://i.ibb.co/cbGpmkr/icons8-butterfly-96.png",
            pathName: "others"
        }
    ];

    return (
        <section className="bg-white dark:bg-gray-800">
            <div className="container px-6 py-12 mx-auto">
                <Header
                    Heading={"🐇Our Category🐇"}
                ></Header>

                <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-16 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
                    {
                        Pets?.map(item => <div title="View Details" key={item._id} className="flex flex-col items-center p-6 duration-300 transform border cursor-pointer rounded-full group hover:bg-sky-400 hover:scale-105 transition-transform dark:border-gray-600 dark:hover:border-transparent">
                            <img className="object-cover w-32 h-32" src={item.pet_image} alt="" />

                            <h1 className="mt-4 text-3xl font-semibold text-gray-700 capitalize dark:text-white group-hover:text-white">{item.category}</h1>
                        </div>)
                    }
                </div>
            </div>
        </section >
    );
};

export default Category;