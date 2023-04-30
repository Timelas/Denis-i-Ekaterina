import React from 'react';
import Countdown from 'react-countdown';
import Menu from "../Menu/Menu";
import Header from "../Header/Header";
import InfoDate from "../InfoDate/InfoDate";
import Timetable from "../Timetable/Timetable";
import Dresscode from "../DressCode/Dresscode";
import Details from "../Details/Details";
import Timer from "../Timer/Timer";
import Rsvp from "../RSVP/Rsvp";
import Questions from "../Questions/Questions"
import Footer from "../Footer/Footer";
import './App.css';
import BurgerMenu from '../BurgerMenu/BurgerMenu';


function App() {
  const [isButtonVisible, setIsButtonVisible] = React.useState(true);
  const [isOpenBurger, setIsOpenBurger] = React.useState(false);
  const [isCloseBurger, setIsCloseBurger] = React.useState(true);
  const [isChangeBurger, setIsChangeBurger] = React.useState(false);

  function changeBurger() {
    if (isChangeBurger) {
      handleCloseBurger ();
    } else {
      handleOpenBurger ();
    }
  }
  
  function handleOpenBurger () {
    setIsOpenBurger(true);
    setIsButtonVisible(false);
    setIsCloseBurger(false);
    setIsChangeBurger(true);
  }

  function handleCloseBurger () {
    setIsOpenBurger(false);
    setIsButtonVisible(true);
    setIsCloseBurger(true);
    setIsChangeBurger(false);
  }

  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      return <span>Этот день настал!</span>;
    } else {
      return <Timer
      days={days}
      hours={hours}
      minutes={minutes}
      seconds={seconds}/>;
    }
  };

  return (
    <div className="App">
      <Menu
        isChangeBurger={isChangeBurger}
        onVisibleBurger={changeBurger} />
      <div className="App__main">
        <Header />
        <InfoDate />
        <Timetable />
        <Dresscode />
        <Details />
        <Countdown
          date={"2023-07-29T15:00:00+00:00"}
          renderer={renderer}/>
        <Rsvp />
        <Questions />
        <Footer />
      </div>
      <BurgerMenu
        isOpenBurger={isOpenBurger}
        onCloseBurger={changeBurger} />
    </div>
  );
}

export default App;
