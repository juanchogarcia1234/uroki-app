import React from "react";
import { Link, Route, Switch, Redirect, Router } from "react-router-dom";
import { connect } from "react-redux";
import uroki from "../../api/uroki";
import Dashboard from "../Dashboard";
import Login from "../Login";
import history from "../../history";

class App extends React.Component {
  //CAMBIAR A mapstateToProps este estado debería estar en redux porque se va a hacer uso de esta data en varias partes de la aplicación o lo tengo que guardas solo en localStorage?
  componentDidMount() {
    uroki.get("/users").then(function (response) {
      // handle success
      console.log(response);
    });
  }

  render() {
    console.log("funciona bien", this.props.token);
    return (
      <Router history={history}>
        <Switch>
          <Route path="/login" exact>
            <Login />
          </Route>
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
        </Switch>
      </Router>
    );
  }
}

const mapStateToProps = ({ token }) => {
  return { token };
};

export default connect(mapStateToProps)(App);
