import Statistics from "./AboutUs/Number";
import AllPets from "./AllPets/AllPets";
import Banner from "./Banner/Banner";
import Blog from "./Blog/Blog";
import Category from "./Category/Category";
import Gallery from "./Gallery/Gallery";
import Team from "./ourTeam/Team";
import SlideService from "./Service/SlideServices";

const Home = () => {
  return (
    <section className=" text-gray-900 bg-gray-100  dark:text-gray-100 dark:bg-gray-900 duration-100">

      <div>
        <Banner></Banner>
        <Category></Category>
        <SlideService/>
        <AllPets></AllPets>
        <Gallery/>
        <Blog/>
        <Team></Team>
        <Statistics start={0} end={1000} duration={2000} />
      </div>
    </section>
  );
};


export default Home;
