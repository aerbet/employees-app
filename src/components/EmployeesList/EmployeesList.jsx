import "./EmployeesList.css"
import EmployeesListItem from "../EmployeesListItem/EmployeesListItem.jsx";
import PropTypes from "prop-types";

const EmployeesList = ({ data, onDelete }) => {
  
  const elements = data.map(item => {
    const {id, ...itemProps } = item;
    
    return (
      <EmployeesListItem
        key={id}
        {...itemProps}
        onDelete={() => onDelete(id)} />
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
};

export default EmployeesList;