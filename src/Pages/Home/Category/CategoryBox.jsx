/* eslint-disable react/prop-types */

import queryStrng from 'query-string';
import { useNavigate } from 'react-router-dom';

const CategoryBox = ({category, pet_image }) => {
 const navigate = useNavigate();
    const handleClick = () => {
        let currentCategory = {category: category}

        const url = queryStrng.stringifyUrl({
            url: '/',
            query: currentCategory
        })
        navigate(url);
    }

    return (
        <div onClick={handleClick} title="View Details" className="flex roboto hoverEffect w-40 h-40 flex-col items-center p-3 duration-300 transform border cursor-pointer rounded-full group hover:bg-secondary hover:shadow-2xl hover:scale-105 transition-transform dark:border-red-600 dark:hover:border-transparent">
            <div>{pet_image}</div>

            <h1 className="mt-2 text-3xl font-semibold text-gray-700 capitalize dark:text-white group-hover:text-white">{category}</h1>
        </div>
    )
};

export default CategoryBox;