import Banner from "./Banner/Banner";
import Category from "./Category/Category";
import SlideService from "./Service/SlideServices";
import AllPets from "./AllPets/AllPets";
import Blog from "./Blog/Blog"
import Gallery from "./Gallery/Gallery"
import Team from "./ourTeam/Team"
import Testimonial from "./AboutUs/Testimonial"


const Home = () => {
  return (
    <section className="text-gray-900 max-w-[1500px] mx-auto bg-gray-100 dark:text-gray-100 dark:bg-gray-900">
      <>
        <Banner />
        <Category />
        <SlideService />
        <AllPets />
        <Gallery />
        <Blog />
        <Team />
        <Testimonial />
      </>
    </section>
  );
};

export default Home;
