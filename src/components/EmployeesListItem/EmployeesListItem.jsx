import "./EmployeesListItem.css"
import PropTypes from "prop-types";

const EmployeesListItem = (props) => {
  
    const { name, salary, onDelete, onToggleProp, increase, rise } = props;
    
    let liName = "list-group-item d-flex justify-content-between";
    if(increase) {
      liName += ' increase';
    }
    if(rise) {
      liName += ' like';
    }
    
    return (
      <li className={liName}>
        <span onClick={onToggleProp} data-toggle="rise" className="list-group-item-label">{name}</span>
        <input type="text"
               className="list-group-item-input"
               defaultValue={salary + '$'}/>
        <div className='d-flex justify-content-center align-items-center'>
          <button type="button"
                  className="btn-cookie btn-sm "
                  onClick={onToggleProp}
                  data-toggle="increase">
            <i className="fas fa-cookie"></i>
          </button>
          
          <button type="button"
                  className="btn-trash btn-sm"
                  onClick={onDelete}>
            <i className="fas fa-trash"></i>
          </button>
          <i className="fas fa-star"></i>
        </div>
      </li>
    );
  }

EmployeesListItem.propTypes = {
  name: PropTypes.string.isRequired,
  salary: PropTypes.any.isRequired,
  onDelete: PropTypes.func.isRequired,
  onToggleProp: PropTypes.func.isRequired,
  increase: PropTypes.bool,
  rise: PropTypes.bool
};

export default EmployeesListItem;