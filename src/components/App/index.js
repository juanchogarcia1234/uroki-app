import React from "react";
import { Router } from "react-router-dom";
import { connect } from "react-redux";
import Login from "../Login";
import history from "../../history";
import { AppRoutes, AuthenticatedRoute, UnauthenticatedRoute, NotFoundRoute } from "../Router";
import { Route } from "react-router";

class App extends React.Component {
  render() {
    return (
      <Router history={history}>
        <AuthenticatedRoute path="/" isAuthenticated={!!this.props.token}>
          <AppRoutes />
        </AuthenticatedRoute>
        <UnauthenticatedRoute path="/login" exact isAuthenticated={!!this.props.token}>
          <Login />
        </UnauthenticatedRoute>
      </Router>
    );
  }
}

const mapStateToProps = ({ token }) => {
  return { token };
};

export default connect(mapStateToProps)(App);
