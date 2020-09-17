import React, { Component } from "react";
// import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

class CreatePin extends Component {
  constructor(props) {
    super(props);

    this.onChangeEmployeeName = this.onChangeEmployeeName.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onChangeDate = this.onChangeDate.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      employeeName: "",
      description: "",
      date: new Date(),
      employees: [],
    };
  }

  componentDidMount() {
    this.setState({
      employees: ["test employee"],
      employeeName: "test employee",
    });
  }

  onChangeEmployeeName(e) {
    this.setState({
      employeeName: e.target.value,
    });
  }

  onChangeDescription(e) {
    this.setState({
      description: e.target.value,
    });
  }

  onChangeDate(date) {
    this.setState({
      date: date,
    });
  }

  onSubmit(e) {
    e.preventDefault();

    const pin = {
      employeeName: this.state.employeeName,
      description: this.state.description,
      date: this.state.date,
    };

    console.log(pin);

    window.location = "/";
  }

  render() {
    return (
      <div>
        <h3>Create New Pin</h3>

        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>EmployeeName: </label>
            <select
              ref="employeeInput"
              required
              className="form-control"
              value={this.state.employeeName}
              onChange={this.onChangeEmployeeName}
            >
              {this.state.employees.map(function (employee) {
                return (
                  <option key={employee} value={employee}>
                    {employee}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="form-group">
            <label>Description: </label>
            <input
              type="text"
              required
              className="form-control"
              value={this.state.description}
              onChange={this.onChangeDescription}
            />
          </div>
          <div className="form-group">
            <label>Date: </label>
            <div>
              <DatePicker
                selected={this.state.date}
                onChange={this.onChangeDate}
              />
            </div>
          </div>
          <div className="form-group">
            <input
              type="submit"
              value="Create Pin"
              className="btn btn-primary"
            />
          </div>
        </form>
      </div>
    );
  }
}

export default CreatePin;
