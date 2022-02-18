import axios from "axios";
import { Component } from "react";
const api = axios.create({
  baseURL: "http://ergast.com/api/f1/drivers",
});

class ApiCall extends Component {
  state = {
    drivers: [],
  };
  constructor() {
    super();
    api.get("/  ").then((res) => {
      console.log(res.data);
      this.setState({ drivers: res.data });
    });
  }
  render() {
    return (
      <div>
        <ul>
          {this.state.drivers.map((driver) => (
            <li key="driver.id">{driver.id}</li>
          ))}
        </ul>
      </div>
    );
  }
}
export default ApiCall;
