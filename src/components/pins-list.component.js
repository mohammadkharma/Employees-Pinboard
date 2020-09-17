import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Pin = (props) => {
  <tr>
    <th>{props.pin.employeeName}</th>
    <th>{props.pin.description}</th>
    <th>{props.pin.date.substring(0, 10)}</th>
    <th>
      <Link to={"/edit/" + props.pin._id}>edit</Link> |
      <a
        href="#"
        onClick={() => {
          props.deletePin(props.pin._id);
        }}
      >
        delete
      </a>
    </th>
  </tr>;
};

class PinsList extends Component {
  constructor(props) {
    super(props);

    this.deletePin = this.deletePin.bind(this);

    this.state = { pins: [] };
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/pins/")
      .then((res) => {
        this.setState({ pins: res.data });
      })
      .catch((err) => console.log(err));
  }

  deletePin(id) {
    axios
      .delete("http://localhost:5000/pins/" + id)
      .then((res) => console.log(res.data));

    this.setState({
      pins: this.state.pins.filter((pin) => pin._id != id),
    });
  }

  pinsList() {
    return this.state.pins.map((currentPin) => {
      return (
        <Pin pin={currentPin} deletePin={this.deletePin} key={currentPin._id} />
      );
    });
  }

  render() {
    return (
      <div>
        <h3>Pins</h3>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Employee Name</th>
              <th>Description</th>
              <th>Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>{this.PinsList}</tbody>
        </table>
      </div>
    );
  }
}

export default PinsList;
