import './App.css'
import AppInfo from "../AppInfo/AppInfo.jsx";
import SearchPanel from "../SearchPanel/SearchPanel.jsx";
import AppFilter from "../AppFilter/AppFilter.jsx";
import EmployeesList from "../EmployeesList/EmployeesList.jsx";
import EmployeesAddForm from "../EmployeesAddForm/EmployeesAddForm.jsx";

function App() {
  

  return (
    <>
      <div className="app">
        <AppInfo />
        
        <div className="search-panel">
          <SearchPanel />
          <AppFilter />
        </div>
        
        <EmployeesList />
        <EmployeesAddForm />
      </div>
    </>
  )
}

export default App;
