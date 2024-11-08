import { FaCat, FaDog, FaHorse } from "react-icons/fa";
import { GiRabbit, GiHummingbird } from "react-icons/gi";
import { CgMoreVertical } from "react-icons/cg";
import Header from "../../Header/Header";
import CategoryBox from "./CategoryBox";

const Category = () => {

    const Pets = [
        {
          _id: "1314",
          category: "Cats",
          pet_image: <FaCat style={{ width: 72, height: 72 }} />,
        },
        {
          _id: "1315",
          category: "Dogs",
          pet_image: <FaDog style={{ width: 72, height: 72 }} />,
        },
        {
          _id: "1316",
          category: "Rabbits",
          pet_image: <GiRabbit style={{ width: 72, height: 72 }} />,
        },
        {
          _id: "1317",
          category: "Birds",
          pet_image: <GiHummingbird style={{ width: 72, height: 72 }} />,
        },
        {
          _id: "1318",
          category: "Horse",
          pet_image: <FaHorse style={{ width: 72, height: 72 }} />,
        },
        {
          _id: "1318",
          category: "Others",
          pet_image: <CgMoreVertical style={{ width: 72, height: 72 }} />,
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
                        Pets?.map(item => <CategoryBox key={item?._id} category={item?.category} pet_image={item?.pet_image}/>
                    )},
                </div>
            </div>
        </section >
    );
};

export default Category;