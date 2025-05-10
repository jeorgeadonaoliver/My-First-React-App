import type React from "react";

interface SidePanelProps{
    activeIndex: number | null;
    text: {Title: string};
    panelRef: React.RefObject<HTMLDivElement | null>;
}

export const SidePanel = ({ activeIndex, text, panelRef }: SidePanelProps ) => {
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
        fixed top-0 left-20 h-screen w-64 bg-neutral-800 shadow-lg p-4 text-white
        transform transition-transform duration-300 ease-in-out z-50
        ${isOpen ? "translate-x-0" : "-translate-x-full pointer-events-none invisible"}
      `}
    >
      <h2 className="text-xl font-bold mb-4">{text.Title}</h2>
      <p>{panelContent[activeIndex ?? 0]}</p>
    </div>
  );
};