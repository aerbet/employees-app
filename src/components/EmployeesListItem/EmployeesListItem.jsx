import "./EmployeesListItem.css"
import PropTypes from "prop-types";
import {Component} from "react";

class EmployeesListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      increase: false,
      like: false
    }
  }
  
  onIncrease = () => {
    this.setState(({ increase }) => ({
      increase: !increase
    }))
  }
  
  setLike = () => {
    this.setState(({ like }) => ({
      like: !like
    }))
  }
  
  render() {
    const { name, salary } = this.props;
    const { increase, like } = this.state;
    
    let liName = "list-group-item d-flex justify-content-between";
    if(increase) {
      liName += ' increase';
    }
    if(like) {
      liName += ' like';
    }
    
    
    return (
      <li className={liName}>
        <span onClick={this.setLike} className="list-group-item-label">{name}</span>
        <input type="text"
               className="list-group-item-input"
               defaultValue={salary + '$'}/>
        <div className='d-flex justify-content-center align-items-center'>
          <button type="button"
                  className="btn-cookie btn-sm "
                  onClick={this.onIncrease}>
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
  }
  
}

EmployeesListItem.propTypes = {
  name: PropTypes.string.isRequired,
  salary: PropTypes.number.isRequired,
};

export default EmployeesListItem;