import "./EmployeesList.css"
import EmployeesListItem from "../EmployeesListItem/EmployeesListItem.jsx";
import PropTypes from "prop-types";

const EmployeesList = ({ data }) => {
  
  const elements = data.map((item, index) => {
    
    return (
      <EmployeesListItem key={index + 1} {...item} />
    )
  })

  return (
    <ul className="app-list list-group">
      {elements}
    </ul>
  );
};

EmployeesList.propTypes = {
  data: PropTypes.array.isRequired,
};

export default EmployeesList;