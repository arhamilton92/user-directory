import React, { Component } from "react";

class EmployeeTable extends React.Component {
    render() {

    const employees = this.props.data;

    return (
            <tr>
                <td>{employees.id}</td>
                <td>{employees.employee_name}</td>
                <td>{employees.employee_salary}</td>
                <td>{employees.employee_age}</td>
            </tr>
    );
    }
}

export default EmployeeTable;