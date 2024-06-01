import AllPets from "./AllPets/AllPets";
import Banner from "./Banner/Banner";
import Category from "./Category/Category";

const Home = () => {
  return (
    <section className=" text-gray-900 bg-gray-100  dark:text-gray-100 dark:bg-gray-900 duration-100">

      <div>
        <Banner></Banner>
        <Category></Category>
        <AllPets></AllPets>
      </div>
    </section>
  );
};


export default Home;
