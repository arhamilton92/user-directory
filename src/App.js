import React, { Component } from "react";

class App extends Component  {
  state = {
    sortAscending: true,
    employees: [
      {
      id: "1",
      employee_name: "Tiger Nixon",
      employee_salary: "320800",
      employee_age: "61",
      profile_image: ""
      },
      {
      id: "2",
      employee_name: "Garrett Winters",
      employee_salary: "170750",
      employee_age: "63",
      profile_image: ""
      },
      {
      id: "3",
      employee_name: "Ashton Cox",
      employee_salary: "86000",
      employee_age: "66",
      profile_image: ""
      },
      {
      id: "4",
      employee_name: "Cedric Kelly",
      employee_salary: "433060",
      employee_age: "22",
      profile_image: ""
      },
      {
      id: "5",
      employee_name: "Airi Satou",
      employee_salary: "162700",
      employee_age: "33",
      profile_image: ""
      },
      {
      id: "6",
      employee_name: "Brielle Williamson",
      employee_salary: "372000",
      employee_age: "61",
      profile_image: ""
      },
    ],
  }

  
  render() {
    return (
    <div className ="container mt-5">
      <div className ="row">
        <div className ="col">
          <form>
            <div class="form-group">
              <input type="email" class="form-control" id="exampleInputEmail1"  placeholder="Search by employee Name" aria-describedby="emailHelp"></input>
            </div>
          </form>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <table class="table">
            <thead className="thead-dark">
              <tr>
                <th scope="col">ID</th>
                <th scope="col">Name</th>
                <th scope="col">Salary</th>
                <th scope="col">Age</th>
              </tr>
            </thead>
          </table>
        </div>
      </div>
    </div>
    )
  }
}

export default App;
