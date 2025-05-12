import SearchbarCard from "./searchbar/searchbarcard";
import './employee.css'
import Card from "../../components/Calendar/Card/Card";
import { IoMdAdd } from "react-icons/io";
import Employeelistheader from "./employeelist/employeelistheader";

const Employee = () => {

    return (
        <>
        <div className="gridLayout">
            <div className="col-span-3">
                <SearchbarCard />
            </div>
            <div className="col-span-2">
                <Employeelistheader />
            </div>
            <div>
                <Card />
            </div>
        </div>
         <div className="absolute bottom-8 right-10">
            <button className="add-button-employee">
                <IoMdAdd size="25" />    
            </button>
        </div>
        </>
    );
}

export default Employee;