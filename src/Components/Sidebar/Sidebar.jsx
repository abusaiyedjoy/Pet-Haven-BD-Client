import toast from "react-hot-toast";
import { FaHome, FaSearch, FaComments, FaUser, FaDonate } from "react-icons/fa";
import { PiSignOutBold } from "react-icons/pi";
import { NavLink, useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import Swal from "sweetalert2";

const Sidebar = () => {
    const isAdmin = false;
    const { signOutUser, user } = useAuth();
    const navigate = useNavigate();

    const handleSignOut = () => {
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
                signOutUser()
                    .then(() => {
                        navigate('/');
                        toast.success('Sign Out Successfully!');
                    })
                    .catch((error) => {
                        console.log(error);
                    });
            }
        });
    };

    return (
        <div className="p-3 min-h-screen sofadi border-r-2 relative border-primary space-y-2 w-60 bg-orange-100 text-black dark:bg-gray-900 dark:text-gray-200">
            <div className="flex items-center p-2 space-x-4">
                <img src="https://i.ibb.co.com/CtfJQ7K/Black-Cat-Flat-Illustrative-Pets-Logo-removebg-preview.png" alt="" className="w-6 h-6 lg:w-8 lg:h-8 rounded-full dark:bg-gray-500" />
                <div>
                    <h2 className="text-2xl roboto font-semibold">Pet Haven BD</h2>
                </div>
            </div>
            <div className="flex flex-col justify-between gap-10 items-center">
                <ul className="pt-2 pb-4 menu font-medium space-y-1 text-lg">
                    <li>
                        <NavLink to="/" className="flex items-center p-2 gap-5 rounded-md">
                            <FaHome />
                            Home
                        </NavLink>
                    </li>
                    {isAdmin ? (
                        <>
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
                                    <FaDonate />
                                    <span>All Donations</span>
                                </NavLink>
                            </li>
                        </>
                    ) : (
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
                                    <FaDonate />
                                    <span>My Donations</span>
                                </NavLink>
                            </li>
                        </>
                    )}
                </ul>
                <ul className="pt-2 pb-4 space-y-3 border-t-2 border-secondary w-[90%] pl-4 text-lg absolute bottom-2">
                    <li>
                        <NavLink to="/" className="flex items-center font-semibold gap-2">
                            <FaUser />
                            {user ? user?.displayName : 'Profile'}
                        </NavLink>
                    </li>
                    <li>
                        <NavLink onClick={handleSignOut} className="flex font-bold items-center gap-2">
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
