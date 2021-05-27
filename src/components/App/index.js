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
        <Switch>
          <Route path="/" exact component={this.props.token ? Dashboard : Login} />
          <Route path="/login" exact component={Login} />
        </Switch>
      </Router>
    );
  }
}

const mapStateToProps = ({ token }) => {
  return { token };
};

export default connect(mapStateToProps)(App);
