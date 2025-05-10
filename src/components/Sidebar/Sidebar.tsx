import './Sidebar.css'
import randomImage from '../../assets/random-image.jpg';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SideBarImage from './Image/SidebarImage';
import SideBarIcon from './Icon/SideBarIcon';
import SidePanel from './Panel/SidePanel';

interface SidebarItemProps {
    icon: React.ReactNode;
    text: string;
    index: number;
    route?: string;
    panelTitle: string;
}


const SideBar = React.memo(({sidebarItems} : {sidebarItems:SidebarItemProps[]}) => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);
    const [activePanelTitle, setActivePanelTitle] = useState<string>("");

    const sidebarRef = useRef<HTMLDivElement>(null);
    const panelRef = useRef<HTMLDivElement>(null);

    const navigate = useNavigate();

    const navigateToPage = useCallback((page: string) => {
        navigate(page);
    }, [navigate]);

    const handleItemClick = useCallback((index: number | null, title: string, route?: string) => {
        setActiveIndex(index);
        setActivePanelTitle(title);
        if (route) {
            navigateToPage(route);
        }
    }, [navigateToPage, setActiveIndex, setActivePanelTitle]);

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
    }, [sidebarRef, panelRef, setActiveIndex]);

    return (
        <>
            <div
                ref={sidebarRef}
                className="fixed top-0 left-0 h-screen w-22 m-0 flex flex-col bg-neutral-800 text-white shadow-lg overflow-y-auto">
                <SideBarImage
                    imagePath={randomImage}
                    name="Jeorge"
                    onClick={() => handleItemClick(null, "", '/layout/profile')}
                />
                {sidebarItems.map((item) => (
                    <SideBarIcon
                        key={item.text}
                        icon={item.icon}
                        text={item.text}
                        isActive={activeIndex === item.index}
                        onClick={() => {
                           if (item.text === "Home") {
                                setActiveIndex(null);
                                navigateToPage(item.route || '/layout/home');
                            } else if (item.route) {
                                handleItemClick(item.index, item.panelTitle);
                                navigateToPage(item.route);
                            } else {
                                handleItemClick(item.index, item.panelTitle);
                            }
                        }}
                    />
                ))}
            </div>

            <SidePanel activeIndex={activeIndex} text={{ Title: activePanelTitle }} panelRef={panelRef} />
        </>
    );
});

export default SideBar;
