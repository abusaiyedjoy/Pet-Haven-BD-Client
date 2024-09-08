/* eslint-disable react/prop-types */
const Header = ({ Heading, SubHeading }) => {
  return (
    <div className="text-center w-7/12 space-y-4 mx-auto py-12
       ">
      <h1 className="text-3xl font-semibold text-center text-[#2E256F] capitalize lg:text-5
          xl dark:text-[#2E256F]">{Heading}</h1>
      <h1 className=" mx-auto my-6 text-center text-gray-500 dark:text-gray-300">{SubHeading}</h1>
    </div>
  );
};

export default Header;
