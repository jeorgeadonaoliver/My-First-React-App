interface SideBarImageProps
{
    imagePath: string;
    name: string;
    onClick: () => void;
}

const SideBarImage = ({imagePath, name, onClick}: SideBarImageProps) => {
    return (
    <div onClick={onClick} 
    className="sidebar-image">
        <img src={imagePath} 
        alt="Profile"
        className="w-[40px] h-[40px] rounded-full object-cover"/>

        <span className="text-sm text-white mt-1">{name}</span>
    </div>)
};

export default SideBarImage;