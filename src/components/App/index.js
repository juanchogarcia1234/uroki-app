import React from "react";
import { Link, Route, Switch, Redirect, Router, IndexRoute } from "react-router-dom";
import { connect } from "react-redux";
import uroki from "../../api/uroki";
import Dashboard from "../Dashboard";
import Login from "../Login";
import history from "../../history";
import Moved from "../Dashboard/Moved";
import Cancelled from "../Dashboard/Cancelled";
import Calendar from "../Dashboard/Calendar";

class App extends React.Component {
  render() {
    return (
      <Router history={history}>
        <Route path="/" exact>
          {this.props.token ? (
            <Dashboard />
          ) : (
            <Redirect
              to={{
                pathname: "/login"
              }}
            />
          )}
        </Route>
        <Route path="/login" exact component={Login} />
      </Router>
    );
  }
}

const mapStateToProps = ({ token }) => {
  return { token };
};

export default connect(mapStateToProps)(App);
