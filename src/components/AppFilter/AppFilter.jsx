import "./AppFilter.css"

import PropTypes from "prop-types";

const AppFilter = (props) => {
  const buttonsData = [
    {name: 'all', label: 'Все сотрудники'},
    {name: 'rise', label: 'На повышение'},
    {name: 'moreThan1000', label: 'З/П больше 1000$'},
  ];
  
  const buttons = buttonsData.map(({name, label}) => {
    const active = props.filter === name;
    const clazz = active ? 'btn-light' : 'btn-outline-light';
    
    return (
      <button className={`btn ${clazz}`}
              key={name}
              type="button"
              onClick={() => props.onFilterSelect(name)}>
              {label}
      </button>
    )
  })
  
  return (
    <div className="button-group">
      {buttons}
    </div>
  );
};

AppFilter.propTypes = {
  filter: PropTypes.string,
  onFilterSelect: PropTypes.func
}

export default AppFilter;