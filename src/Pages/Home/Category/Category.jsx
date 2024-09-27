import { FaCat, FaDog, FaHorse } from "react-icons/fa";
import { GiRabbit, GiHummingbird } from "react-icons/gi";
import { CgMoreVertical } from "react-icons/cg";
import Header from "../../Header/Header";

const Category = () => {

    const Pets = [
        {
          _id: "1314",
          category: "Cats",
          pet_image: <FaCat style={{ width: 72, height: 72 }} />,
          pathName: "cat"
        },
        {
          _id: "1315",
          category: "Dogs",
          pet_image: <FaDog style={{ width: 72, height: 72 }} />,
          pathName: "dog"
        },
        {
          _id: "1316",
          category: "Rabbits",
          pet_image: <GiRabbit style={{ width: 72, height: 72 }} />,
          pathName: "rabbit"
        },
        {
          _id: "1317",
          category: "Birds",
          pet_image: <GiHummingbird style={{ width: 72, height: 72 }} />,
          pathName: "bird"
        },
        {
          _id: "1318",
          category: "Horse",
          pet_image: <FaHorse style={{ width: 72, height: 72 }} />,
          pathName: "horse"
        },
        {
          _id: "1318",
          category: "Others",
          pet_image: <CgMoreVertical style={{ width: 72, height: 72 }} />,
          pathName: "others"
        }
      ];



    return (
        <section className="bg-white dark:bg-gray-800">
            <div className="container px-6 py-12 mx-auto">
                <Header
                    SubHeading={"-- Find Your Friends --"}
                    Heading={"Our Pets Category"}
                ></Header>

                <div className="flex gap-24 flex-wrap justify-center items-center">
                    {
                        Pets?.map(item => <div title="View Details" key={item._id} className="flex roboto w-40 h-40 flex-col items-center p-3 duration-300 transform border cursor-pointer rounded-full group hover:bg-secondary hover:shadow-2xl hover:scale-105 transition-transform dark:border-red-600 dark:hover:border-transparent">
                            <div>{item.pet_image}</div>

                            <h1 className="mt-2 text-3xl font-semibold text-gray-700 capitalize dark:text-white group-hover:text-white">{item.category}</h1>
                        </div>)
                    }
                </div>
            </div>
        </section >
    );
};

export default Category;