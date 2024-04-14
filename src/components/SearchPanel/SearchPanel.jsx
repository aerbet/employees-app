import "./SearchPanel.css"

const SearchPanel = () => {
  return (
    <div>
      <label><input type="text"
              className="form-control search-input"
              placeholder="Найти сотрудника"/>
      </label>
    </div>
  );
};

export default SearchPanel;