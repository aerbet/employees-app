import {Component} from "react";
/*import newId from "../../utils/newId.js";*/

import AppInfo from "../AppInfo/AppInfo";
import SearchPanel from "../SearchPanel/SearchPanel";
import AppFilter from "../AppFilter/AppFilter";
import EmployeesList from "../EmployeesList/EmployeesList";
import EmployeesAddForm from "../EmployeesAddForm/EmployeesAddForm";

import './App.css'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {name: 'John L.', salary: 800, id: 1},
        {name: 'Leon O.', salary: 2000, id: 2},
        {name: 'Pereira A.', salary: 14000, id: 3},
      ]
    }
    this.maxId = 4;
  }
  
  
  deleteItem = (id) => {
    this.setState(({ data }) => {
      return {
        data: data.filter(item => item.id !== id)
      }
    })
  }
  
  addEmployee = (name, salary) => {
    const newEmployee = {
      name,
      salary,
      id: this.maxId++
    }
    
    if(newEmployee.name === '' && newEmployee.salary === '') {
      alert('Пожалуйста, введите имя и зарплату сотрудника')
    } else {
      this.setState(({ data }) => {
        const newArr = [...data, newEmployee]
        return {
          data: newArr
        }
      })
    }
  }
  
  render() {
    
    return (
      <>
        <div className="app">
          <AppInfo />
          
          <div className="search-panel">
            <SearchPanel />
            <AppFilter />
          </div>
          
          <EmployeesList
            data={this.state.data}
            onDelete={this.deleteItem} />
          <EmployeesAddForm onAdd={this.addEmployee}/>
        </div>
      </>
    )
  }
}

export default App;
