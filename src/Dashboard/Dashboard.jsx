import { Outlet } from 'react-router-dom';
import Sidebar from '../Components/Sidebar/Sidebar';
import ThemeContext from '../Hooks/ThemeContext';
import { useContext } from 'react';

const Dashboard = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`min-h-screen ${theme === 'Dark' ? 'bg-gray-800 text-gray-200' : 'bg-gray-200 text-gray-800'}`}>
      <div className="flex">
        <Sidebar />
        <div className="flex-1 p-4">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
