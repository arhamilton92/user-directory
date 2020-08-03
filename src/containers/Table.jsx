import React from "react";
import EmployeeTable from "../components/EmployeeTable";
import TableHead from "../components/TableHead";

class Table extends React.Component {
    render() {    
    const employees = this.props.data;
    const method = this.props.method;
    const sort = this.props.sort;
    return (
        <div className="row">
          <div className="col">
            <table className="table">
              <TableHead method={method} />
              <tbody>
              {employees.map(person => (
                <EmployeeTable data={person} />
              ))}
              </tbody>
            </table>
          </div>
        </div>
    );
    }
}

export default Table;