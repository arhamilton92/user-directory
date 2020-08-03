// IMPORTS ----------------------------------
import React, { Component } from "react";
import axios from "axios";
import Table from "./containers/Table";
// -----------------------------------------^

// COMPONENT ---------------------------------------------------------------------------------
class App extends Component  {
  state = {
    sortAscending: true,
    employees: [],
    employeesDefault: [],
    sortedEmployees: [],
    search: "",
  }
  
  componentDidMount = () => {
    axios.get("http://dummy.restapiexample.com/api/v1/employees").then((response) => {
      this.setState({
        employees: response.data.data,
        employeesDefault: response.data.data,
        filteredEmployees: response.data.data,
      })
    })
  }

  sortEmployees = (field) => {
    function compare(a, b) {
      console.log("beep")
      if (a[field] > b[field]) return 1;
      if (b[field] > a[field]) return -1;
      return 0;
    }

    const sortedEmployees = this.state.employees.sort(compare);
    this.setState({
      employees: sortedEmployees,
    })
  }

  handleInputChange = (e) => {
    const {name, value} = e.target;
    this.setState({
      [name]: value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.filterEmployees()
  }

  filterEmployees = () => {
    const searchTerm = this.state.search.toLowerCase();
  
    this.setState({
      employees: this.state.employees.filter((employee) => 
        employee.employee_name.toLowerCase().includes(searchTerm)
      ),
      });
    }


  render() {
    const employees = this.state.employees;
    return (
      <div className="container mt-5">
        <div className ="row">
          <div className ="col">
            <form onSubmit={this.handleSubmit}>
              <div className="form-group">
                <input className="form-control" name="search" value={this.state.search} placeholder="Search by employee Name" onChange={this.handleInputChange} ></input>
              </div>
            </form>
          </div>
        </div>
        <Table data={employees} method={this.sortEmployees} />
      </div>
    );
  }
}
// ------------------------------------------------------------------------------------------^


export default App;
