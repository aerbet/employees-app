import "./SearchPanel.css"

import {Component} from "react";
import PropTypes from "prop-types";

class SearchPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: ''
    }
  }
  
  onUpdateSearch = (e) => {
    const term = e.target.value;
    this.setState({term});
    this.props.onUpdateSearch(term);
  }
  
  render() {
    return (
      <div>
        <label>
          <input  type="text"
                  className="form-control search-input"
                  placeholder="Найти сотрудника"
                  value={this.state.term}
                  onChange={this.onUpdateSearch}
          />
        </label>
      </div>
    );
  }
}

SearchPanel.propTypes = {
  onUpdateSearch: PropTypes.func
};

export default SearchPanel;