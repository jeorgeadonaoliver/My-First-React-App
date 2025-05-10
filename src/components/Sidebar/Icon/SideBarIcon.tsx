interface SideBarIconProps
{
    icon: React.ReactNode;
    text: string;
    isActive: boolean;
    onClick : () => void;
}

// SideBarIcon Component
export const SideBarIcon = ({ icon, text, isActive, onClick }: SideBarIconProps) => {
  return (
    <div
      onClick={onClick}
      className={`sidebar-icon group flex flex-col items-center p-3 cursor-pointer transition-all duration-300
        ${isActive ? 'bg-neutral-600 text-white rounded-xl' : 'bg-neutral-800 text-gray-400 hover:bg-neutral-600 hover:text-white rounded-xl'}`}
    >
      {/* Render icon */}
      <div className="text-2xl">{icon}</div>
      

      {/* Tooltip with scaling effect */}
      {/* <span className="sidebar-tooltip group-hover:scale-100">
        {text}
      </span> */}

      <span className="text-[12px] text-white">{text}</span>
    </div>
  );
};