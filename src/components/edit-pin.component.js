import React, { Component } from "react";
import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

class EditPin extends Component {
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
    axios
      .get("http://localhost:5000/pins/" + this.props.match.params.id)
      .then((res) => {
        this.setState({
          employeeName: res.data.employeeName,
          description: res.data.description,
          date: new Date(res.data.date),
        });
      })
      .catch((err) => console.log(err));

    axios.get("http://localhost:5000/employees/").then((res) => {
      if (res.data.length > 0) {
        this.setState({
          employees: res.data.map((employee) => employee.employeeName),
        });
      }
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

    axios
      .post(
        "http://localhost:5000/pins/update" + this.props.match.params.id,
        pin
      )
      .then((res) => {
        console.log(res.data);
      });

    window.location = "/";
  }

  render() {
    return (
      <div>
        <h3>Edit Pin</h3>

        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>EmployeeName: </label>
            <select
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
            <input type="submit" value="Edit Pin" className="btn btn-primary" />
          </div>
        </form>
      </div>
    );
  }
}

export default EditPin;
