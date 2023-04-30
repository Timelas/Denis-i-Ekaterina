import React from "react";
import names from "../../images/namesV.svg";
import background from "../../images/footer.png";
import "./Footer.css";

function Footer() {
  return (
    <section className="footer">
      <img src={background} alt="облака" className="footer__background"></ img>
      <div className="footer__container">
        <p className="footer__text">До скорой встречи,</p>
        <img src={names} alt="Денис и Екатерина" className="footer__names"></ img>
      </div>
    </section>
  );
}

export default Footer;