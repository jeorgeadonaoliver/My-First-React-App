import Card from "../../../components/Calendar/Card/Card";
import EmployeeListItem from "./employeelistitem";

const Employeelistheader = () => {

    return (
        <>
        <Card>
        <div className="ml-4 mr-4 overflow-y-auto h-[80vh] p-4">
            <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold">List of Employee</h3>
                <select className="bg-neutral-600 text-white rounded-xl py-2 px-4 focus:outline-none focus:ring-2 focus:ring-emerald-500">
                    <option>Department</option>
                    <option>Team</option>
                </select>   
         </div>
         <div className="flex gap-2 flex-col">
            <EmployeeListItem></EmployeeListItem>
            <EmployeeListItem></EmployeeListItem>
            <EmployeeListItem></EmployeeListItem>
            <EmployeeListItem></EmployeeListItem>
            <EmployeeListItem></EmployeeListItem>
            <EmployeeListItem></EmployeeListItem>
            <EmployeeListItem></EmployeeListItem>
            <EmployeeListItem></EmployeeListItem>
            <EmployeeListItem></EmployeeListItem>
            
        </div>
        </div>    
        </Card>
        
        </>
    );
}

export default Employeelistheader;