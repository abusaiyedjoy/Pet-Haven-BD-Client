import { Outlet } from "react-router-dom";
import Sidebar from "../Components/Sidebar/Sidebar";


const Dashboard = () => {
    return (
        <div className="min-h-screen">
            <div className="">
                <Sidebar></Sidebar>
            </div>
            <div className="">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;