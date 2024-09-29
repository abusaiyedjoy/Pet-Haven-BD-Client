import Cover from "../../Layout/Cover/Cover";

const Services = () => {

    return (
        <div className={`min-h-screen dark:bg-gray-800`}>
            <Cover
                image={'https://i.ibb.co/LJkTJrb/malek-dridi-0-F7-GRXNOG7g-unsplash.jpg'}
                title={" / Services"}
            />
            <div className="flex flex-col justify-center items-center">
                <h1 className="text-3xl font-medium mt-12 text-center text-gray-800 dark:text-gray-200">Book Appointment with the most reliable and experienced vets</h1>
                <h3 className="text-3xl font-medium mt-12 text-center text-primary">Comming Soon...</h3>
            </div>
        </div>
    );
};

export default Services;