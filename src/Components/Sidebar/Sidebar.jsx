import toast from "react-hot-toast";
import { FaHome, FaUser, FaDonate, FaSearch, FaComments } from "react-icons/fa";
import { PiSignOutBold } from "react-icons/pi";
import { NavLink, useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import Swal from "sweetalert2";
import { MdAddTask } from "react-icons/md";
import { RiApps2AddFill } from "react-icons/ri";

const Sidebar = () => {
    const isAdmin = false; // Change to true for admin view
    const { signOutUser } = useAuth();
    const navigate = useNavigate();

    // Sign out handler with confirmation
    const handleSignOut = () => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Sign Out",
        }).then((result) => {
            if (result.isConfirmed) {
                signOutUser()
                    .then(() => {
                        navigate("/");
                        toast.success("Signed Out Successfully!");
                    })
                    .catch((error) => {
                        console.error(error);
                    });
            }
        });
    };

    return (
        <div className="p-3 min-h-screen border-r-2 roboto border-primary space-y-2 w-60 bg-orange-100 text-black dark:bg-gray-900 dark:text-gray-200">

            {/* Navigation Menu */}
            <div className="flex flex-col gap-10">
                <ul className="space-y-3 text-md font-medium">
                    {/* Common Navigation */}
                    <li>
                        <NavLink
                            to="/dashboard/userHome"
                            className={({ isActive }) =>
                                `flex items-center gap-5 rounded-md p-2 ${
                                    isActive ? "!text-white !bg-primary" : "hover:bg-primary hover:text-white"
                                }`
                            }
                        >
                            <FaUser />
                            My Profile
                        </NavLink>
                    </li>

                    {/* Admin Links */}
                    {isAdmin && (
                        <>
                            <li>
                                <NavLink
                                    to="/dashboard/users"
                                    className={({ isActive }) =>
                                        `flex items-center gap-5 rounded-md p-2 ${
                                            isActive ? "!text-white !bg-primary" : "hover:bg-primary hover:text-white"
                                        }`
                                    }
                                >
                                    <FaUser />
                                    Manage Users
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/dashboard/manageAllPets"
                                    className={({ isActive }) =>
                                        `flex items-center gap-5 rounded-md p-2 ${
                                            isActive ? "!text-white !bg-primary" : "hover:bg-primary hover:text-white"
                                        }`
                                    }
                                >
                                    <FaHome />
                                    All Pets
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/dashboard/allDonations"
                                    className={({ isActive }) =>
                                        `flex items-center gap-5 rounded-md p-2 ${
                                            isActive ? "!text-white !bg-primary" : "hover:bg-primary hover:text-white"
                                        }`
                                    }
                                >
                                    <FaDonate />
                                    All Donations
                                </NavLink>
                            </li>
                        </>
                    )}

                    {/* User Links */}
                    {!isAdmin && (
                        <>
                            <li>
                                <NavLink
                                    to="/dashboard/addPets"
                                    className={({ isActive }) =>
                                        `flex items-center gap-5 rounded-md p-2 ${
                                            isActive ? "!text-white !bg-primary" : "hover:bg-primary hover:text-white"
                                        }`
                                    }
                                >
                                    <RiApps2AddFill />
                                    Add a Pet
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/dashboard/addedPets"
                                    className={({ isActive }) =>
                                        `flex items-center gap-5 rounded-md p-2 ${
                                            isActive ? "!text-white !bg-primary" : "hover:bg-primary hover:text-white"
                                        }`
                                    }
                                >
                                    <MdAddTask />
                                    My Added Pets
                                </NavLink>
                            </li>


                            <li>
                                <NavLink
                                    to="/dashboard/adoption"
                                    className={({ isActive }) =>
                                        `flex items-center gap-5 rounded-md p-2 ${
                                            isActive ? "!text-white !bg-primary" : "hover:bg-primary hover:text-white"
                                        }`
                                    }
                                >
                                    <FaSearch />
                                    My Adoption Requests
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/dashboard/campaign"
                                    className={({ isActive }) =>
                                        `flex items-center gap-5 rounded-md p-2 ${
                                            isActive ? "!text-white !bg-primary" : "hover:bg-primary hover:text-white"
                                        }`
                                    }
                                >
                                    <FaComments />
                                    Create Donation Campaign
                                </NavLink>
                            </li> 
                            <li>
                                <NavLink
                                    to="/dashboard/myCampaign"
                                    className={({ isActive }) =>
                                        `flex items-center gap-5 rounded-md p-2 ${
                                            isActive ? "!text-white !bg-primary" : "hover:bg-primary hover:text-white"
                                        }`
                                    }
                                >
                                    <FaComments />
                                    My Donation Campaigns
                                </NavLink>
                            </li>


                            <li>
                                <NavLink
                                    to="/dashboard/myDonation"
                                    className={({ isActive }) =>
                                        `flex items-center gap-5 rounded-md p-2 ${
                                            isActive ? "!text-white !bg-primary" : "hover:bg-primary hover:text-white"
                                        }`
                                    }
                                >
                                    <FaDonate />
                                    My Donations
                                </NavLink>
                            </li>
                        </>
                    )}
                </ul>
            </div>

            {/* Logout Section */}
            <ul className="space-y-3 border-t-2 border-secondary pt-4">
                <li>
                    <button
                        onClick={handleSignOut}
                        className="flex font-bold items-center gap-2 w-full text-lg hover:bg-primary hover:text-white rounded-md p-2"
                    >
                        <PiSignOutBold />
                        Logout
                    </button>
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;
