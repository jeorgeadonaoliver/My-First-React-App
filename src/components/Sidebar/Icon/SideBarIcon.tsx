interface SideBarIconProps
{
    icon: React.ReactNode;
    text: string;
    isActive: boolean;
    onClick : () => void;
}

// SideBarIcon Component
const SideBarIcon = ({ icon, text, isActive, onClick }: SideBarIconProps) => {
  return (
    <div
      onClick={onClick}
      className={`sidebar-icon group flex flex-col items-center p-3 cursor-pointer transition-all duration-300
        ${isActive ? 'bg-neutral-600 text-white rounded-xl' : 'bg-neutral-800 text-gray-400 hover:bg-neutral-600 hover:text-white rounded-xl'}`}>
      <div className="text-2xl">{icon}</div>

      <span className="text-[12px] text-white">{text}</span>
    </div>
  );
};

export default SideBarIcon;