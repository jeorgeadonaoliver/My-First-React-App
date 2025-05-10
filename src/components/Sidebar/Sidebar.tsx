import './Sidebar.css'
import { BsPlus, BsFillLightningFill, BsGearFill } from 'react-icons/bs';
import { FaFire, FaPoo } from 'react-icons/fa';
import { BiHomeCircle, BiLogOut } from 'react-icons/bi';
import randomImage from '../../assets/random-image.jpg';
import { useEffect, useRef, useState } from 'react';
import { SideBarImage } from './Image/SidebarImage';
import { SideBarIcon } from './Icon/SideBarIcon';
import { SidePanel } from './Panel/SidePanel';
import { useNavigate } from 'react-router-dom';


const SideBar = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);
    const [activePanelTitle, setActivePanelTitle] = useState<string>("");
    
    const sidebarRef = useRef<HTMLDivElement>(null);
    const panelRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        sidebarRef.current &&
        panelRef.current &&
        !sidebarRef.current.contains(event.target as Node) &&
        !panelRef.current.contains(event.target as Node)
      ) {
        setActiveIndex(null); // close panel
      }
    };
      document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  },[sidebarRef,panelRef]);

  const navigate = useNavigate();
  const navigateToPage = (page:string) => {
    navigate(page);
  };

  return (
    <>
    <div ref={sidebarRef} 
    className="fixed top-0 left-0 h-screen w-22 m-0 flex flex-col bg-neutral-800 text-white shadow-lg overflow-y-auto">
      <SideBarImage 
        imagePath={randomImage} 
        name="Jeorge"
        onClick={() => {navigateToPage('/layout/profile')}} />
      

      <SideBarIcon
        icon={<BiHomeCircle size="25" />}
        text="Home"
        isActive={activeIndex === 0}
        onClick={() => {setActiveIndex(null); navigateToPage('/layout/home')}}
      />
      <SideBarIcon
        icon={<FaFire size="25" />}
        text="Fire"
        isActive={activeIndex === 1}
        onClick={() => {
          setActiveIndex(1);
          setActivePanelTitle("Fire Overview");
        }
      } 
      />
      <SideBarIcon
        icon={<FaPoo size="25" />}
        text="Poo"
        isActive={activeIndex === 2} 
        onClick={() => {
          setActiveIndex(1);
          setActivePanelTitle("Poo Overview");
        }
      }
      />
      <SideBarIcon
        icon={<BsPlus size="25" />}
        text="Plus"
        isActive={activeIndex === 3} 
       onClick={() => {
          setActiveIndex(1);
          setActivePanelTitle("Plus Overview");
        }
      }
      />
      <SideBarIcon
        icon={<BsFillLightningFill size="25" />}
        text="Lightning"
        isActive={activeIndex === 4}
        onClick={() => {
          setActiveIndex(1);
          setActivePanelTitle("Lightning Overview");
        }
      } 
      />
      <SideBarIcon
        icon={<BsGearFill size="25" />}
        text="Settings"
        isActive={activeIndex === 5}  
         onClick={() => {
          setActiveIndex(1);
          setActivePanelTitle("Settings Overview");
        }
      } 
      />
      <div className="mt-auto bottom-0 left-0 w-full">
        <SideBarIcon
          icon={<BiLogOut size="25" />}
          text="Logout"
          isActive={activeIndex === 0} 
          onClick={() => {setActiveIndex(null); navigateToPage('/login');}}
        />
      </div>
    </div>
    
    <SidePanel activeIndex={activeIndex} text={{Title: activePanelTitle}} panelRef={panelRef} />
    </>
    
  );
};

export default SideBar;