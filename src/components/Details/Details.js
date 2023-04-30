import React from "react";
import details from "../../images/Details.svg";
import greenCloud4 from "../../images/greenCloud4.png";
import "./Details.css";

function Details() {
  return (
    <section className="details" id="details">
      <img src={details} alt="детали" className="details__header"></ img>
      <p className="details__text">Просим обратить внимание, что мероприятие состоится в парковой зоне, с возможностью прогулки и, вероятно, в вечернее прохладное время вам понадобится теплая одежда</p>
      <p className="details__text">Нам бы хотелось сделать этот день добрым, уютным и красивым праздником, поэтому просим вас воздержаться от криков "Горько!"</p>
      <p className="details__text">Пожалуйста, не обременяйте себя покупкой красивого букета, вы можете сделать выбор в пользу одной белой розы без упаковки или вовсе прийти без цветов, для нас главное - ваше присутствие!</p>
      <img src={greenCloud4} alt="зеленое облако" className="details__cloud"></ img>
    </section>
  );
}

export default Details;