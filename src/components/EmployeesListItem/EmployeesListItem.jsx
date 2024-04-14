import "./EmployeesListItem.css"
import PropTypes from "prop-types";

const EmployeesListItem = ({ name, salary, increase }) => {
  
  let liName = "list-group-item d-flex justify-content-between";
  if(increase) {
    liName += ' increase';
  }
  
  return (
    <li className={liName}>
      <span className="list-group-item-label">{name}</span>
      <input type="text"
             className="list-group-item-input"
             defaultValue={salary + '$'}/>
      <div className='d-flex justify-content-center align-items-center'>
        <button type="button"
                className="btn-cookie btn-sm ">
          <i className="fas fa-cookie"></i>
        </button>
        
        <button type="button"
                className="btn-trash btn-sm ">
          <i className="fas fa-trash"></i>
        </button>
        <i className="fas fa-star"></i>
      </div>
    </li>
  );
};

EmployeesListItem.propTypes = {
  name: PropTypes.string.isRequired,
  salary: PropTypes.number.isRequired,
  increase: PropTypes.bool.isRequired,
};

export default EmployeesListItem;