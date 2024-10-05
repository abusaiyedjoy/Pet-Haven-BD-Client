import { Outlet } from 'react-router-dom';
import Sidebar from '../Components/Sidebar/Sidebar';

const Dashboard = () => {

  return (
    <div className="min-h-screen">
      <div className="flex">
        <Sidebar />
        <div className="flex-1 p-4 bg-orange-50 dark:bg-gray-800">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
