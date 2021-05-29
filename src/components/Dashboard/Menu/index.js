import React from "react";
import { NavLink } from "react-router-dom";
import "./Menu.css";

class Menu extends React.Component {
  render() {
    return (
      <div className="ui vertical pointing menu">
        <NavLink
          className="item"
          exact
          to="/"
          activeStyle={{
            fontWeight: "bold"
          }}
        >
          <i className="far fa-calendar-alt"></i>
          Уроки
        </NavLink>
        <NavLink
          className="item"
          to="/cancelled"
          activeStyle={{
            fontWeight: "bold"
          }}
        >
          <i className="far fa-window-close"></i>
          Отменные уроки
        </NavLink>
        <NavLink
          className="item"
          to="/movidas"
          activeStyle={{
            fontWeight: "bold"
          }}
        >
          <i className="far fa-clock"></i>Перенесенные уроки
        </NavLink>
      </div>
    );
  }
}

export default Menu;
