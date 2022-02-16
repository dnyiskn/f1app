import axios from "axios";
import { Component } from "react";
const api = axios.create({
  baseURL: "http://ergast.com/api/f1/drivers",
});

class ApiCall extends Component {
  state = {
    courses: [],
  };
  constructor() {
    super();
    api.get("/hamilton").then((res) => {
      console.log(res.data);
    });
  }
}
export default ApiCall;
