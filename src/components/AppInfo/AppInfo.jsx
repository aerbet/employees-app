import "./AppInfo.css"
import PropTypes from "prop-types";

const AppInfo = ({ data }) => {
  
  let trueCount = data.filter(item => item.increase).length;
  
  return (
    <div className="app-info">
      <h1>Учет сотрудников</h1>
      <h2>Общее число сотрудников: {data.length} </h2>
      <h2>Премию получат: {trueCount}</h2>
    </div>
  );
};

AppInfo.propTypes = {
  data: PropTypes.array.isRequired
};

export default AppInfo;