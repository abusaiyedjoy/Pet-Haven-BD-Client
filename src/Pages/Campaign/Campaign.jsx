import { useContext } from "react";
import ThemeContext from "../../Hooks/ThemeContext";
import Cover from "../../Layout/Cover/Cover";

const Campaign = () => {
    const { theme } = useContext(ThemeContext);

    return (
        <div className={`min-h-screen ${theme === 'Dark' ? 'bg-gray-800 text-gray-200' : 'bg-gray-200 text-gray-800'}`}>
            <Cover
                image={'https://i.ibb.co/WzqTDHt/lily-banse-YHSwy6uqvk-unsplash.jpg'}
                title={"Donation Campaign"}
            />

        </div>
    );
};

export default Campaign;