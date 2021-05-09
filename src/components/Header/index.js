import React from "react";
import { connect } from "react-redux";
import { logOut } from "../../actions";

class Header extends React.Component {
  logOut = () => {
    this.props.logOut();
    console.log("helloooo");
  };

  render() {
    return (
      <div className="ui right menu">
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
