/* eslint-disable react/no-unescaped-entities */
import { FaRegCommentDots } from "react-icons/fa6";
import Header from "../../Header/Header";

const Testimonial = () => {
  return (
    <section
      className="border-t-4 border-primary bg-lightImage dark:bg-darkImage dark:bg-black dark:bg-opacity-60 dark:bg-blend-overlay"
    >
      <Header
        SubHeading={"-- Read Testimonial's --"}
        Heading={"Our Happy Customers"}
      ></Header>
      <div className="max-w-screen-md mx-auto py-6 pb-12 text-center">
        <FaRegCommentDots size={60} className="mx-auto mb-3 text-gray-600 dark:text-gray-400" aria-hidden="true" />
        <blockquote>
          <p className="text-2xl italic font-medium text-gray-900 dark:text-gray-100">
            "Flowbite is just awesome. It contains tons of predesigned components and pages starting from login screen to complex dashboard. Perfect choice for your next SaaS application."
          </p>
        </blockquote>
        <figcaption className="flex items-center justify-center mt-6 space-x-3 rtl:space-x-reverse">
          <img className="w-10 h-10 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png" alt="profile picture" />
          <div className="flex items-center divide-x-2 rtl:divide-x-reverse divide-gray-500 dark:divide-gray-700">
            <cite className="pe-3 font-medium text-gray-900 dark:text-gray-100">Michael Gough</cite>
          </div>
        </figcaption>
      </div>
    </section>
  );
};

export default Testimonial;
