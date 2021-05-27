import React from "react";
import { Link } from "react-router-dom";
import "./Menu.css";

class Menu extends React.Component {
  render() {
    return (
      <div className="ui vertical pointing menu">
        <a className="active item">
          <i className="far fa-calendar-alt"></i>
          <b>Уроки</b>
        </a>
        <Link className="item" to="/otmenjonnye">
          <i className="far fa-window-close"></i>
          Отменные уроки
        </Link>
        <Link className="item" to="/movidas">
          <i className="far fa-clock"></i>Перенесенные уроки
        </Link>
      </div>
    );
  }
}

export default Menu;
