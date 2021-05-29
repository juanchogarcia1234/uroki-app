import React, { Component } from "react";
import { startOfMonth, startOfWeek, endOfWeek, startOfDay, addDays, subDays, endOfYear, format, getMonth, getYear, getWeek } from "date-fns";
import { ru } from "date-fns/locale";
import { capitalize } from "underscore.string";
import "./Calendar.css";
import { fetchClasses } from "../../../actions/index";
import { connect } from "react-redux";
import { formatDateFromDB, formatHour } from "../../../helpers";
import Info from "../Info";
import Spinner from "../../Spinner/Spinner";

class Calendar extends Component {
  hours = ["08:00", "09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00", "20:00", "21:00", "22:00", "23:00"];
  months = ["январь", "февраль", "март", "апрель", "май", "июнь", "июль", "август", "сентябрь", "октябрь", "ноябрь", "декабрь "];
  state = {
    currentMonth: getMonth(new Date()),
    currentYear: getYear(new Date()),
    currentDay: new Date(),
    currentWeek: this.getCurrentWeek(),
    currentClasses: []
  };

  isOnlyOneMonth(week) {
    return week.every(day => getMonth(day) === getMonth(week[0]));
  }

  getCurrentMonth(week) {
    return this.isOnlyOneMonth(week) ? getMonth(week[0]) : [getMonth(week[0]), getMonth(week[6])];
  }

  getCurrentMonthName(month) {
    return Array.isArray(month) ? this.months[month[0]] + " - " + capitalize(this.months[month[1]]) : this.months[month];
  }

  getCurrentYear(week) {
    return getYear(week[6]);
  }

  getCurrentWeek(start = new Date()) {
    let currentWeekStart = startOfWeek(startOfDay(start));
    let week = [...Array(7)].map((_, i) => addDays(currentWeekStart, i));
    return week;
  }

  // Returns a function that returns...
  takeWeek(start = new Date()) {
    let currentWeekStart = startOfWeek(startOfDay(start));
    let week = [...Array(7)].map((_, i) => addDays(currentWeekStart, i)); //Esto crea la semana actual entera la primera vez que se llama

    // ...1st the current week 2nd the next week (next 7 days) and so on
    return function (direction) {
      if (direction === "next") {
        week = [...Array(7)].map((_, i) => addDays(addDays(currentWeekStart, 7), i));
        currentWeekStart = addDays(currentWeekStart, 7); //actualizo el current weekstart si ha dado a next
      } else if (direction === "previous") {
        week = [...Array(7)].map((_, i) => addDays(subDays(currentWeekStart, 7), i));
        currentWeekStart = subDays(currentWeekStart, 7);
      }

      this.setState({ currentMonth: this.getCurrentMonth(week), currentYear: this.getCurrentYear(week) });

      return week;
    };
  }

  checkClassInDay(hour, day, urok) {
    if (formatDateFromDB(day) == formatDateFromDB(new Date(formatDateFromDB(urok.date))) && hour.substring(0, 2) == formatHour(urok.date).substring(0, 2)) {
      return this.renderClass(formatHour(urok.date).substr(3, 2), urok);
    } else {
      return null;
    }
  }

  showCalendarHeader() {
    return this.state.currentWeek.map(date => {
      return (
        <th className={format(date, "E d y") === format(this.state.currentDay, "E d y") ? "current" : ""} style={{ width: "164px" }} id={format(date, "E d y")} key={format(date, "E d y")}>
          {capitalize(format(date, "E d ", { locale: ru }))}
        </th>
      );
    });
  }

  renderClass(startTime, urok) {
    console.log(urok);
    return (
      <div className="presentation" key={urok.date} data-minutes={startTime}>
        <div className="ui raised  text  segment urok">
          Урок 1
          <div className="icons">
            <i className={`check icon ${urok.done ? "green" : "grey"}`}></i>
            <i className={`share icon ${urok.moved ? "blue" : "grey"}`}></i>
            <i className={`times close icon ${urok.cancelled ? "red" : "grey"}`}></i>
            <i className={`ruble sign icon ${urok.paid ? "green" : "grey"}`}></i>
          </div>
        </div>
      </div>
    );
  }

  componentDidMount() {
    this.props.fetchClasses(this.state.currentWeek, this.props.token);

    this.genNextWeek = this.takeWeek();
    //Para que necesito esto?
    // this.setState({ currentWeek: this.genNextWeek() });
    //aqui hacer la llamada para obtener los datos
  }

  componentDidUpdate() {}

  render() {
    return (
      <>
        <Info />
        <div className="spinner-container">
          <table className="ui celled center aligned unstackable table day eight column">
            <thead>
              <tr>
                <th colSpan="8">
                  <span className="link">
                    {capitalize(this.getCurrentMonthName(this.state.currentMonth))} {this.state.currentYear}
                  </span>
                  <span
                    className="prev link"
                    onClick={() => {
                      this.setState({ currentWeek: this.genNextWeek("previous") }, () => {
                        this.props.fetchClasses(this.state.currentWeek, this.props.token);
                      });
                    }}
                  >
                    <i className="chevron left icon"></i>
                  </span>
                  <span
                    className="next link"
                    onClick={() => {
                      this.setState({ currentWeek: this.genNextWeek("next") }, () => {
                        this.props.fetchClasses(this.state.currentWeek, this.props.token);
                      });
                    }}
                  >
                    <i className="chevron right icon"></i>
                  </span>
                </th>
              </tr>
              <tr>
                <th></th>
                {this.showCalendarHeader()}
              </tr>
            </thead>
            <tbody>
              {this.hours.map(hour => (
                <tr key={hour} id={hour}>
                  <td>{hour}</td>
                  {this.state.currentWeek.map(day => {
                    return (
                      <td key={day} id={day} className={format(day, "E d y") === format(this.state.currentDay, "E d y") ? "current" : ""}>
                        {this.props.classes.map(lesson => this.checkClassInDay(hour, day, lesson))}
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
          <Spinner />
        </div>
      </>
    );
  }
}

const mapStateToProps = state => {
  return { token: state.token, classes: state.classes };
};

export default connect(mapStateToProps, { fetchClasses })(Calendar);
