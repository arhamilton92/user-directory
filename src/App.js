import React, { Component } from "react";
import axios from "axios";
import Search from "./components/Search"
// import EmployeeTable from "./components/EmployeeTable"

class App extends Component  {
  state = {
    sortAscending: true,
    employees: [],
    filteredEmployees: [],
  }
  
  componentDidMount = () => {
    axios.get("http://dummy.restapiexample.com/api/v1/employees").then((response) => {
      this.setState({
        employees: response.data.data,
      })
    })
    this.sortEmployees();
  }

  sortEmployees = (a, b) => {
    function compare(a, b) {
      if (a.employee_name > b.employee_name) return 1;
      if (b.employee_name > a.employee_name) return -1;
      return 0;
    }
  }

  render() {
    const employees = this.state.employees;
    return (
      <div className="container mt-5">
        <Search />
        <div className="row">
          <div className="col">
            <table className="table">
              {" "}
              <thead className="thead-dark">
                <tr>
                  <th scope="col">ID</th>
                  <th scope="col">Name</th>
                  <th scope="col">Salary</th>
                  <th scope="col">Age</th>
                </tr>{" "}
              </thead>
              <tbody>
              {employees.map(person => (
                <tr>
                  <td>{person.id}</td>
                  <td>{person.employee_name}</td>
                  <td>{person.employee_salary}</td>
                  <td>{person.employee_age}</td>
                </tr>
              ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
