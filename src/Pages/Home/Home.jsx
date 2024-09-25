import { lazy, Suspense } from "react";
import Banner from "./Banner/Banner";
import Category from "./Category/Category";
import SlideService from "./Service/SlideServices";
import AllPets from "./AllPets/AllPets";
import Statistics from "./AboutUs/Number";

// Lazy loading heavy components to improve performance
const Blog = lazy(() => import("./Blog/Blog"));
const Gallery = lazy(() => import("./Gallery/Gallery"));
const Team = lazy(() => import("./ourTeam/Team"));

const Home = () => {
  return (
    <section className="text-gray-900 bg-gray-100 dark:text-gray-100 dark:bg-gray-900">
      <>
        <Banner />
        <Category />
        <SlideService />
        <AllPets />

        {/* Suspense with a fallback for lazy-loaded components */}
        <Suspense fallback={<div>Loading...</div>}>
          <Gallery />
          <Blog />
          <Team />
        </Suspense>

        <Statistics start={0} end={1000} duration={2000} />
      </>
    </section>
  );
};

export default Home;
