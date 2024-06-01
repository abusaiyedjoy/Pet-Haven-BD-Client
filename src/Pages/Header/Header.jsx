/* eslint-disable react/prop-types */
const Header = ({Heading, SubHeading}) => {
    return (
      <div className="text-center w-7/12 space-y-4 mx-auto my-12
       ">
          <h1 className="text-2xl font-semibold text-center text-sky-700 capitalize lg:text-3xl dark:text-sky-500">{Heading}</h1>
          <h1 className=" mx-auto my-6 text-center text-gray-500 dark:text-gray-300">{SubHeading}</h1>
      </div>
    );
  };
  
  export default Header;
  