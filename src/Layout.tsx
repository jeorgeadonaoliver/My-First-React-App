import { Outlet } from 'react-router-dom';
import SideBar from './components/Sidebar/Sidebar';
import { BiHomeCircle, BiLogOut } from 'react-icons/bi';
import { FaFire, FaPoo } from 'react-icons/fa';
import { BsFillLightningFill, BsGearFill, BsPlus } from 'react-icons/bs';

const Layout = () => {

    const sidebarItems = [
        { icon: <BiHomeCircle size="25" />, text: "Home", index: 0, route: '/layout/home', panelTitle: "" },
        { icon: <FaFire size="25" />, text: "Fire", index: 1, panelTitle: "Fire Overview" },
        { icon: <FaPoo size="25" />, text: "Poo", index: 2, panelTitle: "Poo Overview" },
        { icon: <BsPlus size="25" />, text: "Plus", index: 3, panelTitle: "Plus Overview" },
        { icon: <BsFillLightningFill size="25" />, text: "Lightning", index: 4, panelTitle: "Lightning Overview" },
        { icon: <BsGearFill size="25" />, text: "Settings", index: 5, panelTitle: "Settings Overview" },
        { icon: <BiLogOut size="25" />, text: "Logout", index: 0, route: '/login', panelTitle: "" },
    ];

  return (
    <div className="min-h-screen bg-neutral-900 text-white flex">
      <aside className="w-20 bg-gray-800 p-4">
        <SideBar sidebarItems= {sidebarItems}/>
      </aside>
           <main className="flex-1 p-6">
        <Outlet /> 
      </main>    
    </div>
  );
};

export default Layout;