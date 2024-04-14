import "./EmployeesList.css"
import EmployeesListItem from "../EmployeesListItem/EmployeesListItem.jsx";

const EmployeesList = () => {
  return (
    <ul className="app-list list-group">
      <EmployeesListItem />
      <EmployeesListItem />
      <EmployeesListItem />
    </ul>
  );
};

export default EmployeesList;