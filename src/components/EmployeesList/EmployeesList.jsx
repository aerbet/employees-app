import "./EmployeesList.css"
import EmployeesListItem from "../EmployeesListItem/EmployeesListItem.jsx";
import PropTypes from "prop-types";

const EmployeesList = ({ data }) => {
  
  const elements = data.map((item, index) => {
    
    return (
      <EmployeesListItem key={index} {...item} />
    )
  })
  
  return (
    <ul className="app-list list-group">
      {elements}
    </ul>
  );
};

EmployeesList.propTypes = {
  data: PropTypes.string.isRequired,
  salary: PropTypes.number.isRequired
};

export default EmployeesList;