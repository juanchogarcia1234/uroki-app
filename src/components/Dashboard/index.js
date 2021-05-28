import React, {Component} from 'react';
import Header from '../Header';
import './Dashboard.css';
import Menu from './Menu';
import Calendar from './Calendar';
import Info from './Info';
import Moved from './Moved';
import Cancelled from './Cancelled';
import {Route, Switch} from 'react-router-dom';

class Dashboard extends Component {
  render() {
    console.log(this.props.children);
    return (
    <Calendar/>
    );
  }
}

export default Dashboard;
