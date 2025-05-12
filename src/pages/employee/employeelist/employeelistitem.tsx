import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";

const EmployeeListItem = () => {
    return (
   <div className="p-6 rounded-4xl bg-neutral-600">
  <div className="flex items-center justify-between">
    <div className="flex items-center gap-2.5 w-full">
      <span className="w-2.5 h-2.5 rounded-full bg-green-700"></span>
      <div className="w-full">
        <h4 className="text-xl leading-8 font-semibold text-white mb-1">Jeorge Oliver</h4>
        <p className="text-xs font-medium  text-white">.Net Developer - App Dev - ETG </p>
      </div>
    </div>
    <button
      type="button"
      className="bg-[#3E53A0] h-8 text-white font-bold py-2 px-4 rounded-full hover:bg-[#5A77DF] transition duration-800 cursor-pointer hover:scale-110">
      <MdOutlineKeyboardDoubleArrowRight size="18" />
    </button>
  </div>
</div>
    );      
}
export default EmployeeListItem;