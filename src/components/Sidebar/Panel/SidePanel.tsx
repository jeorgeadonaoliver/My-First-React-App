import type React from "react";

interface SidePanelProps{
    activeIndex: number | null;
    text: {Title: string};
    panelRef: React.RefObject<HTMLDivElement | null>;
}

const SidePanel = ({ activeIndex, text, panelRef }: SidePanelProps ) => {
  const isOpen = activeIndex !==null;

  const panelContent = [
    "Home Content",
    "Fire Content",
    "Poo Content",
    "Plus Content",
    "Lightning Content",
    "Settings Content"
  ];

  return (
    <div ref={panelRef} 
    className={`
      fixed top-0 h-screen bg-neutral-800 p-4 text-white z-50
      transform transition-transform duration-900 ease-in-out
      ${isOpen ? `translate-x-[calc(22px)] opacity-100` : `translate-x-[calc(-100% - 22px)] opacity-0 pointer-events-none invisible`}
      left-16 w-64
    `}
    >
      <h2 className="text-xl font-bold mb-4">{text.Title}</h2>
      <p>{panelContent[activeIndex ?? 0]}</p>
    </div>
  );
};


export default SidePanel;