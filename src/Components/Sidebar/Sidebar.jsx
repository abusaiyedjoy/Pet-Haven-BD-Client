import toast from "react-hot-toast";
import { FaHome, FaSearch, FaComments, FaUser } from "react-icons/fa";
import { PiSignOutBold } from "react-icons/pi";
import { NavLink, useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import Swal from "sweetalert2";


const Sidebar = () => {
    const isAdmin = true;
    const { signOutUser, user } = useAuth()
    const navigate = useNavigate()
    const handleSignOut = () => {
        signOutUser()
            .then(() => {
                Swal.fire({
                    title: "Are you sure?",
                    text: "You won't be able to revert this!",
                    icon: "warning",
                    showCancelButton: true,
                    confirmButtonColor: "#3085d6",
                    cancelButtonColor: "#d33",
                    confirmButtonText: "Sign Out"
                }).then((result) => {
                    if (result.isConfirmed) {
                        navigate('/')
                        toast.success('Sign Out Successfully!')
                    }
                });

            })
            .catch((error) => {
                console.log(error);
            });
    }
    return (
        <div className="h-full p-3 min-h-screen shadow-2xl space-y-2 w-60 bg-white text-black dark:bg-gray-600 dark:text-gray-200">
            <div className="flex items-center p-2 space-x-4">
                <img src="https://source.unsplash.com/100x100/?portrait" alt="" className="w-12 h-12 rounded-full dark:bg-gray-500" />
                <div>
                    <h2 className="text-xl font-semibold">{user?.displayName}</h2>
                    <span className="flex items-center space-x-1">
                        <a className="text-sm hover:underline dark:text-gray-600">View profile</a>
                    </span>
                </div>
            </div>
            <div className="divide-y dark:divide-gray-300">


                <ul className="pt-2 pb-4 menu space-y-1 text-lg">
                    {
                        isAdmin ? <>
                        <li>
                        <NavLink to="/dashboard/users" className="flex items-center p-2 space-x-3 rounded-md">
                            <FaUser />
                            <span>All Users</span>
                        </NavLink>
                    </li>
                        <li>
                        <NavLink to="/dashboard/pets" className="flex items-center p-2 space-x-3 rounded-md">
                            <FaHome />
                            <span>All Pets</span>
                        </NavLink>
                    </li>
                        <li>
                        <NavLink to="/dashboard/donations" className="flex items-center p-2 space-x-3 rounded-md">
                            <FaHome />
                            <span>All Donations</span>
                        </NavLink>
                    </li>
                        </>
                        :
                        <>
                    <li>
                        <NavLink to="/dashboard/addPets" className="flex items-center p-2 space-x-3 rounded-md">
                            <FaHome />
                            <span>Add a Pet</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/addedPets" className="flex items-center p-2 space-x-3 rounded-md">
                            <FaSearch />
                            <span>My Added Pets</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/adoption" className="flex items-center p-2 space-x-3 rounded-md">
                            <FaSearch />
                            <span>Adoption Request</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/campaign" className="flex items-center p-2 space-x-3 rounded-md">
                            <FaComments />
                            <span>Create Donation Campaign</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/myCampaign" className="flex items-center p-2 space-x-3 rounded-md">
                            <FaComments />
                            <span>My Donation Campaigns</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/myDonation" className="flex items-center p-2 space-x-3 rounded-md">
                            <FaComments />
                            <span>My Donations</span>
                        </NavLink>
                    </li>
                        </>
                    }
                </ul>

                <ul className="pt-2 pb-4 space-y-5 pl-4 text-lg">
                    <li>
                        <NavLink to="/" className="flex items-center gap-2">
                            <FaHome />
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink onClick={handleSignOut} className="flex items-center gap-2">
                            <PiSignOutBold />
                            <span>Logout</span>
                        </NavLink>
                    </li>
                </ul>


            </div>
        </div>
    );
};

export default Sidebar;