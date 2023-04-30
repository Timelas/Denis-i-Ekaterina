import React from "react";
import { useMediaQuery } from 'usehooks-ts';
import { dayWeek, year, month } from '../../vendor/const';
import "./Header.css";
import forestcloud from "../../images/forestcloud.jpg";
import namesH from "../../images/names.svg";
import namesV from "../../images/namesV.svg";
import day from "../../images/day.svg";

function Header() {
  const resize = useMediaQuery('(min-width: 700px)');

  return (
    <section className="header" id="home">
      <div className="header__desctop">
        <img src={forestcloud} alt="облака" className="header__background"></ img>
        { 
        resize ? (
          <img src={namesH} alt="имена" className="header__names"></ img>
        ):(
          <img src={namesV} alt="имена" className="header__names"></ img>
        ) }
        <div className="header__date">
          <div className="header__date_info_line"><p className="header__text">{dayWeek}</p></div>
          <div className="header__block-line">
            <img src={day} alt="цифра" className="header__date_info_day"></ img>
            <div className="header__date_info_month">{month}</div>
          </div>
          <div className="header__date_info_line"><p className="header__text">{year}</p></div>
        </div>
       </div>
    </section>
  );
}

export default Header;