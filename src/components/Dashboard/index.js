import React, { Component } from "react";
import Header from "../Header";
import "./Dashboard.css";

class Dashboard extends Component {
  render() {
    console.log("propiedades", this.props);
    return (
      <div className="dashboard">
        <Header />
      </div>
    );
  }
}

export default Dashboard;
