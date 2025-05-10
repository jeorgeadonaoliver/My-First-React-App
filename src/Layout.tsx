import { Outlet } from 'react-router-dom';
import SideBar from './components/Sidebar/Sidebar';


export default function Layout() {
  return (
    <div className="min-h-screen bg-neutral-900 text-white flex">

      <aside className="w-20 bg-gray-800 p-4">
        <SideBar />
      </aside>
           <main className="flex-1 p-6">
        <Outlet /> 
      </main>
      
    </div>
  );
}