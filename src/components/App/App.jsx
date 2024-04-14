import AppInfo from "../AppInfo/AppInfo.jsx";
import SearchPanel from "../SearchPanel/SearchPanel.jsx";
import AppFilter from "../AppFilter/AppFilter.jsx";
import EmployeesList from "../EmployeesList/EmployeesList.jsx";
import EmployeesAddForm from "../EmployeesAddForm/EmployeesAddForm.jsx";

import './App.css'

function App() {
  
  const data = [
    {name: 'John L.', salary: 800, increase: false},
    {name: 'Leon O.', salary: 2000, increase: true},
    {name: 'Pereira A.', salary: 14000, increase: false},
  ]
  
  return (
    <>
      <div className="app">
        <AppInfo />
        
        <div className="search-panel">
          <SearchPanel />
          <AppFilter />
        </div>
        
        <EmployeesList data={data}/>
        <EmployeesAddForm />
      </div>
    </>
  )
}

export default App;
