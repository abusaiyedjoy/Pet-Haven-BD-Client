import Banner from "./Banner/Banner";


const Home = () => {
  return (
    <section className="min-h-screen p-8 text-gray-900 bg-gray-100  dark:text-gray-100 dark:bg-gray-900 duration-100">
      
      <div>
        <h1 className="text-2xl mt-20 font-bold">
          Create A Navbar with Light & Dark theme
        </h1>
        <Banner></Banner>
      </div>
    </section>
  );
};

export default Home;
