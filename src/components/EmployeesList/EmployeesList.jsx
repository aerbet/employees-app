import "./EmployeesList.css"
import EmployeesListItem from "../EmployeesListItem/EmployeesListItem.jsx";
import PropTypes from "prop-types";

const EmployeesList = ({ data, onDelete, onToggleProp }) => {
  
  const elements = data.map(item => {
    const {id, ...itemProps } = item;
    
    return (
      <EmployeesListItem
        key={id}
        {...itemProps}
        onDelete={() => onDelete(id)}
        onToggleProp={(e) => onToggleProp(id, e.currentTarget.getAttribute('data-toggle') )} />
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
  onDelete: PropTypes.func.isRequired,
  onToggleProp: PropTypes.func.isRequired,
};

export default EmployeesList;