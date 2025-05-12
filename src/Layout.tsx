import { Outlet } from 'react-router-dom';
import SideBar from './components/Sidebar/Sidebar';
import { BsGearFill, BsPlus } from 'react-icons/bs';
import { BiHomeCircle } from 'react-icons/bi';
import { FaListUl } from 'react-icons/fa';

const Layout = () => {

    const sidebarItems = [
        { icon: <BiHomeCircle size="25" />, text: "Home", index: 0, route: '/layout/home', panelTitle: "" },
        { icon: <FaListUl size="25" />, text: "Employee", index: 0, route:'/layout/employee', panelTitle: "" },
        { icon: <BsPlus size="25" />, text: "Plus", index: 3, panelTitle: "Plus Overview" },
        { icon: <BsGearFill size="25" />, text: "Settings", index: 5, panelTitle: "Settings Overview" }
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