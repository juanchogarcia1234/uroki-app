import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import "./Login.css";
import LoginForm from "./LoginForm";
import { logIn } from "../../actions";

//This is a container component
class Login extends React.Component {
  onFormSubmit = (user, password, mensajeError) => {
    this.props.logIn(user, password, mensajeError);
  };

  render() {
    console.log("props de Login", this.props);
    return (
      <div className="container">
        <LoginForm onFormSubmit={this.onFormSubmit} />
      </div>
    );
  }
}

Login.propTypes = {
  texto: PropTypes.string.isRequired
};

Login.defaultProps = {
  texto: "hols"
};

export default connect(null, { logIn })(Login);
