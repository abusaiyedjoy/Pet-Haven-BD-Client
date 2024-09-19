import {MdPets} from "react-icons/md"
/* eslint-disable react/prop-types */
const Header = ({ Heading, SubHeading }) => {
  return (
    <div className="text-center w-full space-y-4 mx-auto py-12
       ">
        <MdPets className="mx-auto text-4xl text-red-800" />
      <h1 className=" mx-auto roboto text-center text-gray-600 dark:text-gray-300">{SubHeading}</h1>
      <h2 className="text-3xl font-semibold text-center text-gray-800 roboto capitalize lg:text-5
          xl dark:text-gray-300">{Heading}</h2>

    </div>
  );
};

export default Header;
