import { useContext } from "react";
import Cover from "../../Layout/Cover/Cover";
import ThemeContext from "../../Hooks/ThemeContext";

const About = () => {
    const { theme } = useContext(ThemeContext);

    return (
        <div className={`min-h-screen ${theme === 'Dark' ? 'bg-gray-800 text-gray-200' : 'bg-gray-200 text-gray-800'}`}>
            <Cover
                image={'https://i.ibb.co/1XKVHMN/matt-nelson-a-I3-EBLvcyu4-unsplash.jpg'}
                title={"About Us"}
            />

        </div>
    );
};

export default About;
