import AboutUs from "./AboutUs/AboutUs";
import AllPets from "./AllPets/AllPets";
import Banner from "./Banner/Banner";
import Category from "./Category/Category";
import Donate from "./Donate/Donate";
import Routin from "./Routin/Routin";

const Home = () => {
  return (
    <section className=" text-gray-900 bg-gray-100  dark:text-gray-100 dark:bg-gray-900 duration-100">

      <div>
        <Banner></Banner>
        <Category></Category>
        <AllPets></AllPets>
        <AboutUs></AboutUs>
        <Routin></Routin>
        <Donate></Donate>
      </div>
    </section>
  );
};


export default Home;
