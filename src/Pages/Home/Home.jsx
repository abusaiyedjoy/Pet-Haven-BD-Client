import Banner from "./Banner/Banner";
import Category from "./Category/Category";
import SlideService from "./Service/SlideServices";
import AllPets from "./AllPets/AllPets";
import Blog from "./Blog/Blog"
import Gallery from "./Gallery/Gallery"
import Team from "./ourTeam/Team"


const Home = () => {
  return (
    <section className="text-gray-800 dark:text-gray-100">
      <>
        <Banner />
        <Category />
        <SlideService />
        <AllPets />
        <Gallery />
        <Blog />
        <Team />
        {/* <Testimonial /> */}
      </>
    </section>
  );
};

export default Home;
