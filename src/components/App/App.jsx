import {Component} from "react";

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
        {name: 'John L.', salary: 800, increase: true, rise: true, id: 1},
        {name: 'Leon O.', salary: 2000, increase: false, rise: false, id: 2},
        {name: 'Pereira A.', salary: 14000, increase: false, rise: false, id: 3},
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
      increase: false,
      rise: false,
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
  
  onToggleProp = (id, prop) => {
  /*  this.setState(({ data }) => {
      const index = data.findIndex(elem => elem.id === id);
      
      const old = data[index];
      const newItem = {...old, increase: !old.increase};
      const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)];
      
      return {
        data: newArr
      }
    })*/
    
    this.setState(({ data }) => ({
      data: data.map(item => {
        if (item.id === id) {
          return {...item, [prop]: !item[prop]}
        }
        return item;
      })
    }))
  }
  
  render() {
    
    return (
      <>
        <div className="app">
          <AppInfo
            data={this.state.data} />
          
          <div className="search-panel">
            <SearchPanel />
            <AppFilter />
          </div>
          
          <EmployeesList
            data={this.state.data}
            onDelete={this.deleteItem}
            onToggleProp={this.onToggleProp} />
          <EmployeesAddForm onAdd={this.addEmployee}/>
        </div>
      </>
    )
  }
}

export default App;
