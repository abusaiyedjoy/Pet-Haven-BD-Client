import { useContext } from "react";
import Cover from "../../Layout/Cover/Cover";
import ThemeContext from "../../Hooks/ThemeContext";
import AboutFeatures from "./AboutFeatures";

const About = () => {
    const { theme } = useContext(ThemeContext);

    return (
        <div className={`min-h-screen ${theme === 'Dark' ? 'bg-gray-800 text-gray-200' : 'bg-gray-200 text-gray-800'}`}>
            <Cover
                image={'https://i.ibb.co/bstNQ2D/bri-tucker-LGG5-P7-KCzi-U-unsplash.jpg'}
                heading={"Founded in 2019, ThePetNest is the India’s largest network of 5-star pet care service providers."}
                header={"About Pet Haven BD"}
                title={"About Pet Haven BD"}
                />
            <AboutFeatures></AboutFeatures>
        </div>
    );
};

export default About;
