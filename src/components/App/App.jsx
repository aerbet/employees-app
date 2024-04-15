import AppInfo from "../AppInfo/AppInfo.jsx";
import SearchPanel from "../SearchPanel/SearchPanel.jsx";
import AppFilter from "../AppFilter/AppFilter.jsx";
import EmployeesList from "../EmployeesList/EmployeesList.jsx";
import EmployeesAddForm from "../EmployeesAddForm/EmployeesAddForm.jsx";

import './App.css'

function App() {
  
  const data = [
    {name: 'John L.', salary: 800},
    {name: 'Leon O.', salary: 2000},
    {name: 'Pereira A.', salary: 14000},
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
