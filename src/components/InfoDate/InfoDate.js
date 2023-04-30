import React from "react";
import { useMediaQuery } from 'usehooks-ts';
import dear from "../../images/dear.svg";
import background from "../../images/forest.png";
import ourwedding from "../../images/ourwedding.svg";
import greenCloud from "../../images/greenCloud.png";
import { date, time } from '../../vendor/const';
import "./InfoDate.css";

function InfoDate() {
  const resizeM = useMediaQuery('(min-width: 800px)');
  const resizeL = useMediaQuery('(min-width: 1300px)');
  const DBmapL = "https://yandex.ru/map-widget/v1/?um=constructor%3A810d425ef949a9d25b07f9f8fa9717046b3a7f177424535dc9b201a436f9eda0&amp;source=constructor";
  const DBmapM = "https://yandex.ru/map-widget/v1/?um=constructor%3A6732115268957fe7d298e9a178ea056ba07116b5f283cadcfaf5c69c4d7dbff1&amp;source=constructor";
  const DBmapS = "https://yandex.ru/map-widget/v1/?um=constructor%3Aa50b27c5cf9ad14aad88242e3a16669fb775ec6fc754c8bc8226e6194e031805&amp;source=constructor";

  function resize () {
    if (resizeL) {
      return DBmapL;
    } if (resizeM) {
      return DBmapM; 
    } else {
      return DBmapS;
    }
  };

  function width() {
    if (resizeL) {
      return "800px";
    } if (resizeM) {
      return "600px"; 
    } else {
      return "320px";
    }
  };

  function height() {
    if (resizeL) {
      return "350px";
    } if (resizeM) {
      return "300px"; 
    } else {
      return "240px";
    }
  };

  return (
    <section className="info-date">
      <img src={background} alt="облака" className="info-date__background"></ img>
      <div className="info-date__invitation">
        <img className="info-date__who" alt="Дорогие родные и друзья" src={dear}></img>
        <p className="info-date__text">Один день в этом году будет для нас особенным и мы хотим провести его в кругу близких и друзей. 
          С большим удовольствием приглашаем вас на знаменательный праздник - </p>
        <img className="info-date__our-wedding" alt="Нашу свадьбу" src={ourwedding}></img>
      </div>
      <div className="info-date__info">
        <p className="info-date__text">Ждем вас:</p>
        <p className="info-date__day">{date}</p>
        <p className="info-date__text">Сбор гостей в {time}</p>
      </div>
      <div className="info-date__place" id="place">
        <img src={greenCloud} alt="зеленое облако" className="info-date__cloud"></ img>
        <div className="info-date__check-in">
          <p className="info-date__text">Банкетный зал "Шувалоff Holidays"<br />Парголово, ул Ломоносова, д 102</p>
          <div className="info-date__map">
            <iframe src= {resize()} frameborder="0" title="ЗАГС" width={width()} height={height()}></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}

export default InfoDate;