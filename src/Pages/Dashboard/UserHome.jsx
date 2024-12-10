import LoadingSpinner from "../../Components/Shared/Loading";
import useAuth from "../../Hooks/useAuth";

const UserHome = () => {
    const { user } = useAuth();
    return (
        <div className="w-full h-full flex items-center justify-center">
            {user ? (
                <div className="text-center flex flex-col items-center space-y-5">
                    <img className="w-44 h-44 rounded-full bg-gray-500 dark:bg-gray-300" src={user?.photoURL ? user.photoURL : "https://i.ibb.co/DLcr2Vk/sam-moghadam-khamseh-yx-ZSAjy-To-P4-unsplash.jpg"} alt="profile picture" />
                    <h2 className="text-2xl md:text-4xl roboto dark:text-gray-200 text-gray-800"> {user?.displayName}</h2>
                    <h2 className="text-lg md:text-xl roboto dark:text-gray-200 text-gray-800"> Role: {user?.role ? user.role : "User"}</h2>
                </div>
            ) : (
                <LoadingSpinner />
            )}
        </div>
    );
};

export default UserHome;