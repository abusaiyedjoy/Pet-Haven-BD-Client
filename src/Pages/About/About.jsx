import Cover from "../../Layout/Cover/Cover";
import AboutFeatures from "./AboutFeatures";

const About = () => {

    return (
        <div className={`min-h-screen`}>
            <Cover
                image={'https://i.ibb.co/bstNQ2D/bri-tucker-LGG5-P7-KCzi-U-unsplash.jpg'}
                header={"About Us"}
                title={" / About Us"}
                />
            <AboutFeatures></AboutFeatures>
        </div>
    );
};

export default About;
