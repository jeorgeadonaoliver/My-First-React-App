import { FaSearch } from "react-icons/fa";
import Card from "../../../components/Calendar/Card/Card";

const SearchbarCard = () =>{

    return(
        <Card>
            <div className="flex flex-row gap-x-4">
                <input type="text" placeholder="Search employee..." className="w-full pl-10 pr-4 py-2 border border-gray-600 bg-neutral-600 rounded-4xl focus:outline-0 text-neutral-300" />
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <FaSearch className="text-gray-300" />
                </div>
                <select className="bg-neutral-600 text-white rounded-xl py-2 px-4 focus:outline-none focus:ring-2 focus:ring-emerald-500">
                    <option>Department</option>
                    <option>App Dev</option>
                    <option>QA</option>
                </select>
                <select className="bg-neutral-600 text-white rounded-xl py-2 px-4 focus:outline-none focus:ring-2 focus:ring-emerald-500">
                    <option>Group</option>
                    <option>ETG</option>
                    <option>IT</option>
                </select>
                <button className="bg-[#3E53A0] text-white font-bold py-2 px-4 rounded-full hover:bg-[#5A77DF] transition duration-300 cursor-pointer hover:scale-110">
                    Search
                </button>
            </div>
            
        </Card>
    );

}

export default SearchbarCard;