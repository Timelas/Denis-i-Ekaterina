import React from "react";
import "./Timer.css";

function Timer ( props ) {
  const {days, hours, minutes, seconds} = props;

  var resultdays = `${renderdays(days, ['день', 'дня', 'дней'])}`;
  var resulthours = `${renderhours(hours, ['час', 'часа', 'часов'])}`;
  var resultminutes = `${renderminutes(minutes, ['минута', 'минуты', 'минут'])}`;
  var resultseconds = `${renderseconds(seconds, ['секунда', 'секунды', 'секунд'])}`;

  function renderdays (n, text_forms) {
    var m = Math.abs(n) % 100;
    var n1 = m % 10;
    if (m > 10 && m < 20) { return text_forms[2]; }
    if (n1 > 1 && n1 < 5) { return text_forms[1]; }
    if (n1 === 1) { return text_forms[0]; }
    return text_forms[2];
  }

  function renderhours (n, text_forms) {
    var m = Math.abs(n) % 100;
    var n1 = m % 10;
    if (m > 10 && m < 20) { return text_forms[2]; }
    if (n1 > 1 && n1 < 5) { return text_forms[1]; }
    if (n1 === 1) { return text_forms[0]; }
    return text_forms[2];
  }

  function renderminutes (n, text_forms) {
    var m = Math.abs(n) % 100;
    var n1 = m % 10;
    if (m > 10 && m < 20) { return text_forms[2]; }
    if (n1 > 1 && n1 < 5) { return text_forms[1]; }
    if (n1 === 1) { return text_forms[0]; }
    return text_forms[2];
  }

  function renderseconds (n, text_forms) {
    var m = Math.abs(n) % 100;
    var n1 = m % 10;
    if (m > 10 && m < 20) { return text_forms[2]; }
    if (n1 > 1 && n1 < 5) { return text_forms[1]; }
    if (n1 === 1) { return text_forms[0]; }
    return text_forms[2];
  }

  return (
    <section className="timer">
      <div className="timer__block">
        <p className="timer__title">ДО СВАДЬБЫ ОСТАЛОСЬ:</p>
        <div className="timer__bloks">
          <div className="timer__block-info">
            <p className="timer__number timer__number_var_day">{days}</p>
            <p className="timer__text">{resultdays}</p>
          </div>
          <div className="timer__block-info">
            <p className="timer__number timer__number_var_hour">{hours}</p>
            <p className="timer__text">{resulthours}</p>
          </div>
          <div className="timer__block-info">
            <p className="timer__number timer__number_var_min">{minutes}</p>
            <p className="timer__text">{resultminutes}</p>
          </div>
          <div className="timer__block-info">
            <p className="timer__number timer__number_var_sec">{seconds}</p>
            <p className="timer__text">{resultseconds}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Timer;