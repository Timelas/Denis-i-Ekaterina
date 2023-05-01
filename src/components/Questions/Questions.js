import React, {useState, useRef} from "react";
import question from "../../images/questions.svg";
import greenCloud from "../../images/greenCloud6.svg";
import "./Questions.css";

function Questions() {
  const formRef = useRef(null)
  const scriptUrl = "https://script.google.com/macros/s/AKfycbx3eL5ysZFDSPQdybdPz-kvmyhT_sclmkCQoVHsTy8R3GcCJNvnKFqmsS3z4hArxVtNsA/exec"
  const [loading, setLoading] = useState(false);
  const [isFormVisible, setisFormVisible] = useState(true);

  const handleSubmit = (e) =>{
      e.preventDefault();
      setLoading(true);
      const FormNew = new FormData(formRef.current);
      FormNew.append('Form', 'questions');

      fetch(scriptUrl, {
      method: 'POST',
      body: new FormData(formRef.current),

  }).then(res => {
          setLoading(false);
          setisFormVisible(false);
      })
      .catch(err => console.log(err))
  }
  
  return (
    <section className="question" id="questions">
      <img src={question} alt="rsvp" className="question__header"></ img>
      { isFormVisible ?
        <div className="question__container">
          <p className="question__text">Чтобы все прошло идеально и этот день запомнился надолго, пожалуйста, ответьте на несколько вопросов:</p>
          <form className="question__form" ref={formRef} onSubmit={handleSubmit}>
          <p className="question__string">
            <label htmlFor="who" className="question__label-input">Имя и фамилия:</label>
            <input type="text" name="Имя и Фамилия" id="who" required className="question__input" minLength={2}></input>
          </p>
          <fieldset className="question__string">Понадобится ли вам трансфер от метро "Улица Дыбенко" или метро "Гражданский проспект":
            <label  htmlFor="yes-transfer" className="question__label">
              <input className="question__unvisible" type="radio" name="Трансфер" value="Нужен" id="yes-transfer"></input>
              <span className="question__visible-radio"></span>
              <span className="question__text-span">Да</span>
            </label>
            <label className="question__label" htmlFor="no-transfer">
              <input className="question__unvisible" type="radio" name="Трансфер" value="Не нужен" id="no-transfer"></input>
              <span className="question__visible-radio"></span>
              <span className="question__text-span">Нет</span>
            </label>
          </fieldset>
          <fieldset className="question__string">Предпочтения по еде:
            <label  htmlFor="chicken" className="question__label">
              <input className="question__unvisible" type="radio" name="Еда" value="Курица" id="chicken"></input>
              <span className="question__visible-radio"></span>
              <span className="question__text-span">Курица</span>
            </label>
            <label htmlFor="fish" className="question__label">
              <input className="question__unvisible" type="radio" name="Еда" value="Рыба" id="fish"></input>
              <span className="question__visible-radio"></span>
              <span className="question__text-span">Рыба</span>
            </label>
            <label htmlFor="meat" className="question__label">
              <input className="question__unvisible" type="radio" name="Еда" value="Свинина" id="meat"></input>
              <span className="question__visible-radio"></span>
              <span className="question__text-span">Свинина</span>
            </label>
          </fieldset>
          <fieldset className="question__string">Предпочтение по алкоголю:
              <label  htmlFor="Noalco" className="question__label">
                <input className="question__unvisible" type="checkbox" name="Б/а напитки" value="Б/а напитки" id="Noalco"></input>
                <span className="question__visible-checkbox"></span>
                <span className="question__text-span">Б/а напитки</span>
              </label>
              <label htmlFor="WhiteVine" className="question__label">
                <input className="question__unvisible" type="checkbox" name="Вино белое сухое" value="Вино белое сухое" id="WhiteVine"></input>
                <span className="question__visible-checkbox"></span>
                <span className="question__text-span">Вино белое сухое</span>
              </label>
              <label htmlFor="RedVine" className="question__label">
                <input className="question__unvisible" type="checkbox" name="Вино красное полусладкое" value="Вино красное полусладкое" id="RedVine"></input>
                <span className="question__visible-checkbox"></span>
                <span className="question__text-span">Вино красное полусладкое</span>
              </label>
              <label htmlFor="Whiskey" className="question__label">
                <input className="question__unvisible" type="checkbox" name="Виски" value="Виски" id="Whiskey"></input>
                <span className="question__visible-checkbox"></span>
                <span className="question__text-span">Виски</span>
              </label>
              <label htmlFor="Cognac" className="question__label">
                <input className="question__unvisible" type="checkbox" name="Коньяк" value="Коньяк" id="Cognac"></input>
                <span className="question__visible-checkbox"></span>
                <span className="question__text-span">Коньяк</span>
              </label>
              <label htmlFor="Vodka" className="question__label">
                <input className="question__unvisible" type="checkbox" name="Водка" value="Водка" id="Vodka"></input>
                <span className="question__visible-checkbox"></span>
                <span className="question__text-span">Водка</span>
              </label>
            </fieldset>
          <button type="submit" className="question__button" disabled={loading ? true : false}>{loading ? "Отправка..." : "Отправить"}</button>
        </form> 
      </div>
      :
      <p className="question__text">Форма отправлена!</p>
      }
      <img src={greenCloud} alt="зеленое облако" className="question__cloud"></ img>
    </section>
  );
}

export default Questions;