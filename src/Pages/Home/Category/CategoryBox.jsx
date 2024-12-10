/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import queryString from 'query-string';
import { useNavigate, useSearchParams } from 'react-router-dom';

const CategoryBox = ({category, pet_image }) => {
 const navigate = useNavigate();
 const [params, setParams] = useSearchParams();
 const categoryParam = params.get('category');
    const handleClick = () => {
        let currentCategory = {category: category}

        const url = queryString.stringifyUrl({
            url: '/',
            query: currentCategory
        })
        navigate(url);
    }

    return (
        <div onClick={handleClick} title="View Details" className={`flex roboto hoverEffect w-40 h-40 flex-col items-center p-3 duration-300 transform border cursor-pointer rounded-full group hover:bg-secondary hover:shadow-2xl hover:scale-105 transition-transform dark:border-red-600 dark:hover:border-transparent ${categoryParam === category && 'bg-secondary'}`}>
            <div>{pet_image}</div>

            <h1 className="mt-2 text-3xl font-semibold text-gray-700 capitalize dark:text-white group-hover:text-white">{category}</h1>
        </div>
    )
};

export default CategoryBox;