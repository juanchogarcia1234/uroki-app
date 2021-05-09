import { string } from "prop-types";
import React, { Component } from "react";
import "./LoginForm.css";
import logo from "/assets/images/logo.png";
import { Link } from "react-router-dom";

//This is a presentational compoonent
class LoginForm extends Component {
  state = {
    userName: "",
    password: ""
  };

  onChangeUser = e => {
    this.setState({ userName: e.target.value });
  };

  onChangePassword = e => {
    this.setState({ password: e.target.value });
  };

  render() {
    return (
      <div className="ui middle aligned center aligned grid">
        <div className="column">
          <h2 className="ui black image header">
            <img src={logo} className="image" />
          </h2>
          <form className="ui large form">
            <div className="ui stacked segment">
              <div className="field">
                <div className="ui left icon input">
                  <i className="user icon"></i>
                  <input type="text" name="email" placeholder="Пользователь" onChange={e => this.onChangeUser(e)} value={this.state.userName} />
                </div>
              </div>
              <div className="field">
                <div className="ui left icon input">
                  <i className="lock icon"></i>
                  <input type="password" name="password" placeholder="Пароль" onChange={e => this.onChangePassword(e)} value={this.state.password} />
                </div>
              </div>
              <div className="ui fluid large blue submit button" onClick={() => this.props.onFormSubmit(this.state.userName, this.state.password)}>
                Войти
              </div>
            </div>

            <div id="errorMessage" className="ui error message">
              Неправильные данные
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default LoginForm;
