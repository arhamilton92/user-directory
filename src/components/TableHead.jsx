import React, { Component } from "react";

class TableHead extends React.Component {
    render() {
    const method = this.props.method;
    const sort = this.props.sort;
    return (
        <thead className="thead-dark">
        <tr>
            <th scope="col">
                <button className="btn btn-dark" key="ID">ID</button>
            </th>
            <th scope="col" onClick={() => {method("employee_name")}}>
                <button className="btn btn-dark" key="name">Name</button>
            </th>
            <th scope="col" onClick={() => {method("employee_salary")}}>
                <button className="btn btn-dark" key="salary">Salary</button>
            </th>
            <th scope="col" onClick={() => {method("employee_age")}}>
                <button className="btn btn-dark" key="age">Age</button>
            </th>
        </tr>
        </thead>
    );
    }
}

export default TableHead;