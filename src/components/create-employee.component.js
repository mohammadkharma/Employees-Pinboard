import React, { Component } from "react";
import axios from "axios";

class CreateEmployee extends Component {
  constructor(props) {
    super(props);

    this.onChangeEmployeeName = this.onChangeEmployeeName.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      employeeName: "",
    };
  }

  onChangeEmployeeName(e) {
    this.setState({
      employeeName: e.target.value,
    });
  }

  onSubmit(e) {
    e.preventDefault();

    const employee = {
      employeeName: this.state.employeeName,
    };

    console.log(employee);

    axios.post("http://localhost:5000/employees/add", employee).then((res) => {
      console.log(res.data);
    });

    this.setState({
      employeeName: "",
    });
  }
  render() {
    return (
      <div>
        <h3>Create New Employee</h3>

        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>EmployeeName: </label>
            <input
              type="text"
              required
              className="form-control"
              value={this.state.employeeName}
              onChange={this.onChangeEmployeeName}
            />
          </div>

          <div className="form-group">
            <input
              type="submit"
              value="Create Employee"
              className="btn btn-primary"
            />
          </div>
        </form>
      </div>
    );
  }
}

export default CreateEmployee;
