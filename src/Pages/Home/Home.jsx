import AboutUs from "./AboutUs/AboutUs";
import NumberCounter from "./AboutUs/Number";
import AllPets from "./AllPets/AllPets";
import Banner from "./Banner/Banner";
import Category from "./Category/Category";
import Routin from "./Routin/Routin";
import SlideService from "./Service/SlideServices";

const Home = () => {
  return (
    <section className=" text-gray-900 bg-gray-100  dark:text-gray-100 dark:bg-gray-900 duration-100">

      <div>
        <Banner></Banner>
        <Category></Category>
        <SlideService/>
        <AllPets></AllPets>
        <AboutUs></AboutUs>
        <NumberCounter start={0} end={1000} duration={2000} />
        <Routin></Routin>
      </div>
    </section>
  );
};


export default Home;
