import React from "react";
import { connect } from "react-redux";
import { logOut } from "../../actions";
import "./Header.css";

class Header extends React.Component {
  logOut = () => {
    this.props.logOut();
  };

  render() {
    return (
      <div className="ui right menu">
        <div className=" item">🇪🇸</div>
        <div className="right item">
          <div className="ui button" onClick={this.logOut}>
            Выйти
          </div>
        </div>
      </div>
    );
  }
}

export default connect(null, { logOut })(Header);
